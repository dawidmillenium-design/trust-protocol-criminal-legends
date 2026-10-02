// Trust Protocol: Criminal Legends — 2D pixel-art prototype
// Design data integrated from the GDD thread:
// - Trinity classes: Blackhujus (Tank/Brute), Mr. PING (Rogue/Acrobat), Merhujus (Engineer/Support)
// - Key items: Golden Machete, Grappling Hook, Timeline Device
// - Banana Peel Trap humor mechanic + shared team Trust resource

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const trustFill = document.getElementById("trustFill");
const trustValue = document.getElementById("trustValue");
const missionText = document.getElementById("missionText");
const teamList = document.getElementById("teamList");

const input = { keyMap: new Map() };

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function rectsOverlap(a, b) {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
}

// ---- GDD hero data ----
const HERO_DATA = {
  "Blackhujus": {
    role: "Tank / Brute",
    color: "#ff8d6b",
    accent: "#ffc88b",
    speed: 78,
    trait: "Smashes cracked walls (contact)",
  },
  "Mr. PING": {
    role: "Rogue / Acrobat",
    color: "#7bdff2",
    accent: "#dff9ff",
    speed: 125,
    trait: "Fits through narrow vents",
  },
  "Merhujus": {
    role: "Engineer / Support",
    color: "#a6ffb2",
    accent: "#ecffe9",
    speed: 95,
    trait: "Powers tech panels & bridges",
  },
};

class Hero {
  constructor({ name, x, y, controls }) {
    const data = HERO_DATA[name];
    this.name = name;
    this.role = data.role;
    this.color = data.color;
    this.accent = data.accent;
    this.baseSpeed = data.speed;
    this.trait = data.trait;
    this.x = x;
    this.y = y;
    this.w = 20;
    this.h = 20;
    this.controls = controls;
    this.artifactCount = 0;
    this.cash = 0;
    this.isBoosting = false;
    this.slowTimer = 0;
  }

  get speed() {
    let s = this.baseSpeed;
    if (this.slowTimer > 0) s *= 0.45; // banana slip
    return s;
  }

  canPass(wall) {
    if (wall.type === "vent") return this.name === "Mr. PING";
    return false;
  }

  move(dx, dy, world) {
    const tryAxis = (nx, ny) => {
      const candidate = { x: nx, y: ny, w: this.w, h: this.h };
      return !world.blockers.some(
        (wall) => !this.canPass(wall) && rectsOverlap(candidate, wall)
      );
    };
    if (tryAxis(this.x + dx, this.y)) this.x += dx;
    if (tryAxis(this.x, this.y + dy)) this.y += dy;
    this.x = clamp(this.x, 0, canvas.width - this.w);
    this.y = clamp(this.y, 0, canvas.height - this.h);
  }

