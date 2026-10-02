// Trust Protocol: Criminal Legends — Turn-Based Tactical RPG
// Wildermyth-style: grid tactics, consequential story choices, lasting traits,
// and a chronicle that remembers each run. Heroes: Blackhujus, Mr. PING, Merhujus.

"use strict";

const COLS = 24, ROWS = 13, T = 40;
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const trustFill = document.getElementById("trustFill");
const trustValue = document.getElementById("trustValue");
const missionText = document.getElementById("missionText");
const roundText = document.getElementById("roundText");
const teamList = document.getElementById("teamList");
const abilityBar = document.getElementById("abilityBar");
const endTurnBtn = document.getElementById("endTurnBtn");
const hintText = document.getElementById("hintText");
const chronicleEl = document.getElementById("chronicle");

// ---------------------------------------------------------------- map
// tile codes: 0 floor, 1 wall, 2 water, 3 crate
const grid = [];
for (let y = 0; y < ROWS; y++) grid.push(new Array(COLS).fill(0));

function rectTiles(x, y, w, h, code) {
  for (let j = y; j < y + h; j++)
    for (let i = x; i < x + w; i++)
      if (i >= 0 && i < COLS && j >= 0 && j < ROWS) grid[j][i] = code;
}

function buildMap() {
  for (let y = 0; y < ROWS; y++) for (let x = 0; x < COLS; x++) grid[y][x] = 0;
  rectTiles(0, 0, COLS, 1, 1);
  rectTiles(0, ROWS - 1, COLS, 1, 1);
  rectTiles(0, 0, 1, ROWS, 1);
  rectTiles(COLS - 1, 0, 1, ROWS, 1);

  rectTiles(9, 1, 1, 5, 1);       // vertical wall, door gap at (9,4)
  grid[4][9] = 0;
  rectTiles(1, 6, 8, 1, 1);       // horizontal wall, gap at (4,6) and (7,6)
  grid[6][4] = 0; grid[6][7] = 0;
  rectTiles(12, 6, 11, 1, 1);     // horizontal wall, gap at (17,6)
  grid[6][17] = 0;
  // vault room (hollow), opening at (19,4)
  rectTiles(18, 1, 5, 1, 1);
  rectTiles(18, 4, 5, 1, 1);
  rectTiles(18, 1, 1, 4, 1);
  rectTiles(22, 1, 1, 4, 1);
  grid[4][19] = 0;

  rectTiles(2, 9, 4, 2, 2);       // flooded tunnel
  grid[10][4] = 0; grid[10][5] = 0;

  // crates (cover — block movement and line of sight)
  const crates = [[6, 2], [6, 3], [13, 2], [14, 8], [11, 8], [20, 8], [5, 7]];
  for (const [cx, cy] of crates) grid[cy][cx] = 3;
}

function tileBlocksMove(x, y) {
  return grid[y][x] === 1 || grid[y][x] === 3;
}
function tileBlocksLOS(x, y) {
  return grid[y][x] === 1 || grid[y][x] === 3;
}
function moveCost(x, y) {
  return grid[y][x] === 2 ? 2 : 1;
}

// ---------------------------------------------------------------- pathfinding
function bfsRange(sx, sy, budget, units) {
  // returns Map "x,y" -> cost for all reachable tiles
  const dist = new Map();
  const key = (x, y) => x + "," + y;
  const occ = new Set(units.map((u) => key(u.x, u.y)));
  const q = [[sx, sy, 0]];
  dist.set(key(sx, sy), 0);
  while (q.length) {
    q.sort((a, b) => a[2] - b[2]);
    const [x, y, c] = q.shift();
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const nx = x + dx, ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= COLS || ny >= ROWS) continue;
      if (tileBlocksMove(nx, ny)) continue;
      if (occ.has(key(nx, ny))) continue;
      const nc = c + moveCost(nx, ny);
      if (nc > budget) continue;
      if (dist.has(key(nx, ny)) && dist.get(key(nx, ny)) <= nc) continue;
      dist.set(key(nx, ny), nc);
      q.push([nx, ny, nc]);
    }
  }
  dist.delete(key(sx, sy));
  return dist;
}

function bfsPath(sx, sy, tx, ty, units) {
  // shortest path ignoring budget; returns array of [x,y] steps or null
  const key = (x, y) => x + "," + y;
  const occ = new Set(units.map((u) => key(u.x, u.y)));
  occ.delete(key(sx, sy));
  const prev = new Map();
  const seen = new Set([key(sx, sy)]);
  const q = [[sx, sy]];
  while (q.length) {
    const [x, y] = q.shift();
    if (x === tx && y === ty) {
      const path = [];
      let k = key(tx, ty);
      while (k !== key(sx, sy)) {
        const [px, py] = k.split(",").map(Number);
        path.unshift([px, py]);
        k = prev.get(k);
      }
      return path;
    }
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const nx = x + dx, ny = y + dy, nk = key(nx, ny);
      if (nx < 0 || ny < 0 || nx >= COLS || ny >= ROWS) continue;
      if (tileBlocksMove(nx, ny) || occ.has(nk) || seen.has(nk)) continue;
      seen.add(nk);
      prev.set(nk, key(x, y));
      q.push([nx, ny]);
    }
  }
  return null;
}

