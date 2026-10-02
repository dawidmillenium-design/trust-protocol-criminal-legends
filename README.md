# Trust Protocol: Criminal Legends

A playable 2D pixel-art prototype built from the project's GDD data: a co-op
tactical dungeon ("Banana Temple" vertical slice) with the hero trinity,
trust meter, class-gated key items, and the smartphone mission feed.

## The Trinity (from the GDD)
- **Blackhujus** — Tank / Brute: slow, smashes cracked walls on contact, drops Banana Peel Traps (Q)
- **Mr. PING** — Rogue / Acrobat: fastest hero, the only one who fits through narrow vents
- **Merhujus** — Engineer / Support: powers tech panels to raise bridges for the crew

## The three key items (Criminal Temple gating)
- **Grappling Hook** — sealed in Room A, only Mr. PING can enter through the vent
- **Golden Machete** — sealed in the vault, only Blackhujus can break the cracked wall
- **Timeline Device** — sits inside a water gap, reachable only when Merhujus raises the bridge

## The Banana Temple vault finale (Prototype 2, GDD)
The vault door only opens while **all three heroes hold their role at once**:
Mr. PING flips the lever (sealed in Room A), **Blackhujus holds the heavy
pressure plate**, and **Merhujus keeps the bridge powered**. First full sync:
Trust +10.

## GDD trust behaviors
- Reckless boosting (Space) erodes trust
- Slipping on a teammate's banana peel costs trust
- **Loot hoarding** — one hero grabbing most of the cash stashes drops shared trust
- Collecting key items, smashing walls, flipping the lever restore trust
- All floor switches held: trust slowly regenerates
- Trust < 30%: the whole crew is slowed by distrust; Trust ≥ 70%: +10% speed bonus

## GDD hero gadgets
- **Banana Peel Trap** (Blackhujus, Q) — peels slow whoever slips on them
- **Dashcam time-rewind** (Merhujus, R) — rewinds her ~3 seconds, never into a wall

## Controls
- Blackhujus: W A S D — Q drops a banana peel
- Mr. PING: I J K L
- Merhujus: Arrow keys — R rewinds 3s
- Phone: P — Messages: T — Boost: Space

## Local run
From the repository root:
```bash
python -m http.server 8000
```
Then open:
```text
http://localhost:8000
```

## Deployment
Designed to run as a static GitHub Pages site. The workflow in
`.github/workflows/deploy-pages.yml` deploys automatically on push to `main`.

## Architecture
- `index.html` — UI shell and HUD layout
- `style.css` — visual art direction and interface styling
- `game.js` — gameplay systems, trinity class logic, dungeon gating, trust logic, rendering
