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
- **`docs/HERO_SPLIT.md`** — the billing matrix: every mission M0–M26 and thread
  ST-1…18 assigned exactly one MAIN hero with the other two as sub-heroes
  (The Warrant / The Wall / The Shadow). Film I belongs to Blackhujus,
  Film II to Merhujus, Film III to Mr. PING.

## Next Episode — ★ TOP SECRET ★ "HOLLOW" (Campaign 3)
- **`docs/NEXT_EPISODE_TOP_SECRET_TUNNELS.md`** — classified Meridian annex: the
  stolen cars and motorcycle parts were never sold — they were **buried**, welded
  into a fictional five-ring tunnel network (Vietnam · Pakistan · Russia ·
  Berlin–Paris · NYC). Fifteen episodes, three endings, an UNDERGRID second map
  layer, and a compliance boss you beat with a summons. Carries all Campaign 2
  guardrails plus tunnel-specific ones. Pitch: *"Every stolen car was a brick."*
- **`docs/ST19_THE_GEM_UNDER_ISSAN.md`** — HOLLOW's first side-thread: a border
  colonel held as the ring's oldest memory-product subject guards a forest
  installation over a fictional gem cache. Merhujus lead, PING shadow; won by
  Dose Clocks, Dignity-Rules escort and a donation-ledger reconciliation — no
  HP bars, no real religion, no real geography. Tagline: *"He never locked the
  gate. He never knew there was one."*
- **`docs/ST20_BUNNY_HUNT.md`** — the finale dossier: the hunt for BUNNY, the
  ring's round-robin reservation ledger, across Heathrow arrivals, Guangzhou
  transit and Batumi's boulevard hotels — ending at ST-16's Quiet Hotel, where
  the night porters' lost-property register is the most honest book in Georgia.
  Strict airport guardrails (zero security subject matter, landside-only,
  authority-cooperative). Tagline: *"Every bunny has a den. Ours has a concierge."*

## Codex — collectibles
- **`docs/THE_BANANA_FILES.md`** — the intercepted voice memos of Merhujus and
  Blackhujus: the Cancún incident (a black banana photo, a five-proxy VPN chain,
  and one very confused American tourist named Gary), the laminated peel, cargo
  vs. cabin, "the ledger" as a banana variety, the Warsaw "glocalization" case,
  and more intercepts that make the Meridian analyst regret her career.
  Unlockable codex cards; humour boundary enforced by the drop table.