function hasLOS(x0, y0, x1, y1) {
  let dx = Math.abs(x1 - x0), dy = Math.abs(y1 - y0);
  const sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1;
  let err = dx - dy, x = x0, y = y0;
  while (!(x === x1 && y === y1)) {
    const e2 = 2 * err;
    if (e2 > -dy) { err -= dy; x += sx; }
    else if (e2 < dx) { err += dx; y += sy; }
    if (x === x1 && y === y1) break;
    if (tileBlocksLOS(x, y)) return false;
  }
  return true;
}

// ---------------------------------------------------------------- data
const HERO_DEFS = [
  {
    id: "bh", name: "Blackhujus", role: "Tank / Brute", color: "#ff8d6b", accent: "#ffc88b",
    hp: 30, move: 4,
    abilities: [
      { id: "slash", name: "Machete Slash", desc: "Melee, 9 damage", range: 1, target: "enemy", dmg: 9 },
      { id: "peel", name: "Banana Peel Toss", desc: "Trap tile, stuns the next enemy on it", range: 4, target: "tile" },
    ],
  },
  {
    id: "ping", name: "Mr. PING", role: "Rogue / Acrobat", color: "#7bdff2", accent: "#dff9ff",
    hp: 18, move: 6,
    abilities: [
      { id: "shank", name: "Shank", desc: "Melee, 6 dmg (+4 flank if an ally is adjacent)", range: 1, target: "enemy", dmg: 6, flank: 4 },
      { id: "sprint", name: "Sprint", desc: "+3 movement this round", range: 0, target: "self", once: "sprint" },
    ],
  },
  {
    id: "mer", name: "Merhujus", role: "Engineer / Support", color: "#a6ffb2", accent: "#ecffe9",
    hp: 20, move: 4,
    abilities: [
      { id: "zap", name: "Zap Blaster", desc: "Range 5 (needs line of sight), 6 damage", range: 5, target: "enemy", dmg: 6, los: true },
      { id: "patch", name: "Patch Up", desc: "Range 3, heal 7", range: 3, target: "ally", heal: 7 },
    ],
  },
];

const ENEMY_DEFS = {
  guard: { name: "Cartel Guard", color: "#c05a5a", hp: 12, move: 3, dmg: 5, range: 1, letter: "G" },
  gunner: { name: "Cartel Gunner", color: "#a04a8a", hp: 10, move: 3, dmg: 4, range: 4, letter: "N", ranged: true },
  capo: { name: "El Capo", color: "#e23f3f", hp: 22, move: 3, dmg: 7, range: 1, letter: "C" },
};

const TRAIT_POOL = {
  bonded: { name: "Bonded", desc: "+1 damage — watched the dashcam together", mods: { dmg: 1 } },
  opportunist: { name: "Opportunist", desc: "+2 damage — sold a crew memory", mods: { dmg: 2 } },
  loyal: { name: "Loyal", desc: "+1 armor — refused the captain's deal", mods: { armor: 1 } },
  secretKeeper: { name: "Secret Keeper", desc: "Blackhujus +3 damage, but the crew knows", mods: { dmg: 3 } },
  soakedBoots: { name: "Soaked Boots", desc: "-1 movement this battle", mods: { move: -1 }, battle: true },
  bananaHoarder: { name: "Banana Hoarder", desc: "Peel Toss reaches 6 tiles", mods: {} },
  rival: { name: "Rivalry", desc: "Mr. PING +3 damage vs El Capo", mods: {} },
  hesitant: { name: "Hesitant", desc: "-2 damage — let the rival walk", mods: { dmg: -2 } },
  scarred: { name: "Scarred", desc: "-1 armor, +2 damage — saved the courier", mods: { armor: -1, dmg: 2 } },
  greedy: { name: "Greedy", desc: "-1 armor — robbed the wounded", mods: { armor: -1 } },
};

// ---------------------------------------------------------------- game state
const G = {
  phase: "start", // start | player | enemy | event | over
  encounter: 1,
  round: 1,
  trust: 100,
  heroes: [],
  enemies: [],
  peels: [],
  selected: null,
  ability: null,
  reachable: new Map(),
  floats: [],
  chronicle: [],
  usedEvents: new Set(),
};

function log(html) {
  G.chronicle.unshift(html);
  if (G.chronicle.length > 40) G.chronicle.pop();
  renderChronicle();
}

function addTrait(hero, traitId) {
  const t = TRAIT_POOL[traitId];
  if (!t || hero.traits.some((x) => x.id === traitId)) return;
  hero.traits.push({ id: traitId, ...t });
  log(`<strong>${hero.name}</strong> gained the trait <em>${t.name}</em> — ${t.desc}.`);
}

function heroMods(hero) {
  const m = { dmg: 0, move: 0, armor: 0 };
  for (const t of hero.traits) {
    if (t.battle && G.encounter !== t.battleAt && t.id === "soakedBoots") continue;
    for (const k of ["dmg", "move", "armor"]) if (t.mods[k]) m[k] += t.mods[k];
  }
  return m;
}

function trustDmgMod() {
  return G.trust >= 70 ? 2 : G.trust < 30 ? -2 : 0;
}

