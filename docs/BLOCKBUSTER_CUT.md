# TRUST PROTOCOL: CRIMINAL LEGENDS — CAMPAIGN 2 "GREEN MEMORY"
# THE BLOCKBUSTER CUT — director's treatment & cinematic upgrade pass

**Status:** companion document to `SCENARIO_INTERCONTINENTAL_RING.md` (the "Scenario").
It changes **zero mechanics, zero guardrails, zero canon**. It re-lights what is
already there. Every guardrail in Scenario §5.3 / §6B / §6C / §6D / §16 remains
binding on this document; a full compliance check is in Part Nine.

**The brief given:** *"Analyze each file and try to improve into movie blockbuster
scenarios."*

---

# PART ONE — FILE-BY-FILE ANALYSIS

| File | What it actually is | Verdict | Blockbuster opportunity |
|---|---|---|---|
| `docs/SCENARIO_INTERCONTINENTAL_RING.md` (274 KB) | A seven-act, 26-mission, 18-thread campaign bible with its own legal department (guardrails), data schema and review gates. This is not a game doc — it is a **writers'-room season board** for a prestige crime series. | The single strongest asset in the repo. Structurally closer to *Traffic* / *The Wire* than to a tactics game. | It already has the bones of three films. It lacks only what movies add: a cold open, poster language, trailer beats, and a score. Parts Two–Eight supply them. |
| `.tmp_batch4.md` (35 KB) | Working duplicate of Scenario §6C (ST-9…ST-15) with guardrails 12–17. | Superseded — content now lives in the main Scenario. | Housekeeping, not cinema: fold into the Scenario or delete (Part Ten). |
| `game.js` (36 KB) | The Wildermyth-style tactical engine: 24×13 grid, BFS movement, LOS, traits, trust-as-combat-stat, procedural story events, chronicle persistence. | Mechanically sound and already tested headlessly. | The engine is a projector with no film loaded. Part Ten maps every blockbuster beat onto **existing** systems — title cards via the overlay system, stingers via the chronicle, cold open via the tutorial slot. No rewrite needed. |
| `index.html` | HUD shell: ability bar, party panel, chronicle panel, start/event/end overlays. | Functional. | The overlay-card is already a movie title card waiting for typography. One CSS class away. |
| `style.css` | Tactical UI theme. | Functional. | Add the "title-card" and "desaturation" treatments (Part Seven) — the Scenario's own memory motif (UI desaturates on GAP) is a film technique already specified. |
| `README.md` | Player-facing docs for the tactical build. | Accurate. | Add the pitch line and poster section so the repo front door sells the film. |
| `.github/workflows/deploy-pages.yml` | GitHub Pages deploy. | Working. | This is the cinema. The game premieres on Pages. |
| `BlackHUJus.png` | Key art: a gorilla kingpin in magenta sunglasses on a golden throne, neon-purple jungle, floating pistols and money bags. | Gorgeous, comic-operatic. | This is the **dark-poster**: it is the *Fourth Desk ending* made flesh — what Blackhujus becomes if Trust <30. Use it as the teaser you only earn by failing upward. |
| `merhujus.png` | Photorealistic still: a woman in navy coveralls and cap before a maroon "POLSKA" truck in a crane port. | The grounded, "based-on-a-true-ledger" frame. | The theatrical one-sheet. She is the film's conscience; the photo-realism is correct because Merhujus's arc is the most real. |
| `mr-ping YAYAYAhujUS.png` | Comic-art action still: black-suited acrobat with red sash mid-leap, jungle, Khmer temple ruins. | Pure second-act energy. | The international poster / action one-sheet. Place him between two containers instead of temple stones for the shipping-lane version. |
| `sat_oct_03_2026_game_development_project_setup_for_trust.json` (1.5 MB) | The original Copilot thread export — the franchise's birth certificate. | Historical. | Archive. Do not delete; it is the chronicle before the Chronicle. |
| `LICENSE` / `.gitignore` | MIT licence; ignore rules. | Fine. | — |

**One-line diagnosis:** the repo has a season of television, a working projector,
and three poster frames shot by three different crews. The Blockbuster Cut unifies them.

---

# PART TWO — THE DIAGNOSIS: THIS IS A TRILOGY, NOT A MOVIE

Blockbuster structure is escalation of *what is being stolen*:

```
FILM I  — "THE CHAIN"   (Acts I–II, M1–M8)    → they steal cargo
FILM II — "THE MEMORY"  (Acts III–IV, M9–M16) → they steal people, then selves
FILM III— "THE CHAIR"   (Acts V–VII, M17–M26) → they steal the system itself
```

- **Film I** ends when M6 reveals the trucks carry people, not cars. Cargo was never
  the plot. That is a *first-act-of-the-franchise* twist.
- **Film II** is the dark middle chapter — memory loss as mechanic — ending with M16's
  twist that the real ledger is Merhujus's own dashcam. The MacGuffin was a memory.
  That is *The Empire Strikes Back* structure.
- **Film III** refuses to end with a bigger explosion. It ends with M24/M26 — finales
  with **no HP bars**, won by governance, paperwork and witnesses. That is the boldest
  choice in the Scenario and must be *marketed*, not hidden: **"The final boss is a
  filing deadline."**

The blockbuster failure mode would be inflating every act to the same size. Don't.
The escalation is already correct: **scope grows, noise shrinks.** Act I has crane
drops and collapsing piers; Act VII has a captain clicking "submit" twelve hours
early. Confidence is quiet.

---

# PART THREE — THE COLD OPEN (new playable pre-title, M0)

Every blockbuster starts before the title. The Scenario currently opens on M1's
tutorial. We add **M0 — "THE RECEIPT"**, a 4-minute, zero-combat playable teaser
that teaches one verb (photograph) and states the franchise thesis.

- **Setting:** Gdańsk apron, 03:40, rain. Merhujus alone. Six-round clock.
- **Objective:** reach one container, photograph **one manifest line**, walk out.
- **Gimmick:** none. The absence of combat *is* the gimmick — the player keeps
  waiting for the fight and it never comes. Guards are patrol cones to avoid, not
  enemies to beat (uses existing LOS code with the cones drawn on the canvas).