  update(dt, world, game) {
    this.slowTimer = Math.max(0, this.slowTimer - dt);

    const dx =
      Number(input.keyMap.get(this.controls.right) ?? 0) -
      Number(input.keyMap.get(this.controls.left) ?? 0);
    const dy =
      Number(input.keyMap.get(this.controls.down) ?? 0) -
      Number(input.keyMap.get(this.controls.up) ?? 0);

    const boost = input.keyMap.get("Space") ? 1.6 : 1;
    const trustFactor = game.trust < 30 ? 0.75 : game.trust >= 70 ? 1.1 : 1;
    const moveX = dx * this.speed * boost * trustFactor * dt;
    const moveY = dy * this.speed * boost * trustFactor * dt;

    this.move(moveX, moveY, world);

    if (input.keyMap.get("Space") && (Math.abs(moveX) > 0 || Math.abs(moveY) > 0)) {
      game.trust = clamp(game.trust - 0.4, 0, 100); // reckless boosting erodes trust
      this.isBoosting = true;
    } else {
      this.isBoosting = false;
    }

    const body = { x: this.x, y: this.y, w: this.w, h: this.h };

    // Blackhujus smashes cracked walls on contact (small margin so
    // "touching" counts even when collision stops him a fraction short)
    for (const wall of world.crackedWalls) {
      const reach = { x: wall.x - 3, y: wall.y - 3, w: wall.w + 6, h: wall.h + 6 };
      if (!wall.broken && this.name === "Blackhujus" && rectsOverlap(body, reach)) {
        wall.broken = true;
        game.trust = clamp(game.trust + 5, 0, 100);
        game.notify("Blackhujus smashed the cracked wall. Trust +5.");
      }
    }

    // Relic pickup
    for (const relic of world.relics) {
      if (!relic.collected && rectsOverlap(body, relic.hitbox)) {
        relic.collected = true;
        this.artifactCount += 1;
        game.trust = clamp(game.trust + 8, 0, 100);
        game.notify(`${this.name} recovered the ${relic.id}. Trust +8.`);
      }
    }

    for (const switchTile of world.switches) {
      if (rectsOverlap(body, switchTile.hitbox)) {
        switchTile.activatedBy = this.name;
      }
    }

    // Mr. PING's lever (sealed in Room A — in practice only he can reach it)
    if (world.pingSwitch.activatedBy === null &&
        rectsOverlap(body, world.pingSwitch.hitbox)) {
      world.pingSwitch.activatedBy = this.name;
      game.trust = clamp(game.trust + 4, 0, 100);
      game.notify(`${this.name} flipped the vault lever. Trust +4.`);
    }

    // Cash stashes — hoarding the loot erodes shared trust (GDD)
    for (const bill of world.cash) {
      if (!bill.taken && rectsOverlap(body, bill)) {
        bill.taken = true;
        this.cash += 1;
        const total = world.cash.filter((b) => b.taken).length;
        if (this.cash >= 2 && this.cash >= total * 0.5 && total >= 3) {
          game.trust = clamp(game.trust - 3, 0, 100);
          game.notify(`${this.name} is hoarding the loot. Trust -3.`);
        }
      }
    }

    // Banana peels
    for (const peel of world.peels) {
      if (!peel.slipped && rectsOverlap(body, peel.hitbox)) {
        peel.slipped = true;
        this.slowTimer = 1.4;
        if (this.name !== peel.owner) {
          game.trust = clamp(game.trust - 1, 0, 100); // shared team resource
          game.notify(`${this.name} slipped on ${peel.owner}'s banana peel. Trust -1.`);
        }
      }
    }

    if (rectsOverlap(body, world.exit)) {
      game.victory = world.relics.every((relic) => relic.collected);
      if (!game.victory && !game.exitWarned) {
        game.exitWarned = true;
        game.notify("The vault seal holds. Recover all 3 key items first.");
      }
    }
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    ctx.fillStyle = this.accent;
    ctx.fillRect(this.x + 6, this.y + 6, 8, 8);
    ctx.fillStyle = "rgba(255,255,255,0.3)";
    ctx.fillRect(this.x + 2, this.y + 16, 16, 3);
    if (this.slowTimer > 0) {
      ctx.fillStyle = "#ffe066";
      ctx.font = "12px sans-serif";
      ctx.fillText("!", this.x + 8, this.y - 4);
    }
  }
}