function makeHero(def, x, y) {
  return {
    ...def, x, y, maxHp: def.hp, traits: [], alive: true,
    moveLeft: def.move, acted: false, usedSprint: false,
  };
}

function makeEnemy(type, x, y) {
  const d = ENEMY_DEFS[type];
  return { type, ...d, x, y, maxHp: d.hp, alive: true, stunned: false };
}

function allUnits() {
  return [...G.heroes.filter((h) => h.alive), ...G.enemies.filter((e) => e.alive)];
}

// ---------------------------------------------------------------- encounters
function setupEncounter(n) {
  G.encounter = n;
  G.round = 1;
  G.peels = [];
  G.selected = null;
  G.ability = null;
  buildMap();

  if (n === 1) {
    G.heroes = HERO_DEFS.map((d, i) => makeHero(d, 2 + i, 2 + (i === 1 ? 1 : 0)));
    G.enemies = [makeEnemy("guard", 20, 5), makeEnemy("guard", 17, 7), makeEnemy("guard", 21, 5)];
    log(`<strong>Chapter 1 — The Safe House Job.</strong> The crew slips into the cartel compound.`);
  } else {
    // keep heroes, heal a bit, reset positions
    const spots = [[14, 8], [15, 8], [14, 9]];
    G.heroes.forEach((h, i) => {
      if (h.alive) { h.x = spots[i][0]; h.y = spots[i][1]; h.hp = Math.min(h.maxHp, h.hp + 6); }
    });
    G.enemies = [
      makeEnemy("guard", 20, 8), makeEnemy("guard", 16, 10),
      makeEnemy("gunner", 21, 2), makeEnemy("capo", 20, 3),
    ];
    if (G.extraElite) G.enemies.push(makeEnemy("guard", 17, 11));
    if (G.alleyAmbush) G.enemies.push(makeEnemy("gunner", 19, 11));
    log(`<strong>Chapter 2 — The Vault.</strong> El Capo guards the trust protocol's last seal.`);
  }

  // battle-scoped traits
  for (const h of G.heroes) {
    for (const t of h.traits) if (t.battle) t.battleAt = n;
  }

  startRound();
  G.phase = "player";
  updateHud();
}

function startRound() {
  for (const h of G.heroes) {
    if (!h.alive) continue;
    h.moveLeft = h.move + heroMods(h).move;
    if (h.moveLeft < 1) h.moveLeft = 1;
    h.acted = false;
    h.usedSprint = false;
  }
  for (const e of G.enemies) e.stunned = false;
  G.selected = null;
  G.ability = null;
  G.reachable = new Map();
}

// ---------------------------------------------------------------- combat math
function dealDamage(attacker, target, base, opts = {}) {
  let dmg = base + trustDmgMod();
  if (attacker.traits) dmg += heroMods(attacker).dmg;
  if (opts.flank) dmg += opts.flank;
  if (opts.vsRival && attacker.traits && attacker.traits.some((t) => t.id === "rival") && target.type === "capo") dmg += 3;
  let armor = 0;
  if (target.traits) armor += heroMods(target).armor;
  dmg -= armor;
  dmg = Math.max(1, dmg);
  target.hp -= dmg;
  addFloat(target.x, target.y, `-${dmg}`, "#ff706f");
  if (target.hp <= 0) {
    target.hp = 0;
    target.alive = false;
    addFloat(target.x, target.y, "DOWN", "#ffd166");
    log(target.traits
      ? `<strong>${target.name}</strong> fell. The chronicle will remember.`
      : `<strong>${target.name}</strong> is down.`);
  }
  return dmg;
}

function heal(target, amount) {
  const before = target.hp;
  target.hp = Math.min(target.maxHp, target.hp + amount);
  addFloat(target.x, target.y, `+${target.hp - before}`, "#70f0a7");
}

function addFloat(x, y, text, color) {
  G.floats.push({ x, y, text, color, t: 0 });
}

// ---------------------------------------------------------------- player actions
function selectHero(hero) {
  if (G.phase !== "player" || !hero.alive) return;
  G.selected = hero;
  G.ability = null;
  if (!hero.acted || hero.moveLeft > 0) {
    G.reachable = hero.moveLeft > 0 ? bfsRange(hero.x, hero.y, hero.moveLeft, allUnits()) : new Map();
  } else {
    G.reachable = new Map();
  }
  renderAbilityBar();
  hint(`${hero.name}: ${hero.moveLeft} movement left${hero.acted ? ", already acted" : ""}.`);
  draw();
}

function tryMove(tx, ty) {
  const h = G.selected;
  if (!h || h.moveLeft <= 0) return false;
  const k = tx + "," + ty;
  if (!G.reachable.has(k)) return false;
  // water + peel interrupt? hero just stops on peel
  h.x = tx; h.y = ty;
  h.moveLeft -= G.reachable.get(k);
  G.reachable = new Map();
  const pk = G.peels.find((p) => p.x === tx && p.y === ty);
  if (pk) {
    G.peels.splice(G.peels.indexOf(pk), 1);
    h.moveLeft = 0;
    G.trust = Math.max(0, G.trust - 1);
    log(`${h.name} slipped on a banana peel. <strong>Trust -1.</strong>`);
  }
  updateHud();
  draw();
  return true;
}