- **The line photographed:** `EMPTY — as declared.` The player does not yet know this
  is the entire Act VII plot (ST-18's false-empty manifest).
- **Twist on the walkout:** the photographed container's timestamp reads **12 hours
  late**. Cut to black.
- **Title card, full screen, white on black:**

  > **TRUST PROTOCOL: CRIMINAL LEGENDS**
  > *The most dangerous weapon in this story is a timestamp.*

- **Why it works:** it costs one grid, one objective flag and one overlay — all
  existing tech — and it retroactively makes M25/M26 feel inevitable. Audiences love
  a plant that pays off 25 missions later.

---

# PART FOUR — ACT-BY-ACT BLOCKBUSTER PASS

Format per act: **Poster tagline · Trailer moment · Set-piece escalation ·
Midpoint reversal · Button (stinger) · Hero spotlight · Score cue.**
Everything below is staging and text; no mechanics change.

## FILM I — "THE CHAIN"

### ACT I — VERDE (M1–M4)
- **Tagline:** *"It starts with fruit."*
- **Trailer moment:** M3's blackout round inside the reefer — six civilians and one
  informant, cold tiles fogging every unit's breath. Three seconds in the trailer.
- **Set-piece escalation:** M4's pier collapse should play as **real time**: the
  grid's pier tiles crumble one column per round *toward camera*, so escape reads as
  outrunning the frame itself. (Implementation: existing terrain-swap on a round
  timer — the engine already swaps tiles for water cost.)
- **Midpoint reversal:** Rosa Vacca escaping **wearing Blackhujus's old foreman
  badge**. Shoot it as the movie's first quiet gut-punch — no music, one close-up
  codex entry. The badge becomes the franchise's recurring prop.
- **Button:** post-mission codex card — the badge, a wine glass, the line
  *"She kept his name."* Chronicle logs it automatically.
- **Hero spotlight:** Blackhujus. Act I is his past walking off the dock.
- **Score cue:** marimba + rain sticks; one detuned note under the badge reveal.

### ACT II — HIERRO (M5–M8)
- **Tagline:** *"Every stolen car is a room someone is locked in."*
- **Trailer moment:** M6's sleeper-yard twist — the platoon's cargo doors open on
  **silhouettes and personal objects only** (guardrail: never faces, never
  condition). The trailer shows a shoe and a school bag. Cut to black.
- **Set-piece escalation:** M7's 3-tier Rotterdam stack — the vertical map is the
  film's *Inception* hallway. Stage the camera to pull back one tier per round
  during `Hatch Run`, so the player sees all three floors at once exactly once.
- **Midpoint reversal:** Biały's brother on the payroll (M5). Family rot, the
  blockbuster's oldest fuel — handled in dialogue aftermath, never depicted.
- **Button:** M8's no-combat intel duel ends with the GAP status icon on Merhujus
  and the UI literally losing saturation for the first time. The audience must
  *see* the film lose colour — that is the franchise's signature image.
- **Hero spotlight:** Merhujus. Her own paperwork betrays her in M2; the desaturation
  in M8 is hers.
- **Score cue:** anvil percussion, an octave down each mission.

## FILM II — "THE MEMORY"

### ACT III — FLOR (M9–M12)
- **Tagline:** *"They don't sell a product. They sell the hole it leaves."*
- **Trailer moment:** M9's mirrored patrols in reflective fog — hero and reflection
  move on different clocks. One shot, pure style, zero exposition.
- **Set-piece escalation:** **M12 "Blackout Round" is the midpoint of the whole
  trilogy** — 8 rounds in a power-cut yard, all heroes FORGETFUL. Stage it as the
  *Dunkirk* cross-cut: one torch-lit grid, abilities returning one by one like
  memories surfacing. The win condition is literally *remembering*.
- **Midpoint reversal:** `Manifest Guilt` resolves or locks here — the badge from
  Act I pays off at the exact midpoint, where a blockbuster plants its mirror.
- **Button:** the codex animates **ink lifting off the page** (Scenario §11 memory
  motif). After M12, the chronicle is missing a sentence. Never say which.
- **Hero spotlight:** all three — the only act with no lead, because nobody owns
  their own memory in it.
- **Score cue:** detuned music box; tape-stop sting on every GAP (already specced —
  make it *the* franchise sound, the two-note motif).

### ACT IV — CARGA VIVA (M13–M16)
- **Tagline:** *"The tide does not negotiate."*
- **Trailer moment:** M14's tide clock — water tiles visibly doubling their cost,
  survivors on shrinking ground. Intercut with the extraction.
- **Set-piece escalation:** M13's **moving vessel** — the whole grid shifts one
  offset per round. Stage camera locked to the *horizon*, not the ship, so the
  board slides under the player. The most cinematic gimmick in the campaign.
- **Midpoint reversal:** M16 — El Contable's ledger is a decoy; the real one is
  **Merhujus's dashcam**, in evidence since Campaign 1. The MacGuffin was a memory;
  the memory was ours. This is the trilogy's *"I am your father"* — earned, planted
  two films early.
- **Button:** Srey Neang's lawful paperwork (ST-6) stamps the epilogue border —
  one bureaucratic sound effect as the act closes. Bureaucracy as heartbeat.
- **Hero spotlight:** Mr. PING — Film II is where the acrobat learns some leaps
  are paperwork.
- **Score cue:** low strings + distant foghorn; the foghorn becomes the D4 motif.

## FILM III — "THE CHAIR"

### ACT V — MOTORIZADO (M17–M19)
- **Tagline:** *"Nothing is assembled until it is used."*
- **Trailer moment:** M19's neon Hong Kong pursuit — **tail, don't fight**,
  non-lethal scoring, LOS tricks in the rain. The one pure style-reel mission;
  cut the whole trailer's fastest 4 seconds from it.
- **Set-piece escalation:** M18's dual-team split control — stage as parallel-editing
  cinema: two grids, one clock, heroes who cannot see each other. The player is the
  editor.
- **Midpoint reversal:** the weapons thread is **paper-only depiction** (guardrail)
  — the twist is that Film III's violence budget is zero and nobody notices.
- **Button:** the Golden Deer's three faces appear for the first time (ST-17
  cross-plant). Same three faces, different city. The audience learns to recognise
  them before the player is told.
- **Hero spotlight:** Mr. PING, back-to-back — Film III opens as his movie.
- **Score cue:** chrome synth over anvil percussion — Act II's motif, electrified.

### ACT VI — LA FIRMA (M20–M22)
- **Tagline:** *"Three endings. One is a mirror."*
- **Trailer moment:** M21's three simultaneous sub-grids — pick two to run. The
  trailer shows the third grid **unwatched**, events playing out with no heroes on
  it. "You cannot be everywhere" is the act's thesis and the trailer's chill.