class World {
  constructor() {
    // Border
    this.walls = [
      { x: 0, y: 0, w: 960, h: 32 },
      { x: 0, y: 0, w: 32, h: 540 },
      { x: 0, y: 508, w: 960, h: 32 },
      { x: 928, y: 0, w: 32, h: 540 },

      // interior decor / cover in the main hall
      { x: 350, y: 140, w: 180, h: 26 },
      { x: 560, y: 180, w: 26, h: 140 },

      // Room A (top-left) bottom seal — room is only enterable via the vent
      { x: 32, y: 200, w: 254, h: 26 },

      // Vault room B bottom seal (x634-928)
      { x: 634, y: 300, w: 294, h: 26 },
    ];

    // Vent — right wall of Room A: only Mr. PING (Rogue/Acrobat) fits through.
    // Grappling Hook is sealed inside Room A.
    this.vents = [
      { x: 286, y: 32, w: 26, h: 168, type: "vent" },
    ];

    // Cracked wall — left wall of vault room B: only Blackhujus (Tank/Brute)
    // can smash it. Golden Machete + extraction vault are inside.
    this.crackedWalls = [
      { x: 634, y: 32, w: 26, h: 268, broken: false },
    ];

    // Water gap — Timeline Device sits inside; Merhujus must power the tech
    // panel to raise the bridge for the crew.
    this.gap = { x: 400, y: 440, w: 160, h: 68 };
    this.techPanel = { x: 600, y: 470, w: 22, h: 22 };
    this.bridgeActive = false;

    // --- Prototype 2 "all three heroes" vault puzzle (GDD) ---
    // Mr. PING flips this lever (sealed inside Room A, vent-only)
    this.pingSwitch = { x: 60, y: 60, w: 18, h: 18, activatedBy: null,
      hitbox: { x: 60, y: 60, w: 18, h: 18 } };
    // Blackhujus's weight holds this pressure plate down
    this.heavyPlate = { x: 660, y: 250, w: 32, h: 16 };
    // Vault door — opens only while ALL THREE conditions hold at once:
    // PING's lever flipped + Blackhujus on the plate + Merhujus's bridge up
    this.vaultDoor = { x: 734, y: 32, w: 20, h: 268 };
    this.doorOpen = false;

    this.exit = { x: 810, y: 76, w: 56, h: 54 };

    // GDD key items from the Criminal Temples
    this.relics = [
      { id: "Grappling Hook", x: 90, y: 100, w: 18, h: 18, collected: false, color: "#7bdff2" },
      { id: "Golden Machete", x: 700, y: 150, w: 18, h: 18, collected: false, color: "#ffd166" },
      { id: "Timeline Device", x: 470, y: 465, w: 18, h: 18, collected: false, color: "#ff8fab" },
    ].map((relic) => ({ ...relic, hitbox: { x: relic.x, y: relic.y, w: relic.w, h: relic.h } }));

    this.switches = [
      { id: "switch-a", x: 250, y: 420, w: 18, h: 18, activatedBy: null, hitbox: { x: 250, y: 420, w: 18, h: 18 } },
      { id: "switch-b", x: 500, y: 360, w: 18, h: 18, activatedBy: null, hitbox: { x: 500, y: 360, w: 18, h: 18 } },
      { id: "switch-c", x: 786, y: 400, w: 18, h: 18, activatedBy: null, hitbox: { x: 786, y: 400, w: 18, h: 18 } },
    ];

    this.peels = [];

    // Cash stashes — the GDD's "steals all the loot" selfish-act trigger
    this.cash = [
      { x: 250, y: 300, w: 14, h: 12, taken: false },
      { x: 420, y: 420, w: 14, h: 12, taken: false },
      { x: 560, y: 300, w: 14, h: 12, taken: false },
      { x: 100, y: 350, w: 14, h: 12, taken: false },
      { x: 800, y: 350, w: 14, h: 12, taken: false },
      { x: 700, y: 420, w: 14, h: 12, taken: false },
    ];
  }

  // Everything that blocks movement (vents passable only by Mr. PING;
  // the water gap is passable once Merhujus raises the bridge;
  // the vault door opens only for the full trinity puzzle)
  get blockers() {
    const list = [...this.walls, ...this.vents];
    if (!this.bridgeActive) list.push(this.gap);
    if (!this.doorOpen) list.push(this.vaultDoor);
    for (const cw of this.crackedWalls) if (!cw.broken) list.push(cw);
    return list;
  }

  dropPeel(owner, x, y) {
    this.peels.push({ x, y, w: 14, h: 10, owner, slipped: false, ttl: 10,
      hitbox: { x, y, w: 14, h: 10 } });
  }