function abilityTargets(hero, ab) {
  // returns array of valid target units or tiles
  const out = [];
  if (ab.target === "self") return [hero];
  for (const e of G.enemies.filter((e) => e.alive)) {
    const d = Math.abs(e.x - hero.x) + Math.abs(e.y - hero.y);
    if (d > ab.range || d === 0) continue;
    if (ab.los && !hasLOS(hero.x, hero.y, e.x, e.y)) continue;
    out.push(e);
  }
  return out;
}

function allyTargets(hero, ab) {
  const out = [];
  for (const a of G.heroes.filter((h) => h.alive)) {
    const d = Math.abs(a.x - hero.x) + Math.abs(a.y - hero.y);
    if (d <= ab.range && d > 0) out.push(a);
  }
  return out;
}

function tileTargets(hero, ab) {
  const out = [];
  const reach = bfsRange(hero.x, hero.y, ab.id === "peel" && hero.traits.some((t) => t.id === "bananaHoarder") ? 6 : ab.range, allUnits());
  for (const k of reach.keys()) {
    const [x, y] = k.split(",").map(Number);
    out.push({ x, y });
  }
  return out;
}

function useAbility(target) {
  const h = G.selected, ab = G.ability;
  if (!h || !ab || h.acted) return false;

  if (ab.id === "sprint") {
    h.moveLeft += 3;
    h.usedSprint = true;
    h.acted = true;
    log(`${h.name} sprinted — <strong>+3 movement</strong> this round.`);
    finishAction(h);
    return true;
  }
  if (ab.target === "enemy") {
    if (!target || !target.alive || target.maxHp === undefined || target.traits) return false;
    const valid = abilityTargets(h, ab);
    if (!valid.includes(target)) return false;
    let flank = 0;
    if (ab.flank) {
      const adjacentAlly = G.heroes.some((a) => a.alive && a !== h &&
        Math.abs(a.x - target.x) + Math.abs(a.y - target.y) === 1);
      if (adjacentAlly) { flank = ab.flank; addFloat(target.x, target.y, "FLANK!", "#7bdff2"); }
    }
    dealDamage(h, target, ab.dmg, { flank, vsRival: true });
    h.acted = true;
    finishAction(h);
    return true;
  }
  if (ab.target === "ally") {
    if (!target || !target.alive || !target.traits) return false;
    if (!allyTargets(h, ab).includes(target)) return false;
    heal(target, ab.heal);
    h.acted = true;
    log(`${h.name} patched up <strong>${target.name}</strong>.`);
    finishAction(h);
    return true;
  }
  if (ab.target === "tile") {
    if (!target || target.x === undefined) return false;
    const valid = tileTargets(h, ab);
    if (!valid.some((t) => t.x === target.x && t.y === target.y)) return false;
    G.peels.push({ x: target.x, y: target.y });
    h.acted = true;
    log(`${h.name} tossed a banana peel. Comedy is a weapon.`);
    finishAction(h);
    return true;
  }
  return false;
}

function finishAction(hero) {
  G.ability = null;
  G.reachable = new Map();
  updateHud();
  checkEnd();
  if (G.phase === "player") { renderAbilityBar(); }
  draw();
}

// ---------------------------------------------------------------- enemy phase
function nearestHero(e) {
  let best = null, bd = Infinity;
  for (const h of G.heroes.filter((h) => h.alive)) {
    const d = Math.abs(h.x - e.x) + Math.abs(h.y - e.y);
    if (d < bd) { bd = d; best = h; }
  }
  return best;
}

function enemyCanHit(e, h) {
  const d = Math.abs(h.x - e.x) + Math.abs(h.y - e.y);
  if (d > e.range || d === 0) return false;
  if (e.ranged && !hasLOS(e.x, e.y, h.x, h.y)) return false;
  return true;
}

function actEnemy(e) {
  if (!e.alive) return;
  if (e.stunned) {
    addFloat(e.x, e.y, "SLIPPED", "#ffe066");
    log(`${e.name} slipped on a banana peel and lost the round.`);
    return;
  }
  let target = nearestHero(e);
  if (!target) return;
  if (!enemyCanHit(e, target)) {
    // path to the best tile adjacent to the target (the target's own tile
    // is occupied and can never be entered by BFS)
    let bestPath = null;
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const gx = target.x + dx, gy = target.y + dy;
      if (gx < 0 || gy < 0 || gx >= COLS || gy >= ROWS) continue;
      if (tileBlocksMove(gx, gy)) continue;
      if (allUnits().some((u) => u !== e && u.x === gx && u.y === gy)) continue;
      const p = bfsPath(e.x, e.y, gx, gy, allUnits());
      if (p && p.length && (!bestPath || p.length < bestPath.length)) bestPath = p;
    }
    if (bestPath) {
      let steps = e.move;
      let idx = 0;
      while (idx < bestPath.length && steps > 0) {
        const [nx, ny] = bestPath[idx];
        if (tileBlocksMove(nx, ny)) break;
        const occ = allUnits().some((u) => u !== e && u.x === nx && u.y === ny);
        if (occ) break;
        const c = moveCost(nx, ny);
        if (steps < c) break;
        steps -= c;
        e.x = nx; e.y = ny;
        idx++;
        const peel = G.peels.find((p) => p.x === e.x && p.y === e.y);
        if (peel) {
          G.peels.splice(G.peels.indexOf(peel), 1);
          e.stunned = true;
          addFloat(e.x, e.y, "SLIPPED!", "#ffe066");
          log(`${e.name} slipped on a banana peel — <strong>stunned!</strong>`);
          return;
        }
      }
    }
    target = nearestHero(e);
  }
  if (target && enemyCanHit(e, target)) {
    let dmg = e.dmg;
    if (target.traits) dmg -= heroMods(target).armor;
    dmg = Math.max(1, dmg);
    target.hp -= dmg;
    addFloat(target.x, target.y, `-${dmg}`, "#ff706f");
    log(`${e.name} hit <strong>${target.name}</strong> for ${dmg}.`);
    if (target.hp <= 0) {
      target.hp = 0;
      target.alive = false;
      addFloat(target.x, target.y, "DOWN", "#ff706f");
      log(`<strong>${target.name}</strong> has fallen. The crew's trust trembles.`);
      G.trust = Math.max(0, G.trust - 12);
    }
  }
}