- **Set-piece escalation:** M22 "Tokyo Terminal" — neon-rain palette, winter clock,
  the desks forced into one room. But the escalation is *downward*: from M4's
  collapsing pier to a door closing quietly. Quiet is the flex.
- **Midpoint reversal:** the three endings play as **three different genres** —
  Witnesses is a courtroom drama, Ghosts is a spy burn-notice, The Fourth Desk is
  a gangster film where the audience realises the heroes have become the prequel
  villains. The throne key art (`BlackHUJus.png`) appears **only** in the Fourth
  Desk epilogue — the poster you unlock by losing your soul.
- **Button:** Ghosts ending prints **blank chronicle pages on purpose**. Ship that.
  The bravest image in the campaign.
- **Hero spotlight:** Blackhujus — his throne or his refusal of it.
- **Score cue:** neon-rain piano; the marimba from Act I returns, played wrong.

### ACT VI-B — THE LEDGER WARS (M23–M24)
- **Tagline:** *"Name the chair."*
- **Trailer moment:** the Seating Puzzle — three valid answers, each a different
  argument about what dismantling even means. The trailer asks the question and
  answers it three ways in three cuts.
- **Set-piece escalation:** M24 — **four-team control, two bosses, zero HP bars.**
  Market it verbatim: *"The final boss is a filing deadline."* The escalation is
  that the action-movie grammar (boss arena, split party, countdown) is fully
  present and the damage stat is fully absent.
- **Button — The Empty Chair ending:** the chronicle **ends mid-sentence because
  nobody is left who may sign anything**. Do not explain it. Roll credits.
- **Score cue:** a ticking clock in the score from M23 onward that never resolves
  into a beat drop — the withheld drop is the act's sound.

### ACT VII — THE GAP TRADE (M25–M26)
- **Tagline:** *"They never owned the routes. They owned the gaps."*
- **Trailer moment:** M25's staged tail-on-tail meeting on two maps at once — the
  same three Golden Deer faces, two cities, one invoice prefix. Cross-cut until the
  audience sees they are one crew *before* the game says it.
- **Set-piece escalation:** M26 "Twelve Hours, Twelve Names" — two half-missions,
  one shared round clock, neither winnable alone. The ship half is a man choosing
  to file on time; the court half is witnesses choosing to speak. The finale of a
  crime blockbuster where **the climax is honesty performed on schedule**.
- **Button — The Early Filing ending:** the chronicle's last page is **a
  port-authority receipt with a timestamp.** Mirror of M0's cold open. The first
  image and the last image of the franchise are the same receipt, filed 25 missions
  apart — once late, once on time. *That* is the poster.
- **Score cue:** ship-engine hum under the court strings; final cut to the
  tape-stop motif, once, clean.

---

## THE PRESTIGE EPISODES (side-thread punch-ups)

The 18 side-threads are the franchise's standalone episodes. Four are already
feature-length in ambition; give them title sequences of their own:

- **ST-5 "GHOST PROTOCOL" (Mr. PING solo):** a one-character episode — the
  *bottle episode*. Its relapse material (Scenario §16.7) is the campaign's most
  honest writing. Stage it as a silent film: no VO, only mission text and the
  dashcam UI. **Trailer line:** *"Nine ports. One man. No one to call."*
- **ST-7 "THE QUILL OF BIAŁYSTOK" (moral centre):** the episode the awards
  conversation is about. Its Dignity-Rules escort — where the NPC can say *no* and
  refuse to move — is the single most important set piece in the repo. Stage the
  rescue backwards: open on the courtroom, then *"Three ports earlier…"*
  **Trailer line:** *"He could not sign his name. So he made the court remember it."*
- **ST-13 "THE BACK BIBLE" (Krystallis vault):** the **heist episode** — the
  franchise's genre vacation. A compliance officer who has spent three years leaving
  *deliberate errors* in a vault register is a blockbuster character in one sentence.
  **Trailer line:** *"The safest bank in fiction. The slowest heist ever filmed."*
- **ST-18 "EMPTY AS DECLARED":** the finale's conscience. Captain Pustoy's crime —
  filing the truth **twelve hours late** — is the campaign's thesis in one man.
  Give him the franchise's best written scene: the recruitment parley where he
  explains the envelope, and nobody interrupts. **Trailer line:** *"His crime was
  a delay. His redemption was a deadline."*

