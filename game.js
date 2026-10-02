const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const trustFill = document.getElementById("trustFill");
const trustValue = document.getElementById("trustValue");
const missionText = document.getElementById("missionText");
const teamList = document.getElementById("teamList");

const input = {
  keyMap: new Map(),
};

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function rectsOverlap(a, b) {
  return (
    a.x < b.x + b.w &&
    a.x + a.w > b.x &&
    a.y < b.y + b.h &&
    a.y + a.h > b.y
  );
}

class Hero {
  constructor({ name, color, x, y, controls, accent }) {
    this.name = name;
    this.color = color;
    this.accent = accent;
    this.x = x;
    this.y = y;
    this.w = 20;
    this.h = 20;
    this.speed = 96;
    this.controls = controls;
    this.active = true;
    this.artifactCount = 0;
    this.isBoosting = false;
  }

  move(dx, dy, obstacles) {
    const nextX = this.x + dx;
    const nextY = this.y + dy;

    const candidateX = { x: nextX, y: this.y, w: this.w, h: this.h };
    const collidesX = obstacles.some((wall) => rectsOverlap(candidateX, wall));
    if (!collidesX) this.x = nextX;

    const candidateY = { x: this.x, y: nextY, w: this.w, h: this.h };
    const collidesY = obstacles.some((wall) => rectsOverlap(candidateY, wall));
    if (!collidesY) this.y = nextY;

    this.x = clamp(this.x, 0, canvas.width - this.w);
    this.y = clamp(this.y, 0, canvas.height - this.h);
  }

  update(dt, world, game) {
    const dx =
      Number(input.keyMap.get(this.controls.right) ?? 0) -
      Number(input.keyMap.get(this.controls.left) ?? 0);

    const dy =
      Number(input.keyMap.get(this.controls.down) ?? 0) -
      Number(input.keyMap.get(this.controls.up) ?? 0);

    const boost = input.keyMap.get("Space") ? 1.6 : 1;
    const moveX = dx * this.speed * boost * dt;
    const moveY = dy * this.speed * boost * dt;

    this.move(moveX, moveY, world.obstacles);

    if (input.keyMap.get("Space") && (Math.abs(moveX) > 0 || Math.abs(moveY) > 0)) {
      game.trust = clamp(game.trust - 0.4, 0, 100);
      this.isBoosting = true;
    } else {
      this.isBoosting = false;
    }

    for (const relic of world.relics) {
      if (!relic.collected && rectsOverlap({ x: this.x, y: this.y, w: this.w, h: this.h }, relic.hitbox)) {
        relic.collected = true;
        this.artifactCount += 1;
        game.trust = clamp(game.trust + 8, 0, 100);
      }
    }

    for (const switchTile of world.switches) {
      if (rectsOverlap({ x: this.x, y: this.y, w: this.w, h: this.h }, switchTile.hitbox)) {
        switchTile.activatedBy = this.name;
      }
    }

    if (rectsOverlap({ x: this.x, y: this.y, w: this.w, h: this.h }, world.exit)) {
      game.victory = world.relics.every((relic) => relic.collected);
    }
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);

    ctx.fillStyle = this.accent;
    ctx.fillRect(this.x + 6, this.y + 6, 8, 8);

    ctx.fillStyle = "rgba(255,255,255,0.3)";
    ctx.fillRect(this.x + 2, this.y + 16, 16, 3);
  }
}