async function runEnemyPhase() {
  G.phase = "enemy";
  G.selected = null;
  G.ability = null;
  G.reachable = new Map();
  renderAbilityBar();
  hint("Enemy phase…");
  draw();
  for (const e of G.enemies.filter((e) => e.alive)) {
    await sleep(320);
    if (G.phase !== "enemy") return;
    actEnemy(e);
    updateHud();
    draw();
    if (checkEnd()) return;
  }
  await sleep(320);
  if (G.phase !== "enemy") return;
  G.round += 1;
  startRound();
  G.phase = "player";
  hint("Your move, legends.");
  updateHud();
  draw();
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

// ---------------------------------------------------------------- win / lose
function checkEnd() {
  if (!G.enemies.some((e) => e.alive)) {
    if (G.encounter === 1) {
      G.phase = "event";
      setTimeout(showEvent, 500);
    } else {
      endRun(true);
    }
    return true;
  }
  if (!G.heroes.some((h) => h.alive)) {
    endRun(false);
    return true;
  }
  return false;
}

// ---------------------------------------------------------------- story events
const EVENTS = [
  {
    id: "courier",
    title: "The Wounded Courier",
    text: "Between the safe house and the vault, a wounded courier from a rival crew begs the legends for water and safe passage. Blackhujus recognizes the man's boots — cartel issue.",
    a: { label: "Help him anyway", apply() {
      G.trust = Math.min(100, G.trust + 10);
      addTrait(heroById("bh"), "scarred");
      log("The crew helped the courier. Word will spread that the legends have a code. <strong>Trust +10.</strong>");
    } },
    b: { label: "Rob him and walk", apply() {
      G.trust = Math.max(0, G.trust - 10);
      addTrait(heroById("bh"), "greedy");
      log("The crew emptied the courier's pockets. Efficient. Cold. <strong>Trust -10.</strong>");
    } },
  },
  {
    id: "dashcam",
    title: "Merhujus's Dashcam",
    text: "Merhujus rigs her dashcam to replay the crew's very first job — the one they swore never to speak of. The screen flickers: three younger legends, one terrible decision.",
    a: { label: "Watch it together", apply() {
      G.trust = Math.min(100, G.trust + 8);
      for (const h of G.heroes) if (h.alive) addTrait(h, "bonded");
      log("They laughed. They flinched. They remembered why they ride together. <strong>Trust +8.</strong>");
    } },
    b: { label: "Sell the footage", apply() {
      G.trust = Math.max(0, G.trust - 5);
      for (const h of G.heroes) if (h.alive) addTrait(h, "opportunist");
      log("The footage bought good money and a quiet truck. <strong>Trust -5.</strong>");
    } },
  },
  {
    id: "bananas",
    title: "A Crate of Bananas",
    text: "In the back of a cartel truck: bananas. Hundreds. Still green. Blackhujus and Mr. PING exchange a look that Merhujus has learned to fear.",
    a: { label: "Share the meal", apply() {
      for (const h of G.heroes) if (h.alive) heal(h, 6);
      G.trust = Math.min(100, G.trust + 5);
      log("A quiet meal on the tailgate. Some heists need no plan. <strong>Trust +5, party healed.</strong>");
    } },
    b: { label: "Hoard them for later", apply() {
      addTrait(heroById("bh"), "bananaHoarder");
      log("Blackhujus packed the peels for 'tactical purposes'. This will be a problem for someone.");
    } },
  },
  {
    id: "rival",
    title: "Mr. PING's Old Rival",
    text: "A familiar silhouette crosses the floodlit yard — the acrobat who took Mr. PING's title years ago, now working for El Capo. He smiles and draws a blade.",
    a: { label: "Accept his duel (extra guard joins)", apply() {
      addTrait(heroById("ping"), "rival");
      G.extraElite = true;
      log("Mr. PING cracked his knuckles. 'Mine.' <strong>An extra guard will join the vault fight.</strong>");
    } },
    b: { label: "Slip past quietly", apply() {
      addTrait(heroById("ping"), "hesitant");
      log("Mr. PING looked away first. The rival's laughter followed them down the corridor.");
    } },
  },
  {
    id: "captain",
    title: "The Captain's Offer",
    text: "Blackhujus's old captain materializes from the shadows with an offer: open the vault's side door for a cut, tell no one. 'Tank like you deserves better than these two.'",
    a: { label: "Refuse — together", apply() {
      G.trust = Math.min(100, G.trust + 6);
      for (const h of G.heroes) if (h.alive) addTrait(h, "loyal");
      log("Blackhujus didn't even look back. <strong>Trust +6.</strong>");
    } },
    b: { label: "Take the deal", apply() {
      G.trust = Math.max(0, G.trust - 8);
      addTrait(heroById("bh"), "secretKeeper");
      log("A handshake in the dark. Blackhujus said nothing at breakfast. <strong>Trust -8.</strong>");
    } },
  },
  {
    id: "flooded",
    title: "Two Ways Through",
    text: "The scout phone pings: two routes to the vault. The flooded tunnel — knee-deep, silent, slow. Or the guarded alley — fast, loud, and already watched.",
    a: { label: "Wade the flooded tunnel", apply() {
      for (const h of G.heroes) if (h.alive) addTrait(h, "soakedBoots");
      G.trust = Math.min(100, G.trust + 4);
      log("Cold water, quiet footsteps. <strong>Trust +4, but Soaked Boots (-1 move) this battle.</strong>");
    } },
    b: { label: "Bluff through the alley", apply() {
      G.trust = Math.max(0, G.trust - 4);
      log("They walked out whistling. A gunner will be waiting at the vault. <strong>Trust -4.</strong>");
      G.alleyAmbush = true;
    } },
  },
];

function heroById(id) {
  return G.heroes.find((h) => h.id === id);
}

function showEvent() {
  const pool = EVENTS.filter((e) => !G.usedEvents.has(e.id));
  if (!pool.length) { setupEncounter(2); return; }
  const ev = pool[Math.floor(Math.random() * pool.length)];
  G.usedEvents.add(ev.id);
  G.currentEvent = ev;
  document.getElementById("eventTitle").textContent = ev.title;
  document.getElementById("eventText").textContent = ev.text;
  document.getElementById("choiceA").textContent = ev.a.label;
  document.getElementById("choiceB").textContent = ev.b.label;
  document.getElementById("eventOverlay").classList.remove("hidden");
}

function resolveEvent(which) {
  const ev = G.currentEvent;
  document.getElementById("eventOverlay").classList.add("hidden");
  if (which === "a") ev.a.apply(); else ev.b.apply();
  log(`<strong>${ev.title}:</strong> ${which === "a" ? ev.a.label : ev.b.label}.`);
  G.currentEvent = null;
  updateHud();
  setupEncounter(2);
}

// ---------------------------------------------------------------- epilogue & legacy
function endRun(won) {
  G.phase = "over";
  const lines = [];
  for (const h of G.heroes) {
    const traitNames = h.traits.map((t) => t.name).join(", ") || "no tales yet";
    lines.push(`<p><strong style="color:${h.color}">${h.name}</strong> ${h.alive ? "walked out of the compound" : "fell in the Banana Temple"} — <em>${traitNames}</em>.</p>`);
  }
  document.getElementById("endTitle").textContent = won
    ? "Trust Protocol Restored"
    : "The Legend Ends Here";
  document.getElementById("endBody").innerHTML =
    (won
      ? "<p>El Capo is down, the vault is open, and the crew's name moves one rank up the underworld's whisper network.</p>"
      : "<p>The compound swallowed the crew whole. Somewhere, a rival crew is already retelling the story — badly.</p>") +
    lines.join("") +
    `<p>Final trust: <strong>${Math.round(G.trust)}%</strong> · Rounds: ${G.round} · Chapter ${G.encounter}</p>`;

  // persist the chronicle
  try {
    const chron = JSON.parse(localStorage.getItem("tpcl_chronicle") || "[]");
    chron.unshift({
      date: new Date().toISOString().slice(0, 10),
      result: won ? "Vault breached" : "Crew fell",
      trust: Math.round(G.trust),
      heroes: G.heroes.map((h) => ({ name: h.name, survived: h.alive, traits: h.traits.map((t) => t.name) })),
    });
    localStorage.setItem("tpcl_chronicle", JSON.stringify(chron.slice(0, 8)));
  } catch (err) { /* storage unavailable — the legend lives in memory */ }

  document.getElementById("endOverlay").classList.remove("hidden");
  draw();
}

// ---------------------------------------------------------------- HUD / DOM
function hint(t) { hintText.textContent = t; }

function updateHud() {
  trustFill.style.width = `${G.trust}%`;
  trustValue.textContent = `${Math.round(G.trust)}%`;
  const names = { 1: "Chapter 1 — The Safe House Job", 2: "Chapter 2 — The Vault" };
  missionText.textContent = G.phase === "over" ? "The run is over."
    : G.encounter === 1 ? "Clear the compound's guards." : "Defeat El Capo and his crew.";
  roundText.textContent = `${names[G.encounter]} · Round ${G.round} · ${G.phase === "enemy" ? "Enemy phase" : G.phase === "player" ? "Your move" : ""}`;

  teamList.innerHTML = G.heroes.map((h) => {
    const pct = Math.round((h.hp / h.maxHp) * 100);
    return `
      <div class="team-item ${h.alive ? "" : "dead"} ${isSpent(h) ? "spent" : ""}">
        <div class="team-head">
          <span class="swatch" style="background:${h.color};"></span>
          ${h.name}
          <span class="role">${h.role}</span>
        </div>
        <div class="hpbar ${pct <= 35 ? "low" : ""}"><div style="width:${pct}%"></div></div>
        <div class="traits">${h.traits.map((t) => `<span class="trait" title="${t.desc}">${t.name}</span>`).join("")}</div>
      </div>`;
  }).join("");
  renderChronicle();
}

function isSpent(h) {
  return h.acted && h.moveLeft <= 0;
}

function renderChronicle() {
  chronicleEl.innerHTML = G.chronicle.slice(0, 8)
    .map((e) => `<div class="entry">${e}</div>`).join("");
}

function renderAbilityBar() {
  const h = G.selected;
  if (!h || !h.alive || G.phase !== "player") {
    abilityBar.innerHTML = "";
    return;
  }
  abilityBar.innerHTML = "";
  for (const ab of h.abilities) {
    const btn = document.createElement("button");
    if (G.ability && G.ability.id === ab.id) btn.classList.add("active");
    const disabled = h.acted || (ab.once === "sprint" && h.usedSprint);
    if (disabled) btn.disabled = true;
    btn.innerHTML = `<span class="ab-name">${ab.name}</span><span class="ab-desc">${ab.desc}</span>`;
    btn.addEventListener("click", () => {
      if (G.ability && G.ability.id === ab.id) {
        G.ability = null;
        G.reachable = h.moveLeft > 0 ? bfsRange(h.x, h.y, h.moveLeft, allUnits()) : new Map();
      } else {
        G.ability = ab;
        G.reachable = new Map();
      }
      renderAbilityBar();
      draw();
    });
    abilityBar.appendChild(btn);
  }
}

// ---------------------------------------------------------------- rendering
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTiles();
  drawHighlights();
  drawPeels();
  drawUnits();
  drawFloats();
  drawBanner();
}

