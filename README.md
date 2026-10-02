# Trust Protocol: Criminal Legends

A turn-based tactical RPG in the spirit of Wildermyth: grid combat, consequential
story choices, and a chronicle that records each crew's legacy. Starring the
original trinity — **Blackhujus** (Tank/Brute), **Mr. PING** (Rogue/Acrobat) and
**Merhujus** (Engineer/Support).

## How a run works
1. **Chapter 1 — The Safe House Job.** Clear the compound's guards on a tactical grid.
2. **A story event.** Procedural narrative beat with two choices — help or rob the
   wounded courier, watch or sell the dashcam, duel or dodge the old rival. Choices
   shift the shared **Trust** meter and grant **traits** with real combat effects.
3. **Chapter 2 — The Vault.** Face El Capo, a gunner and guards.
4. **The epilogue.** Each hero's traits are written into the chronicle
   (`localStorage`), and past legends appear on the start screen.

## Combat
- Click a hero, then a highlighted tile to move (blue). Each hero moves once and
  acts once per round.
- **Abilities:** Machete Slash (Blackhujus), Banana Peel Toss (trap tile),
  Shank (+4 flank damage when an ally is adjacent), Sprint (+3 movement),
  Zap Blaster (range 5, needs line of sight), Patch Up (heal 7).
- **Enemies:** Cartel Guards (melee), Gunners (range 4, line of sight), El Capo (boss).
- **Terrain:** water costs double movement; crates and walls block movement and shots;
  banana peels stun the next enemy that steps on them.
- **Trust is a combat stat:** ≥70% grants +2 damage, <30% inflicts -2. Heroes that
  fall cost the crew -12 trust.

## Traits & legacy (examples)
Bonded (+1 dmg), Opportunist (+2 dmg), Loyal (+1 armor), Scarred (-1 armor, +2 dmg),
Soaked Boots (-1 move this battle), Banana Hoarder (peel range 6), Rivalry (+3 vs El Capo)…

## Run locally
```bash
python -m http.server 8000
```
Then open `http://localhost:8000`.

## Files
- `index.html` — shell, ability bar, story overlays
- `style.css` — tactical UI theme
- `game.js` — engine: grid, pathfinding, LOS, turn system, AI, events, chronicle