  drawFloor() {
    ctx.fillStyle = "#162437";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let y = 0; y < canvas.height; y += 32) {
      for (let x = 0; x < canvas.width; x += 32) {
        ctx.fillStyle = (x + y) % 64 === 0 ? "#1c2d44" : "#13243a";
        ctx.fillRect(x, y, 32, 32);
      }
    }
  }

  drawExit() {
    ctx.fillStyle = "#ffd166";
    ctx.fillRect(this.exit.x, this.exit.y, this.exit.w, this.exit.h);
    ctx.fillStyle = "#1b1f2d";
    ctx.fillRect(this.exit.x + 10, this.exit.y + 12, this.exit.w - 20, this.exit.h - 20);
  }

  drawRelics() {
    for (const relic of this.relics) {
      if (relic.collected) continue;
      ctx.fillStyle = relic.color;
      ctx.fillRect(relic.x, relic.y, relic.w, relic.h);
      ctx.fillStyle = "#0d1120";
      ctx.fillRect(relic.x + 5, relic.y + 5, 8, 8);
    }
  }

  drawSwitches() {
    for (const switchTile of this.switches) {
      ctx.fillStyle = switchTile.activatedBy ? "#70f0a7" : "#ff706f";
      ctx.fillRect(switchTile.x, switchTile.y, switchTile.w, switchTile.h);
      ctx.fillStyle = "#0b1020";
      ctx.fillRect(switchTile.x + 4, switchTile.y + 4, 10, 10);
    }
  }

  drawWalls() {
    for (const wall of this.walls) this.paintWall(wall, "#6c7da8", "#4f5d8a");
    for (const vent of this.vents) {
      this.paintWall(vent, "#4f6d8a", "#3a546e");
      ctx.fillStyle = "#22394e";
      for (let y = vent.y + 6; y < vent.y + vent.h - 6; y += 12) {
        ctx.fillRect(vent.x + 4, y, vent.w - 8, 4);
      }
    }
    for (const cw of this.crackedWalls) {
      if (cw.broken) continue;
      this.paintWall(cw, "#a88a6c", "#8a6c4f");
      ctx.strokeStyle = "#3a2c1c";
      ctx.beginPath();
      ctx.moveTo(cw.x + 13, cw.y + 10);
      ctx.lineTo(cw.x + 8, cw.y + 70);
      ctx.lineTo(cw.x + 18, cw.y + 140);
      ctx.lineTo(cw.x + 10, cw.y + 210);
      ctx.lineTo(cw.x + 16, cw.y + 260);
      ctx.stroke();
    }
  }

  paintWall(wall, c1, c2) {
    ctx.fillStyle = c1;
    ctx.fillRect(wall.x, wall.y, wall.w, wall.h);
    ctx.fillStyle = c2;
    ctx.fillRect(wall.x + 4, wall.y + 4, Math.max(0, wall.w - 8), Math.max(0, wall.h - 8));
  }

  drawGapAndBridge() {
    // water
    ctx.fillStyle = "#1d4e6e";
    ctx.fillRect(this.gap.x, this.gap.y, this.gap.w, this.gap.h);
    ctx.fillStyle = "#2e6f96";
    for (let x = this.gap.x + 6; x < this.gap.x + this.gap.w - 10; x += 24) {
      ctx.fillRect(x, this.gap.y + 12 + ((x / 24) % 2) * 30, 16, 3);
    }
    // tech panel
    ctx.fillStyle = this.bridgeActive ? "#70f0a7" : "#b6c1df";
    ctx.fillRect(this.techPanel.x, this.techPanel.y, this.techPanel.w, this.techPanel.h);
    ctx.fillStyle = "#0b1020";
    ctx.font = "10px sans-serif";
    ctx.fillText("M", this.techPanel.x + 7, this.techPanel.y + 15);
    // bridge plank across the water
    if (this.bridgeActive) {
      ctx.fillStyle = "#d4a76a";
      ctx.fillRect(this.gap.x, this.gap.y + 24, this.gap.w, 20);
      ctx.fillStyle = "#b08850";
      for (let x = this.gap.x + 8; x < this.gap.x + this.gap.w; x += 20) {
        ctx.fillRect(x, this.gap.y + 24, 3, 20);
      }
    }
  }

  drawPeels() {
    for (const peel of this.peels) {
      if (peel.slipped) continue;
      ctx.fillStyle = "#ffe066";
      ctx.fillRect(peel.x, peel.y, peel.w, peel.h);
      ctx.fillStyle = "#d9a520";
      ctx.fillRect(peel.x + 3, peel.y + 3, 8, 4);
    }
  }

  drawCash() {
    for (const bill of this.cash) {
      if (bill.taken) continue;
      ctx.fillStyle = "#59f7a4";
      ctx.fillRect(bill.x, bill.y, bill.w, bill.h);
      ctx.fillStyle = "#0b1020";
      ctx.font = "9px sans-serif";
      ctx.fillText("$", bill.x + 5, bill.y + 10);
    }
  }

  drawVaultPuzzle() {
    // vault door (gold bars)
    if (!this.doorOpen) {
      ctx.fillStyle = "#c9a227";
      ctx.fillRect(this.vaultDoor.x, this.vaultDoor.y, this.vaultDoor.w, this.vaultDoor.h);
      ctx.fillStyle = "#8a6d14";
      for (let y = this.vaultDoor.y + 8; y < this.vaultDoor.y + this.vaultDoor.h; y += 24) {
        ctx.fillRect(this.vaultDoor.x + 3, y, this.vaultDoor.w - 6, 6);
      }
    }
    // heavy pressure plate
    ctx.fillStyle = this.platePressed ? "#70f0a7" : "#8a93ad";
    ctx.fillRect(this.heavyPlate.x, this.heavyPlate.y, this.heavyPlate.w, this.heavyPlate.h);
    ctx.fillStyle = "#0b1020";
    ctx.font = "9px sans-serif";
    ctx.fillText("BH", this.heavyPlate.x + 8, this.heavyPlate.y + 12);
    // PING's lever
    ctx.fillStyle = this.pingSwitch.activatedBy ? "#70f0a7" : "#ff706f";
    ctx.fillRect(this.pingSwitch.x, this.pingSwitch.y, this.pingSwitch.w, this.pingSwitch.h);
    ctx.fillStyle = "#0b1020";
    ctx.fillRect(this.pingSwitch.x + 5, this.pingSwitch.y + 5, 8, 8);
  }
}