function drawTiles() {
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      const c = grid[y][x];
      const px = x * T, py = y * T;
      if (c === 1) {
        ctx.fillStyle = "#3d4a6e";
        ctx.fillRect(px, py, T, T);
        ctx.fillStyle = "#4f5d8a";
        ctx.fillRect(px + 3, py + 3, T - 6, T - 6);
      } else if (c === 2) {
        ctx.fillStyle = "#1d4e6e";
        ctx.fillRect(px, py, T, T);
        ctx.fillStyle = "#2e6f96";
        ctx.fillRect(px + 6, py + 14 + ((x + y) % 2) * 8, T - 12, 3);
      } else if (c === 3) {
        ctx.fillStyle = "#6b543a";
        ctx.fillRect(px + 4, py + 4, T - 8, T - 8);
        ctx.fillStyle = "#8a6f4d";
        ctx.fillRect(px + 8, py + 8, T - 16, T - 16);
      } else {
        ctx.fillStyle = (x + y) % 2 === 0 ? "#18263c" : "#142034";
        ctx.fillRect(px, py, T, T);
      }
      ctx.strokeStyle = "rgba(255,255,255,0.04)";
      ctx.strokeRect(px + 0.5, py + 0.5, T - 1, T - 1);
    }
  }
}

function drawHighlights() {
  if (G.phase !== "player" || !G.selected) return;
  const h = G.selected;
  // reachable move tiles
  ctx.fillStyle = "rgba(109, 184, 255, 0.22)";
  for (const k of G.reachable.keys()) {
    const [x, y] = k.split(",").map(Number);
    ctx.fillRect(x * T + 2, y * T + 2, T - 4, T - 4);
  }
  if (!G.ability) return;
  const ab = G.ability;
  let targets = [];
  if (ab.target === "enemy") targets = abilityTargets(h, ab);
  else if (ab.target === "ally") targets = allyTargets(h, ab);
  else if (ab.target === "tile") {
    ctx.fillStyle = "rgba(255, 224, 102, 0.3)";
    for (const t of tileTargets(h, ab)) {
      ctx.fillRect(t.x * T + 4, t.y * T + 4, T - 8, T - 8);
    }
    return;
  }
  ctx.strokeStyle = ab.target === "ally" ? "#70f0a7" : "#ff706f";
  ctx.lineWidth = 3;
  for (const t of targets) {
    ctx.strokeRect(t.x * T + 3, t.y * T + 3, T - 6, T - 6);
  }
  ctx.lineWidth = 1;
}

