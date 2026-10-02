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
- **Trust is a combat stat:** ≥70% grants +2 damage, <30% inflicts -2. He

## Campaign 2 — "GREEN MEMORY"
- **`docs/SCENARIO_INTERCONTINENTAL_RING.md`** — the full campaign bible: seven acts,
  26 missions, 18 side-threads, fictional-only guardrails, data schema.
- **`docs/BLOCKBUSTER_CUT.md`** — the cinematic treatment: trilogy structure
  (THE CHAIN / THE MEMORY / THE CHAIR), playable cold open M0 "The Receipt",
  act-by-act poster taglines and set-piece staging, a 90-second teaser-trailer
  shot list, poster language for the three hero key arts, and the score bible —
  with a guardrail-compliance checklist. Pitch: *"Steal the ledger before the
  ledger steals your memory."*