---

# PART FIVE — KEY ART & POSTER LANGUAGE

The three PNGs in the repo root are three good posters from **three different
movies**. The blockbuster move is not to pick one — it is to make the difference
the point. A trilogy gets three poster styles:

| Poster | Art | Film | Rule |
|---|---|---|---|
| **The Grounded One-Sheet** | `merhujus.png` — photoreal, overcast port, POLSKA truck | Film I | No weapons in frame. The tagline carries the menace: *"It starts with fruit."* |
| **The Action International** | `mr-ping YAYAYAhujUS.png` — mid-leap, jungle, ruins | Film II | Keep the leap, re-dress the background as two containers mid-gap: the acrobat's leap IS the campaign's gap-trade metaphor. Tagline: *"They sell the hole it leaves."* |
| **The Dark Teaser** | `BlackHUJus.png` — gorilla on the golden throne | Film III / Fourth Desk | Released **only** with the dark ending. No title text except: *"He kept the chair warm."* |

**Unification layer (cheap, high-yield):** run all three through one grade —
crush blacks, one shared neon-rain rim light (Scenario Act VI palette), identical
title block. Three styles, one franchise.

**Title treatment:** `TRUST PROTOCOL` in a stamped customs-serif; `CRIMINAL
LEGENDS` hand-cut like evidence-bag tape. The colon is a barcode. One-time CSS/SVG
asset, reusable in-game on the start overlay.

---

# PART SIX — THE 90-SECOND TEASER TRAILER

Shot list, built only from missions that already exist:

```
0:00  BLACK. A printer. One line: "EMPTY — as declared."            (M0)
0:05  Rain. A woman in coveralls photographs a manifest.            (M0/M2)
0:09  TITLE CARD: "THREE LEGENDS"
0:12  A gorilla-sized silhouette machetes a door off its hinge.     (Campaign 1 echo)
0:15  An acrobat clears two containers in one leap.                 (ST-17/M19)
0:18  A dashcam's timestamp: 03:47. It glitches.                    (M16 plant)
0:22  TITLE CARD: "ONE RING"
0:25  A reefer door opens: silhouettes, a shoe, a school bag.       (M3/M6 — guardrail shot)
0:29  A boardroom. A chair rotates to face camera. Empty.           (M23)
0:33  TITLE CARD: "TWENTY PORTS"
0:36  A grid slides sideways — a whole ship moving underfoot.       (M13)
0:39  Ink lifts off a codex page. The UI loses colour.              (M12/§11)
0:43  A vault clerk stamps a register — and mis-stamps on purpose.  (ST-13)
0:47  A captain stares at a "SUBMIT" button. Twelve hours early.    (ST-18)
0:51  TITLE CARD: "STEAL THE LEDGER BEFORE THE LEDGER STEALS YOUR MEMORY."
0:55  Montage: pier collapsing toward camera / mirrored fog patrols /
      neon pursuit / blank chronicle pages flipping.                (M4/M9/M19/M22)
1:10  Silence. A port-authority receipt prints. Timestamped.        (M26)
1:15  MAIN TITLE. The colon blinks like a barcode scanner.
1:20  STINGER: a banana peel lands on marble. A beat. A guard's
      radio: "...it's him."                                         (franchise wink)
```

**The banana peel stinger is load-bearing.** The campaign is grim by design; the
franchise's soul is that three ridiculous people walk through it anyway. Every
trailer and every act button needs one laugh — the GDD's own rule (banana peel,
dashcam, voice memo) applied cinematically.

---

# PART SEVEN — SCORE & SOUND DESIGN