function drawPeels() {
  for (const p of G.peels) {
    ctx.fillStyle = "#ffe066";
    ctx.fillRect(p.x * T + 12, p.y * T + 16, 16, 10);
    ctx.fillStyle = "#d9a520";
    ctx.fillRect(p.x * T + 15, p.y * T + 19, 10, 4);
  }
}

function drawUnits() {
  for (const e of G.enemies.filter((e) => e.alive)) {
    drawToken(e.x, e.y, e.color, e.letter, e.hp, e.maxHp, e.stunned);
  }
  for (const h of G.heroes.filter((h) => h.alive)) {
    const sel = G.selected === h;
    ctx.strokeStyle = sel ? "#ffcb6b" : "rgba(255,255,255,0.25)";
    ctx.lineWidth = sel ? 3 : 1;
    ctx.strokeRect(h.x * T + 1.5, h.y * T + 1.5, T - 3, T - 3);
    ctx.lineWidth = 1;
    drawToken(h.x, h.y, h.color, h.name[0], h.hp, h.maxHp, false, isSpent(h));
  }
}

function drawToken(x, y, color, letter, hp, maxHp, stunned, dim) {
  const px = x * T, py = y * T;
  ctx.globalAlpha = dim ? 0.45 : 1;
  ctx.fillStyle = color;
  ctx.fillRect(px + 6, py + 6, T - 12, T - 12);
  ctx.fillStyle = "rgba(0,0,0,0.35)";
  ctx.fillRect(px + 12, py + 12, T - 24, T - 24);
  ctx.fillStyle = "#0b1020";
  ctx.font = "bold 15px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(letter, px + T / 2, py + T / 2 + 5);
  ctx.textAlign = "left";
  // hp pips
  const w = T - 12;
  ctx.fillStyle = "rgba(0,0,0,0.5)";
  ctx.fillRect(px + 6, py + 2, w, 4);
  ctx.fillStyle = hp / maxHp > 0.35 ? "#70f0a7" : "#ff706f";
  ctx.fillRect(px + 6, py + 2, w * (hp / maxHp), 4);
  if (stunned) {
    ctx.fillStyle = "#ffe066";
    ctx.font = "bold 12px sans-serif";
    ctx.fillText("!", px + T - 12, py + T - 6);
  }
  ctx.globalAlpha = 1;
}

