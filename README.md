# Trust Protocol: Criminal Legends

A playable 2D pixel-art prototype inspired by the design document: a co-op tactical dungeon exploration scene with three heroes, trust meter, and smartphone-style mission feed.

## Features
- 3-player local co-op-style movement
- collectible artifact loop
- trust meter that drops with reckless boosting
- dungeon puzzle switch logic
- smartphone overlay for mission feed
- GitHub Pages deployment via GitHub Actions

## Controls
- Blackhujus: W A S D
- Mr. PING: I J K L
- Merhujus: Arrow keys
- Phone: P
- Boost: Space
- Message cycle: T

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
This project is designed to run as a static GitHub Pages site. The workflow in `.github/workflows/deploy-pages.yml` deploys it automatically on push to `main`.

## Architecture
- `index.html` — UI shell and HUD layout
- `style.css` — visual art direction and interface styling
- `game.js` — gameplay systems, hero logic, world layout, trust logic, and rendering
- `.github/workflows/deploy-pages.yml` — deployment pipeline