class World {
  constructor() {
    this.obstacles = [
      { x: 0, y: 0, w: canvas.width, h: 32 },
      { x: 0, y: 0, w: 32, h: canvas.height },
      { x: 0, y: canvas.height - 32, w: canvas.width, h: 32 },
      { x: canvas.width - 32, y: 0, w: 32, h: canvas.height },

      { x: 160, y: 120, w: 200, h: 26 },
      { x: 540, y: 120, w: 200, h: 26 },
      { x: 160, y: 360, w: 220, h: 26 },
      { x: 560, y: 360, w: 170, h: 26 },
      { x: 440, y: 160, w: 26, h: 180 },
      { x: 300, y: 250, w: 26, h: 150 },
    ];

    this.exit = { x: 810, y: 76, w: 56, h: 54 };

    this.relics = [
      { id: "golden-machete", x: 100, y: 180, w: 18, h: 18, collected: false, color: "#ffd166" },
      { id: "grappling-hook", x: 740, y: 420, w: 18, h: 18, collected: false, color: "#7bdff2" },
      { id: "timeline-device", x: 510, y: 210, w: 18, h: 18, collected: false, color: "#ff8fab" }
    ].map((relic) => ({ ...relic, hitbox: { x: relic.x, y: relic.y, w: relic.w, h: relic.h } }));

    this.switches = [
      { id: "switch-a", x: 86, y: 440, w: 18, h: 18, activatedBy: null, hitbox: { x: 86, y: 440, w: 18, h: 18 } },
      { id: "switch-b", x: 438, y: 88, w: 18, h: 18, activatedBy: null, hitbox: { x: 438, y: 88, w: 18, h: 18 } },
      { id: "switch-c", x: 786, y: 270, w: 18, h: 18, activatedBy: null, hitbox: { x: 786, y: 270, w: 18, h: 18 } },
    ];
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

  drawObstacles() {
    for (const wall of this.obstacles) {
      ctx.fillStyle = "#6c7da8";
      ctx.fillRect(wall.x, wall.y, wall.w, wall.h);
      ctx.fillStyle = "#4f5d8a";
      ctx.fillRect(wall.x + 4, wall.y + 4, wall.w - 8, wall.h - 8);
    }
  }
}

class Game {
  constructor() {
    this.world = new World();
    this.heroes = [
      new Hero({
        name: "Blackhujus",
        color: "#ff8d6b",
        accent: "#ffc88b",
        x: 84,
        y: 72,
        controls: { up: "KeyW", down: "KeyS", left: "KeyA", right: "KeyD" },
      }),
      new Hero({
        name: "Mr. PING",
        color: "#7bdff2",
        accent: "#dff9ff",
        x: 110,
        y: 78,
        controls: { up: "KeyI", down: "KeyK", left: "KeyJ", right: "KeyL" },
      }),
      new Hero({
        name: "Merhujus",
        color: "#a6ffb2",
        accent: "#ecffe9",
        x: 136,
        y: 84,
        controls: { up: "ArrowUp", down: "ArrowDown", left: "ArrowLeft", right: "ArrowRight" },
      }),
    ];

    this.trust = 100;
    this.victory = false;
    this.phoneOpen = false;
    this.lastTime = 0;
    this.messageQueue = [
      "Mercenary channel: keep the crew together.",
      "Safe house access key ready.",
      "Loot is better shared than stolen.",
    ];
    this.messageIndex = 0;
    this.updateHud();
  }

  updateHud() {
    trustFill.style.width = `${this.trust}%`;
    trustValue.textContent = `${Math.round(this.trust)}%`;

    const teamHtml = this.heroes
      .map((hero) => {
        const status = this.world.relics.some((relic) => !relic.collected) ? "Active" : "Ready";
        return `
          <div class="team-item">
            <div class="hero-tag">
              <span class="swatch" style="background:${hero.color};"></span>
              ${hero.name}
            </div>
            <span class="status-pill">${status}</span>
          </div>
        `;
      })
      .join("");

    teamList.innerHTML = teamHtml;

    const artifactsLeft = this.world.relics.filter((relic) => !relic.collected).length;
    missionText.textContent = this.victory
      ? "The vault is open. Trust Protocol achieved."
      : artifactsLeft > 0
        ? `Recover the ${artifactsLeft} remaining artifact${artifactsLeft > 1 ? "s" : ""} and stabilize the team.`
        : "The vault is exposed. Reach the extraction point.";
  }

  togglePhone() {
    this.phoneOpen = !this.phoneOpen;
  }

  update(dt) {
    if (this.victory) {
      return;
    }

    for (const hero of this.heroes) {
      hero.update(dt, this.world, this);
    }

    const allSwitchesActive = this.world.switches.every((switchTile) => switchTile.activatedBy !== null);
    if (allSwitchesActive) {
      this.trust = clamp(this.trust + 0.22, 0, 100);
    }

    if (this.world.relics.every((relic) => relic.collected)) {
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
    ctx.fillText("Mission feed:", 230, 190);
    ctx.fillText(this.messageQueue[this.messageIndex], 230, 220);
    ctx.fillText("Team status:", 230, 280);

    for (let i = 0; i < this.heroes.length; i += 1) {
      const hero = this.heroes[i];
      ctx.fillStyle = hero.color;
      ctx.fillRect(230 + i * 160, 300, 18, 18);
      ctx.fillStyle = "#ecf3ff";
      ctx.fillText(hero.name, 258 + i * 160, 314);
    }
  }

  draw() {
    this.world.drawFloor();
    this.world.drawObstacles();
    this.world.drawRelics();
    this.world.drawSwitches();
    this.world.drawExit();

    for (const hero of this.heroes) {
      hero.draw();
    }

    ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
    ctx.fillRect(24, 24, 180, 62);
    ctx.fillStyle = "#edf2ff";
    ctx.font = "16px sans-serif";
    ctx.fillText("Artifacts:", 36, 50);
    ctx.fillText(`${this.world.relics.filter((relic) => relic.collected).length}/${this.world.relics.length}`, 36, 72);

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
     "Space", "KeyP", "KeyT"].includes(event.code)
  ) {
    event.preventDefault();
  }
});

window.addEventListener("keyup", (event) => {
  input.keyMap.set(event.code, false);
});

const game = new Game();
requestAnimationFrame((time) => game.loop(time));