| Act | Motif | Instrument |
|---|---|---|
| I VERDE | source | marimba + rain sticks, one detuned note |
| II HIERRO | labour | anvil percussion, descending octave per mission |
| III FLOR | memory | detuned music box; **the tape-stop sting** (franchise two-note motif) |
| IV CARGA VIVA | tide | low strings + foghorn (D4's voice) |
| V MOTORIZADO | chrome | synth over anvil — Act II electrified |
| VI LA FIRMA | neon | rain piano; Act I marimba played wrong |
| VI-B LEDGER WARS | governance | a ticking clock that never drops |
| VII GAP TRADE | honesty | ship-engine hum + court strings |

**Three sound rules:**
1. The tape-stop sting is sacred — it plays only for real memory loss (GAP), never
   as decoration. Scarcity makes it the franchise's *lightsaber hum*.
2. Every act's button scene runs **no score** until the chronicle line prints —
   then one instrument.
3. Victim-adjacent scenes are **silhouettes + objects + silence** (guardrail
   extended to audio): no horror stingers, no grief choir. Dignity sounds like
   room tone.

---

# PART EIGHT — TEN BLOCKBUSTER RULES, APPLIED

| # | Rule | Where the Scenario already does it | What this cut adds |
|---|---|---|---|
| 1 | Open late, explain never | M0 cold open | The receipt plant |
| 2 | The MacGuffin is a person/memory | M16 dashcam | Trailer plants it at 0:18 |
| 3 | Midpoint mirror | M12 ↔ M22 badge | Blackout staged as trilogy midpoint |
| 4 | Escalate scope, shrink noise | cargo → people → governance | Marketed as the trilogy's thesis |
| 5 | The villain is a system | La Firma's desks | The Empty Chair as final image |
| 6 | Earn the dark ending | Fourth Desk | Throne poster as unlockable art |
| 7 | One laugh per reel | peel/dashcam/voice memo | The banana-peel trailer stinger |
| 8 | A scene the audience retells | ST-7 Dignity escort; Pustoy's parley | Spotlighted, score withheld |
| 9 | First image = last image | — | Receipt in M0 ↔ receipt in M26 |
|10 | Silence is a budget too | no-HP finales | "The final boss is a filing deadline" |

---

# PART NINE — GUARDRAIL COMPLIANCE CHECK

Every beat above was checked against Scenario §5.3 / §6B guardrails 1–11 / §6C
guardrails 12–17 / §6D / §16 review gates. Verbatim confirmations:

1. **No operational text.** The cold open photographs a manifest line; nothing
   else is taught anywhere. §5.3-1 holds.
2. **Fictional substances only.** This document names none. §5.3-2 holds.
3. **Victims:** silhouette + personal object framing is *extended* from art brief
   into the trailer language (0:25 shot) and into sound design (silence rule 3).
   §5.3-3 holds, strengthened.
4. **Helpline entry** remains a shipping blocker per §5.3-4; the trailer copy does
   not supersede the in-game content warning (Scenario §13).
5. **Naming hygiene (extends Scenario §9.1):** remaining real-world strings in the
   Scenario should be fictionalised before any public trailer use:
   - Crypto-exchange names (Bitfinex, Tether, Binance, OKX in §3.x) → one invented
     venue, e.g. **"MERIDIAN-X"** — the ledger wars deserve a fictional exchange.
   - "Langley/CIA" joke strings → cut; the Scenario's own tone rule is that
     institutions are fictional (ASEPO Task Force "Meridian" stays, codex-footnoted
     as invented per §9.1).
   - `ASEPO` → `ASEANAPOL` swap remains the implementer's choice per §9.1 — pick
     one string and normalise everywhere (trailer legal lines included).
6. **Review gates G1–G6 (§16.5) still apply** to this document's new scenes:
   M0 and the trailer contain no new victim depiction, so no new gate is triggered;
   ST-7's reversed staging still routes through the same sensitivity read.
7. **The humour rule has a boundary:** the banana-peel stinger never plays within
   one scene of any victim-adjacent material. Laughter is the release valve, not
   the backdrop.

---

# PART TEN — LANDING IT IN THE BUILD (no engine rewrite)

| Blockbuster beat | Existing system it rides | Effort |
|---|---|---|
| Chapter title cards | overlay-card in `index.html` + one CSS class | S |
| M0 cold open | one encounter definition + a photo objective flag | S |
| Act buttons / stingers | chronicle writer in `endRun` | S |
| UI desaturation on GAP | CSS filter on a body class | S |
| Blank-pages Ghosts epilogue | chronicle print path | S |
| Hero portraits from the three PNGs | party sidebar `<img>` + downscaled grid tokens | M |
| Trailer | marketing asset — this document is its script | — |

**Housekeeping:** `.tmp_batch4.md` is fully merged into the Scenario (§6C); delete
it or move it to `docs/archive/` to keep the repo door clean.

**Bottom line:** the Scenario was already the best crime saga in any repo I have
analysed. It did not need new plot — it needed a projector, a poster wall, a
trailer and a score. Now it has all four. **Roll camera.**