function drawFloats() {
  for (const f of G.floats) {
    ctx.globalAlpha = Math.max(0, 1 - f.t / 1.2);
    ctx.fillStyle = f.color;
    ctx.font = "bold 16px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(f.text, f.x * T + T / 2, f.y * T - 4 - f.t * 18);
    ctx.textAlign = "left";
  }
  ctx.globalAlpha = 1;
}

function drawBanner() {
  if (G.phase === "enemy") {
    ctx.fillStyle = "rgba(7,11,19,0.6)";
    ctx.fillRect(canvas.width / 2 - 110, 8, 220, 28);
    ctx.fillStyle = "#ff706f";
    ctx.font = "bold 15px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("ENEMY PHASE", canvas.width / 2, 27);
    ctx.textAlign = "left";
  }
}

function tick(dt) {
  for (const f of G.floats) f.t += dt;
  G.floats = G.floats.filter((f) => f.t < 1.2);
  draw();
  requestAnimationFrame(() => tick(1 / 60));
}

// ---------------------------------------------------------------- input
canvas.addEventListener("click", (ev) => {
  if (G.phase !== "player") return;
  const r = canvas.getBoundingClientRect();
  const mx = (ev.clientX - r.left) * (canvas.width / r.width);
  const my = (ev.clientY - r.top) * (canvas.height / r.height);
  const tx = Math.floor(mx / T), ty = Math.floor(my / T);
  if (tx < 0 || ty < 0 || tx >= COLS || ty >= ROWS) return;

  if (G.ability && G.selected) {
    const ab = G.ability;
    if (ab.target === "self") { useAbility(G.selected); return; }
    const unit = allUnits().find((u) => u.x === tx && u.y === ty && u.alive);
    if (unit && useAbility(unit)) return;
    if (ab.target === "tile") {
      if (!tileBlocksMove(tx, ty) && useAbility({ x: tx, y: ty })) return;
    }
    // click elsewhere cancels ability
    G.ability = null;
    if (G.selected && G.selected.moveLeft > 0 && !G.selected.acted) {
      G.reachable = bfsRange(G.selected.x, G.selected.y, G.selected.moveLeft, allUnits());
    }
    renderAbilityBar();
    draw();
    return;
  }

  const hero = G.heroes.find((h) => h.alive && h.x === tx && h.y === ty);
  if (hero) { selectHero(hero); return; }
  if (G.selected && tryMove(tx, ty)) return;
});

endTurnBtn.addEventListener("click", () => {
  if (G.phase !== "player") return;
  runEnemyPhase();
});

document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("startOverlay").classList.add("hidden");
  setupEncounter(1);
  hint("Select a hero on the grid.");
});

document.getElementById("choiceA").addEventListener("click", () => resolveEvent("a"));
document.getElementById("choiceB").addEventListener("click", () => resolveEvent("b"));
document.getElementById("restartBtn").addEventListener("click", () => location.reload());

// chronicle recap on the start screen
try {
  const chron = JSON.parse(localStorage.getItem("tpcl_chronicle") || "[]");
  if (chron.length) {
    document.getElementById("chronicleRecap").innerHTML =
      "<strong>Previous legends:</strong>" + chron.map((c) =>
        `<div>· ${c.date} — ${c.result} (trust ${c.trust}%): ` +
        c.heroes.map((h2) => `${h2.name}${h2.survived ? "" : " †"}${h2.traits.length ? " [" + h2.traits.join(", ") + "]" : ""}`).join(" · ") +
        `</div>`).join("");
  }
} catch (err) { /* no storage */ }

buildMap();
updateHud();
tick(0);