class Game {
  constructor() {
    this.world = new World();
    this.heroes = [
      new Hero({ name: "Blackhujus", x: 420, y: 80,
        controls: { up: "KeyW", down: "KeyS", left: "KeyA", right: "KeyD" } }),
      new Hero({ name: "Mr. PING", x: 452, y: 80,
        controls: { up: "KeyI", down: "KeyK", left: "KeyJ", right: "KeyL" } }),
      new Hero({ name: "Merhujus", x: 484, y: 80,
        controls: { up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight" } }),
    ];

    this.trust = 100;
    this.victory = false;
    this.exitWarned = false;
    this.phoneOpen = false;
    this.lastTime = 0;
    this.messageQueue = [
      "Mercenary channel: keep the crew together.",
      "Safe house access key ready.",
      "Loot is better shared than stolen.",
      "Banana Temple intel: 3 key items seal the vault.",
      "Mr. PING left a 47-second voice memo. Again.",
      "Merhujus's dashcam rewinds 10s. Don't ask.",
    ];
    this.messageIndex = 0;
    this.time = 0;
    this.history = []; // Merhujus dashcam ring buffer for time-rewind
    this.doorAnnounced = false;
    this.updateHud();
  }

  notify(text) {
    this.messageQueue.unshift(text);
    this.messageIndex = 0;
  }

  updateHud() {
    trustFill.style.width = `${this.trust}%`;
    trustValue.textContent = `${Math.round(this.trust)}%`;

    teamList.innerHTML = this.heroes
      .map((hero) => {
        const status = hero.slowTimer > 0 ? "Slipped!" : this.victory ? "Ready" : "Active";
        return `
          <div class="team-item">
            <div class="hero-tag">
              <span class="swatch" style="background:${hero.color};"></span>
              ${hero.name}
            </div>
            <span class="hero-cash">$${hero.cash}</span>
            <span class="status-pill">${status}</span>
          </div>
          <div class="team-role">${hero.role} — ${hero.trait}</div>
        `;
      })
      .join("");

    const artifactsLeft = this.world.relics.filter((relic) => !relic.collected).length;
    missionText.textContent = this.victory
      ? "The vault is open. Trust Protocol achieved."
      : artifactsLeft > 0
        ? `Recover the ${artifactsLeft} remaining key item${artifactsLeft > 1 ? "s" : ""}: brute, acrobat and engineer are all needed.`
        : "The vault is exposed. Reach the extraction point.";
  }

  togglePhone() { this.phoneOpen = !this.phoneOpen; }

  update(dt) {
    if (this.victory) return;

    this.time += dt;
    const w = this.world;

    for (const hero of this.heroes) {
      hero.update(dt, w, this);
    }

    // Merhujus on the tech panel raises the bridge
    const mer = this.heroes.find((h) => h.name === "Merhujus");
    w.bridgeActive = rectsOverlap(
      { x: mer.x, y: mer.y, w: mer.w, h: mer.h },
      { x: w.techPanel.x - 6, y: w.techPanel.y - 6, w: w.techPanel.w + 12, h: w.techPanel.h + 12 }
    );

    // Blackhujus's weight on the heavy plate
    const bh = this.heroes.find((h) => h.name === "Blackhujus");
    w.platePressed = rectsOverlap(
      { x: bh.x, y: bh.y, w: bh.w, h: bh.h },
      { x: w.heavyPlate.x - 4, y: w.heavyPlate.y - 4, w: w.heavyPlate.w + 8, h: w.heavyPlate.h + 8 }
    );

    // Vault door: ALL THREE at once — PING's lever + Blackhujus holds the
    // plate + Merhujus's bridge is up ("Banana Temple" co-op finale)
    const wasOpen = w.doorOpen;
    w.doorOpen = w.pingSwitch.activatedBy !== null && w.platePressed && w.bridgeActive;
    if (w.doorOpen && !wasOpen && !this.doorAnnounced) {
      this.doorAnnounced = true;
      this.trust = clamp(this.trust + 10, 0, 100);
      this.notify("Full trinity sync! The vault door grinds open. Trust +10.");
    }

    // Merhujus dashcam time-rewind (GDD): R rewinds her ~3 seconds
    this.history.push({ t: this.time, x: mer.x, y: mer.y });
    while (this.history.length && this.history[0].t < this.time - 3.2) {
      this.history.shift();
    }
    if (input.keyMap.get("KeyR")) {
      input.keyMap.delete("KeyR");
      const target = this.history.find((h) => h.t >= this.time - 3) || this.history[0];
      if (target) {
        mer.x = target.x;
        mer.y = target.y;
        mer.slowTimer = 0;
        this.notify("Merhujus's dashcam rewound 3 seconds.");
      }
    }

    for (const peel of w.peels) peel.ttl -= dt;
    w.peels = w.peels.filter((peel) => peel.ttl > 0 && !peel.slipped);

    if (w.switches.every((s) => s.activatedBy !== null)) {
      this.trust = clamp(this.trust + 0.22, 0, 100);
    }
    if (w.relics.every((r) => r.collected)) {
      this.trust = clamp(this.trust + 0.5, 0, 100);
    }

    if (input.keyMap.get("KeyP")) {
      this.togglePhone();
      input.keyMap.delete("KeyP");
    }
    if (input.keyMap.get("KeyT")) {
      this.messageIndex = (this.messageIndex + 1) % this.messageQueue.length;
      input.keyMap.delete("KeyT");
    }
    // Banana Peel Trap — Blackhujus only (GDD humor mechanic)
    if (input.keyMap.get("KeyQ")) {
      input.keyMap.delete("KeyQ");
      w.dropPeel("Blackhujus", bh.x + 4, bh.y + bh.h);
      this.notify("Blackhujus dropped a banana peel.");
    }

    this.updateHud();
  }

  drawPhone() {
    if (!this.phoneOpen) return;
    ctx.fillStyle = "rgba(7, 11, 19, 0.72)";
    ctx.fillRect(160, 60, 640, 420);
    ctx.fillStyle = "#dfeaff";
    ctx.fillRect(190, 90, 580, 360);
    ctx.fillStyle = "#111827";
    ctx.fillRect(210, 110, 540, 320);

    ctx.fillStyle = "#7bdff2";
    ctx.font = "18px sans-serif";
    ctx.fillText("TRUST PROTOCOL // COMMUNICATION", 230, 150);

    ctx.fillStyle = "#ecf3ff";
    ctx.font = "14px sans-serif";
    ctx.fillText("Mission feed:", 230, 190);
    ctx.font = "13px sans-serif";
    ctx.fillText(this.messageQueue[this.messageIndex], 230, 214);
    if (this.messageQueue.length > 1) {
      ctx.fillStyle = "#8fa3c8";
      ctx.fillText(this.messageQueue[(this.messageIndex + 1) % this.messageQueue.length], 230, 236);
    }

    ctx.fillStyle = "#ecf3ff";
    ctx.font = "14px sans-serif";
    ctx.fillText("Team status:", 230, 280);
    for (let i = 0; i < this.heroes.length; i += 1) {
      const hero = this.heroes[i];
      ctx.fillStyle = hero.color;
      ctx.fillRect(230 + i * 170, 300, 18, 18);
      ctx.fillStyle = "#ecf3ff";
      ctx.font = "11px sans-serif";
      ctx.fillText(hero.name, 230 + i * 170, 336);
      ctx.fillStyle = "#8fa3c8";
      ctx.fillText(hero.role, 230 + i * 170, 352);
    }
  }

  draw() {
    const w = this.world;
    w.drawFloor();
    w.drawWalls();
    w.drawGapAndBridge();
    w.drawVaultPuzzle();
    w.drawRelics();
    w.drawSwitches();
    w.drawPeels();
    w.drawCash();
    w.drawExit();

    for (const hero of this.heroes) hero.draw();

    ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
    ctx.fillRect(24, 24, 190, 62);
    ctx.fillStyle = "#edf2ff";
    ctx.font = "16px sans-serif";
    ctx.fillText("Key items:", 36, 50);
    ctx.fillText(`${w.relics.filter((r) => r.collected).length}/${w.relics.length}`, 36, 72);

    this.drawPhone();

    if (this.victory) {
      ctx.fillStyle = "rgba(7,11,19,0.72)";
      ctx.fillRect(180, 190, 600, 150);
      ctx.fillStyle = "#f8d76a";
      ctx.font = "bold 36px sans-serif";
      ctx.fillText("MISSION COMPLETE", 300, 255);
      ctx.font = "20px sans-serif";
      ctx.fillText("Trust Protocol restored. Cartel vault breached.", 270, 300);
    }
  }

  loop(timestamp) {
    const dt = Math.min((timestamp - this.lastTime) / 1000 || 0.016, 0.03);
    this.lastTime = timestamp;
    this.update(dt);
    this.draw();
    requestAnimationFrame((time) => this.loop(time));
  }
}

window.addEventListener("keydown", (event) => {
  input.keyMap.set(event.code, true);
  if (
    ["KeyW", "KeyA", "KeyS", "KeyD", "KeyI", "KeyJ", "KeyK", "KeyL",
     "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight",
     "Space", "KeyP", "KeyT", "KeyQ", "KeyR"].includes(event.code)
  ) {
    event.preventDefault();
  }
});

window.addEventListener("keyup", (event) => {
  input.keyMap.set(event.code, false);
});

const game = new Game();
requestAnimationFrame((time) => game.loop(time));