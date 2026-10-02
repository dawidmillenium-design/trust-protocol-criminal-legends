# TRUST PROTOCOL: CRIMINAL LEGENDS — CAMPAIGN 2
## "GREEN MEMORY" (working title) / *Kod Zielonej Pamieci*

**Genre:** turn-based tactical RPG (Wildermyth-style chronicle) with a global
logistics-thriller backdrop.
**Player role:** the three legends are **infiltrators / informants** who climb inside
a transnational trafficking ring to dismantle it from within — while the shared
**Trust** meter decides whether they end the campaign as witnesses, ghosts, or kingpins.

> ⚠️ **Fiction & safety note (read first).** Every name, port assignment, route,
> company and statistic below is **fictional**. Real agencies are used only as
> in-world law-enforcement factions, never as endorsements of real organisations or
> individuals. No location in this document is described as an actual criminal hub.
> The scenario deliberately contains **no operational instructions**: no recipe for
> synthesising any substance, no tampering method for vehicles or containers, no
> evasion technique against border controls, and no real corruption playbook. All
> "how" details are replaced by game mechanics (skill checks, meters, dice-equivalent
> rolls) so nothing here doubles as a real-world how-to. Content is designed for a
> mature (18+/PEGI 18) fictional thriller audience and should ship with a content
> warning covering human-trafficking themes.
> **Revision 3 addendum:** the same rule applies to the newer material — the fictional
> aerosol in ST-5 is described only by its effects on game tokens and by a sealed lab report,
> the "transformation" beat is explicitly in-world disinformation rather than a mechanic,
> entertainment-sector migration in ST-6 is written as contract labour, and the harm in ST-7
> is aftermath-only and never interactive. See §6B guardrails 7–11 and §16.0/§16.5.

---

## 1. HIGH CONCEPT

A single commodity chain stitches four continents together:

```
ANDES SOURCE          ATLANTIC SPINE              NORTHERN WASH                GLOBAL SOUTH
Colombia · Peru   →   Cartagena → Miami     →   Rotterdam · Antwerp       →   Dubai · Mumbai
green cargo           Boston · New York          Cardiff · Hull · Liverpool    Bangkok · Chattogram
scrap/parts flow  ←   Odessa · Samsun (Egei)     Berlin · Bialystok        ←   Phnom Penh · Sihanouville
Ho Chi Minh · Da Nang · Hong Kong · Tokyo  ←  motorcycle-parts crates  ←  stolen-vehicle containers
```

Three legends each own one link of the chain. Nobody outside the ring knows all
three links. **The player's job is to connect them on a board — and then burn the
board.**

**Pitch line:** *"Three heroes, one ring, twenty ports. Steal the ledger before the
ledger steals your memory."*

---

## 2. THE THREE HEROES (re-cast for Campaign 2)

Same stat blocks as `game.js` (`bh`, `ping`, `mer`) so the existing engine runs the
campaign without re-authoring combat; only narrative roles, cover identities and
signature abilities change.

### 2.1 BLACKHUJUS — "El Jardinero" / *the Gardener*
- **Engineer role:** Tank / Brute. HP 30, Move 4. Machete Slash, Banana Peel Toss.
- **Cover identity:** foreman on Andean "agricultural cooperative" terraces and on the
  loading crews at Cartagena. Believes he is protecting villages that employ him.
- **Ring link he owns:** the **source side** — green cargo, dried flower stock, scrap
  metal baled for export, and the mule-and-truck handover points.
- **Secret:** he signed the original loading manifest that put a container of people
  to sea. He has never seen the list of names.
- **Campaign arc — *Roots*:** learns that "cooperative" profit bought the clinic his
  sister died trying to reach. Choice ladder ends in either testifying (Trust+) or
  burying the manifest with him (Trust−).
- **New signature ability — Green Ledger (passive):** when Blackhujus ends a turn
  adjacent to a **crate/container tile**, reveal hidden intel tokens in a radius 2.
  Represents his knowledge of what is really inside each box.
- **Trait hooks:** `Gardener's Hands` (+1 dmg vs Gunners, −1 armor), `Manifest Guilt`
  (−2 Trust at chapter start, +2 dmg when a civilian tile is threatened).

### 2.2 MR. PING — "Kontener" / *the Acrobat of Nine Ports*
- **Engineer role:** Rogue / Acrobat. HP 18, Move 6. Shank (+4 flank), Sprint.
- **Cover identity:** "reefer-hatch stowaway whisperer" — hired to move bodies and
  small high-value items through ocean containers on the Atlantic and Pacific legs.
  Collects voice memos from everyone he meets (47 seconds max, always 47).
- **Ring link he owns:** the **sea leg** — container stacks, Ro-Ro decks, and the
  truck-ferry interfaces at Rotterdam/Antwerp/Hull/Cardiff and Hong Kong/Tokyo.
- **Secret:** he has already been paid twice to *not* open one particular container.
- **Campaign arc — *Voices*:** his memos become the prosecution's exhibit list. Each
  memo sold or destroyed shifts Trust and unlocks/blocks epilogue branches.
- **New signature ability — Hatch Run (replaces Sprint in Ch.4+):** once per battle,
  ignore crate/wall blocking for one movement phase (cannot pass units). Flavour: he
  knows the gaps between stacked boxes. Balance: costs 1 Trust if it ends inside an
  enemy's threat range (he was seen).
- **Trait hooks:** `Forty-Seven Seconds` (reveals one intel token per battle),
  `Stowaway Reflex` (+1 armor inside container tiles), `Unopened Door` (−1 dmg until
  the Chapter-5 choice is made).

### 2.3 MERHUJUS — "Sygnatura" / *the Forger of Signature Routes*
- **Engineer role:** Engineer / Support. HP 20, Move 4. Zap Blaster (range 5, LOS),
  Patch Up (heal 7).
- **Cover identity:** customs-paperwork and telemetry specialist. Runs a "dashcam and
  fleet-telematics" shop that supplies the ring's truck-platoons with clean logs and
  plate sets, and launders vehicle-part invoices through motorcycle crates.
- **Ring link she owns:** the **land bridge** — the truck-parking hot spots, the
  Balkan/Egei coastal depots, and the Odessa→Samsun feeder lane.
- **Secret:** her dashcam archive is the only complete timeline of the ring — and it
  also proves where she was during the job the crew swore never to speak of.
- **Campaign arc — *Archive*:** the dashcam is both weapon and confession. Handing it
  to ASEPO (fictional task force — see §9.1) solves six cases and destroys the crew's
  anonymity.
- **New signature ability — Clean Papers (active, once per encounter):** designate one
  hero as "documented" for 2 rounds: enemies with ranged attacks must target someone
  else. Flavour: a plausible ID badge and a manifest line. Purely mechanical, no
  real-world forgery detail.
- **Trait hooks:** `Telematics` (+1 move when the map has a road tile),
  `Two Ledgers` (+3 gold, −5 Trust), `Patch Up Protocol` (heal 7 → 9 on civilians).

### 2.4 Shared cast
| Name | Faction | Function in scenario |
|---|---|---|
| **Comandante "Rosa" Vacca** | Ring — *La Firma* leadership | Antagonist of Ch.1–3, negotiable ally in Ch.5 |
| **"El Contable" (The Accountant)** | Ring — money/placement | Boss of Ch.3 (Miami), intel source in Ch.6 |
| **Halyna "Sawa" Voronenko** | Ring — Odessa feeder lane | Truck-platoon boss, optional recruit |
| **Tobias Kell** | INTERPOL analyst, Baltic-desk | Handler; gives the player the board |
| **"Biały" Marek Białostocki** | Ring — Bialystok parking crew | Moral mirror: ex-driver, wants out |
| **Dr. Anong Sirisom** | NGO medic, Bangkok | Civilian objective, memory-clinic thread |
| **ASEPO Prosecutor Nadia Sarkar** | Task-force lead (fictional, §9.1) | Epilogue branch key |

### 2.5 New cast introduced by the side-threads (§6B)

Full dossiers in **§16**. These are the antagonists/drivers of the four expansion
scenarios; each is written so the *hero crew never shares a table with them* until the
player has earned the meeting.

| Name | Faction | Function | Thread |
|---|---|---|---|
| **Julián "Mercurio" Ocampo** | Ring — enforcer, UK cell | Merhujus's half-brother; runs the Mercury Cell, kills witnesses who report to police | **ST-1** |
| **"The Nineveh Three": Azzam, Bahram, Lemi** | Contract hit-team (Assyrian names, Iraqi/Syrian origin) | Hired by La Firma for debt-collection and witness suppression across the UK | **ST-2** |
| **Sgt. Delia Nkemdirim** | UK — Regional Organised Crime Unit detective | The honest cop who keeps calling Merhujus; she is the reason people get arrested instead of killed | **ST-1 / ST-2** |
| **Viktor "Tolkach" Druzhba** | Broker — Moscow→Małaszewicze corridor | Sells "sealed retail consignments"; he does not know what is inside either | **ST-3** |
| **Marianna "Celna" Tarkowska** | Polish customs officer, Małaszewicze rail terminal | Honest insider: wants the corridor clean, needs proof that won't get her killed | **ST-3** |
| **"La Curandera" Belkys Duarte** | Ring — spiritual logistics desk (D5) | Books voyages as pilgrimages; moves relics, cash and ritual goods, not substances | **ST-4** |
| **Chieftain Baraka Mwinyi** | Mombasa coast — community elder | The legitimate counter-power: his caravan is the safe alternative to the ring's route | **ST-4** |
| **"La Mariposa" Nattara Suwannee** | Ring — D7 placement broker, Bangkok/Pattaya | Sells discretion; monetises the victims of the NIEBLA DULCE incident. `parleyable` — cannot be damaged | **ST-5** |
| **Wale "Two Cameras" Adeyemi** | Independent media crew | Dockside Dan's cameraman; the man PING is briefed to silence. Appears in ST-2 and ST-5 | **ST-5 / ST-2** |
| **Srey Neang ("Neang") Sok** | Cambodian stage professional | Contract worker on the Siem Reap→Incheon→Warsaw rotation; her lawful paperwork is the ring's cover and the thread's evidence | **ST-6** |
| **Khun Sombat Rithy** | Ring — D4 visa broker, Phnom Penh | Runs the sponsorship rotation that keeps four dancers passport-less. `parleyable` if manifest + Celna's file owned | **ST-6** |
| **Pani Iwona Grzelak** | Warsaw agency owner | Celna's sister-in-law; a small contractor trapped by one bad guarantor form — neither villain nor victim | **ST-6** |
| **Tomasz "Kwillo" Wieczorek** | Białystok courier-blogger → witness | Detained, tortured (hands), sold to a Caribbean digging crew, then rebuilt as the campaign's key witness | **ST-7** |
| **Warden Grigor Antov** | Ring tenant — keeper of the "debt-recovery hostel" | Only enemy who can apply `marked` to a *witness* unit; runs detention as a service for other groups | **ST-7** |
| **Meester Dirk Halman** | Defence counsel, Rotterdam | The Cross-Examination Duel boss: fights with Objection cards, has no HP | **ST-7** |
| **"El Químico" Ferran Solís** | Ring — D1 goods sub-line, Almería | Packs legal-adjacent industrial goods under a produce code. Killing him locks the Honest Road ending | **ST-8** |
| **Auditor Griet Vos** | Ring — ledger auditor, Rotterdam cold store | The AI opponent in the Ledger Duel; bids Intel against the player in real time | **ST-8** |

### 2.6 Cast introduced by the fourth batch (§6C, ST-9 … ST-15)

| Name | Faction | Function | Thread |
|---|---|---|---|
| **"Auntie" Fong Lai-ling (芳阿姨)** | Ex-resident, now floor manager of the Causeway Bay front | The ring's promoted survivor: she keeps eleven women alive by keeping the manifest tidy. `parleyable` — she hands over the Floor Ledger if you can prove an exit exists for her too | **ST-9** |
| **Ng Siu-kei ("Kiki")** | Hong Kong Labour Department caseworker | Lawful gate: without her filing slot, rescues become re-shipments. Non-combat objective unit | **ST-9 / ST-14** |
| **Dona Célia Nascimento** | Residents' council president, Vila Aurora (fictional Rio hillside) | Refuses to be "rescued"; asks for a streetlight and a camera. The campaign's first civic-request NPC | **ST-10** |
| **Insp. László Berek** | Undercover, EU-side delegation | One of three officers who do not know each other exist; arranging their meeting is ST-10's win condition | **ST-10** |
| **Nicasio "Caregena" Solano** | Ring — D4 decoy programme, retired | A man surgically and behaviourally dressed as Mr. PING, now unmedicated and shouting that he is carrageenan. The campaign's most humane scene belongs to him | **ST-11** |
| **Dr. Ana Lucía Bermúdez** | Costa Rican community-health outreach | Nine months of refused appointments; she, not the heroes, is the one who can reach Caregena | **ST-11** |
| **Coronel "Pantano" Rentería** | Contractor — *Comité de Despeje*, hired by D1 | Runs the jungle camp and its displacement contract. Defeated by zone denial, not damage | **ST-12** |
| **Doña Yenica Palacios** | Afro-Colombian community council lawyer (Nariño–Chocó coast) | Carries the land titles; she is the thread's win condition and its voice in the epilogue | **ST-12** |
| **"Oveja"** | Camp cook, Playla Blanca digging-crew survivor (ST-7 link) | Recognises Kwillo's voice on a broadcast; guides the player out of the Silence Ring | **ST-12 / ST-7** |
| **Frau Elsbeth Ronig** | Compliance officer, Bank Krystallis AG (fictional) | Has been leaving deliberate errors in the vault register for three years; your KYC ally and your mirror | **ST-13** |
| **Avv. Ottiero Sanseverino** | Ring counsel, Milan/Zürich | The Card Boss who buries disclosure with procedure; no HP, only objections | **ST-13** |
| **Rani Dasgupta** | Garment-worker organiser, Chattogram | Interpreter ally and lawful leverage; returns in Act VI as a witness roster anchor | **ST-14** |
| **Shirin Haque ("Nanu Ma")** | Survivor-witness, Sylheti speaker | Speaks four sentences across the whole campaign; each one is a case exhibit and none is translatable without consent | **ST-14** |
| **Sisa Quispe Choquehuanca** | Survivor-witness, Quechua/Aymara speaker | ST-14's Peruvian half; her catering contract never existed and that is the crime | **ST-14** |
| **The Thirty-Third Delegate ("El Sillón")** | Ring governance — rotating chair | Identity is a knowledge check across all threads; whoever the player names here decides which ending is reachable | **ST-15** |

### 2.7 Cast introduced by the fifth batch (§6D, ST-16 … ST-18)

| Name | Faction | Function | Thread |
|---|---|---|---|
| **Zaza Beridze** | Independent journalist, publisher of *Kolkhas Online* (fictional outlet) | The man every side of this batch is sent to silence. He is not brave, noble or tragic — he runs a two-person site with an unpaid advertising problem, corrects your grammar in a safehouse, and wants to live. `immuneToAll`, `npcAutonomous`: **he decides where he goes**, the heroes only clear the road | **ST-16 / ST-17** |
| **Lieutenant Nino Kvirikashvili** | Georgian Patrol Police, Batumi harbour post | The lawful gate. She cannot be bypassed, bribed or impersonated — she can only be *given paperwork good enough to act on*. Refuses anything sealed; demands a source she can protect | **ST-16** |
| **"Ambassador" Ramaz Gogokhia** | D12 seat-holder, Batumi → Poti freight consultancy | The thread's Card Boss (`hpless`). Speaks entirely in transit-law vocabulary; his objection deck is made of customs codes. Never seen holding a weapon | **ST-16-B** |
| **Sopiko Beridze** | Zaza's sister, keeps his archive on two external drives | Carries the "second copy" MacGuffin. Her condition for releasing it is that the heroes do *not* read it | **ST-16** |
| **The Golden Deer ("Thirteen Antlers")** | Canton-area enforcement-and-collection crew, 13 members, rented out by contract | Not a gang — a **service**. Three named members only: **Uncle Kam Cheong** (logistics, the only one you can parley with), **Sing "Two Tickets"** (travel document specialist), **Hoi Lan** (the accountant who owns the crew's escrow). They appear in Da Nang, Zhuhai and Delhi — same three faces, different cities, which is how the player proves they are one crew | **ST-17** |
| **Captain Ilya "Pustoy" ("Empty") Rudenko** | Master of the MV *Kolport*, feeder vessel, South America → Europe leg | The honest answer to your fourth brief. He does not forge the manifest — he files a truthful discrepancy report **twelve hours late** and takes an envelope of cash for waiting. That single delay is the whole crime, and it is the most recruitable villain in the campaign | **ST-18** |
| **Chief Officer Bea Okonkwo** | Kolport's first mate, Lagos-born, Cardiff-qualified | The moral counterweight: she *did* file on time once, and lost her licence for eleven months. Her testimony is ST-18's win condition and the campaign's clearest statement that the system punishes the reporter, not the smuggler | **ST-18** |
| **Marina "Talya" Talypova** | D2 car-broker, Novorossiysk → Valencia corridor | The buyer of the empty-container paper. Runs a legitimate used-car export business that buys discrepancies by the container. Non-combat; defeated by a bank reconciliation, never by damage | **ST-18** |
| **Auditor Priya Raghunathan** | Marine compliance auditor, Kochi/Mumbai | The player's route into the ISPS/VDS-style inspection layer as *gameplay*: she can lawfully open a ship's records, which is why four separate threads need her | **ST-18 / ST-16** |
| **"Borderless" Kemal Arslan** | D13 seat-holder, hotspot reseller, Antalya → Tijuana | Sells pre-mapped Wi-Fi and roaming holes along EU corridors and re-sells the same map at the Texas border. Speaks like a telecom salesman; his product is *coverage*, which is why he cannot be arrested for it | **ST-16 / ST-17** |
| **Halyna Voronenko** *(returning)* | Odessa apron clerk, D2/D4 crossover | Her existing role grows: she is the one who spots the false "EMPTY" manifest line in Act II and is ignored. ST-18 is her vindication mission | **ST-18** |

---

## 3. THE RING: FICTIONAL STRUCTURE ("LA FIRMA")

Four desks, one per smuggling stream. Clearing a desk = a campaign chapter objective
and a permanent board advantage.

| Desk | Codename | Cargo streams (fictional mix) | Seat(s) | Fallback node |
|---|---|---|---|---|
| **D1 — JARDÍN** | Garden | "Green cargo": unripened fruit crates used as visual camouflage for dried-flower leaf stock and plant-derived alkaloid *precursor powder* (never named, never described) | Andean highlands, Cali corridor | Cartagena |
| **D2 — HIERRO** | Iron | Stolen vehicles torn down to "scrap kits"; legitimate used-car export paperwork abuse | Miami, Houston/Texas gateways | Rotterdam, Odessa |
| **D3 — MOTORIZADO** | Two-Wheel | Motorcycle parts crated as "assemblies" that carry weapons components inside declared weight tolerances | Bangkok, Chattogram, Hong Kong | Samsun/Egei, Liverpool |
| **D4 — CARGA VIVA** | Live Cargo | People moved in modified reefer slots and "crew manifests" — the ring's most profitable and least discussed desk | Cartagena, Sihanouville, Tijuana-side Texas crossing | Hull, Boston |

**Governance:** La Firma is cell-based; D1–D4 never meet. Only **El Contable** holds
the cross-desk ledger. This is the campaign's structural MacGuffin: the player must
make the desks meet.

### 3.1 Three extra desks revealed by the side-threads (§6B)

| Desk | Codename | Cargo / function (fictional) | Seat(s) | Fallback node | Unlocked by |
|---|---|---|---|---|---|
| **D5 — CIELO** | Sky / *Heaven* | "Spiritual logistics": votive goods, relics, blessed oil, pilgrimage travel and cash-on-hand moved as religious consignments. **Contains no substances** — it launders money and people under a cover of faith. | Cali corridor, Lagos (Ikorodu/Ladipo), Mombasa | Dubai, Samsun | **ST-4** |
| **D6 — MERCURIO** | Mercury | The ring's **enforcement service**: debt collection, witness suppression, courier routes between UK wash ports. Sold as a "service provider" to other groups (per Europol SOCTA framing, §9.2). | London/Home Counties, Hull, Liverpool, Cardiff | Rotterdam, Berlin | **ST-1**, **ST-2** |
| **D7 — NIEBLA** | Mist | **Discretion services**: a fictional aerosol (**NIEBLA DULCE**, symptoms-only, guardrail 7) rented out to silence journalists and streamers, plus the "placement" of the people it affects into the ring's entertainment economy. No chemistry is ever shown or described. | Pattaya / Bangkok Soi Lert | Almería (packing), Rotterdam (cold store) | **ST-5**, closed via **ST-8** |

Design value: the extra desks make the board *bigger without making the four original
streams muddier*. D5 is the moral/faith thread; D6 is the violence thread; D7 is the
silencing thread. Clearing D6 is the only way to reduce civilian body-count in the
epilogue (see `witnessLedger` flag, §8.1). **D7 is deliberately the smallest desk** — three
nodes, one lane pair — so the campaign never implies that disinformation about substances
is a global industry rather than one rented service.

### 3.2 Four more desks revealed by the fourth batch (§6C)

| Desk | Codename | Cargo / function (fictional) | Seat(s) | Fallback node | Unlocked by |
|---|---|---|---|---|---|
| **D8 — CONVIDADO** | Guest | **Credential abuse**: delegation lanyards, sponsor-village wristbands and event accreditations rented to move cash, papers and containers under crowd noise. Contains no substance itself — it is the ring's *access-rental* service | Rio (Vila Aurora ↔ sponsor village), Dubai | Berlin, Istanbul | **ST-10** |
| **D9 — DESPEJE** | Clearing | **Land-clearance contracting for hire**: displacement of coastal farming and fishing communities so D1 can expand and so land titles can be re-issued. The campaign's violence thread in the Americas | Jungle camp inland from Playla Blanca | Cali corridor, Panama-free-zone paper office | **ST-12** |
| **D10 — KRYS** | Krystallis | **Settlement & scorekeeping**: shell-company layering, correspondent balances and the fictional ledger **KODER 9 ("The Back Bible")**. Money leg only — no real bank, canton or regulator is named | Sternberg (fictional canton), Zürich-district offices | Chiasso gate, Milan counsel | **ST-13** |
| **D11 — SILLÓN** | The Chair | **Governance-as-a-service**: a rotating chairmanship bought with the D10 settlement balance; the "thirty-third seat" that arbitrates between desks. Deliberately the *smallest* desk: one delegate, three nodes | Berlin (handover), Rotterdam ASPO annex | Odessa apron | **ST-15** |

Design value: D8 answers "how do they get through a crowd?", D9 answers "what did the drug leg
do to the people who live there?", D10 answers "where does the money settle?" and D11 answers
"who decides?" — four questions the first three batches raised but never paid off. **D11 exists
only once the player has done five other threads**, so the org chart never grows on a player who
is not ready for it.

### 3.3 Two more desks revealed by the fifth batch (§6D)

| Desk | Codename | Cargo / function (fictional) | Seat(s) | Fallback node | Unlocked by |
|---|---|---|---|---|---|
| **D12 — PUSTOY** | *Empty* | **Discrepancy-as-a-service**: a purchased silence on the vessel's own cargo-verification paperwork. The desk does not move goods — it buys *the twelve hours between what is loaded and what is reported*. Cars leave South America on paper as empty equipment; the truth arrives late, or never | Batumi/Poti freight consultancy (paper seat), MV *Kolport* (floating seat) | Valencia car terminal, Odessa apron | **ST-18** |
| **D13 — GRANICA** | *Borderline* | **Coverage-as-a-service**: pre-mapped gaps in surveillance and communications along road corridors, sold as a product and re-sold across oceans. The ring's answer to "how do you move a person through a monitored border without touching the monitoring?" — you don't; you buy the map of where nobody is looking | Antalya annex, Tijuana–Texas corridor desk | Berlin relay room, Istanbul sleeper | **ST-16** |

Design value: **D12** answers the question your fourth brief raised and no desk could hold —
*who makes the manifest lie?* Answer: a salaried officer on a feeder ship who files late, which
is far more realistic than a forger and gives the campaign its only villain who can be turned
with an apology. **D13** answers *how do people cross a surveilled border?* — by renting a hole
in coverage, a service that exists in every region on your board and therefore lets one desk
tie Batumi, the EU corridors and the Texas/Mexico border into a single thread.

**Desk count after this revision: thirteen (D1–D13).** D12 and D13 are deliberately *service*
desks rather than commodity desks: they sell time and geography, which is why closing them does
not remove any cargo from the board — it removes the ring's ability to move it unseen.

### 3.4 Sub-desks added by the fifth batch
**D12-VIGASZ** (the "second discrepancy list" kept by a terminal clerk in Valencia — ST-18),
**D13-ROAM** (the roaming-partner reseller layer, Antalya ↔ Delhi — ST-16/ST-17),
**D13-ANTLER** (the Golden Deer's contract desk: enforcement rented per city, never owned —
ST-17), **D2-LATEFILE** (the delay itself, treated as a distinct criminal act rather than a
side effect of D2 — ST-18). **Thirteen desks, twelve sub-desks.**

### 3.5 Sub-desks (named, not counted)
For writers who need an org chart, the threads attach these named sub-units to existing
desks instead of inventing new ones: **D4-VISA** (visa/sponsorship rotation, Phnom Penh —
ST-6), **D4-HOSTEL** (private detention-as-a-service, Białystok — ST-7; note La Firma is a
*tenant*, the landlord is a different group), **D1-GREENS** (produce-code packing, Almería —
ST-8), **D3-PARTS-COVER** (conference/furniture re-shelling, Incheon — ST-6). Fourth-batch
additions: **D4-FLOORSTOCK** (the Causeway Bay front's internal inventory spreadsheet — ST-9;
this is the ring's own dehumanising term and appears only in seized documents, quoted as
evidence), **D4-TWINS** (the decoy/face-archive programme — ST-11), **D3-TELE** (the BIG BOX
relay shelter, subcontracted — ST-12), **D4-RELATIVES** (the "kitchen support / relatives"
manifest classification — ST-14). This keeps the player's desk-closure progress legible:
**eleven desks, eight sub-desks, one clear list** *(before the fifth batch — now thirteen and
twelve, see §3.3/§3.4; the older count is kept here so writers can see what grew and when)*.

---

## 4. WORLD MAP — PORTS, LANES AND TRUCK HOT SPOTS

Board representation: each node is a `MapNode` object (see §8). Lanes have three
toggles the player can attack: **Sea Leg**, **Land Leg**, **Paper Leg** (documentation).
Cutting two of three closes a lane for a chapter.

### 4.1 Americas — source & first hop
| Node | Type | In-game function | Hero tie |
|---|---|---|---|
| Tumaco–Pasto coast (CO) | Source depot | Ch.1 tutorial grid: terraces, warehouse, river mouth | Blackhujus |
| Medellín aburradero (CO) | Scrap yard | Vehicle teardown mini-map; D2 intel | Merhujus |
| Lima / Callao (PE) | Port | Flower-stock consolidation; first container puzzle | Blackhujus |
| **Cartagena (CO)** | **Main port** | Act-1 hub; three lanes depart here; D4 boarding house | Mr. PING |
| Santa Marta (CO) | Feeder port | Optional raid; banana-cold-store terrain (peel tiles!) | Mr. PING |
| **Miami (US)** | Main port | Ch.3 boss (El Contable); Money-Laundering Bazaar | all |
| Boston (US) | Wash port | Cold-storage grids; witness-protection thread | Merhujus |
| New York (US) | Wash port | Broker district; info-market mechanic | Mr. PING |
| **Texas border crossing** | Land gate | Truck-yard tactical map; D4 extraction stage | Blackhujus |
| **California port zone** | Land/sea gate | Final Act-3 chase; car-carrier terminal | Mr. PING |
| **Mexicali (MX)** | Border node | Mirror of Texas; twin-map mission | Merhujus |
| Rio de Janeiro (BR) | South-Atlantic node | Feeder lane, favela vertical grid | Mr. PING |

### 4.2 Europe — wash & redistribution
| Node | Type | In-game function | Hero tie |
|---|---|---|---|
| **Rotterdam (NL)** | **Main port** | Act-2 hub; largest container-stack map (verticality) | Mr. PING |
| **Antwerp (BE)** | Main port | Diamond/electronics front companies; D3 paper war | Merhujus |
| Liverpool (UK) | Wash port | Warehouse rows, dock-crane hazards | Mr. PING |
| **Hull (UK)** | Wash port | Ro-Ro ferry terminal; time-limited escort map | Blackhujus |
| Cardiff (UK) | Wash port | Tideworks map; water tiles double cost (engine default) | Blackhujus |
| Hamburg (DE) | Feeder | Optional; D2 scrap-legitimation | Merhujus |
| **Berlin (DE)** | **Truck hot spot** | Motorway-ring HQ; safe-house social map | Merhujus |
| **Białystok (PL)** | **Truck hot spot** | Eastern-gate staging; the "grey zone" moral chapter | all |
| Paris (FR) | Hot spot | Periphery depot; surveillance-heavy grid | Mr. PING |
| **La Hangüera / Algeciras bay (ES)** | **Hot spot** | Strait-crossing chokepoint; ferry-clock mechanic | Blackhujus |
| South Coast Spain (Málaga/Almería strip) | Coastal node | Greenhouse-maze map (perceptual clutter) | Blackhujus |
| South Coast Turkey (Antalya/Mersin strip) | Coastal node | Mediterranean feeder; tourism-cover maps | Merhujus |
| Samsun / Egei coast (TR) | Coastal node | Bridge to Georgia–Black Sea lane | Mr. PING |
| **Odessa (UA)** | Port | Act-3 opener; damaged-quay hazard grid; D2 east exit | Halyna thread |

### 4.3 Asia-Pacific — return leg & new frontier
| Node | Type | In-game function | Hero tie |
|---|---|---|---|
| Dubai (AE) | Free-zone node | Re-export laundering market; "no questions" tariff mini-game | Merhujus |
| Mumbai / Nhava Sheva (IN) | Port | D3 assembly crates; monsoon terrain modifier | Blackhujus |
| **Bangkok / Chattogram–Mongla (Thailand / Bangladesh)** | Ports | D3 heart; motorcycle-parts empire; NGO hospital thread | Dr. Sirisom |
| Phnom Penh (Cambodia) | River port | D4 documentation centre; memory-clinic reveal | Mr. PING |
| **Sihanouville (Cambodia)** | Deep-water port | Act-4 hub; island-recruitment map | all |
| Ho Chi Minh City (VN) | Node | Workshop district; retrofit maps | Merhujus |
| **Da Nang (VN)** | Node | Central-Vietnam handover; beach/typhoon grid | Mr. PING |
| Hong Kong (HK) | Port | Financial layer; Chase-on-Peak finale terrain | Mr. PING |
| Tokyo (JP) | Terminal | Endgame retail-layer infiltration; neon alley grid | all |

### 4.4 Truck-parking hot spots (mechanical definition)
In-world these are called **"Platoons' Sleepers"**. Gameplay: a hot-spot map is a
grid where **truck tiles** are destructible/interactive obstacles, exhaust-steam
tiles give concealment (LOS break), and each hot spot has a **Rotation Clock** —
after round 6 a new patrol set spawns, forcing tempo. Named hot spots:
Białystok, Berlin, Rotterdam (outer ring), Paris, La Hangüera, Rio de Janeiro,
Cartagena (port apron), Texas border yard, California car-carrier yard, Mexicali.

### 4.5 New nodes added by the side-threads (§6B / §16)

| Node | Type | In-game function | Thread |
|---|---|---|---|
| **Moscow (RU)** | Source node | Retail-consignment warehouse; ST-3 opening grid (courtyard + loading bay) | ST-3 |
| **Małaszewicze (PL)** | Rail gate | Broad-gauge→standard-gauge transshipment terminal; "seal check" mini-system | ST-3 |
| **Warsaw (PL)** | Wash city | Broker district mirror of New York; safe-house with Celna | ST-3 |
| **London / Home Counties (UK)** | Enforcement seat | D6 head office; estate grids, CCTV-dense maps | ST-1 |
| **Manchester Trafford Park (UK)** | Industrial node | Container-pickup ambush map; canal tiles = water hazard | ST-2 |
| **Bristol Avonmouth (UK)** | Wash port | Third green-pickup site; tidal + crane hazards | ST-2 |
| **Lagos — Ikorodu/Ladipo (NG)** | Coastal node | ST-4 hub; lagoon stilt-grid, market crowd tiles | ST-4 |
| **Mombasa / Port Tudor (KE)** | Indian-Ocean port | ST-4 finale; dhow-harbour grid, coral shelf, monsoon clock | ST-4 |
| **Cali corridor (CO)** | Faith front | Curandera's shrine-house; non-combat interview map | ST-4 |
| **A2/E30 motorway chain (PL)** | Hot-spot chain | Four linked sleeper maps (Białystok apron → Łódź WZ → Poznań West → Świecko gate); Ghost State rules | ST-5 |
| **Pattaya Jomtien strip (TH)** | Coastal node | Penthouse vertical grid, pool/fog tiles, crowd units; the wrong-room chapter | ST-5 |
| **Bangkok Soi Lert (TH)** | City node | Clinic/apartment block; D7 seat; split-map boss half | ST-5 |
| **Siem Reap (KH)** | River/road node | Night-market Document Board; Neang's rotation origin | ST-6 |
| **Incheon (KR)** | Airport node | Convention-centre Social Stealth map; loading-bay crate | ST-6 |
| **Warsaw Mokotów (PL)** | Office node | Coworking high-rise; turnstiles/glass rooms; ST-3 Warsaw re-used as sequel map | ST-6 |
| **Białystok industrial park (PL)** | Detention site | Warehouse-interior Evidence-Only grid; cage rows, CCTV cones | ST-7 |
| **Playla Blanca apron (CO)** | Labour camp | Coastal excavation grid; sand/trench tiles, heat clock | ST-7 |
| **Rotterdam ASPO hearing room (NL)** | Courtroom | Non-combat Cross-Examination Duel + parallel harbour map | ST-7 |
| **Almería packing shed (ES)** | Source depot | Glasshouse maze + cold-chain lane timer | ST-8 |
| **Laem Chabang / Chonburi (TH)** | Port | Thai packing plant; ST-8 finale half, three-team control | ST-8 |

New named truck hot spots (same §4.4 rules): **Małaszewicze rail apron**, **Lagos–Badagry
line**, **Mombasa Kilindini road**, **Hull–Merseyside park (D6 courier stop)**, **Łódź WZ
service area**, **Poznań West sleepers**, **Świecko border gate** (all ST-5).

**Node/lane totals after this revision:** 42 + 13 = **55 nodes**, 32 + 13 = **45 lanes**.
Desks: D1–D4 core, D5 CIELO, D6 MERCURIO, **D7 NIEBLA** (added below).

### 4.5b Nodes added by the fourth batch (§6C / ST-9 … ST-15)

| Node | Type | In-game function | Thread |
|---|---|---|---|
| **Hong Kong — Causeway Bay front (HK)** | Vertical tower | 15-storey rescue grid; lift/stair routes, per-floor CCTV cones, Floor Ledger puzzle | ST-9 |
| **Kowloon safehouse + Labour Dept (HK)** | Interview node | Consent Meter mission with zero hostile units; "Still Inside" list source | ST-9 |
| **Victoria Peak transfer point (HK)** | Rooftop boss map | Wind/glass tiles, Contract Burn escrow objective | ST-9 |
| **Vila Aurora (BR, fictional hillside)** | Neighbourhood map | Residents' council, church hall, pitch, moto-taxi union; civic-request objectives | ST-10 |
| **Rio sponsor village / Sambódromo backstage (BR)** | Crowd node | Parade tiles that move the map; Badge Table; Noise Cover rounds | ST-10 |
| **Marina da Glória yacht cluster (BR)** | Water node | Boarding-ramp tiles, reefer barge; ST-13's counterparty is found here | ST-10 |
| **San José — Barrio México market (CR)** | Daytime crowd node | Public Attention meter, `detainsOnly` collection van, bus-station tiles | ST-11 |
| **Escazú clinic (CR)** | Non-combat node | Health-outreach interview grid; Consent Meter reuse | ST-11 |
| **Moín / Puerto Limón dockside (CR)** | Dock node | Banana cranes, rain-slick tiles, tidal cut-off; Face Archive raid | ST-11 |
| **Jungle camp inland from Playla Blanca (CO)** | Terrain node | Silence Ring zone field, mud/river/canopy tiles — the campaign's only true jungle map | ST-12 |
| **Nariño–Chocó coast councils (CO)** | Community node | Land-title archive, testimony collection, restitution track | ST-12 |
| **BIG BOX shelter (CO)** | Objective tile-set | Capturable zone-denial structure; described as freight+relay, never as a gadget spec | ST-12 |
| **Sternberg branch (fictional canton, CH)** | Vault node | Evidence-Only register run; Copy Budget decision | ST-13 |
| **Zürich-district offices + deposit-box corridor (CH)** | Office node | KYC Gauntlet dialogue system; Social Stealth reuse | ST-13 |
| **Chiasso road gate (CH/IT)** | Gate/hot-spot | Hot-spot rotation rules on a Alpine road gate; rail lane to Lugano district | ST-13 |
| **Lugano-district shell offices (fictional, CH)** | Paper node | Beneficial Ownership Chain graph puzzle | ST-13 |
| **Chattogram–Mongla reefer apron + Dhaka air gate (BD)** | Crane-lane node | INTERPRET gating, "relatives" manifest hunt, heat clock | ST-14 |
| **Garment factory floor, Chattogram (BD)** | Workplace node | Rani Dasgupta's wage dispute; lawful-leverage ally recruitment | ST-14 |
| **Callao market + La Libertad shed (PE)** | Coastal node | Four Languages Three Rooms positioning puzzle | ST-14 |
| **Antwerp paper-war annex + Liverpool warehouse (BE/UK)** | Filing node | Visibility Filing; permanent Re-Shipped list | ST-14 |
| **Berlin handover lounge (DE)** | Non-combat node | Seating Puzzle knowledge check; Objective Fork | ST-15 |
| **Istanbul sleeper annex (TR)** | Hot-spot chain | Ghost State link between Dubai and Berlin legs | ST-15 |
| **Rotterdam ASPO annex (NL)** | Courtroom sequel | Card Boss + Process Boss combined; Disclosure Clock finish | ST-13 / ST-15 |

New named truck hot spots (same §4.4 rules): **Chiasso gate**, **Playla Blanca → Tumaco logging
track** (ST-12), **Rio Transoeste festival shuttle lane** (ST-10), **Moín banana-road apron**
(ST-11), **Dubai → Istanbul delegation sleeper** and **Istanbul → Berlin sleeper** (ST-15).

**Node/lane totals after this revision:** 55 + 14 = **69 nodes**, 45 + 14 = **59 lanes**.
Desks: D1–D4 core, D5 CIELO, D6 MERCURIO, D7 NIEBLA, **D8 CONVIDADO, D9 DESPEJE, D10 KRYS,
D11 SILLÓN** (§3.2). Sub-desks: eight (§3.5). *(Superseded by §4.5c — see below.)*

### 4.5c Nodes added by the fifth batch (§6D / ST-16 … ST-18)

| Node | Type | In-game function | Thread |
|---|---|---|---|
| **Batumi — New Boulevard front (GE)** | Seaside crowd node | The thread's opening map: hotel signage, beach-bar sightlines, a cable-car line that only goes *up*. `watchOnly` tail units; Neutral-Crowd rules reused from ST-4 | ST-16 |
| **Batumi harbour post + ferry apron (GE)** | Gate node | Lieutenant Kvirikashvili's lawful gate; you cannot leave the city with Zaza until her paperwork is satisfied — an Evidence-Only objective | ST-16 |
| **Poti freight yard (GE)** | Rail/road intermodal node | D12's paper seat: the container-invoice trail that proves the "empty" boxes were never empty | ST-16 / ST-18 |
| **Black Sea feeder anchor (off Batumi)** | Water node | Ship-to-shore boarding tiles; the only map where the heroes meet Rudenko face to face | ST-18 |
| **Tbilisi relay room (GE)** | Safe-house/interview node | Archive-hand-off grid; Sopiko's two drives and the "do not read it" condition | ST-16 |
| **Antalya annex (TR)** | Hot-spot office | D13's western seat: sells the Coverage Map as a product; Social Stealth reuse | ST-16 |
| **Texas corridor — Laredo/Del Rio yard (US/MX)** | Truck hot spot | The re-sold map applied: Ghost State + Rotation Clock on a border corridor; `noDetentionOfCivilians` hard rule | ST-16 |
| **Tijuana yard (MX, mirror of Texas)** | Truck hot spot | Proves the same product is sold on both coasts; the player recognises one dealer's handwriting in two countries | ST-16 |
| **Da Nang — beach-road guesthouse cluster (VN)** | Low-rise node | First Golden Deer appearance; rooftop tiles, laundry-line cover, `delegationUnit` journalist escort | ST-17 |
| **Zhuhai — portside wholesale mall (CN)** | Indoor crowd node | Second appearance, same three faces: Cross-Match Board puzzle (ST-10 Badge Table reuse) | ST-17 |
| **Delhi — Okhla courier depot (IN)** | Depot node | Third appearance; parcel-flow tiles, `detainsOnly` crew, the crew's escrow ledger found here | ST-17 |
| **MV *Kolport* — deck plan (sea)** | Ship node (the campaign's first) | Four decks, hatch/stair tiles, CCTV cones, a Manifest Room objective tile. The ship is *not* a level to raid — it is a place to get documents lawfully aboard during a port call | ST-18 |
| **Valencia car terminal (ES)** | RoRo/terminal node | Where "empty" containers arrive full; the D12-VIGASZ second list; Marina Talypova's office (non-combat) | ST-18 |
| **Cardiff/Hull reefer wash bay (UK)** | Cold-store node | Reuses ST-2 pickup grammar: the same green-powder pallets now carry the falsified weight tickets | ST-18 |
| **Kochi auditor's office (IN)** | Interview node | Auditor Raghunathan's lawful-record-access grid; unlocks VDS-style inspection as a *mechanic*, never as a tutorial | ST-18 |

New named truck hot spots (same §4.4 rules): **Batumi–Poti highway sleeper**, **Laredo north
yard**, **Tijuana east yard**, **Delhi Okhla night apron**, **Valencia terminal gate queue**.

**Node/lane totals after the fifth batch:** 69 + 15 = **84 nodes**, 59 + 15 = **74 lanes**.
Desks: **thirteen** (D1–D13, §3.3). Sub-desks: **twelve** (§3.4/§3.5).

**Board note:** Moscow and Mombasa are deliberately *outside* the original spine — they
prove to the player that La Firma rents capacity from other networks rather than owning
every lane. That is the campaign's strategic lesson. The fourth batch pushes it further:
Hong Kong, Switzerland and Costa Rica are all **rented services** (access, money, faces),
which is why the final act is about governance rather than cargo. **The fifth batch closes
the argument**: the Black Sea coast (Batumi/Poti), the Gulf Coast of Spain (Valencia), the
Pearl River delta (Zhuhai), central Vietnam, the Delhi plain and the US–Mexico corridor are
one *service catalogue* — coverage, timing and enforcement for rent. A player who finishes
ST-16/ST-17/ST-18 should be able to say the campaign's thesis out loud: **"the ring does not
own routes, it owns gaps."**

---

## 5. DRUG THREAD — HANDLED AS A GAME SYSTEM, NOT A RECIPE

The scene requires "green, low-potency mountain powder" and "Colombian/Peruvian
flower-based memory-loss product". Design goals: thematically present, mechanically
interesting, operationally empty.

### 5.1 The two fictional substances
| Fictional item | What it is in-fiction | What it does in gameplay |
|---|---|---|
| **VERDE POLVO / "Green Mountain Powder"** | Unrefined, deliberately low-concentration plant alkaloid stock — worthless until refined, therefore shipped openly as "agricultural mineral supplement" in declared fertilizer sacks | Board-level only: it is the *traceable* commodity. Its low potency is the plot reason La Firma must control refiners, which creates the Ch.2 negotiation objectives. No processing detail exists in the game. |
| **FLOR DEL OLVIDO / "Flower of Forgetting"** | A fictional derived product marketed inside the ring as a "compliance additive": victims and low-level couriers are given a dose that produces short-term amnesia. It is the campaign's central horror and its emotional engine. | Applies the **Forgetful** status to units (see 5.2). Never usable by the player except as a story consequence. |

### 5.2 Memory-loss as a *memory system* (the campaign's signature mechanic)
This is the design payoff: the drugs are not loot, they are a **narrative-state
mechanic** that literally erases part of the player's own chronicle.

**Status: FORGETFUL (hero, 1–3 rounds)**
- The affected hero loses access to one randomly chosen ability for its duration
  (icon greys out, tooltip reads "…what was I doing?").
- That hero cannot gain traits this round.
- Immunity after the first encounter of each chapter (represents the medic thread).

**Status: GAP (chronicle-level, persists across chapters)**
- When a hero leaves an encounter Forgetful, one previously written chronicle entry
  (trait text, an event line, or one intel token) is **archived away**: it disappears
  from the codex and from the epilogue print-out.
- Recovering a GAP requires spending 1 Intel token at a Safe House node and passing a
  `MEMORY CHECK` (§7).
- If a hero finishes the campaign with ≥3 GAPs, their epilogue becomes
  **"The Blank Page"** — the chronicle cannot state what they did, and the crew's
  Trust floor drops to 40%.

**Design intent:** players feel the ring's cruelty as a *loss of their own story*,
which is far stronger than any damage number. It also makes Dr. Sirisom's clinics and
the dashcam archive genuinely valuable resources.

### 5.3 Hard content guardrails (implement verbatim)
1. Zero synthesis, extraction, dosing, cultivation, packaging or "cutting" text.
2. No real brand names of chemicals, medicines or precursors; use the fictional
   terms above only.
3. Victims are never shown consuming anything; effects are conveyed via UI/status
   icons and dialogue aftermath.
4. Include an in-game help entry: "If you or someone you know is being trafficked,
   contact your national helpline" — plus a link placeholder filled per locale at
   release (this keeps the shipping checklist honest instead of inventing numbers).

---

## 6. ACTS, CHAPTERS AND MISSIONS

Six acts, 22 missions. Format per mission: **Objective · Grid gimmick · Twist ·
Trust swing**.

### ACT I — VERDE (source, Cartagena) — M1–M4
- **M1 "Terrace 12" (Tumaco coast).** Objective: recover a missing loader crew.
  Gimmick: slope tiles, rain = −1 move. Twist: the loaders were hidden by the village.
  Trust ±0 (tutorial choice).
- **M2 "Callao Manifest".** Objective: photograph D1's outbound stack. Gimmick:
  patrol rotation clock. Twist: Merhujus recognises her own paperwork. `Two Ledgers`.
- **M3 "Banana Cold Store" (Santa Marta).** Objective: free 6 civilians from a reefer.
  Gimmick: cold tiles (water/peel synergy), blackout rounds. Twist: one civilian is
  a planted informant. Trust −10 if exposed.
- **M4 "Cartagena Apron" (chapter boss).** Objective: cut D4's Sea Leg. Gimmick:
  crane-drop tiles, pier collapse. Twist: Rosa Vacca escapes wearing Blackhujus's
  old foreman badge → `Manifest Guilt` becomes permanent unless M12 resolves it.

### ACT II — HIERRO (stolen cars & scrap) — M5–M8
- **M5 "Aburradero" (Medellín).** Objective: tag 3 VIN-swap sites. Gimmick: crate
  maze, LOS-blocking scrap walls. Twist: Biały's brother is on the payroll.
- **M6 "Texas Yard".** Objective: stop a platoon rolling north. Gimmick: sleeper-yard
  rules (§4.4), steam concealment. Twist: the trucks carry people, not cars → D4/D2
  merge revealed. Major Trust fork.
- **M7 "Rotterdam Stack" (hub).** Objective: infiltrate the terminal ops deck.
  Gimmick: 3-tier vertical container map, `Hatch Run` showcase. Twist: the ASEPO
  liaison is embedded in the wrong team.
- **M8 "Antwerp Paper War".** Objective: flip two front companies. Gimmick: no combat
  variant — pure intel duel using the Skill-Check table (§7). Failure = GAP on
  Merhujus.

### ACT III — FLOR (memory product) — M9–M12
- **M9 "Almería Glasshouses".** Objective: find the adulteration lab door (exterior
  only; interior is off-screen). Gimmick: reflective fog tiles, mirrored patrols.
- **M10 "Málaga Berth".** Objective: rescue a coerced pharmacist witness. Gimmick:
  timed embarkation. Twist: she is already Forgetful — the GAP system enters.
- **M11 "Clinic 4" (Phnom Penh).** Objective: protect Dr. Sirisom's patient list.
  Gimmick: civilian units you must not let die (−12 Trust each, engine default).
- **M12 "Blackout Round" (mid-campaign).** Objective: survive 8 rounds in a
  power-cut yard. Gimmick: every hero starts with FORGETFUL; ability recovery is the
  win condition. Resolves or locks `Manifest Guilt`.

### ACT IV — CARGA VIVA (people) — M13–M16
- **M13 "Hull Ro-Ro".** Objective: delay a sailing by 6 rounds. Gimmick: ship-deck
  tilt tiles, moving vessel (offset grid shift each round).
- **M14 "Cardiff Tidal".** Objective: extract survivors at low tide. Gimmick: water
  cost doubles each pair of rounds (tide clock).
- **M15 "Boston Cold Row".** Objective: identify victims from partial records.
  Gimmick: intel-token matching mini-system; heavy narrative, light combat.
- **M16 "Sihanouville Island" (hub boss).** Objective: seize D4's ledger room.
  Gimmick: two-island map, boat-tile logistics. Twist: El Contable's ledger is a
  decoy; the real one is Merhujus's dashcam.

### ACT V — MOTORIZADO (weapons-in-parts) — M17–M19
- **M17 "Chattogram Crane Lane".** Objective: intercept a parts convoy. Gimmick:
  suspended-load hazard tiles.
- **M18 "Da Nang Retrofit".** Objective: locate the crate-weight tolerance scheme
  (paper-only depiction). Gimmick: dual-team play, split hero control.
- **M19 "Hong Kong Peak Chase".** Objective: tail, don't fight. Gimmick: pure
  pursuit grid, neon LOS tricks, non-lethal scoring.

### ACT VI — LA FIRMA (endgame) — M20–M22
- **M20 "Odessa Quay".** Objective: force the desks into one room. Gimmick: rubble
  terrain, winter clock.
- **M21 "Berlin Interchange".** Objective: choose the hand-off package. Gimmick:
  three simultaneous sub-grids, pick two to run.
- **M22 "Tokyo Terminal" (final).** Objective: end La Firma. Three endings determined
  by Trust + GAP count + who holds the dashcam:
  - **Witnesses** (Trust ≥70, ≤1 GAP): testimony accepted, crew lives under new names.
  - **Ghosts** (Trust 30–69 or 2–4 GAPs): ring dismantled, crew erased from records —
    chronicle prints blank pages on purpose.
  - **The Fourth Desk** (Trust <30 or ≥5 GAPs or player sold the ledger): the crew
    replaces La Firma; epilogue shows the same ports with new owners. Dark ending,
    unlocked deliberately, not punished.

### ACT VI-B — THE LEDGER WARS (fourth-batch finale, requires ST-15) — M23–M24
Only reachable when **≥5 of ST-9…ST-14 are closed**. The campaign's last two missions move
the win condition from *cargo* to *governance*, which is the whole thesis of Campaign 2.

- **M23 "Thirty-Third Seat" (Berlin handover lounge → Istanbul sleeper).** Objective: name the
  chair correctly using only documents you already own. Gimmick: **Seating Puzzle** (§7) — a
  knowledge check across every thread; wrong guesses do not fail the mission, they *reduce*
  which endings are reachable, and the UI says so before you commit. Twist: three valid answers
  exist (Rosa Vacca, Halyna Voronenko, an empty chair) and each one is a different campaign
  argument about what "dismantling a ring" even means.
- **M24 "Empty Chair" (Rotterdam ASPO annex ↔ Odessa apron, final split).** Objective: install
  the successor the *witnesses* accept. Gimmick: **Governance Win Condition** — four-team
  control plus Card Boss + Process Boss in parallel; no HP bars anywhere in the mission.
  Sixth ending determined by `chairOwner`, Trust ≥75, `floorStockResolved ≥8`, ≥12 testimonies,
  KODER 9 disclosed and zero GAPs:
  - **The Empty Chair**: no successor is named; ports pass to cooperatives and port-watch
    partners; the chronicle ends mid-sentence because nobody is left who may sign anything.
  Failing any single condition routes back to Witnesses / Honest Road / Long Memory as normal —
  nothing is ever locked out hard, only traded.

### ACT VII — THE GAP TRADE (fifth-batch finale, requires ST-16…ST-18) — M25–M26
Reachable when **≥2 of ST-16, ST-17, ST-18 are closed** (`gapTradeUnlocked`). This act exists to
convert the campaign's thesis into a playable position: the ring does not own routes, it owns
*gaps* — in coverage, in timing, in who is willing to be on the record.

- **M25 "Four Employers, One Invoice" (Laredo north yard ↔ Antalya annex ↔ Batumi boulevard,
  three-shell control).** Objective: close D13 GRANICA by proving one product was sold on three
  continents under one invoice prefix. Gimmick: **Cross-Match Board + Tail Counter combined** —
  the tail units from S16-1 reappear as *witnesses* to each other, and the player must stage the
  same tail-on-tail meeting simultaneously on two maps. No damage is available anywhere in this
  mission; the only failing state is `coverageMapFragments < 4`. Twist: Arslan testifies freely.
  He has never been arrested because what he sells is coverage, and the game prints that line
  verbatim in the debrief rather than explaining it away.
- **M26 "Twelve Hours, Twelve Names" (MV *Kolport* manifest room ↔ Rotterdam ASPO annex, final
  split).** Objective: file before the window closes. Gimmick: **Discrepancy Window + Governance
  Win Condition in parallel** — the ship half runs on `lateFilingHours` (FILE ON TIME ×3), the
  court half runs on testimony count; both halves share one round clock and neither can be won
  alone. Seventh ending determined by `rudenkoTurned && zazaAlive && deerReleased`:
  - **The Early Filing**: nobody is beaten. A captain files on time, a journalist publishes, a
    crew's retainer expires, and the Valencia lane stalls on its own paperwork. The chronicle's
    last page is a port-authority receipt with a timestamp.
  Failing any condition routes back through Empty Chair / Witnesses / Honest Road as normal.

---

## 6B. SIDE-THREADS ST-1 … ST-8 (expansion scenarios)

Eight optional-but-consequential threads — four from the second brief, four from the third.
Each is **3 missions + 1 boss**, playable in any order after Act II begins, and each
permanently alters the endgame (§6B.5). Format as before: **Objective · Grid gimmick ·
Twist · Trust swing**. Threads ST-5…ST-8 are written to the same production template; their
full dossiers (voice rules, cut-scenes, art/audio beats) live in §16A–§16C. A **seventh batch
of dossiers for ST-9…ST-15 lives in §16D**, and those threads themselves in **§6C**.

### Guardrails that apply to all eight threads (implement verbatim)
1. **No operational detail.** No method of tampering a seal, opening a container,
   forging a document, dosing a person, or evading police is ever described. All such
   beats resolve through §7 skill checks and board toggles.
2. **No real brand names as contraband labels.** "DIOR/CHANEL" become the fictional
   maison **MAISON CÉLISME** (see §14.1). Cosmetic *goods* are legitimate cargo; the
   horror is what is hidden among them, not the goods themselves.
3. **Heroin is never manufactured, priced, cut, injected or used on screen.** In this
   campaign it exists only as an off-board commodity that the ring's money flows around;
   the game shows consequences (addicted NPCs treated with dignity at clinics), never
   technique. See §5.3, extended by §16.0.
4. **Ethnicity/nationality of hit-men is background, never a mechanic.** Enemies are
   identified by their *contract*, not their origin; dialogue must never attribute
   criminality to a nation. This is a hard localisation-review gate (§16.6).
5. **Assassination is off-screen or non-lethal.** The player can *prevent* a killing
   (win condition) or arrive *after* one (narrative consequence). The game never lets
   the player perform a contract killing; heroes' attacks remain the existing cartoon
   melee/ranged set (Machete Slash = stun-flavoured, Zap Blaster = non-lethal taser).
6. **Religion is a cover story, not a target.** D5/Cielo satirises *fraudulent
   intermediaries*, never believers; pilgrimage communities are allies who refuse the
   ring's offer (§16.5).
7. **No chemical or toxicological detail — ever.** ST-5's "gas attack" is a fictional
   aerosol (**NIEBLA DULCE**) described only by its *symptoms on a game token*
   (`forgetful`, `dazed`) and by the fact that it is stolen from an industrial wash line.
   No formula, no precursor, no dispersal method, no dose, no antidote recipe, no real
   agent name. If a writer needs a technical sentence, they must instead write a Codex
   card that says "the lab report is sealed pending prosecution". Hard gate G5 (§16.5).
8. **No supernatural mechanic presented as real.** ST-5's "turned into women" beat is
   **in-world disinformation plus a perceptual debuff** (`fae-sight`): enemies mis-read
   male heroes as female targets, i.e. the *player* loses targeting reliability while the
   fiction claims enchantment. The truth is always recoverable through ARCHIVE checks and
   is stated plainly in the epilogue. Same rule as ST-4's faith freight: the game may show
   what people *believe*, never endorse it as physics.
9. **Sex work is never a joke, a slur, or a costume gag.** ST-6 uses the real, legal
   Polish-language term *kobieta do towarzystwa* ("woman for company") as an in-world HR
   document title, and every dancer NPC is a contract professional with agency, pay
   disputes and union contacts. No nudity, no client dialogue, no brothel maps; venues are
   dance studios, hotel ballrooms and conference foyers. Opt-out toggle at §13.
10. **Torture and mutilation are off-screen, aftermath-only, and never interactive.**
    ST-7 opens on a crime scene the player reads (existing silhouette/personal-object
    convention), and the whole thread exists to make the player *undo* it. No finger-,
    eye- or wound close-ups; no interrogation minigame where the player can hurt anyone.
    Any enemy suggestion of violence toward a captive ends the encounter in failure.
11. **Real places stay innocent; only the fictional ring uses them.** Playla Blanca is
    written as a *fictional apron district* of Cartagena whose real-life counterpart is a
    working-class neighbourhood of fishermen and market traders, represented by named NPCs
    with lawful options (§16B.4).

---

### ST-1 — "MERCURY BLOOD" / *El Hermano* (Merhujus's brother)
**Your brief:** *"MERHUJUS's brother is a Euro sicario riding with Mercurius in the UK,
selling heroin and killing people who report crime to police."*

**Logline:** Merhujus's half-brother **Julián "Mercurio" Ocampo** runs La Firma's
enforcement desk out of the UK wash ports. He does not move product — he moves *fear*:
he collects debts, works as a hired gun for other groups, and his signature job is
**burning witnesses**: anyone who reports a crime to a police station gets a visit.
The thread is a hunt for the **Witness Ledger** — a phone containing the list of people
Mercurio has already marked.

**Why it works structurally:** Mercurio is the mirror of the crew. He also grew up in the
Cali corridor, also uses forged papers, also refuses to look at the D4 manifests — but he
chose the paid-gun life. Their confrontations are dialogue-driven, not grudge-driven.

| Mission | Setting | Objective · Gimmick · Twist · Trust |
|---|---|---|
| **S1-1 "Reporting Office"** | Hull police-station forecourt + dock grid | Protect a shopkeeper who filed a statement. Gimmick: **civilian units you cannot move**; Mercurio's cell sends two "couriers" who only enter the map if the player used lethal force last battle (`HEAT` gate). Twist: the statement was filed against *Mr. PING's* crew, not the ring. Trust −8/+6 depending on whether you admit it. |
| **S1-2 "Ledger Phone"** | London estate, three floors, CCTV cones | Recover the Witness Ledger before it is wiped. Gimmick: **CCTV cone tiles** — being seen raises HEAT by 4 instantly; stealth variant available (no kills required to finish). Twist: the ledger lists Merhujus. She may delete her own line (Trust −10, keeps `brotherAlive`) or keep it (unlock S1-3 bonus). |
| **S1-3 "Two Brothers"** | Cardiff Tiddal marsh, mud tiles (move −1) | Confrontation. Objective: extract Mercurio's *client list* while he tries to escape. Gimmick: 1v1 duelling tile — the engine's flank rule applies; Blackhujus/Mr. PING must hold off his guards, only Merhujus may engage him. Twist: he surrenders to Sgt. Nkemdirim rather than to the crew — arrest, not execution. |
| **S1-B "Mercurius Yard"** (boss) | Berlin motorway ring, truck sleeper rules | Stop the hand-off that funds the next quarter of enforcement. Boss adds **MARKED** status (see §8.1) to one hero each round: that hero becomes the preferred target of every enemy until a teammate breaks line of sight. Win = cut D6's Paper Leg. |

**New systems introduced:** `MARKED` status; **Witness Protection** objective type
(defend, don't kill); **Client List** intel asset that unlocks a free TRACE check per act.
**Epilogue effect:** clearing D6 removes up to 4 civilian deaths from the ending text;
leaving Mercurio alive adds a Red Notice cameo (INTERPOL framing, §9.2) instead.

---

### ST-2 — "NINEVEH RUN" / *Trzech z Niniwy* (the three Cambodian… wait — read the note)
**Your brief:** *"three Cambodian sicarios in UK killing few SHREK enemies, picking up
green powder from ocean containers in Cardiff and Liverpool, chasing a blogger across the
UK."*

**⚠️ Design correction (important):** your brief mixes two unrelated nationalities. A
"Cambodian sicario operating in UK wash ports" makes no logistical sense — Cambodia sits
on the *far* end of the board (D3/D4 nodes Phnom Penh/Sihanouville), while Cardiff/Liverpool
are the *northern wash*. Two clean options, both implemented below:
- **(a) Recommended — "THE NINEVEH THREE":** three Assyrian-Iraqi brothers raised in
  Birmingham, hired as a travelling enforcement trio. Plausible locally, keeps the
  "three-man team" beat, and separates ethnicity from nationality confusion.
- **(b) Alternative — "THE KHMER THREE":** three *Cambodian* enforcers who came to the UK
  as **D4 trafficking victims**, were recruited out of a Hull hostel, and are therefore
  *also victims*. This is the stronger moral version and I wrote it as the **S2-3 branch**
  so you get both without choosing yet.
- **"SHREK enemies"** is interpreted as the in-game slang **SZKŁO / "Glass"** — *snitches*
  (from Polish *szkło*, glass-mouth). Rename to **"the Glass List"** in UI: the people due
  to testify. Never use a real film/franchise name (trademark risk).

**Logline:** a three-man contract team works the northern wash ports. They collect
VERDE POLVO sacks from arriving containers, then work the **Glass List** — anyone scheduled
to testify. Meanwhile a small-time UK logistics vlogger, **"Dockside Dan" Adeyemi**, films
their pickups for views and becomes the most-wanted witness in Europe.

| Mission | Setting | Objective · Gimmick · Twist · Trust |
|---|---|---|
| **S2-1 "Tideworks Pickup"** | Cardiff, water tiles double cost + tide clock | Observe a container pickup, photograph the sack markings. Gimmick: **player must NOT interfere** — intervening triggers an instant GAP on Mr. PING (they see his face). Twist: the sacks are stamped with *D1's* green trim, proving the Andes source reaches UK soil directly — first **PATTERN** check unlocked early. |
| **S2-2 "Glass List"** | Liverpool warehouse rows + dock-crane hazards | Get to the next name on the list before the trio does: a former reefer stowaway willing to testify in Boston. Gimmick: **race timer** (12 rounds, no reinforcement spawns — pure positioning). Twist: they arrive first and *leave her alive* because she is a paying client's aunt — criminals have ethics-of-convenience too; this complicates the player's mental model. |
| **S2-3 "Blogger Roadshow"** (chase arc) | Multi-map pursuit: Hull → M18/M62 motorway hot spots → Manchester Trafford Park → Bristol Avonmouth → London | Extract Dockside Dan before the trio silences him. Gimmick: **four linked grids in one session**; each map costs 1 Intel token to skip; the vlogger's own uploads give the player free TRACE results (his footage = public-source intelligence, a nod to OSINT practice). Twist (branch b): the trio are Khmer ex-victims; if the player rescued ≥3 D4 civilians earlier, they stand down and name El Contable. Otherwise it's a fight. |
| **S2-B "Nineveh Yard"** (boss) | Trafford Park, canal water tiles, steam from refrigeration units | Break the trio. Gimmick: **linked-health enemies** — the three share a Morale pool; isolating them (Blackhujus peel traps, chokepoints) makes them surrender faster than damaging them. Non-lethal win condition: pin all three for 2 rounds. |

**New systems:** **Publications feed** (Dan's uploads = free intel tokens, capped 1/chapter);
**Race Timer** mission type; **Linked Morale** enemy group AI.
**Content note:** the trio's violence is shown as aftermath + dread, never as spectacle.
Their "kill count" lives in a single numbered list in the Codex, which the player shortens
by succeeding.

---

### ST-3 — "SEALED FOR THE MAISON" / *PIĘĆ TWARZY* (cosmetics that carry passengers)
**Your brief:** *"MR PING stealing DIOR/CHANEL cosmetics from Moscow and delivering to the
Poland/East-EU border — but instead of cosmetics there are Iranian and East-Asian
assassins."*

**Logline:** Mr. PING is hired (as Kontener) to lift a consignment of luxury cosmetic
sets from a Moscow bonded warehouse and run it to the **Małaszewicze** rail gate on the
Belarus/Poland border. Sealed retail cartons are perfect cargo: light, high-value,
unexamined. When he opens one at the border to check for damage, the carton holds
**five folded human beings' travel documents, five passports and five sealed "guest
kits"** — and the buyers arrive early. The consignment was never cosmetics: it moved
**people** — five contract operatives, two from Iran's shadow market, three from
East-Asian syndicate desks, all *sold onward* by La Firma as a service. Nobody inside the
ring knew. That is the horror: **the heroes just delivered a murder team across a border.**

**Design intent:** this thread converts your premise into the campaign's central mystery —
*who is really buying whom?* It also gives Mr. PING his lowest point and his best chance
at redemption.

| Mission | Setting | Objective · Gimmick · Twist · Trust |
|---|---|---|
| **S3-1 "Bonded Row" (Moscow)** | Courtyard + loading bay, winter clock (−1 move, ice tiles) | Lift the Maison Célysme pallets. Gimmick: **inventory puzzle** — carry exactly 3 of 6 crates; wrong count fails the manifest and raises HEAT +10. Purely a smuggling-of-*goods* caper, played for style. Twist: Viktor Tolkach hands him a second, unlisted carton "as a favour". Player choice: accept (+1 Intel, sets `sealedCarton=true`) or refuse (thread still happens via a switched label — foreshadowing that the heroes have no real control). |
| **S3-2 "The Long Run"** | Highway chain: Smolensk→Warsaw road tiles, platoon sleepers, Rotation Clock | Drive the load to Małaszewicze without inspection. Gimmick: **road-grid escort** — trucks as moving cover, checkpoints resolved with §7 ARCHIVE/PAPER checks (never with real evasion advice). Twist: Celna calls Merhujus on an open line: *"your seal numbers are printed twice."* |
| **S3-3 "Gate 4" (Małaszewicze)** | Rail apron, gauge-change bogie maze, floodlight LOS | Discover what the carton holds. Gimmick: **reveal map** — fog lifts square by square as the player spends Intel; the final square reveals five passports with fresh visas. Objective flips mid-mission from *deliver* to *contain*: stop the five leaving the terminal. Twist: the operatives are already gone; the crew's paperwork opened the door. Big Trust −12 and one permanent GAP on Mr. PING (`sealedCarton`). |
| **S3-B "Guest Kit" (boss)** | Warsaw safe-house, mirrored ballroom, glass tiles (destructible, LOS break) | Hunt the five down before a signing ceremony where Prosecutor Sarkar attends. Gimmick: **five elite enemies, each immune to one hero's ability** — forces the player to swap targets and use Patch Up/Documented properly. Non-lethal requirement: capture ≥4 to keep the Witnesses ending reachable. |

**New systems:** **Seal Integrity** mini-state (paper-only: seal numbers vs. manifest
numbers, resolved with checks); **Checkpoint** encounter type; **Switched Objective**
mission template (mid-battle goal change — reuse existing turn loop with a flag).
**Board effect:** closes the Moscow→Małaszewicze lane's *Paper Leg* only; the Sea Leg stays
open, teaching the player that cutting paper ≠ cutting flow.

---

### ST-4 — "WHITE ROAD" / *LA RUTA BLANCA* (faith cargo to Mombasa)
**Your brief:** *"white magic from Colombia transported through Nigeria to the Port of
Mombasa by BLACKHUJUS."*

**Translation into game language:** no magic exists in this world, and no substance is
moved here. What Blackhujus carries is **"spiritual freight"** — the ring's D5 *Cielo*
desk: votive statues, anointed oil, pilgrim bookings, relics, blessed-salt candles and
suitcases of undeclared cash, shipped as religious consignments because nobody opens a
crate destined for a church. The player's job is to prove that a *honest-looking* white
cargo is the ring's financial spine, and to stop it turning into a **people-moving**
scheme dressed as a pilgrimage.

**Route:** Cali corridor (shrine-house) → Cartagena (apron) → **Lagos, Ikorodu/Ladipo**
(faith-market hub, transshipment) → **Mombasa / Port Tudor** (dhow harbour, Indian Ocean
leg toward Dubai and Bangkok). Blackhujus is the escort — his Green Ledger passive is the
only way to read the crate markings.

| Mission | Setting | Objective · Gimmick · Twist · Trust |
|---|---|---|
| **S4-1 "Shrine House" (Cali corridor)** | Non-combat interview map, candle-light tiles | Learn what Belkys Duarte actually books. Gimmick: **dialogue-only**; PORT TALK and COLD READ checks decide the info you leave with. Zero combat, deliberately — the campaign needs a breathing chapter. Twist: she knows Blackhujus's sister; the clinic his sister died trying to reach was built with Cielo money. |
| **S4-2 "Pilgrim Manifest" (Cartagena apron)** | Sleeper-yard rules + crowd tiles (pilgrims as neutral units) | Photograph the outbound booking list. Gimmick: **you cannot attack anything** — 100+ neutral units; any hostile action ends the mission in failure and −15 Trust. Stealth/photo objective only. Twist: 40 "pilgrims" have no return ticket and no destination address. D5 and D4 merge on the board. Major reveal. |
| **S4-3 "Lagos Transfer" (Ikorodu/Ladipo)** | Lagoon stilt-grid, water everywhere, market crowds, ferry-clock | Move the freight ashore and choose whose side the freight lands on. Gimmick: **two-team split control** (Blackhujus on the quay, Mr. PING on the stilts) — reuse the M18 split-hero system. Twist: Chieftain Baraka Mwinyi offers the honest alternative — a real cooperative caravan — for a price in Intel tokens. Paying it converts S4-B from a fight into a negotiation. |
| **S4-B "White Road" (Mombasa, boss)** | Dhow harbour, coral shelf (damage on move), monsoon clock (rounds shorten sailing window) | End D5. Objective: seize the cash-book AND get the 40 undocumented pilgrims onto Baraka's lawful passage. Gimmick: **dual win condition** — book alone = dark-ending route; pilgrims alone = D5 survives; both = best outcome, requires 2 Intel + a successful PATTERN check. |

**New systems:** **Neutral-crowd missions** (hostile action = auto-fail); **Faith-front
intel class** (Codex entries tagged CIELO, immune to FORGETFUL erasure — nice counter-bal
to the memory theme); **Caravan option** (spend Intel to convert a boss into a parley).
**Content note:** Catholic *and* Yoruba-devotional imagery appear only as set dressing
respected by the writing; the villain is the *broker exploiting faith*, never the faith.
Localisation review required with Nigerian and Kenyan consultants before shipping (§16.6).

---

### ST-5 — "GHOST PROTOCOL" / *Protocolo Fantasma* (Mr. PING, solo infiltration)
**Your brief:** *"Mission Impossible Ghost Protocol from Białystok–Poznań motorway to Pattaya Thailand. His mission is to spray toxic gas 'HOBBY blogger', but he starts drinking alcohol again and has been magic'd into sexy ladies."*

**Logline:** Mr. PING is handed a **deniable contract**: La Firma's Thai client wants the channel **"Hobby Blog"** silenced before its season finale exposes D3. The handover is a sealed canister carried as highway freight along the **A2/E30 motorway corridor** (Białystok → Łódź → Poznań → Świecko), then flown onward to Pattaya. PING never opens the canister. Halfway through the job he relapses on duty, the canister vents in a room full of people who are not the target, and the survivors' story becomes: *the ring's ghost turned men into women.* In game terms: **ST-5 is the campaign's only pure stealth thread, and it is built around a hero failing his own skill check.**

| Mission | Setting | Objective · Gimmick · Twist · Trust |
|---|---|---|
| **S5-1 "Sealed Freight" (A2/E30 motorway)** | Four linked truck hot spots (Białystok apron, Łódź service area, Poznań West, Świecko gate); Rotation Clock; **no combat verbs available** | Move the sealed canister across four rest areas without opening it and without being photographed. Gimmick: **Ghost State** — if any enemy passes a `WATCH` check on you, the mission restarts at the last checkpoint (no partial fail). One objective line reads *"do not look inside"*; looking inside costs 2 Intel and reveals the truth two missions early (a legitimate branch). Twist: the seal is already broken when it is handed over. Somebody opened it before PING. |
| **S5-2 "Dry Run" (Pattaya, night)** | Penthouse vertical grid, pool tiles (water = double move cost), monsoon fog (LOS 3), hotel-staff neutral units | Reach the "Hobby Blog" wrap-party floor and confirm the real target list. Gimmick: **Relapse Meter** (`sober: 100 → 0`). It drains each round under pressure; below 50 the player loses one random ability slot that round; below 20 all skill checks take −4. It is never refilled by items — only by ending a round unseen, taking water at a safe tile, or handing control to another hero. Twist: this is not a bloggers' party. It is a **D3 parts-conference cover**, and the "bloggers" are three genuine journalists plus 40 uninvited hotel staff. |
| **S5-3 "The Wrong Room" (Pattaya penthouse)** | Same grid, lights-out variant; alarm clock at round 8 | Decide what to do with a canister that is already venting. Gimmick: **three-way Objective Fork with printed costs** — (a) complete the contract (+HEAT 25, −20 Trust, permanent `gaps.bh += 1`); (b) evacuate the floor and lose the contract (−2 Intel, +Trust, opens S5-B); (c) broadcast the room on the streamer's own live feed so the ring cannot bury it (needs 3 Intel + PATTERN 14). UI text never labels any option "correct". Twist: the man PING was told is "the blogger" is **Wale, Dockside Dan's cameraman** from ST-2 — the first hard cross-thread link. |
| **S5-B "Fae-Sight" (Bangkok Soi Lert ↔ Pattaya, boss)** | Split map, two-team control (reuses the M18 system) | Close desk **D7**. Objectives: pull the **NIEBLA DULCE** batch out of circulation AND get the six affected guests off the ring's "entertainment placement" list, alive and consenting. Gimmick: **fae-sight status** (§8) — while active, enemy AI mis-reads male hero tokens as civilian targets, so your own heroes are hunted under a false identity; counter-play is ARCHIVE checks that publish what really happened. Boss mechanic: **La Mariposa cannot be damaged** (`parleyable:true`) — she is a broker, not a fighter; the win is her placement ledger delivered to Sgt. Nkemdirim's file. |

**New systems:** **Ghost State** (restart-on-detection stealth, zero combat), **Relapse
Meter** (a stress-degrading resource that gates your command options), **Objective Fork**
(three mutually exclusive outcomes with visible costs), **fae-sight** (a perception debuff
used *against the player*, satirising the ring's gossip rather than endorsing magic).

**Content handling (non-negotiable):** the agent is fictional **NIEBLA DULCE** and appears
only as symptoms on tokens (guardrail 7). Alcoholism is written as illness with dignity —
PING's arc ends in a clinic meeting room, never as a punchline or a glamour shot; no
"last drink" tease. The transformation beat is explicitly labelled in-world disinformation;
the six affected NPCs are adults whose new visibility the ring tries to monetise, and the
thread is won by their **consent and exit**, not by a reveal joke. Trans and intersex
consultants required on the writing pass (gate G6, §16.5).

---

### ST-6 — "KOBIETA DO TOWARZYSTWA" / *The Company Contract* (Merhujus, escort & investigation)
**Your brief:** *"Go-go dancer from Siem Reap going regularly into South Korea and Warsaw to dance in 'coworking spaces'."*

**Logline:** **Srey Neang ("Neang", 27)** is a Cambodian stage professional with a legal work contract whose HR title reads *kobieta do towarzystwa* — "woman for company". She flies the **Siem Reap → Incheon → Warsaw** triangle every five weeks for corporate-hospitality gigs in serviced-office ("coworking") venues. La Firma simply started using the same rotation: the dancers' luggage, the agencies' visas, the venues' loading bays. Merhujus is hired to fix a "logistics problem" at a Warsaw conference and finds a trafficking pattern hiding inside an entirely lawful industry. This is the campaign's paper-trail thread: no guns, no powders, one calendar and a stack of manifests.

| Mission | Setting | Objective · Gimmick · Twist · Trust |
|---|---|---|
| **S6-1 "Rotation" (Siem Reap, night market)** | Market crowd grid, temple silhouette as distant set dressing (no religious interaction), bus-clock timer | Reconstruct Neang's real travel history: 14 flights, 3 sponsors, 2 agencies, 1 refused visa extension. Gimmick: **Document Board** — non-combat puzzle; pin boarding passes, contracts and payslips onto a wall and close gaps with ARCHIVE/PATTERN checks. Each closed gap = 1 Intel token. Twist: her Polish sponsor is a shell of **La Firma's D4 documentation desk in Phnom Penh** — the same office from Act IV. Threads merge on the board. |
| **S6-2 "Loading Bay" (Incheon, airport convention centre)** | Multi-floor grid: stage, green room, foyer, service corridor, car park; witness units behave like `glassList` | Obtain the true manifest for one inbound crate before the keynote. Gimmick: **Social Stealth** — hostile action is impossible; each round choose one of BLEND / PHOTO / ASK and NPC trust decides which doors open. Detection raises HEAT instead of spawning enemies. Twist: the crate holds **costume racks with welded frames** — D3 components re-shelled as stage furniture. The dancers were never the mules; they were the *cover nobody dared search*. |
| **S6-3 "Company Contract" (Warsaw, coworking high-rise)** | Office grid: turnstiles, glass meeting rooms (LOS everywhere), server room, roof terrace; reuses `sealCheck` | Bring four dancers who have had passports "stored for safekeeping" out via lawful routes only. Gimmick: **Consent Meter** — each dancer has an independent decision value; coercing them (intimidating a clerk, forcing a door) lowers it and can make them *stay*, which fails the mission and writes a Codex entry explaining why. Only evidence plus a named labour inspector converts. Twist: the Warsaw agency owner is **Celna's sister-in-law** (ST-3 link) — not a monster, a woman who signed one bad guarantor form eight years ago and cannot leave either. |
| **S6-B "The Calendar" (Warsaw ↔ Phnom Penh, boss)** | Two maps, shared 12-round budget: Warsaw offices by day, Phnom Penh document centre by night | Break the **visa-rotation fraud** (a D4 sub-desk) without ever touching a dancer. Gimmick: **Process Boss** — the enemy is a workflow drawn as stamp-desk tiles that refill unless the player spends Intel to publish each one; damage does nothing. Win = 6 stamps published AND all four Consent Meters above threshold. Boss unit: **Khun Sombat Rithy**, D4's visa broker, `parleyable:true` — flippable for testimony if the player owns both the S6-2 manifest and Celna's file. |

**New systems:** **Document Board** (pin-and-gap puzzle producing Intel), **Social Stealth**
(action-choice infiltration scored by HEAT), **Consent Meter** (NPC autonomy; coercion fails
missions), **Process Boss** (an enemy made of paperwork).
**Content handling:** entertainment migration and sex work are treated as **labour** — pay
disputes, contracts, agencies, inspectors. No nudity, no client scenes, no brothel maps, no
white-knight rescue framing: the crew delivers evidence and Neang testifies in her own words.
Cambodian, Korean and Polish community readers on the review pass (gates G4/G6). Accessibility
option: ST-6 can be reduced to a documents-only thread with zero venue content (§13).

---

### ST-7 — "THE QUILL OF BIAŁYSTOK" / *Pióro z Białegostoku* (all three heroes; the campaign's moral centre)
**Your brief:** *"Bloggers who sunspots to died in private prison in Białystok Poland without fingers and his head support be digger in Playa Blanca Cartagena but life change his destiny."*

**Interpretation used (recorded so the writer never has to guess):** a courier-blogger is held in an illegal **private detention site** outside Białystok, is tortured in a way that destroys the use of his hands (he can never type or sign again), and is then sold downstream as a **head-supported labourer** — a man whose injuries force a bent, hands-free posture — on a Caribbean drainage-cutting crew in the fictional **Playla Blanca** apron district of Cartagena. He survives, and the crew helps him become the campaign's key witness instead of its victim. Structurally, ST-7 is the answer to ST-1: Mercurio burns witnesses; this thread rebuilds one.

| Mission | Setting | Objective · Gimmick · Twist · Trust |
|---|---|---|
| **S7-1 "Private Prison" (industrial park outside Białystok)** | Warehouse-interior grid: cage rows, CCTV cones, generator-noise tiles (block COLD READ), shift-change clock at rounds 5 and 10 | Prove the site exists and identify who is held there. Gimmick: **Evidence-Only Win** — the mission ends when the custody log is extracted; wounding anyone destroys the log (auto-fail, `civilianDeaths += 1`). Guards here detain rather than shoot, so brute force is mechanically useless. Twist: the site runs as a **"debt-recovery hostel" licensed as a storage business**, and its clients include other criminal groups paying to keep informants quiet. La Firma is a *tenant*, not the landlord — the campaign's big strategic reveal that rings rent infrastructure from each other (echoes §4.5). |
| **S7-2 "Ledger of Names" (Berlin safe-house → Rotterdam container yard)** | Board-level investigation chapter plus one tactical escort map | Match the custody log against 11 named detainees and find which one has already been moved. Gimmick: **Chronicle Forensics** — the game queries the player's *own saved chronicle* (real localStorage data) as evidence. A name that a previous `gap` archived is recoverable only if the player spent Intel to protect it earlier. Past memory loss becomes a felt mechanical consequence. Twist: the man moved downstream is **Tomasz "Kwillo" Wieczorek**, the Białystok courier-blogger seen briefly on ST-2's Glass List and in ST-5's S5-1 convoy footage. Three threads point at one person. |
| **S7-3 "Hands-Free" (Playla Blanca apron, Cartagena)** | Coastal excavation grid: sand tiles (move penalty), trench tiles (non-lethal fall hazard), heat clock (attrition after round 9), worker-camp neutral units | Reach Kwillo and get him out **by his own choice**. Gimmick: **Dignity Rules** — you may not carry, drag, stun or threaten him; he moves only toward tiles the player clears, and refuses to move at all while Trust < 55. A terrain-puzzle escort where the NPC says no. Twist: he does not want extraction — he wants **page 4 of his notebook**, taken from him in Białystok. Page 4 names the buyer of the ST-3 Moscow consignment. The rescue becomes an evidence recovery. |
| **S7-B "Testimony" (Rotterdam ASPO hearing room ↔ harbour, boss)** | Courtroom grid vs. parallel harbour map, two-team split control, 10-round budget | Enter Kwillo's testimony before the ring's lawyers void it. Gimmick: **Cross-Examination Duel** — the boss is defence counsel **Meester Dirk Halman**; each round he plays an Objection card (hearsay / provenance / health / anonymity) and the player must answer with a matching evidence class (TRACE / ARCHIVE / PORT TALK / witness-consent). No HP involved. Two failures trigger the mistrial branch (thread closes `done-dark`, D4 survives into Act VI). Field boss: **Warden Grigor Antov**, keeper of the hostel — the only enemy able to apply `marked` to a *witness* unit. |

**New systems:** **Evidence-Only missions** (auto-fail on lethal action), **Chronicle
Forensics** (reads the player's actual saved chronicle/gap state — unique to this repo),
**Dignity-Rules escort** (NPC autonomy blocks brute-force play), **Cross-Examination Duel**
(card-matching verbal boss), **`HOSTEL` intel class** (Codex entries immune to FORGETFUL
erasure, alongside `CIELO`).
**Content handling:** the injury is stated once, in past tense, inside a medical summary;
nothing is shown, nothing is interactive, the camera never lingers (guardrail 10). Kwillo
authors his own arc — he sets the terms of his rescue and his testimony. Private detention
is framed as a crime prosecuted by named institutions (ASPO, Eurojust cameo), never as exotic
atmosphere. Sensitivity read by a torture-survivor advocacy consultant before shipping (G6).

---

### ST-8 — "THE GLASS HOUSE" / *Casa de Cristal* (Blackhujus; ties ST-2 and ST-5 back to D1)
**Your brief:** *(derived — closes the loop your third batch opens)* After ST-5's canister and ST-2's pickups, the player naturally asks: **who packs this stuff and who ships it?** Answer: D1's Andalusian greenhouse front, running south-Spain → Rotterdam → Chonburi/Laem Chabang under a produce code.

**Logline:** Blackhujus goes back to the one terrain he knows — the glasshouse maze — and finds the ring's "green" leg has quietly switched from bulk stock to **legal-adjacent industrial goods shipped as fresh produce**. He has to burn the desk without burning the farmworkers.

| Mission | Setting | Objective · Gimmick · Twist · Trust |
|---|---|---|
| **S8-1 "Produce Code" (Almería strip)** | Glasshouse-maze grid: clutter tiles, fog tiles, irrigation-channel tiles; farmworker neutral units | Trace one reefer's bill of lading backwards from Rotterdam to a Spanish packing shed. Gimmick: **Cold-Chain Clock** — the lane closes after 8 rounds; Intel can slow it but never stop it, teaching that interdiction *timing* beats firepower. Twist: the shed's real owner is a cooperative Baraka Mwinyi warned about in ST-4 — lawful exporters are being piggybacked, again. |
| **S8-2 "Reefer Row" (Rotterdam cold store)** | Cold-store grid: frost tiles (slip = lose action), reefers as destructible cover, alarm zone that forces rotation | Physically locate the batch among 40 identical boxes using Blackhujus's Green Ledger passive. Gimmick: **Ledger Duel** — an opposing ring auditor also holds Intel; whoever spends first wins the box, so the player must bank tokens. Real economic tension, no RNG. Twist: the batch label is a **veterinary sedative** — legal goods in wrong hands, and no chemistry lesson required anywhere. |
| **S8-3 "Two Manifests" (Cartagena apron)** | Sleeper-yard rules + customs-line tiles; port police run `watch` checks | Choose which manifest to leak: the ring's or the cooperative's. Gimmick: **Moral Toggle with printed numbers** — leaking the ring's manifest closes one lane but burns a lawful exporter's licence for six months (board-visible, −1 Intel, +Trust with co-ops); leaking the cooperative's keeps the lane open for the ring (+HEAT, −Trust). Both costs are shown before you commit; no hidden karma screen. Twist: **Rosa Vacca** is the customs officer who lets it happen, on condition she receives everything afterwards. |
| **S8-B "Glass Harvest" (Almería ↔ Laem Chabang, boss)** | Split final map: glasshouses at dawn, Thai packing plant at dusk; three-team control (all heroes) | Close D1's goods sub-line and end **El Químico's** operation without describing how anything works. Gimmick: **Non-Target Rule** — El Químico (`parleyable:true`) is worth more cooperating than defeated; the true win is the shipment-integrity log that convicts D1's seat. Killing him with the existing melee set locks the Honest Road ending. |

**New systems:** **Cold-Chain Clock** (time-limited lanes), **Ledger Duel** (asymmetric Intel
bidding against an AI auditor), **Moral Toggle with printed costs**, **lawful-trade allies**
(cooperatives as recurring non-criminal partners who appear in the epilogue).
**Why it belongs:** it converts your two most abstract requests (green cargo, "magic gas")
into one grounded logistics story, gives Blackhujus a solo climax, and supplies the missing
causal chain between ST-2, ST-5 and the main campaign's D1 acts.

---

### 6B.5 How the threads change the main campaign
| Thread | Unlocks | Requires | Endgame modifier |
|---|---|---|---|
| ST-1 Mercury Blood | Desk **D6**, MARKED status, Client List | Act II started | −4 civilian deaths in epilogue if D6 cleared; else Red Notice cameo |
| ST-2 Nineveh Run | Publications feed, Race Timer, D1↔UK direct link | ≥1 PATTERN check done | Reveals D1 seat early; skipping it locks M9's shortcut |
| ST-3 Sealed for the Maison | Seal Integrity, Checkpoint type, Switched Objectives | Mr. PING `Hatch Run` owned | `sealedCarton` flag: if true, Witnesses ending needs one extra rescue |
| ST-4 White Road | Desk **D5**, Faith-front intel, Caravan option | ≥3 D4 civilians rescued somewhere | Converts M22 sub-grid 3 into a parley; enables 4th ending *"The Honest Road"* |
| ST-5 Ghost Protocol | Desk **D7**, Relapse Meter, Objective Fork, `faeSight` | Act III started; PING `sober ≥ 60` to begin S5-2 | Sets `wrongRoom` flag: (a) adds `gaps.bh+1` and +25 HEAT; (c) unlocks the Publications feed for Act VI |
| ST-6 Company Contract | **Document Board**, Social Stealth, Consent Meter, Process Boss | ≥2 Intel banked before S6-B | If all four dancers consent, M22 gains a lawful-witness roster (−1 required rescue in Witnesses ending) |
| ST-7 Quill of Białystok | **Chronicle Forensics**, `HOSTEL` intel class, Kwillo as witness | Trust ≥ 55 at S7-3 | Page 4 (`notebookPage4`) is the *only* evidence that names the ST-3 buyer — needed for Fourth Desk and Honest Road |
| ST-8 Glass House | Cold-Chain Clock, Ledger Duel, lawful-trade allies | D1 seat revealed (ST-2 done or M9 visited) | El Químico killed ⇒ **locks Honest Road**; log seized ⇒ closes two D1 lanes permanently |

**Fifth ending (new): "THE LONG MEMORY"** — requires ST-7 closed clean (`testimonyEntered:true`,
no mistrial), Trust ≥ 70, ≤1 GAP, and Kwillo's testimony quoted verbatim in the final board
scene. La Firma is convicted on witness evidence rather than on the crew's word: the ports
keep their workers, the chronicle survives intact, and the last page is signed by a man who
could no longer hold a pen. This is the campaign's answer to its own memory theme — the one
ending where nothing is forgotten.

**Fourth ending (new): "THE HONEST ROAD"** — requires D5 cleared *with* the caravan
option, D6 cleared, Trust ≥60, ≤2 GAPs. La Firma falls and the ports are handed to
cooperatives and port-watch partners; the chronicle's last page is written by Dockside
Dan's documentary credits. This is the campaign's hopeful answer to the dark ending.

**Ending count after this revision: 5** (Witnesses / Ghosts / Fourth Desk / Honest Road /
Long Memory). Threads ST-5…ST-8 add four more failure branches that do not create endings
but do change epilogue text: `wrongRoom` (ST-5), `dancersConsented` (ST-6), `mistrial`
(ST-7), `quimicoKilled` (ST-8).

### 6C. SIDE-THREADS ST-9 … ST-15 (fourth expansion batch)

Seven more optional-but-consequential threads from your fourth brief. Same production
template as §6B: **logline → mission table (Objective · Grid gimmick · Twist · Trust swing)
→ new systems → why it belongs.** Each is **3 missions + 1 boss chapter**, unlocked after
Act II, and each permanently alters the endgame (§6C.5).

**How I read your brief (all reversible, all listed in §14 Q16–Q20):** every item you sent
became a *target to protect or a case to build*, never a job to perform. Nobody in this game
can be paid to hurt someone; the verbs available to the player are always *document, escort,
extract, publish, seize, testify*.

#### Guardrails that apply to all seven new threads (implement verbatim)

12. **No playable violence against civilians anywhere.** ST-9's assignment is an order the
    heroes *refuse*; the thread's only "combat" is escape and evidence runs. The engine enforces
    it with `mission.noHostileActions = true` plus `civilianAdjacent` unit flags (§8.2).
13. **Racide / Afrodere — the genocide must be named correctly.** In-fiction, the victims are
    **Afro-Colombian residents of the Nariño–Chocó coast** (the real communities the Pacific
    coast conflict actually harms). Enemy units are labelled by their *contract* (`sicario`,
    `collector`), never by race; no slur appears in any string table. This replaces the brief's
    phrasing, which would otherwise read as endorsing ethnic cleansing. Hard gate G8 (§16D.6).
14. **The sex-venue node is a rescue map, not a pleasure map.** Hong Kong's 15-floor front
    contains **no nudity, no client interaction, no selectable "service" content**. Venues are
    shown as reception floors, dormitory rooms and one stairwell. Every person inside is a named
    NPC with a lawful exit option and a refusal option. Opt-out toggle at §13.
15. **Real banks stay innocent; the ledger is fictional and stolen.** No Swiss bank,
    canton, regulator or private-bank archetype may be named. The ring's book is the fictional
    **KODER 9** held at the fictional **Bank Krystallis AG** in the fictional canton
    **Sternberg**; the crime depicted is *records theft and money laundering through shell
    companies*, both well documented by public reporting (§9.2d).
16. **Language vulnerability is portrayed with dignity and never exploited on screen.**
    The Bangladeshi and Peruvian women are characters who speak their own languages (subtitles
    shown, untranslated banter preserved); the mechanic is **INTERPRET** — the player loses
    information until they recruit a translator ally. No scene ever shows assault; harm is
    reported in past tense by survivors who are also witnesses (§16D.5).
17. **"Carageenin" is a delusion, not a costume.** ST-11's double speaks his line exactly as
    you wrote it — *"I am carrageenan!"* — and the game treats it as an unmedicated psychotic
    episode handled by a community-health outreach worker, not by combat. The clone itself is
    **biologically impossible**: it is a surgically-disguised twin (see dossier §16D.3).
18. **Informal settlements are written as places where people live.** ST-10's Rio favela is
    a vertical neighbourhood with a council, a church hall, a football pitch and a moto-taxi
    union; the ring rents one alley. Real community names are never used; the map uses the
    fictional **Vila Aurora** with a Codex card stating plainly that most residents have no
    connection to trafficking.

---

### ST-9 — "THE ROOF OF HONG KONG" / *Dach Wiatrówki* (Merhujus; HK-05 pays off)

**Your brief:** *"Hong Kong island – building with 15 floor converted into sex club with hot
chicks from around the world."*

**Production reading:** a **15-storey vertical extraction map** whose ground floor is a
nightclub front and whose upper floors are **documentary-seized accommodation for trafficked
workers**. Your phrase "hot chicks from around the world" becomes the campaign's most important
human payload: **eleven named women of six nationalities**, each with her own lawful exit,
each refusing at least once. The horror is not the venue — it is that D4 has been selling
these people as *inventory turnover*, and the ring's own spreadsheet calls them "floor stock".

**Logline:** Merhujus receives a sealed envelope from his brother's dead courier: La Firma
wants three men killed in three cities, and the contract is already paid. He can burn the
contract or he can deliver it — but delivering it means becoming the thing that made him leave
Colombia. The thread is the campaign's explicit refusal of the assassination premise: **the
player never takes a life for money; the player spends four missions making that contract
worthless.**

| Mission | Setting | Objective · Gimmick · Twist · Trust |
|---|---|---|
| **S9-1 "Fifteen Floors" (Causeway Bay front, HK)** | Vertical grid, 15 storeys × 6 tiles; lift shaft as fast-travel tile, stairwell as the only silent route; CCTV cones per floor; "floor stock" NPCs on rows 8–13 | Climb without triggering the manager's round counter and photograph **who is actually living there** (Document Board re-use from ST-6). Gimmick: **Floor Ledger** — each floor has a different manifest entry; the mismatch between two adjacent floors is the whole case. Twist: the manager is a **former resident** promoted by the ring, and she lets you pass on row 11 because she recognises Merhujus's accent. |
| **S9-2 "Refusal Rights" (Kowloon safehouse + Labour Department)** | Non-combat interview grid; Consent Meter (ST-6) drives everything; no hostile units exist on this map | Get **three of eleven** women to consent to a statement. Gimmick: **Consent Is Not A Resource** — spending Intel to pressure a woman raises HEAT and *lowers* the consent pool; the honest route (bring the interpreter ally from ST-14) is faster. Twist: two women refuse and stay — the game says so in the epilogue and does not punish you, but their names appear in the "Still Inside" list, which is the thread's emotional cost. |
| **S9-3 "Night Raid On Paper" (HK Customs & ASPO liaison office)** | Split map: raid execution (ASEPO/IMMD partners move, player advises via tokens) vs. the ledger room; Race Timer from ST-2 reused | Deliver the Floor Ledger before the shipment window closes. Gimmick: **You Do Not Lead The Raid** — the player controls placement tokens only; any direct hero action on the raid half costs −12 Trust and hands the defence a procedural objection in ST-7's duel system. Twist: the seized "floor stock" list contains a name from **ST-6's Siem Reap rotation** — Neang's agency was feeding this building all along. |
| **S9-B "The Roof" (Victoria Peak transfer point, boss)** | Rooftop grid: wind tiles (push 1), glass awcle tiles (breakable cover), one helicopter pad objective; `watchOnly` security drones | Refuse the contract publicly: get the **payment trail** onto Wale Adeyemi's camera while holding the roof for 6 rounds. Gimmick: **Contract Burn** — Julián "Mercurio"'s escrow releases only if the targets are photographed dead; producing the *live* targets instead voids the escrow and turns D6 against D4 mid-thread. Cross-links: clearing this drops `civilianDeaths` by 2 and unlocks ST-1's arrest ending. |

**New systems:** **Floor Ledger** (vertical manifest-mismatch puzzle), **Consent Is Not A
Resource** (anti-pressure scoring), **Advisory Raids** (player places, partners execute),
**Contract Burn** (escrow voiding as a win condition).
**Why it belongs:** it converts the brief's most exploitable image into the campaign's
largest rescue, ties Hong Kong's existing D3 seat to D4's people desk, gives Merhujus the
moral decision his "Sygnatura" arc has been avoiding, and makes ST-1's brother thread *matter*
in Asia rather than only in the UK.

---

### ST-10 — "CARNIVAL OF THE GUESTS" / *Carnaval dos Convidados* (Mr. PING; Rio payoff)

**Your brief:** *"festival in Rio de Janeiro full of criminals from around the world."*

**Production reading:** the ring books a **parallel "hospitality festival"** during Carnival —
officially a sponsor village, actually twelve delegations renting credential access to move
cash, papers and containers under cover of noise. The city is not criminal; the *credential
system* is what gets abused. So the gameplay theme is **access control**: lanyards, wristbands,
lists, gates — PING's home turf.

**Logline:** For four days nobody checks anybody's badge, because everybody is wearing one.
Mr. PING must walk into the ring's own party with a borrowed name and come out holding the
delegation list that proves D2 and D3 were never competing — they were the same meeting.

| Mission | Setting | Objective · Gimmick · Twist · Trust |
|---|---|---|
| **S10-1 "Wristband Economy" (Vila Aurora ↔ Sambódromo, Rio)** | Dense crowd grid; neutral civilian units everywhere (`neutralAdjacent`), float parade tiles that *move the map* each round; heat clock | Obtain a legitimate-looking delegate band without stealing one. Gimmick: **Crowd Flow** — units cannot move against parade tiles; you travel with the crowd or through the alley the ring rented from a real residents' council that *tells ASEPO when strangers dig*. Twist: the councilwoman, **Dona Célia**, is the first NPC in the campaign who refuses to be rescued and asks for a streetlight instead. Give her the streetlight (+Trust, board-visible). |
| **S10-2 "Twelve Delegations" (sponsor-village backstage)** | Tent-and-trailer grid; Document Board; Social Stealth (ST-6) with HEAT replacing spawns | Match twelve claimed identities to twelve actual arrivals using WATCH/COLD READ. Gimmick: **Badge Table** — a physical board of 12 lanyards; each wrong match adds a permanent false entry to your Codex (a GAP-adjacent penalty that is *recoverable* only by publishing a correction). Twist: three delegations are **law-enforcement undercover officers from three countries who do not know each other** — the ring is running interference between them, and the player can let them meet. |
| **S10-3 "The List" (Marina da Glória yacht cluster)** | Water tiles, boarding-ramp tiles, dhow-style reefer barge; Rotation Clock from ST-5 reused | Extract the delegation list before the closing parade burns the copies. Gimmick: **Noise Cover** — during parade rounds all sound-based detection is disabled but *all movement is forced*; timing beats skill. Twist: the list names **Bank Krystallis AG** as the settlement counterparty, which is the key that opens ST-13. |
| **S10-B "Four Days" (Rio port apron ↔ Vila Aurora rooftop, boss)** | Two-team control (M18 system) across a harbour map and a hillside map; `watchOnly` festival security; non-lethal finish | Keep the three undercover teams from shooting at each other while Rosa Vacca's courier leaves the country. Gimmick: **De-Escalation Boss** — the boss has no HP; the win condition is a counter of 3 "meetings arranged" before round 12. Killing any delegation member fails the mission outright. |

**New systems:** **Crowd Flow** (moving-map tiles), **Badge Table** (identity matching with
Codex-corruption penalty), **Noise Cover** (detection/movement trade-off), **De-Escalation
Boss** (HP-less win by arranging encounters), **civic-request objectives** (streetlights, not
treasure).
**Why it belongs:** it is the campaign's proof that the ring's streams converge in one room,
which the main board otherwise never demonstrates; it reuses four existing side-thread systems
instead of inventing five; and it puts Mr. PING — the least motivated hero — in the one setting
where his acrobatics are legitimately useful.

---

### ST-11 — "THE JOKE IN SAN JOSE" / *El Chiste De San José* (Blackhujus; Costa Rica)

**Your brief:** *"clone copy of Mr. PING in San José Costa Rica that is high on cocaine shout
in the street that he is carrageenin."*

**Production reading, in three parts:**
1. **The clone is not a clone.** It is **Nicasio "Caregena" Solano**, a former D4 decoy —
   a man La Firma surgically and behaviourally dressed as Mr. PING to run paper trails and
   absorb attention. His existence is the campaign's best argument that *faces are documents
   the ring owns*.
2. **"High on cocaine" is written as illness, not as a punchline.** No stimulant use is
   depicted; the substance stays off-board per §5.3 and guardrail 3. What is shown: sleeplessness,
   grandiosity, a man talking to the traffic, and a community-health outreach worker (**Dr. Ana
   Lucía Bermúdez**) who has been trying to reach him for nine months. The Relapse Meter from
   ST-5 is reused for PING's own reaction, because the mirror is the point.
3. **"He is carrageenin" becomes the thread's title card and its saddest joke.** Caregena
   believes he is the seaweed extract — the thing that *gives a product body while being
   invisible in it* — because that is literally what La Firma trained him to be. Players hear
   it as madness in S11-1 and understand it in S11-3. That reversal is the whole thread.

**Logline:** A man wearing PING's face is shouting nonsense in a Costa Rican street, and the
only way to stop the ring from using that face again is to give the man back his own name.

| Mission | Setting | Objective · Gimmick · Twist · Trust |
|---|---|---|
| **S11-1 "The Shout" (San José, Barrio México market grid)** | Daytime crowd grid, `neutralAdjacent` civilians, bus-station tiles; no enemies deal damage (`detainsOnly`) | Reach Caregena before the ring's "collection van" does. Gimmick: **Street Audience** — a Public Attention meter rises as bystanders film; if it maxes out, D4's decoy programme goes dark (good) and Caregena is detained (bad). Both consequences are printed before you commit. Twist: PING sees himself. The mission ends with a **Relapse Meter check** on PING, not on Caregena. |
| **S11-2 "Nine Months" (Escazú clinic + Moín container yard, split)** | Non-combat clinic half (interview grid, Consent Meter) + warehouse half (Green Ledger passive, seal-check tiles) | Prove who Caregena was before La Firma found him, using clinic records + a Moin-era crew manifest. Gimmick: **Two Files, One Face** — the ARCHIVE check difficulty depends on how many ST-6/ST-7 documents you already own; this thread rewards long-game paperwork players. Twist: his real name appears on a **payroll signed by Merhujus's own desk** — the brothers' network created him. |
| **S11-3 "Carrageenan" (Puerto Limón dockside town)** | Rain-slick dock grid, banana-crane tiles, tidal cut-off; `parleyable` boss | Say the truth to him and get his consent to testify. Gimmick: **Naming Duel** — a card exchange (ST-7 Card Boss system) where the player plays *his real name, his old trade, his sister's address* against the ring's cards (*"Ping", "asset", "floor stock"*). Win by playing three identity cards he accepts. There is no damage track. Twist: he accepts "Nicasio" and refuses to testify against PING — *"I won't say things about a man who has my face."* |
| **S11-B "The Face Market" (Moín ↔ Cartagena, boss)** | Reefer-row grid reused from M6 + a mirror-match variant; `immuneToOneAbility` decoys | Destroy the ring's **face archive** (photos, casts, gait videos — described only as files) without destroying Caregena's own record. Gimmick: **Mirror Units** — decoy enemies share the hero sprites' silhouettes; attacking the wrong one applies FORGETFUL to your own chronicle (a real GAP risk). Win condition is archive seizure, and the decoys surrender once the archive flag is set. |

**New systems:** **Public Attention** (double-edged visibility), **Two Files, One Face**
(cross-thread document dependency), **Naming Duel** (identity-card boss), **Face Archive**
(decoy spawn source; destroying it removes decoys from all future missions), **Mirror Units**.
**Why it belongs:** it is the only thread that forces Mr. PING to look at what the ring does to
people who lend it their faces, it repairs the "clone/cocaine" gag into the campaign's most
humane scene, and it hands Act VI a witness who can identify D4's decoy programme in court.

---

### ST-12 — "BIG BOX IN THE JUNGLE" / *La Caja Grande* (Blackhujus + Merhujus; Pacific coast)

**Your brief:** *"jungle few kilometers from Playa Blanca, Colombian gang keeping cocaine with
super modern military-grade communication BIG BOX, and killing black people in Colombia."*

**Production reading:** the jungle camp exists, and the **BIG BOX** is its centrepiece — but it
is a **fictional hardened comms shelter** (a shipping-container shell lined with relay
equipment, generator and short-range satellite uplink). **Zero operational detail**: no
frequencies, no encryption discussion, no equipment brands or models, no antenna geometry, no
call signs, nothing a reader could replicate. Its gameplay role is purely spatial: **inside the
BOX's coverage circle, your abilities are unreliable** — a zone-of-denial tile field, expressed
as icons and dice, not as technology.

On the killings: guardrail 13. The camp sits in the corridor the ring uses to displace
**Afro-Colombian fishing families from the Nariño–Chocó coast**, and the thread's antagonist is
a *contractor* — **Comité de Despeje**, hired by D1 to clear land. The victims are named,
memorialised and legally represented in-game; a Codex card states the real historical context
in one paragraph, sourced to public truth-and-memory reporting (§9.2d). The player's win
condition is **land-title documents and survivor testimony**, not a body count.

**Logline:** Somewhere inland from Playa Blanca there is a box that makes heroes deaf, dumb and
unable to trust their own tools — and next to it a paper proving who owns the land the ring is
emptying. Blackhujus must cross the coverage circle to carry the paper out.

| Mission | Setting | Objective · Gimmick · Twist · Trust |
|---|---|---|
| **S12-1 "Three Kilometres" (rainforest ridge grid)** | Jungle grid: mud tiles (−1 move), river-crossing tiles, canopy LOS blocks, `patrol` sicario units (`detainsOnly` at night rounds) | Map the BIG BOX's coverage radius without entering it. Gimmick: **Silence Ring** — outside the circle normal rules; inside it, ability cooldowns randomise ±1 round and radio/Intel actions fail. The player learns to fight *outside* the ring, which is a genuine tactical lesson. Twist: the camp's cook is a Playla Blanca digging-crew survivor from ST-7 and remembers Kwillo's voice from a broadcast. |
| **S12-2 "Titles" (camp outskirts + community council house)** | Two-map mission: stealth approach + non-combat testimony collection; Dignity Rules active | Recover the **land-title archive** the camp stole from three councils. Gimmick: **Paper Priority** — you can carry either the titles or the camp's ledger, not both, and the game prints the consequence of each choice (titles ⇒ restitution route in the epilogue; ledger ⇒ +2 desks closed, −Trust with councils). Twist: the ledger shows D1 paying the clearance contractor **per hectare emptied** — the ring's drug leg funds displacement directly, which retroactively explains Act I's "abandoned farms". |
| **S12-3 "Generator Night" (BIG BOX perimeter)** | Night grid: light-cone tiles, rain rounds masking WATCH checks, `ranged:false` `watchOnly` guards | Cut the camp's power for one round so a survivor team can walk out with the titles. Gimmick: **One Round Of Dark** — a single scripted blackout; everything must be positioned beforehand. No sabotage description: the beat resolves as a skill check + a countdown. Twist: the shelter's operator is **not** a ring member — he is a subcontracted technician with a family and a monthly invoice, and he surrenders the moment the ledger is public. You may escort him out (`parleyable`). |
| **S12-B "The Box Speaks" (river junction, boss)** | River-junction grid with three crossing points; Sicario boss **Coronel "Pantano" Rentería** (`appliesStatus:"silenced"` variant) | Hold the crossing while the testimony upload completes over the ring's own relay — i.e. the Silence Ring becomes *your* weapon once you own the BOX. Gimmick: **Zone Capture Becomes Zone Denial**; the boss is defeated by pushing him outside his own coverage circle, not by damage. |

**New systems:** **Silence Ring** (ability-reliability zone), **Paper Priority** (carrying-capacity
moral choice), **One Round Of Dark** (single scripted event window), **Zone Denial Flip**
(enemy area effect capturable), **restitution epilogue track** (land returned, named councils).
**Why it belongs:** it gives the campaign its only *terrain* act (everything else is ports and
offices), grounds D1's "green cargo" in the real human geography of the Colombian Pacific,
turns your "military-grade BIG BOX" into an interesting board mechanic instead of a gadget
wishlist, and creates the causal link between the drug leg and the trafficking leg that Act VI
needs to feel earned.

---

### ST-13 — "THE BACK BIBLE" / *Koder Dziewięć* (Merhujus + PING; Switzerland)

**Your brief:** *"Switzerland bank with 'back bible' – script when and how BUSINESSMEN will die."*

**Production reading:** the "Back Bible" is renamed **KODER 9 ("The Back Bible")** — a
criminal scorekeeping book kept by a launderer, listing debtors, guarantors, collateral and
*what happens when a debt matures*. Crucially: **it is a hit list of blackmail targets, not a
murder plan we watch executed.** The game never stages an assassination; it stages the moment a
banker decides whether to hand the book over. Depicted crime types: aggravated money
laundering through shell companies, private records theft, breach of fiduciary duty, and
extortion-by-ledger — all documented offence categories (§9.2d), none of them instructions.

**Logline:** There is a ledger in a vault in a fictional canton that tells its owner who dies
next — except "dies" in the ring's language means "is published". Merhujus must forge the one
document he has always refused to forge: a signature that saves somebody.

| Mission | Setting | Objective · Gimmick · Twist · Trust |
|---|---|---|
| **S13-1 "Correspondent Line" (Zürich Bahnhofstrafe lobby → fictional Sternberg branch)** | Office grid: turnstiles, glass rooms, deposit-box corridor; Social Stealth + Clean Papers synergy | Open a customer relationship that lets Merhujus see the vault register. Gimmick: **KYC Gauntlet** — a paperwork mini-system where every answer you give is remembered; lies create permanent Codex entries that later *hurt your courtroom credibility in ST-7's duel*. Truthful answers cost Intel but raise `sarkarTrust`. Twist: the compliance officer who approves him, **Frau Elsbeth Ronig**, is auditing her own employer and has been leaving deliberate errors in the register for three years. |
| **S13-2 "Shell Game" (Lugano-district offices, fictional; Chiasso road gate)** | Two-city map linked by a rail lane; hot-spot rules on the gate; Document Board | Trace nine shell companies to four living beneficiaries. Gimmick: **Beneficial Ownership Chain** — a solvable graph puzzle (nodes/edges, no RNG): each correct link removes one KODER 9 page from the boss's hand deck. Pure deduction, extremely satisfying for the archive-minded player. Twist: beneficiary #4 is **Halyna "Sawa" Voronenko** — the Odessa feeder boss from the main campaign — meaning D2's violence is financed by D4's people trade. |
| **S13-3 "The Vault Register" (Sternberg branch, night)** | Evidence-Only grid (`evidenceOnly:true`); alarm zones; `watchOnly` patrol; cold-room vault tiles | Photograph the register pages that name the ring's settlement counterparty from ST-10. Gimmick: **Copy Budget** — you may photograph 6 of 11 pages; the ones you skip become unavailable forever, and the epilogue reads out the skipped names as unresolved. This is the campaign's sharpest "you cannot save everyone" design and it is entirely non-violent. Twist: page 7 lists **Merhujus's own signature style** as a commodity price — the ring has been selling his forgery method. |
| **S13-B "When And How" (bank boardroom ↔ Rotterdam ASPO annex, split boss)** | Boardroom half: Card Boss (**Meester Halman**-style Objection deck, reused); annex half: Chronicle Forensics (ST-7) | Force the disclosure: make the bank hand KODER 9 to prosecutors before the ring's lawyer buries it. Gimmick: **Disclosure Clock** — 9 rounds, one per remaining KODER page; each page you spent Intel on earlier buys back one round. Boss `hpless:true`; win by counter. Twist: **Rosa Vacca is a signatory**. If `rosaAlive` and `sarkarTrust ≥ 4`, she testifies (her arc from Act V completes); otherwise her signature alone convicts nobody and the Honest Road ending needs one extra condition. |

**New systems:** **KYC Gauntlet** (persistent dialogue consequences), **Beneficial Ownership
Chain** (graph-deduction puzzle), **Copy Budget** (irreversible partial evidence), **Disclosure
Clock**, **Signature As Commodity** (Merhujus's personal stake; raises D6 difficulty if leaked).
**Why it belongs:** it finally answers "where does the money settle?", which the first three
batches deliberately left open; it links ST-3 (Moscow cargo), ST-10 (Rio list) and the Odessa
lane into one financial plot; it gives Merhujus the campaign's best non-combat climax; and it
lets the player experience banking-as-investigation, which is the most realistic part of the
whole scenario.

---

### ST-14 — "GIRLS WHO DO NOT SPEAK OUR LANGUAGE" / *Diecez Dziewcząt* (all three; Bangladesh + Peru)

**Your brief:** *"Bangladesh and Peru hidden burden with girls who do not speak English and Spanish."*

**Production reading:** the "hidden burden" is **unregistered labour and passenger capacity** —
women moved on manifests that describe them as relatives, apprentices or "kitchen support",
whose languages (Bengali/Sylheti, Quechua/Aymara) are *not covered by the ring's own
interpreters*, which is precisely why the ring can hold them. The thread's central mechanic is
therefore **language as a resource the player must earn**: you cannot rescue what you cannot
hear. Nothing sexual is depicted (guardrail 16); harm is reported in past tense by named
survivors who become witnesses, and one of them becomes a recurring ally.

**Logline:** Two consignments arrive speaking four languages nobody in the crew understands.
The ring's mistake is also the player's chance: the women can talk to each other.

| Mission | Setting | Objective · Gimmick · Twist · Trust |
|---|---|---|
| **S14-1 "Manifest 'Relatives'" (Chattogram–Mongla reefer apron + Hazrat Shahjalal gate, Dhaka)** | Crane-lane grid (BD D3 legacy) + garment-factory floor map; `detainsOnly` minders; heat clock | Find the eight women listed as "relatives" of a male crew of nine. Gimmick: **INTERPRET** — dialogue options appear as *shapes* until an interpreter is present; you can still move, shield and escort them, but you cannot obtain testimony. Frustration is the intended lesson. Twist: the interpreter who helps is **Rani Dasgupta**, a garment-worker organiser with her own wage dispute against the same exporter — lawful leverage, not charity. |
| **S14-2 "The Callao List" (Callao market + La Libertad packing shed, Peru)** | Coastal market grid, fish-drying tiles, cold-room lanes; Document Board | Match the Peruvian consignment to a mining-catering contract that never existed. Gimmick: **Four Languages, Three Rooms** — testimony is only complete when a witness, an interpreter and a clerk are all in the same room tile cluster; positioning matters more than damage. Twist: the missing contract was signed with **Maison Célysme's** freight agent (ST-3), so consumer cosmetics and catering labour share a bill of lading. |
| **S14-3 "Hidden Burden" (Liverpool warehouse ↔ Antwerp paper war)** | Warehouse grid + Antwerp `paperWar` map; Rotation Clock; `nonLethalOnly` clerks | File the residency claims that make the women *legally visible* before the ring re-manifests them as cargo. Gimmick: **Visibility Filing** — each claim consumes Intel and time; unfiled women appear in the epilogue under "Re-Shipped", a list the game keeps visible on the Safe House screen for the rest of the campaign. Twist: **Marianna "Celna" Tarkowska** (ST-3) provides the customs attestation for free, on one condition: she wants the Małaszewicze corridor reopened under her supervision. |
| **S14-B "Nobody's Manifest" (Texas Border Yard ↔ Sihanouville, split boss)** | Two-map control; D4-HOSTEL guards (`detainsOnly`); Consent Meter; Process Boss (**Khun Sombat Rithy** re-used) | Break the "relative" classification system by producing **named, consenting witnesses** in both hemispheres simultaneously. Gimmick: **Parallel Testimony** — the boss's process pool drains only when testimony is entered on *both* halves in the same round, forcing real two-front coordination. Win condition is a counter (12 testimonies), zero damage required. |

**New systems:** **INTERPRET** (information gated behind ally recruitment), **Visibility
Filing** (permanent "Re-Shipped" list), **Four Languages, Three Rooms** (positioning-based
dialogue), **Parallel Testimony** (simultaneous multi-map counters), **labour-organiser allies**
(Rani Dasgupta returns in Act VI).
**Why it belongs:** it is the campaign's most humane thread and the only one whose failure state
is a *list of names* rather than a stat penalty; it activates the two nodes you supplied
(Bangladesh, Peru) that were previously background; and it structurally justifies D4's
profitability without showing a single exploitative image.

---

### ST-15 — "THE THIRTY-THIRD SEAT" / *Trzeciaste Miejsce* (all three; convergence thread)

**Your brief:** *(derived — closes the loop your fourth batch opens)* With ST-9…ST-14 added,
the board now has eight desks, four sub-desks and 69 nodes, and the player rightly asks:
**who chairs the meeting?** Answer: nobody — the ring's seventh "desk" is a *seat*: a rotating
chairmanship bought with the KODER 9 settlement balance and occupied by whoever currently
delivers the least risk. This thread is the pre-endgame audit.

**Logline:** Before the final act, the three heroes discover they have been fighting desks that
answer to a chair, and the chair has a name that appears in four of your saved chronicle lines.

| Mission | Setting | Objective · Gimmick · Twist · Trust |
|---|---|---|
| **S15-1 "Chair Count" (Safe House, non-grid)** | Screen-based: Codex, Document Board, Chronicle, KYC history all in one view | Reconcile every owned document into a single ownership graph. Gimmick: **Cross-Thread Audit** — the game reads your real save data (Chronicle Forensics extended) and *scores your consistency*; contradictions you created (lies told in ST-13's KYC Gauntlet) surface here as defence exhibits. Twist: one contradiction is unforgivable — if `wrongRoom == "contract"` (ST-5 branch a), the archived line is exactly the one that named the chair. Your own forgotten page is the MacGuffin. |
| **S15-2 "Thirty-Third Seat" (Dubai → Istanbul → Berlin sleeper chain)** | Three linked hot-spot maps, Ghost State rules; `watchOnly` spotters | Attend the rotation handover as staff. Gimmick: **Seating Puzzle** — 32 seats, 33 delegates; the extra seat is the chair, and identifying it requires one correct answer per node from previous threads (ST-2 collector, ST-3 buyer, ST-9 manager, ST-12 technician, ST-14 interpreter). Every question is answerable from something the player already did. |
| **S15-3 "Least Risk" (Berlin safehouse, non-combat)** | Interview grid, Consent Meter, Objective Fork with printed costs | Decide whether to expose the chair now (burns all remaining lanes but forfeits ST-13's Disclosure bonus) or at the hearing (requires `testimonyEntered` from ST-7 and 12 testimonies from ST-14). Gimmick: **Timing Is The Whole Game** — both routes are fully winnable; the difference is which epilogue lists fill. |
| **S15-B "The Chair" (Rotterdam ASPO ↔ Odessa apron, final split)** | Four-team control (all heroes + partner AI); Card Boss + Process Boss combined | Install a chair the player chooses — Rosa Vacca, Halyna, or an empty one. Gimmick: **Governance Win Condition** — the last "boss" of Campaign 2 is decided by who the *witnesses* accept, computed from Trust, `sarkarTrust`, `dancersConsented`, `guestsExtracted`, `pilgrimsSaved` and testimony counts. No HP anywhere. |

**New systems:** **Cross-Thread Audit** (save-data-driven mission), **Seating Puzzle**
(knowledge check across all threads), **Governance Win Condition** (ending computed from
rescue statistics), **Timing Is The Whole Game**.
**Why it belongs:** it makes the expansion *legible* — a player who has done ten threads needs
one place where all of it pays off mechanically — and it converts the campaign's final battle
from a firefight into a decision about who governs the ports afterwards, which is the thesis
of the entire scenario.

---

### 6C.5 How the new threads change the main campaign

| Thread | Unlocks | Requires | Endgame modifier |
|---|---|---|---|
| ST-9 Roof of Hong Kong | **Floor Ledger**, Advisory Raids, Contract Burn, 11 named rescuable NPCs | ST-6 closed (Neang link) | `floorStockResolved` count feeds the Long Memory roster; −2 `civilianDeaths` if S9-B clears the escrow |
| ST-10 Carnival of the Guests | Desk **D8 CONVIDADO**, Crowd Flow, Badge Table, De-Escalation Boss | ≥1 D2 lane closed | Proves D2/D3 unity: M17's negotiation becomes optional; unlocks ST-13's counterparty |
| ST-11 Joke in San José | **Face Archive** removal, Naming Duel, Caregena as witness | PING `sober ≥ 40` at S11-1 | Decoys stop spawning campaign-wide; Caregena's testimony is required for Fourth Desk |
| ST-12 Big Box in the Jungle | Desk **D9 DESPEJE**, Silence Ring, restitution track | ST-7 `notebookPage4` owned | Land-title restitution is the Honest Road ending's third condition |
| ST-13 The Back Bible | Desk **D10 KRYS**, Beneficial Ownership Chain, Copy Budget | ST-10 `l-mba-dxb`-era list owned | Names the money: Witnesses ending needs KODER 9 page 4+; `merForgeriesLeaked` raises D6 HP |
| ST-14 Girls Who Don't Speak Our Language | **INTERPRET**, Visibility Filing, Parallel Testimony, Rani Dasgupta ally | ≥2 Intel banked + interpreter recruited | Twelve testimonies unlock S15-B; unfiled names populate the "Re-Shipped" epilogue list |
| ST-15 The Thirty-Third Seat | **Cross-Thread Audit**, Governance Win Condition | ≥5 of ST-9…ST-14 closed | Determines which of the 6 endings is reachable; mandatory for Sixth ending |

**Sixth ending (new): "THE EMPTY CHAIR"** — requires S15-B resolved with the chair left vacant,
Trust ≥ 75, `floorStockResolved ≥ 8`, ≥12 testimonies, KODER 9 disclosed, and **zero** GAPs.
La Firma's governance collapses into port-watch cooperatives and no single successor is named;
the chronicle ends mid-sentence because nobody is left who is allowed to sign anything. This is
the campaign's hardest ending and its cleanest one.

**Ending count after this revision: 6** (Witnesses / Ghosts / Fourth Desk / Honest Road /
Long Memory / **Empty Chair**). New failure branches that alter epilogue text without creating
endings: `floorStockResolved`, `stillInsideList`, `caregenaTestified`, `restitutionSigned`,
`copyBudgetSkips[]`, `reshippedList[]`, `chairOwner`.

---

---
---

## 6D. SIDE-THREADS ST-16 … ST-18 (fifth expansion batch — "THE GAP TRADE")

**Your brief:** *(1)* a secret-service plot in **Batumi, Georgia** to kill a blogger exposing the
ring and a terrorist network that uses **borderless hotspots** to smuggle through the EU into the
**Mexico/Texas border**; *(2)* the **Golden Deer crew from the Canton area** trying to kill the
same blogger in **Da Nang, Zhuhai and Delhi**; *(3)* the **captain of an ocean container ship**
who sees stolen cars in containers out of South America and writes them off as **empty** on the
manifest — *"disturb this into the three hero emperors' areas"*.

**What I changed and why (all reversible, all listed in §14 Q16–Q20):**

| Your word | In the build | Reason |
|---|---|---|
| "secret service scenario" | A **deniable private contract** rented through D13 GRANICA, fronting as a freight consultancy. No real intelligence agency is named or implicated anywhere in these three threads | Naming a real service as a blogger-killing agency is defamation of institutions and would sink the game in every market you listed. The *fictional* version plays identically and is unfalsifiable |
| "terrorist network" | **Not used.** Replaced by "an armed-buyer cell that appears in D3's ledger" | Terrorism framing on Georgia/Black Sea would be a real-world accusation with no fictional distance; PEGI/ESRB descriptors also get much worse for no gameplay gain |
| "smug fuck know what thru EU into MX TEXAS" | Read as **people smuggled through EU corridor gaps and re-sold to a Texas-border operator using the same coverage map** — i.e. the *product* being sold is the gap itself | This is the strongest idea in your brief and it needed a name: **the Coverage Map** |
| "blogger" | **Zaza Beridze**, independent publisher — recurring across ST-16/ST-17, and already present in ST-7's world (courier-bloggers) so the campaign has one consistent *press-under-pressure* theme | He must be a person, not a function, or the two assassination threads are just tutorials with guns |
| "golden deer crew from KANTON" | **The Golden Deer / "Thirteen Antlers"** — a Canton-area (Guangzhou/Foshan belt) enforcement-and-collection crew, rented per city by contract. Only three members are ever named | A crew that shows up in Vietnam, China and India on the same job is only credible if they are a *service*, not a gang. That also makes them the campaign's clearest illustration of subcontracting |
| "captain writes containers as empty" | **Captain Ilya "Pustoy" Rudenko**: he does **not** forge anything. He files his own truthful discrepancy report **twelve hours late** and takes cash for waiting | Real cargo crime runs on *timing and silence*, not on falsified keystrokes. This keeps the thread free of operational instruction and gives you a villain who can be turned |
| "disturbed into 3 HERO emperors area" | Implemented literally as **Three Emperor Shells** (§ST-18): each hero owns one quarter of the ship map and one kind of evidence, and no single player can close D12 alone | Turns your phrase into the campaign's first forced-cooperation boss |

**Guardrails added for this batch (implement verbatim, extends §6B/§6C lists):**

12. **No intelligence-agency depiction.** No real state service, emblem, rank structure or
    operation may appear. If a writer needs a state actor, it is the fictional ASEPO Task Force
    "Meridian" (§9.1) — which is *on the heroes' side* and bound by court rules.
13. **No terrorism vocabulary in game text.** Words *terrorist, jihad, cell, attack* are banned
    from all UI, Codex and dialogue. Use *armed buyer*, *shooting cell*, *the incident*.
14. **Journalists are never killed on screen and never become loot.** Zaza's survival is a hard
    flag (`zazaAlive`) that cannot be failed by player inaction during combat — the only way he
    dies is the `done-dark` branch, resolved in narrative with a published-text card, never an
    animation. Press-freedom framing follows the "aftermath convention" (§16.10).
15. **The Coverage Map is never a usable item.** It is evidence. Players may *own*, *disclose*
    and *close* it; there is no state in which a hero moves a unit or a civilian using a mapped
    gap. Any line that describes how a gap is found must be cut (G5 sweep).
16. **No ship-operation instruction.** No bridge procedure, no ISPS checklist reproduction, no
    seal/tamper detail, no stowage arithmetic, no port-security weakness. The deck plan exists
    as tiles and sightlines only; the Manifest Room is a filing cabinet, not a system.
17. **Border corridors show lawful presence.** Laredo/Del Rio and Tijuana maps must contain
    named, human, on-duty officials doing routine work, and must never imply that a real
    crossing is unmonitored. `noDetentionOfCivilians:true` is a hard engine rule on those maps.
18. **The Golden Deer are not a caricature.** No broken-English dialogue, no triad iconography,
    no dragon/deer motif art beyond a plain antler logo on a payment receipt. They speak in
    contract language: deliverables, retention, penalty clauses. Their horror is commercial.

### ST-16 — "THE QUIET HOTEL" / *Cichy Hotel* (all three heroes; the Batumi press-protection thread)

**Logline:** A publisher on the Black Sea coast has assembled the file that names both the ring's
governance desk and its enforcement suppliers, and three separate buyers have independently
ordered the same silence. The heroes arrive to steal the story — and discover they are the fourth
team on the same street.

**Hero lead:** Merhujus (documents), with Mr. PING on tail-work and Blackhujus on the crowd.
**New systems:** **Coverage Map** (evidence board, never usable), **Tail Counter** (how many
independent teams are following the same person — the reveal mechanic), **Lawful Gate** (an
objective that can only be satisfied by giving a real official enough admissible material),
**Second Copy** (a decision about whether to read protected journalism).

| Mission | Setting | Objective · Gimmick · Twist · Trust |
|---|---|---|
| **S16-1 "Four Teams, One Street" (Batumi — New Boulevard front)** | Seaside crowd grid, 24×16, rain, hotel-sign sightlines, cable-car tiles that move units only uphill | Escort Zaza from a café to a guesthouse without triggering any tail. Gimmick: **Tail Counter** — four `watchOnly` tail units follow him, each belonging to a different buyer, and none of them knows about the other three. You win the mission by making two tails spot *each other* (they withdraw, professionally, to re-verify). Twist: one of the four teams is Georgian organised-crime police liaison acting lawfully but invisibly to the heroes — the game never says which until S16-3. Trust: −6 if Zaza is frightened by a hero rather than informed; the dialogue option "we're not rescuing you, we're behind you" is the correct one |
| **S16-2 "The Product Is The Gap" (Antalya annex → Poti freight yard)** | Two linked nodes: an office map (Social Stealth reuse) and an intermodal yard (Rotation Clock + steam concealment) | Obtain the Coverage Map before it is delivered. Gimmick: **Evidence Board Build** — the map arrives as fragments; each fragment is matched to a lane on the world board and *closes nothing*. Reading it raises Intel but raises HEAT (+8) because the ring now knows someone looked. Twist: the Antalya dealer ("Borderless" Kemal Arslan) is selling the identical product at Laredo and Tijuana — the same handwriting, two continents, one spreadsheet. He is `parleyable` and offers it to you for free, which is the most disturbing beat in the thread: the gap was never scarce, only expensive |
| **S16-3 "Harbour Paperwork" (Batumi harbour post + ferry apron)** | Evidence-Only map, zero hostile units except a `detainsOnly` clerk | Get Zaza out legally while his archive stays publishable. Gimmick: **Lawful Gate** — Lieutenant Kvirikashvili will sign one exit form and nothing else, and she refuses sealed evidence outright. You must hand her something *she can act on and protect*: an unsealed invoice trail, a named vessel, a date. Every shortcut available in other threads (forgery, bribery, distraction) is disabled here and the UI prints why. Twist: the file she needs is the one Blackhujus has been sitting on since Act II — the weight tickets from D2. The campaign makes your own earlier hoarding the obstacle |
| **S16-B "The Quiet Hotel" (Tbilisi relay room → Batumi rooftop, split finale)** | Interview grid then a vertical escape map; wind/glass tiles reused from ST-9 | Decide what happens to the story. Gimmick: **Second Copy** — Sopiko will release the archive only if the heroes promise not to read it, and the engine enforces the promise: opening the drive mid-mission forfeits the Witnesses ending path. Fork with printed costs: **(a) publish via her outlet** (archive safe, Zaza stays in-country, D13 stays open), **(b) hand to ASEPO "Meridian"** (D13 lanes closable, publication delayed two acts, `zazaExposed` true), **(c) publish now from the rooftop** (fastest, HEAT +20, one tail team reaches the stairwell — resolvable only if `kvyrikashviliPaperwork` done). Boss: **"Ambassador" Gogokhia**, Card Boss, `hpless`, objection deck built from transit-law codes; defeated by CITE THE LOG ×3 with documents owned from ST-3/ST-8/ST-18 |

**Why it belongs:** it is the first thread where the heroes' *job description* is wrong. They came
to steal a story for the ring's enemies and end up protecting a journalist from four clients at
once — and the campaign finally names the thing it has been describing since §4: the ring sells
**absence**. Also: it puts Georgia on the board honestly (Batumi/Poti as a transit geography, not
as a criminal label) and gives the Texas/Mexico leg a European twin so the US border stops being
the exotic exception.

### ST-17 — "THIRTEEN ANTLERS" / *Trzynaście Poroży* (Mr. PING solo; the Golden Deer thread)

**Logline:** After Batumi fails, the contract is re-let to a crew that charges by the city. Three
jobs, three countries, one invoice number — and Mr. PING has to prove it is the same thirteen men
before anyone believes him.

**Hero lead:** Mr. PING (solo, stealth-only). **New systems:** **Cross-Match Board** (three-city
identity matching — Badge Table extended), **Escrow Retainer** (a boss whose HP is money),
**Contract Language** (dialogue system: the crew can only be beaten by their own terms),
**Same Face Flag** (persistent recognition across maps).

| Mission | Setting | Objective · Gimmick · Twist · Trust |
|---|---|---|
| **S17-1 "Guesthouse Row" (Da Nang — beach-road cluster)** | Low-rise rooftop grid, laundry-line cover, evening market crowds | Reach Zaza before the crew books the adjacent rooms. Gimmick: **Reservation Race** — both sides hold the same booking code; whoever presents it first gets the tile, and the staff are neutral NPCs who refuse to choose. Three crew faces seen, not fought (`watchOnly`). Twist: the crew is *late* because they were hired by a competing buyer, not by La Firma — the heroes are outrunning a rival, not a ring |
| **S17-2 "The Wholesale Mall" (Zhuhai — portside mall)** | Indoor crowd grid, escalator tiles, shuttered bays, CCTV cones | Photograph the crew's logistics man entering a delivery bay, then match him against S17-1. Gimmick: **Cross-Match Board** — nine attributes (shoe sole, bag strap, receipt format, payment slip, cufflink, gait, phone case, accent marker, invoice prefix); three matches confirm identity, and the game will let you accuse on two, which is the trap. Twist: accusing on two triggers a public scene, HEAT +15, and the crew withdraws — the thread continues but `deerWarned` permanently raises their counter-detection in S17-3 |
| **S17-3 "Courier Depot" (Delhi — Okhla depot)** | Depot grid, parcel-flow conveyor tiles, night apron hot-spot rules | Find the escrow ledger that proves one contract across three cities. Gimmick: **Parcel Flow** — the objective token moves along conveyor tiles each round; you cannot grab it, you can only reroute it (Blackhujus's Green Ledger reveals which junction). Crew members are `detainsOnly`: they never damage PING, they confiscate his gear, which is mechanically worse. Twist: the ledger shows the crew's client is the *same freight consultancy* Gogokhia runs — the two threads converge on one paper seat, and the player who did ST-16 recognises the invoice prefix instantly |
| **S17-B "Retention And Penalty" (Istanbul sleeper → Tbilisi relay, chase finale)** | Linked hot-spot maps, Ghost State rules, Rotation Clock | End the contract without violence. Gimmick: **Escrow Retainer** — the crew's "boss bar" is money held in escrow; every action spends or releases it, and Uncle Kam Cheong (`parleyable`) will call the whole thing off if the player can show a *contractual* failure: the client promised a date, the date passed, the penalty clause voids the retainer. Win condition is a signed release, not a body count. Optional harder route: pay the retainer yourself from Intel bank (spends 6 Intel, `deerBoughtOff` — morally clean, strategically terrible: the crew returns as a paid enemy in M23). Final beat: Sing "Two Tickets" hands PING his own seized passport back and says the crew never touches travel documents of people they are paid to find — the line that makes them human and still guilty |

**Why it belongs:** it answers the question ST-16 leaves open (*who actually does the violence?*
— answer: somebody else, invoiced), and it gives Mr. PING the only solo thread where his skill is
*recognition* rather than movement. Structurally it is also the cheapest thread to build: three
crowd grids, one shared enemy archetype set, no new tile families beyond conveyors.

### ST-18 — "EMPTY AS DECLARED" / *Pusty Jak Deklarowano* (all three; the manifest thread)

**Logline:** A feeder ship's master sees what is really in the boxes leaving South America, writes
nothing false, files everything late, and takes an envelope. Twelve hours of silence turn stolen
cars into declared empties — and the three heroes each own one quarter of the proof.

**Hero lead:** Blackhujus (source-side loading), Mr. PING (aboard during the port call),
Merhujus (the paper trail). **New systems:** **Three Emperor Shells** (forced three-way split),
**Discrepancy Window** (a twelve-hour timer that is the level), **Late-Filing Meter**,
**Vindication Track** (Halyna's ignored report becomes the key exhibit).

| Mission | Setting | Objective · Gimmick · Twist · Trust |
|---|---|---|
| **S18-1 "The Envelope" (Cartagena apron → Black Sea feeder anchor)** | Two-node load-out map; baling/crane tiles from Act II reused | Learn that the discrepancy report exists and was bought. Gimmick: **Late-Filing Meter** — the truth is already written; the mission is a countdown to when it becomes useless. Blackhujus's `Green Ledger` finds the pallet weights that don't match the declared equipment. Twist: Rudenko is not lying. His report is accurate, dated, and simply filed after the boxes left. The crime is a delay, and the game says so out loud in the debrief |
| **S18-2 "Hatch Run: Deck Four" (MV *Kolport*, port call)** | The campaign's first ship grid: four decks, hatch/stair tiles, CCTV cones, Manifest Room objective tile | Retrieve the filing log during a lawful boarding window. Gimmick: **Boarding Window** — you have 9 rounds because the ship is under inspection; every hostile action ends the visit and locks the node for an act. Mr. PING's `Hatch Run` shines; weapons are not carried aboard (engine-enforced, printed in briefing). Twist: Chief Officer Okonkwo *wants* to be caught — she filed on time once and lost her licence for eleven months. She is the thread's ally, and the campaign's argument that reporting is punished and delay is not |
| **S18-3 "Three Emperor Shells" (Valencia car terminal + Cardiff/Hull wash bay + Kochi auditor's office, simultaneous)** | Three maps controlled at once (two-team control extended to three) | Close D12 by proving one chain: loaded ≠ declared ≠ reported. Gimmick: **Shell Rules** — each hero owns one kind of evidence and can only verify the others' work through a shared Document Board; no shell can finish alone, and a solo player loses the mission by splitting attention (printed cost, not hidden). Marina Talypova is non-combat: she is beaten by a bank reconciliation (NAME THE OWNER reuse). Twist: Halyna Voronenko's Act II report — the one the task force filed and forgot — is the missing third link. Her vindication is automatic if the player kept it; if they discarded it, the thread closes `done-dark` |
| **S18-B "Twelve Hours" (Odessa apron ↔ Rotterdam cold store, final)** | Split map, Cold Chain rules from ST-8 reused, Rotation Clock | Choose the ship's fate. Fork with printed costs: **(a) intercept at sea** (illegal, kills the Witnesses path, +30 HEAT), **(b) disclose at the next lawful port call** (needs `raghunathanAccess` + `okonkwoTestimony`; slow, clean, unlocks D12 closure board-wide), **(c) turn Rudenko** (requires Trust ≥65 with him built across S18-1/2/3; he files his own report *early* for the first time, and the ring's entire Valencia lane stalls on its own paperwork). Boss: **Captain Rudenko**, `hpless`, `processBoss` — his bar is the **Discrepancy Window**; you drain it by filing, corroborating and testifying, never by damage |

**Why it belongs:** it is the most *realistic* thread in the campaign and the one that makes the
other two land. Human trafficking (D4), cars (D2) and weapons-in-parts (D3) all move on water, and
none of it survives contact with a truthful officer — so the ring buys twelve hours instead of
buying a signature. Mechanically it forces the three heroes together for the first time (your
"emperor shells"), and narratively it hands the campaign its best line: *the manifest said EMPTY,
and it was almost true.*

---

### 6D.5 How the fifth batch changes the main campaign

| Thread | Unlocks | Requires | Endgame modifier |
|---|---|---|---|
| ST-16 Quiet Hotel | Desk **D13 GRANICA**, Coverage Map (evidence), Lawful Gate, Tail Counter, Zaza as witness | ≥2 D4 lanes closed + `koderDisclosed` OR `weightTickets` owned | `zazaPublished` adds a seventh epilogue list; choosing (b) makes D13 closable board-wide; opening the Second Copy forfeits Witnesses |
| ST-17 Thirteen Antlers | **Cross-Match Board**, Escrow Retainer, Contract Language; Golden Deer become a reusable neutral faction | S16-1 done (or skipped with `deerUnknown`, which locks S17-B's clean win) | If `deerBoughtOff`, the crew spawns as paid hostiles in M23/S15-B; if released contractually, they refuse the ring's next three contracts (fewer spotters campaign-wide) |
| ST-18 Empty As Declared | Desk **D12 PUSTOY**, Three Emperor Shells, Discrepancy Window, Okonkwo + Raghunathan allies, Halyna vindication | Act II completed (M5–M8) + `halynaReport` still in inventory | Closing D12 turns every D2 lane closable by *paper* alone; required for the seventh ending; `rudenkoTurned` is the Honest Road ending's fourth condition |

**Seventh ending (new): "THE EARLY FILING"** — requires S18-B resolved via (c) *and* S16-B via
(b) *and* S17-B won contractually, plus Trust ≥70, `zazaAlive`, `gaps.bh+ping+mer ≤ 1`. Nobody is
beaten, nothing is intercepted at sea, and the ring stops because a captain files on time, a
journalist publishes, and a crew's retainer expires. The chronicle's last page is a port-authority
receipt. This is the campaign's truest ending and its hardest, and it exists to prove the thesis:
**the ring owns gaps, and gaps are closed by punctuality.**

**Ending count after this revision: 7** (Witnesses / Ghosts / Fourth Desk / Honest Road / Long
Memory / Empty Chair / **Early Filing**). New failure branches that alter epilogue text without
creating endings: `zazaAlive`, `zazaExposed`, `secondCopyOpened`, `coverageMapClosed`,
`deerReleased` vs `deerBoughtOff`, `deerWarned`, `lateFilingWindowMissed`, `halynaVindicated`,
`okonkwoTestimony`, `rudenkoTurned`, `talypovaReconciled`.

---

## 7. NEW SKILL-CHECK SYSTEM (uses existing stats; no real techniques)

Safe Houses let the player spend **Intel tokens** on checks. Roll = d20 equivalent
(`Math.random()*20`) + skill + gear − heat. Difficulty tiers: Routine 10, Sharp 14,
Impossible 18.

| Check | Attribute used | Typical difficulty | Success effect | Failure cost |
|---|---|---|---|---|
| **TRACE** (follow a lane on the board) | Mr. PING `Forty-Seven Seconds` | 12 | Reveal lane toggles | Heat +1 |
| **ARCHIVE** (recover a GAP) | Merhujus `Telematics` | 14 | Restore 1 chronicle entry | Intel −1 |
| **PATTERN** (link two desks) | Blackhujus `Green Ledger` | 16 | Unlock desk-merge mission early | None |
| **PORT TALK** (social intel) | highest-charisma hero | 10 | Buy patrol schedule | Trust −5 if refused |
| **COLD READ** (spot an informant) | Mr. PING | 13 | Prevent betrayal | One civilian lost |
| **SEAL CHECK** (manifest vs. seal numbers — paper only) | Merhujus `Telematics` | 15 | Reveals a switched carton; unlocks ST-3 S3-3 early win | Heat +6, Trust −4 |
| **WATCH** (read a crowd / CCTV room) | Blackhujus `Green Ledger` | 11 | Neutral-crowd missions become survivable (ST-4) | Crowd panics, mission fail |
| **GHOST WALK** (move unseen through a checkpoint) | Mr. PING `Forty-Seven Seconds` | 15 | ST-5 only: pass a `ghostState` tile without triggering the WATCH check | Restart at last checkpoint (no partial credit) |
| **PUBLISH A GAP** (close one pinned document gap) | Merhujus `Telematics` | 12 | ST-6 Document Board: +1 Intel per closed gap | −1 action for the hero; board stays open |
| **HOLD THE ROOM** (talk a crowd out of a hazard zone) | highest-charisma hero | 13 | ST-5 S5-3 fork (b)/(c): evacuees reach the stair well before the alarm | Alarm clock moves from round 8 to round 5 |
| **BID THE LEDGER** (out-bid the ring's auditor) | Blackhujus `Green Ledger` | 11 | ST-8: spend 1 Intel to claim the box before Auditor Vos | She claims it; Cold Chain loses 1 round either way |
| **CITE THE LOG** (answer an Objection card with matching evidence) | Merhujus `Telematics` | 13 | ST-7 S7-B Cross-Examination Duel: strike one objection | Two strikes = mistrial branch (`mistrial:true`) |
| **FLOOR LEDGER** (reconcile two adjacent manifests) | Merhujus `Two Ledgers` | 14 | ST-9: reveals which floors are mis-declared; +1 Intel per matched pair | Heat +4, one floor locks for 3 rounds |
| **CROWD WALK** (move with a parade flow without being read) | Mr. PING `Forty-Seven Seconds` | 12 | ST-10: cross a Noise Cover round unseen | Badge Table gains a false entry (recoverable via PUBLISH A GAP) |
| **NAME THE OWNER** (beneficial-ownership graph step) | Merhujus `Telematics` | 16 | ST-13: remove one KODER 9 page from the boss deck | −1 Intel; page stays live forever in this run |
| **INTERPRET** (obtain testimony through an ally interpreter) | Rani Dasgupta / any recruited linguist | 10 | ST-14: unlocks one witness statement tile cluster | Testimony shows as *shapes*; retry costs 1 action, never Trust |
| **SEATING CHECK** (identify the thirty-third delegate) | highest-intelligence hero | 15 | ST-15/M23: names the chair from owned documents only | Wrong guess narrows reachable endings (printed before commit) |
| **HOLD THE ROOF** (defend an extraction point against `watchOnly` units) | Blackhujus `Green Ledger` | 13 | ST-9 S9-B: extend escrow void by 1 round | Wind tile pushes your unit 1; no damage taken |
| **DE-ESCALATE** (arrange a meeting between two suspicious teams) | Mr. PING / highest-charisma hero | 14 | ST-10-B: +1 toward the 3-meeting win counter | Both teams raise HEAT +8 and stop trusting you for 2 rounds |
| **TAIL READ** (identify which tail unit belongs to which buyer) | Mr. PING `Forty-Seven Seconds` | 12 | ST-16 S16-1: reveals one tail's employer; two correct reads let you stage a tail-on-tail meeting | That tail stops following Zaza and starts following *you* (`counterWatched`) |
| **CITE THE LOG** *(reused)* — answer an objection with a matching document | Merhujus `Telematics` | 13 | ST-16-B Gogokhia duel: strike one transit-code objection | Two strikes = the consultancy files for protective review; D13 lanes reopen next act |
| **MATCH THE FACE** (cross-city identity confirmation) | Blackhujus `Green Ledger` / any hero | 15 | ST-17: 3 attribute matches confirm one crew across three cities; unlocks Contract Language dialogue | Accusing on 2 matches → public scene, HEAT +15, `deerWarned` permanent |
| **READ THE CONTRACT** (find the clause that voids an obligation) | Merhujus `Telematics` | 16 | ST-17-B: locate the penalty/retention clause; releases the escrow and ends the thread without combat | Failure costs 1 Intel and the crew's rate rises (their `dmg` stays 0 — only their retainer grows) |
| **FILE ON TIME** (submit corroborated paperwork inside a window) | any hero holding the exhibit | 14 | ST-18: drains Rudenko's Discrepancy Window by 4 hours per success; required ×3 for the Early Filing ending | Window closes; `lateFilingWindowMissed` true, D12 becomes closable only via branch (a) or (b) |
| **AUDIT TRAIL** (lawfully open a vessel/terminal record set) | Auditor Raghunathan (ally) or Merhujus | 13 | ST-18 S18-2/S18-3: grants Boarding Window extension +1 round and reveals the second discrepancy list (D12-VIGASZ) | Inspection visit ends; MV *Kolport* node locked until next port call |
| **HEAT** (global, passive) | — | — | — | Raises spawn counts, tightens timers |

**HEAT** is the campaign's tension dial: 0–100. It rises with violence and failed
checks, falls with patience and civilian rescues. High HEAT is not "game over" — it
changes which endings are reachable (Witnesses needs HEAT <70).

---

## 8. DATA SCHEMA (code-ready drop-in)

Additive to the current `game.js`; nothing breaks existing encounters.

```js
// ---- world nodes -------------------------------------------------------------
const NODE_DEFS = [
  { id:"tumaco",  name:"Tumaco–Pasto Coast", region:"andes",   type:"depot",   desk:"D1",
    tags:["source","slope","rain"],            hero:"bh" },
  { id:"callao",  name:"Lima / Callao",        region:"andes",   type:"port",    desk:"D1",
    tags:["consolidation"],                    hero:"bh" },
  { id:"cartagena",name:"Cartagena",           region:"carib",   type:"mainPort",desk:"D4",
    tags:["hub","seaLeg","apron"],             hero:"ping" },
  { id:"miami",   name:"Miami",                region:"north",   type:"mainPort",desk:"D2",
    tags:["boss","bazaar"],                    hero:"all" },
  { id:"texas",   name:"Texas Border Yard",    region:"north",   type:"hotSpot", desk:"D4",
    tags:["platoon","steam","rotation"],       hero:"bh" },
  { id:"california",name:"California Port Zone",region:"north",  type:"gate",    desk:"D2",
    tags:["carriers","chase"],                 hero:"ping" },
  { id:"mexcio",  name:"Mexicali",             region:"north",   type:"gate",    desk:"D4",
    tags:["mirrorMap"],                        hero:"mer" },
  { id:"newyork", name:"New York",             region:"north",   type:"washPort",desk:"D2",
    tags:["brokers","infoMarket"],              hero:"ping" },
  { id:"boston",  name:"Boston",               region:"north",   type:"washPort",desk:"D4",
    tags:["coldRow","witness"],                 hero:"mer" },
  { id:"rio",     name:"Rio de Janeiro",       region:"southatl",type:"hotSpot", desk:"D2",
    tags:["favela","vertical"],                hero:"ping" },
  { id:"rotterdam",name:"Rotterdam",           region:"euwash",  type:"mainPort",desk:"D4",
    tags:["hub","stack3d"],                    hero:"ping" },
  { id:"antwerp", name:"Antwerp",              region:"euwash",  type:"mainPort",desk:"D3",
    tags:["paperWar","frontCo"],               hero:"mer" },
  { id:"liverpool",name:"Liverpool",           region:"euwash",  type:"washPort",desk:"D3",
    tags:["crane","warehouse"],                hero:"ping" },
  { id:"hull",    name:"Hull",                 region:"euwash",  type:"washPort",desk:"D4",
    tags:["roro","timer"],                     hero:"bh" },
  { id:"cardiff", name:"Cardiff",              region:"euwash",  type:"washPort",desk:"D4",
    tags:["tidal","water"],                    hero:"bh" },
  { id:"berlin",  name:"Berlin",               region:"euwash",  type:"hotSpot", desk:"D2",
    tags:["motorwayRing","safeHouse"],         hero:"mer" },
  { id:"bialystok",name:"Białystok",           region:"eastgate",type:"hotSpot", desk:"D2",
    tags:["greyZone","rotation"],              hero:"all" },
  { id:"paris",   name:"Paris",                region:"euwash",  type:"hotSpot", desk:"D3",
    tags:["surveillance"],                     hero:"ping" },
  { id:"hanguera",name:"La Hangüera",          region:"southes", type:"hotSpot", desk:"D1",
    tags:["strait","ferryClock"],              hero:"bh" },
  { id:"almunia", name:"South Spain Strip",    region:"southes", type:"node",    desk:"D1",
    tags:["glasshouse","fog"],                 hero:"bh" },
  { id:"egei",    name:"South Turkey Strip",   region:"med",     type:"node",    desk:"D3",
    tags:["tourismCover"],                     hero:"mer" },
  { id:"samsun",  name:"Samsun / Egei Link",   region:"med",     type:"node",    desk:"D2",
    tags:["blackSeaFeeder"],                   hero:"ping" },
  { id:"odessa",  name:"Odessa",               region:"blacksea",type:"port",    desk:"D2",
    tags:["rubble","winter"],                  hero:"halyna" },
  { id:"dubai",   name:"Dubai",                region:"gulf",    type:"freezone",desk:"D2",
    tags:["reexport","tariffGame"],            hero:"mer" },
  { id:"mumbai",  name:"Mumbai / Nhava Sheva", region:"indian",  type:"port",    desk:"D3",
    tags:["assembly","monsoon"],               hero:"bh" },
  { id:"bangkok", name:"Bangkok",              region:"sea",     type:"port",    desk:"D3",
    tags:["empire","clinic"],                  hero:"anong" },
  { id:"chittagong",name:"Chattanga–Mongla",   region:"bengal",  type:"port",    desk:"D3",
    tags:["craneLane"],                        hero:"ping" },
  { id:"phnompenh",name:"Phnom Penh",          region:"sea",     type:"riverPort",desk:"D4",
    tags:["docs","clinic4"],                   hero:"ping" },
  { id:"sihanouville",name:"Sihanouville",     region:"sea",     type:"mainPort",desk:"D4",
    tags:["hub","islands","ledger"],           hero:"all" },
  { id:"hochiminh",name:"Ho Chi Minh City",    region:"sea",     type:"node",    desk:"D3",
    tags:["workshops"],                        hero:"mer" },
  { id:"danang",  name:"Da Nang",              region:"sea",     type:"node",    desk:"D3",
    tags:["handover","typhoon"],               hero:"ping" },
  { id:"hongkong",name:"Hong Kong",            region:"pacific", type:"port",    desk:"D2",
    tags:["finance","peakChase"],              hero:"ping" },
  { id:"tokyo",   name:"Tokyo",                region:"pacific", type:"terminal",desk:"D3",
    tags:["neon","finale"],                    hero:"all" },

  // ---- nodes added by side-threads ST-1..ST-4 (see §6B / §16) --------------
  { id:"moscow",   name:"Moscow",               region:"eastgate", type:"sourceNode", desk:"D4",
    tags:["bonded","winter","maison"],          hero:"ping" },      // ST-3
  { id:"malaszewicze",name:"Małaszewicze Rail Gate",region:"eastgate",type:"gate",   desk:"D4",
    tags:["gaugeChange","sealCheck","apron"],   hero:"ping" },      // ST-3
  { id:"warsaw",   name:"Warsaw",               region:"eastgate", type:"washCity",   desk:"D6",
    tags:["brokers","safeHouse","glassTiles"],  hero:"mer" },       // ST-3
  { id:"london",   name:"London / Home Counties",region:"euwash",  type:"enforceSeat",desk:"D6",
    tags:["cctv","estate","ledgerPhone"],       hero:"mer" },       // ST-1
  { id:"manchester",name:"Manchester Trafford Park",region:"euwash",type:"node",     desk:"D6",
    tags:["canal","steam","linkedMorale"],      hero:"bh" },        // ST-2
  { id:"bristol",  name:"Bristol Avonmouth",    region:"euwash",   type:"washPort",   desk:"D1",
    tags:["tidal","crane","pickup"],            hero:"bh" },        // ST-2
  { id:"lagos",    name:"Lagos – Ikorodu/Ladipo",region:"westafr", type:"coastNode",  desk:"D5",
    tags:["lagoon","stilts","crowd"],           hero:"bh" },        // ST-4
  { id:"mombasa",  name:"Mombasa / Port Tudor", region:"indianocean",type:"port",     desk:"D5",
    tags:["dhow","coral","monsoon","caravan"],  hero:"bh" },        // ST-4
  { id:"calicorridor",name:"Cali Corridor Shrine House",region:"andes",type:"faithFront",desk:"D5",
    tags:["dialogueOnly","candles"],            hero:"bh" },        // ST-4

  // ---- nodes added by side-threads ST-5..ST-8 (see §6B / §16A-§16C) ----------
  { id:"a2lodz",   name:"Łódź WZ Service Area",     region:"eastgate", type:"hotSpot", desk:"D7",
    tags:["platoon","steam","rotation","ghostState"], hero:"ping" },   // ST-5
  { id:"a2poznan", name:"Poznań West Sleepers",     region:"eastgate", type:"hotSpot", desk:"D7",
    tags:["platoon","rotation","ghostState"],        hero:"ping" },   // ST-5
  { id:"swiecko",  name:"Świecko Border Gate",      region:"eastgate", type:"gate",    desk:"D7",
    tags:["checkpoint","sealCheck","ghostState"],    hero:"ping" },   // ST-5
  { id:"pattaya",  name:"Pattaya Jomtien Strip",    region:"sea",      type:"node",    desk:"D7",
    tags:["penthouse","pool","fog","crowd","relapse"], hero:"ping" }, // ST-5
  { id:"bkksoi",   name:"Bangkok Soi Lert",         region:"sea",      type:"cityNode",desk:"D7",
    tags:["clinic","splitMap","ledger"],             hero:"ping" },   // ST-5
  { id:"siemreap", name:"Siem Reap",                region:"sea",      type:"roadNode",desk:"D4",
    tags:["market","documentBoard","crowd"],         hero:"mer" },   // ST-6
  { id:"incheon",  name:"Incheon Convention Belt",  region:"pacific",  type:"airportNode",desk:"D3",
    tags:["socialStealth","loadingBay","glassTiles"],hero:"mer" },   // ST-6
  { id:"warsawmok",name:"Warsaw Mokotów Offices",   region:"eastgate", type:"officeNode",desk:"D4",
    tags:["turnstile","glassRooms","consentMeter"],  hero:"mer" },   // ST-6
  { id:"bialpark", name:"Białystok Industrial Park",region:"eastgate", type:"detention",desk:"D4",
    tags:["cages","cctv","noise","evidenceOnly"],    hero:"all" },   // ST-7
  { id:"playablanca",name:"Playla Blanca Apron",    region:"carib",    type:"labourCamp",desk:"D4",
    tags:["sand","trench","heatClock","dignityRules"],hero:"all" },  // ST-7
  { id:"aspo",     name:"Rotterdam ASPO Hearing Room",region:"euwash", type:"courtroom",desk:"D4",
    tags:["nonCombat","objectionCards","splitMap"],  hero:"all" },   // ST-7
  { id:"almeria",  name:"Almería Packing Shed",     region:"southes",  type:"depot",   desk:"D1",
    tags:["glasshouse","coldChain","fog","farmworkers"],hero:"bh" }, // ST-8
  { id:"laemchabang",name:"Laem Chabang / Chonburi",region:"sea",      type:"port",    desk:"D1",
    tags:["packingPlant","threeteam","dusk"],        hero:"bh" },    // ST-8

  // ---- nodes added by side-threads ST-9..ST-15 (see §6C / §16D) --------------
  { id:"hkfront",   name:"Hong Kong Causeway Bay Front", region:"pacific", type:"tower",  desk:"D4",
    tags:["vertical","floorLedger","cctv","rescue"],  hero:"mer" },   // ST-9
  { id:"kowsafe",   name:"Kowloon Safehouse + Labour Dept",region:"pacific",type:"interview",desk:"D4",
    tags:["nonCombat","consentMeter","stillInside"],  hero:"mer" },   // ST-9
  { id:"hpeak",     name:"Victoria Peak Transfer Point", region:"pacific", type:"bossMap", desk:"D6",
    tags:["rooftop","wind","glassTiles","escrow"],  hero:"all" },   // ST-9
  { id:"vilaaurora",name:"Vila Aurora (fictional hillside)",region:"southatl",type:"neighbourhood",desk:"D8",
    tags:["crowdFlow","council","civicRequest"],     hero:"ping" },  // ST-10
  { id:"riosponsor",name:"Rio Sponsor Village",       region:"southatl", type:"crowdNode",desk:"D8",
    tags:["badgeTable","noiseCover","paradeTiles"],   hero:"ping" },  // ST-10
  { id:"riomarina", name:"Marina da Glória Cluster",  region:"southatl", type:"waterNode",desk:"D10",
    tags:["boardingRamp","reeferBarge","list"],      hero:"ping" },  // ST-10
  { id:"sanjose",   name:"San José Barrio México",    region:"north",    type:"crowdNode",desk:"D4",
    tags:["publicAttention","detainsOnly","relapse"],hero:"bh" },    // ST-11
  { id:"escazu",    name:"Escazú Clinic",             region:"north",    type:"interview",desk:"D4",
    tags:["nonCombat","healthOutreach","consentMeter"],hero:"bh" },  // ST-11
  { id:"moin",      name:"Moín / Puerto Limón Docks", region:"north",    type:"dock",     desk:"D4",
    tags:["rain","tidalCut","faceArchive"],          hero:"ping" },  // ST-11
  { id:"junglecamp",name:"Jungle Camp (Playla Interior)",region:"carib", type:"terrain",  desk:"D9",
    tags:["silenceRing","mud","river","canopy"],    hero:"bh" },    // ST-12
  { id:"coastcouncils",name:"Nariño–Chocó Coast Councils",region:"andes",type:"community",desk:"D9",
    tags:["landTitles","testimony","restitution"],  hero:"mer" },   // ST-12
  { id:"sternberg", name:"Sternberg Branch (fictional)",region:"euwash", type:"vault",    desk:"D10",
    tags:["evidenceOnly","copyBudget","alarmZones"], hero:"mer" },   // ST-13
  { id:"zurichdist",name:"Zürich-District Offices",   region:"euwash",   type:"officeNode",desk:"D10",
    tags:["kycGauntlet","socialStealth","depositBox"],hero:"mer" }, // ST-13
  { id:"chiasso",   name:"Chiasso Road Gate",         region:"euwash",   type:"gate",     desk:"D10",
    tags:["platoon","rotation","railLane"],          hero:"ping" },  // ST-13
  { id:"luganodist",name:"Lugano-District Shell Offices",region:"euwash",type:"paperNode", desk:"D10",
    tags:["ownershipChain","graphPuzzle"],            hero:"mer" },   // ST-13
  { id:"dhakagate", name:"Dhaka Air Gate",            region:"bengal",   type:"gate",     desk:"D4",
    tags:["interpret","manifestRelatives","heatClock"],hero:"all" },// ST-14
  { id:"garmentbd", name:"Chattogram Garment Floor",  region:"bengal",   type:"workplace",desk:"D4",
    tags:["allyRecruit","wageDispute","lawfulLeverage"],hero:"bh" },// ST-14
  { id:"callaomkt", name:"Callao Market + La Libertad",region:"andes",   type:"coastal",  desk:"D4",
    tags:["threeRooms","documentBoard","coldRoom"], hero:"mer" },   // ST-14
  { id:"berlinlounge",name:"Berlin Handover Lounge",  region:"euwash",   type:"interview",desk:"D11",
    tags:["seatingPuzzle","objectiveFork","knowledgeCheck"],hero:"all"}, // ST-15
  { id:"istansleeper",name:"Istanbul Sleeper Annex",  region:"med",      type:"hotSpot",  desk:"D11",
    tags:["platoon","ghostState","rotation"],       hero:"ping" },  // ST-15
  { id:"aspoannex", name:"Rotterdam ASPO Annex",      region:"euwash",   type:"courtroom",desk:"D11",
    tags:["cardBoss","processBoss","disclosureClock"],hero:"all" },  // ST-13 / ST-15
  // ---- nodes added by the fifth batch (§6D / ST-16..ST-18) ----
  { id:"batumi",     name:"Batumi New Boulevard Front",region:"blacksea", type:"crowd",   desk:"D13",
    tags:["tails","neutralCrowd","cableCar"],         hero:"mer" },   // ST-16
  { id:"batumipost", name:"Batumi Harbour Post",       region:"blacksea", type:"gate",    desk:"D13",
    tags:["lawfulGate","evidenceOnly","noForgery"],   hero:"mer" },   // ST-16
  { id:"poti",       name:"Poti Freight Yard",         region:"blacksea", type:"intermodal",desk:"D12",
    tags:["rotation","steam","invoiceTrail"],         hero:"bh" },    // ST-16 / ST-18
  { id:"kolportanch",name:"Black Sea Feeder Anchor",   region:"blacksea", type:"water",   desk:"D12",
    tags:["boarding","shipToShore"],                  hero:"ping" },  // ST-18
  { id:"tbilisi",    name:"Tbilisi Relay Room",        region:"blacksea", type:"interview",desk:"D13",
    tags:["archiveHandoff","consentMeter","secondCopy"],hero:"all" }, // ST-16
  { id:"antalya",    name:"Antalya Coverage Annex",    region:"med",      type:"hotSpot", desk:"D13",
    tags:["socialStealth","parleyable","coverageMap"],hero:"ping" },  // ST-16
  { id:"laredo",     name:"Laredo–Del Rio North Yard", region:"usmx",     type:"hotSpot", desk:"D13",
    tags:["platoon","ghostState","noDetentionOfCivilians"],hero:"bh" },// ST-16
  { id:"tijuana",    name:"Tijuana East Yard",         region:"usmx",     type:"hotSpot", desk:"D13",
    tags:["platoon","mirrorMatch","handwriting"],     hero:"bh" },    // ST-16
  { id:"dananggh",   name:"Da Nang Guesthouse Row",    region:"sea",      type:"crowd",   desk:"D13",
    tags:["reservationRace","rooftops","laundryCover"],hero:"ping" }, // ST-17
  { id:"zhuhaimall", name:"Zhuhai Portside Mall",      region:"pacific",  type:"crowd",   desk:"D13",
    tags:["crossMatch","escalators","cctvCones"],     hero:"ping" },  // ST-17
  { id:"okhla",      name:"Delhi Okhla Courier Depot", region:"southas",  type:"depot",   desk:"D13",
    tags:["parcelFlow","detainsOnly","escrowLedger"], hero:"ping" },  // ST-17
  { id:"kolport",    name:"MV Kolport Deck Plan",      region:"sea",      type:"ship",    desk:"D12",
    tags:["boardingWindow","manifestRoom","noWeapons"],hero:"ping" }, // ST-18
  { id:"valencia",   name:"Valencia Car Terminal",     region:"euwash",   type:"terminal",desk:"D12",
    tags:["roro","secondList","nonCombatBoss"],       hero:"mer" },   // ST-18
  { id:"ukwashbay",  name:"Cardiff–Hull Reefer Wash Bay",region:"uk",     type:"coldStore",desk:"D12",
    tags:["pickupGrammar","weightTickets","coldChain"],hero:"bh" },   // ST-18
  { id:"kochi",      name:"Kochi Auditor's Office",    region:"southas",  type:"interview",desk:"D12",
    tags:["auditTrail","lawfulAccess","allyRecruit"], hero:"mer" },   // ST-18
];

// ---- lanes ------------------------------------------------------------------
// cut[] holds "sea" | "land" | "paper"; a lane is CLOSED when cut.length >= 2
const LANE_DEFS = [
  { id:"l-cart-mia", from:"cartagena", to:"miami",      cut:[], desks:["D1","D4"] },
  { id:"l-mia-bos",  from:"miami",     to:"boston",     cut:[], desks:["D2","D4"] },
  { id:"l-nyc-ant",  from:"newyork",   to:"antwerp",    cut:[], desks:["D2","D3"] },
  { id:"l-ant-rot",  from:"antwerp",   to:"rotterdam",  cut:[], desks:["D3","D4"] },
  { id:"l-rot-hul",  from:"rotterdam", to:"hull",       cut:[], desks:["D4"] },
  { id:"l-hul-card", from:"hull",      to:"cardiff",    cut:[], desks:["D4"] },
  { id:"l-ber-bia",  from:"berlin",    to:"bialystok",  cut:[], desks:["D2"] },
  { id:"l-bia-ode",  from:"bialystok", to:"odessa",     cut:[], desks:["D2"] },
  { id:"l-ode-sam",  from:"odessa",    to:"samsun",     cut:[], desks:["D2","D3"] },
  { id:"l-sam-egei", from:"samsun",    to:"egei",       cut:[], desks:["D3"] },
  { id:"l-egei-dxb", from:"egei",      to:"dubai",      cut:[], desks:["D2","D3"] },
  { id:"l-dxb-bom",  from:"dubai",     to:"mumbai",     cut:[], desks:["D3"] },
  { id:"l-bom-bkk",  from:"mumbai",    to:"bangkok",    cut:[], desks:["D3"] },
  { id:"l-bkk-pnh",  from:"bangkok",   to:"phnompenh",  cut:[], desks:["D4"] },
  { id:"l-pnh-svh",  from:"phnompenh", to:"sihanouville",cut:[],desks:["D4"] },
  { id:"l-svh-dng",  from:"sihanouville",to:"danang",   cut:[], desks:["D3","D4"] },
  { id:"l-dng-sgn",  from:"danang",    to:"hochiminh",  cut:[], desks:["D3"] },
  { id:"l-sgn-hkg",  from:"hochiminh", to:"hongkong",   cut:[], desks:["D2","D3"] },
  { id:"l-hkg-tky",  from:"hongkong",  to:"tokyo",      cut:[], desks:["D3"] },
  { id:"l-alg-mal",  from:"hanguera",  to:"almunia",    cut:[], desks:["D1"] },
  { id:"l-cal-tij",  from:"california",to:"mexcio",     cut:[], desks:["D2","D4"] },
  { id:"l-rio-ant",  from:"rio",       to:"antwerp",    cut:[], desks:["D2"] },

  // ---- lanes added by side-threads ----------------------------------------
  { id:"l-mos-mal",  from:"moscow",    to:"malaszewicze",cut:[], desks:["D4"], thread:"ST-3" },
  { id:"l-mal-waw",  from:"malaszewicze",to:"warsaw",   cut:[], desks:["D6"], thread:"ST-3" },
  { id:"l-hul-liv",  from:"hull",      to:"liverpool",  cut:[], desks:["D6"], thread:"ST-2" },
  { id:"l-liv-man",  from:"liverpool", to:"manchester", cut:[], desks:["D6","D1"], thread:"ST-2" },
  { id:"l-man-brs",  from:"manchester",to:"bristol",    cut:[], desks:["D1"], thread:"ST-2" },
  { id:"l-brs-lon",  from:"bristol",   to:"london",     cut:[], desks:["D6"], thread:"ST-1" },
  { id:"l-cal-cart", from:"calicorridor",to:"cartagena",cut:[], desks:["D5"], thread:"ST-4" },
  { id:"l-cart-lag", from:"cartagena", to:"lagos",      cut:[], desks:["D5"], thread:"ST-4" },
  { id:"l-lag-mba",  from:"lagos",     to:"mombasa",    cut:[], desks:["D5","D4"], thread:"ST-4" },
  { id:"l-mba-dxb",  from:"mombasa",   to:"dubai",      cut:[], desks:["D5"], thread:"ST-4" },

  // ---- lanes added by ST-5..ST-8 -----------------------------------------
  { id:"l-bia-lodz", from:"bialystok", to:"a2lodz",     cut:[], desks:["D7"], thread:"ST-5" },
  { id:"l-lodz-poz", from:"a2lodz",    to:"a2poznan",   cut:[], desks:["D7"], thread:"ST-5" },
  { id:"l-poz-swi",  from:"a2poznan",  to:"swiecko",    cut:[], desks:["D7","D4"], thread:"ST-5" },
  { id:"l-swi-inche",from:"swiecko",   to:"incheon",    cut:[], desks:["D3"], thread:"ST-5" },
  { id:"l-bkk-pat",  from:"bkksoi",    to:"pattaya",    cut:[], desks:["D7"], thread:"ST-5" },
  { id:"l-reap-inc", from:"siemreap",  to:"incheon",    cut:[], desks:["D4"], thread:"ST-6" },
  { id:"l-inc-waw",  from:"incheon",   to:"warsawmok",  cut:[], desks:["D4"], thread:"ST-6" },
  { id:"l-waw-pnh",  from:"warsawmok", to:"phnompenh",  cut:[], desks:["D4"], thread:"ST-6" },
  { id:"l-bia-play", from:"bialpark",  to:"playablanca",cut:[], desks:["D4"], thread:"ST-7" },
  { id:"l-play-cart",from:"playablanca",to:"cartagena", cut:[], desks:["D4"], thread:"ST-7" },
  { id:"l-bia-aspo", from:"bialpark",  to:"aspo",       cut:[], desks:["D4"], thread:"ST-7" },
  { id:"l-almer-rot",from:"almeria",   to:"rotterdam",  cut:[], desks:["D1","D7"], thread:"ST-8" },
  { id:"l-rot-lch",  from:"rotterdam", to:"laemchabang",cut:[], desks:["D1"], thread:"ST-8" },

  // ---- lanes added by ST-9..ST-15 -----------------------------------------
  { id:"l-sgn-hkfr", from:"hochiminh", to:"hkfront",   cut:[], desks:["D4"], thread:"ST-9" },
  { id:"l-hkfr-kow", from:"hkfront",    to:"kowsafe",   cut:[], desks:["D4"], thread:"ST-9" },
  { id:"l-kow-hpk",  from:"kowsafe",    to:"hpeak",     cut:[], desks:["D6"], thread:"ST-9" },
  { id:"l-hkfr-lch", from:"hkfront",    to:"laemchabang",cut:[],desks:["D3","D4"], thread:"ST-9" },
  { id:"l-rio-vil",  from:"rio",        to:"vilaaurora",cut:[], desks:["D8"], thread:"ST-10" },
  { id:"l-vil-spn",  from:"vilaaurora", to:"riosponsor",cut:[], desks:["D8"], thread:"ST-10" },
  { id:"l-spn-mrn",  from:"riosponsor", to:"riomarina", cut:[], desks:["D8","D10"], thread:"ST-10" },
  { id:"l-cart-sj",  from:"cartagena",  to:"sanjose",   cut:[], desks:["D4"], thread:"ST-11" },
  { id:"l-sj-esc",   from:"sanjose",    to:"escazu",    cut:[], desks:["D4"], thread:"ST-11" },
  { id:"l-esc-moin", from:"escazu",     to:"moin",      cut:[], desks:["D4","D2"], thread:"ST-11" },
  { id:"l-play-jung",from:"playablanca",to:"junglecamp",cut:[], desks:["D9"], thread:"ST-12" },
  { id:"l-jung-cnc", from:"junglecamp", to:"coastcouncils",cut:[],desks:["D9","D1"],thread:"ST-12" },
  { id:"l-zur-ste",  from:"zurichdist", to:"sternberg", cut:[], desks:["D10"], thread:"ST-13" },
  { id:"l-ste-lug",  from:"sternberg",  to:"luganodist",cut:[], desks:["D10"], thread:"ST-13" },
  { id:"l-lug-chi",  from:"luganodist", to:"chiasso",   cut:[], desks:["D10"], thread:"ST-13" },
  { id:"l-mrn-ste",  from:"riomarina",  to:"sternberg", cut:[], desks:["D10"], thread:"ST-13" },
  { id:"l-bom-dhk",  from:"mumbai",     to:"dhakagate", cut:[], desks:["D4"], thread:"ST-14" },
  { id:"l-dhk-gbd",  from:"dhakagate",  to:"garmentbd", cut:[], desks:["D4","D3"], thread:"ST-14" },
  { id:"l-cal-clm",  from:"callao",     to:"callaomkt", cut:[], desks:["D4"], thread:"ST-14" },
  { id:"l-dub-ist",  from:"dubai",      to:"istansleeper",cut:[],desks:["D11","D8"], thread:"ST-15" },
  { id:"l-ist-ber",  from:"istansleeper",to:"berlinlounge",cut:[],desks:["D11"], thread:"ST-15" },
  { id:"l-ber-aspo", from:"berlinlounge",to:"aspoannex",cut:[], desks:["D11"], thread:"ST-15" },
  // ---- lanes added by the fifth batch (§6D / ST-16..ST-18) ----
  { id:"l-bat-post", from:"batumi",      to:"batumipost", cut:[], desks:["D13"], thread:"ST-16" },
  { id:"l-bat-poti", from:"batumi",      to:"poti",       cut:[], desks:["D12","D13"], thread:"ST-16" },
  { id:"l-bat-tbi",  from:"batumi",      to:"tbilisi",    cut:[], desks:["D13"], thread:"ST-16" },
  { id:"l-ant-bat",  from:"antalya",     to:"batumi",     cut:[], desks:["D13"], thread:"ST-16" },
  { id:"l-ant-lar",  from:"antalya",     to:"laredo",     cut:[], desks:["D13"], thread:"ST-16" },
  { id:"l-lar-tij",  from:"laredo",      to:"tijuana",    cut:[], desks:["D13","D4"], thread:"ST-16" },
  { id:"l-tij-dan",  from:"tijuana",     to:"dananggh",   cut:[], desks:["D13"], thread:"ST-17" },
  { id:"l-dan-zhu",  from:"dananggh",    to:"zhuhaimall", cut:[], desks:["D13"], thread:"ST-17" },
  { id:"l-zhu-okh",  from:"zhuhaimall",  to:"okhla",      cut:[], desks:["D13"], thread:"ST-17" },
  { id:"l-okh-ant",  from:"okhla",       to:"antalya",    cut:[], desks:["D13"], thread:"ST-17" },
  { id:"l-cart-kol", from:"cartagena",   to:"kolport",    cut:[], desks:["D2","D12"], thread:"ST-18" },
  { id:"l-kol-anch", from:"kolport",     to:"kolportanch",cut:[], desks:["D12"], thread:"ST-18" },
  { id:"l-anch-val", from:"kolportanch", to:"valencia",   cut:[], desks:["D12","D2"], thread:"ST-18" },
  { id:"l-val-wash", from:"valencia",    to:"ukwashbay",  cut:[], desks:["D12"], thread:"ST-18" },
  { id:"l-okh-koc",  from:"okhla",       to:"kochi",      cut:[], desks:["D12"], thread:"ST-18" },
  { id:"l-koc-poti", from:"kochi",       to:"poti",       cut:[], desks:["D12"], thread:"ST-18" },
];

// ---- statuses (append to the effect layer) ---------------------------------
const STATUS_DEFS = {
  forgetful: { name:"Forgetful", icon:"?", rounds:[1,3],
    onApply:(h)=>{ h.lockedAbility = pickRandom(h.abilities).id; },
    onExpire:(h)=>{ h.lockedAbility = null; } },
  documented:{ name:"Documented", icon:"ID", rounds:2,
    effect:"ranged enemies must target another hero" },
  // side-thread statuses
  marked:    { name:"Marked", icon:"◎", rounds:-1, thread:"ST-1",
    effect:"preferred target of every enemy until an ally breaks LOS with them" },
  glassList: { name:"On The Glass List", icon:"☐", rounds:-1, thread:"ST-2",
    effect:"NPC witness; if this unit dies, Trust -10 and a Codex line is struck out" },
  sealed:    { name:"Sealed Consignee", icon:"✉", rounds:99, thread:"ST-3",
    effect:"board flag only — marks the moscow→malaszewicze lane as unverified cargo" },
  pilgrim:   { name:"Pilgrim (neutral)", icon:"△", rounds:99, thread:"ST-4",
    effect:"non-combat unit; any hostile action against it auto-fails the mission" },

  // ST-5 — Ghost Protocol
  dazed:     { name:"Dazed", icon:"~", rounds:2, thread:"ST-5",
    effect:"-2 move; cannot take WATCH or COLD READ checks" },
  faeSight:  { name:"Fae-Sight (misidentification)", icon:"◐", rounds:-1, thread:"ST-5",
    clearsVia:"ARCHIVE check, difficulty Sharp, costs 1 Intel per hero",
    effect:"enemy AI reads this token as a civilian witness unit and targets it with detention moves instead of attacks; friendly fire risk on ranged abilities" },
  // ST-6 — Company Contract
  contractHeld:{ name:"Passports Held", icon:"⛓", rounds:-1, thread:"ST-6",
    clearsVia:"evidence + labour inspector (never coercion)",
    effect:"NPC unit will not board an extraction tile until consent meter >= 60" },
  // ST-7 — Quill of Białystok
  silenced:  { name:"Silenced", icon:"✂", rounds:-1, thread:"ST-7",
    clearsVia:"testimonyEntered flag",
    effect:"this NPC cannot be quoted in Codex or epilogue text while active" },
  testimony: { name:"Testimony Entered", icon:"§", rounds:-1, thread:"ST-7",
    effect:"board-wide: HOSTEL-tagged Codex entries become immune to FORGETFUL erasure" },
  // ST-8 — Glass House
  coldChain: { name:"Cold Chain", icon:"❄", rounds:8, thread:"ST-8",
    effect:"lane timer: while active the almeria→rotterdam lane cannot be closed; spend 2 Intel to extend by 2 rounds" },

  // ST-9 — Roof of Hong Kong
  floorLocked:{ name:"Floor Locked", icon:"⬆", rounds:3, thread:"ST-9",
    clearsVia:"FLOOR LEDGER check or Auntie Fong parley",
    effect:"this storey's tiles are impassable; lift shaft still serves floors above" },
  escrowVoid: { name:"Escrow Voided", icon:"✕$", rounds:-1, thread:"ST-9",
    effect:"board-wide: D6 contract payouts suspended; `watchOnly` rooftop units lose their detain action" },
  // ST-10 — Carnival of the Guests
  badged:    { name:"Badged Delegate", icon:"▮", rounds:4, thread:"ST-10",
    clearsVia:"Badge Table mismatch or Noise Cover round expiry",
    effect:"passes one gate tile free; a wrong match adds a false Codex entry (recoverable via PUBLISH A GAP)" },
  misfiled:  { name:"False Codex Entry", icon:"⚠", rounds:-1, thread:"ST-10",
    clearsVia:"PUBLISH A GAP (Merhujus, difficulty 12)",
    effect:"one archived line is wrong; SEATING CHECK in ST-15 fails if this is still active" },
  // ST-11 — Joke in San José
  attention: { name:"Public Attention", icon:"◉", rounds:-1, thread:"ST-11",
    effect:"meter 0..100; at 100 the decoy programme goes dark AND Caregena is detained — both outcomes printed before commit" },
  mirrored:  { name:"Mirror Doubt", icon:"◇", rounds:2, thread:"ST-11",
    clearsVia:"do not attack silhouette-matched units",
    effect:"attacking a Mirror Unit applies FORGETFUL to your own chronicle (real GAP risk)" },
  // ST-12 — Big Box in the Jungle
  inRing:{ name:"Inside The Ring", icon:"◌", rounds:-1, thread:"ST-12",
    clearsVia:"move outside the BIG BOX coverage circle",
    effect:"ability cooldowns randomise ±1 round; Intel and radio actions fail; no chemical or technical detail shown" },
  titled:    { name:"Title Registered", icon:"§L", rounds:-1, thread:"ST-12",
    effect:"board-wide: restitution track advances; Honest Road ending condition #3" },
  // ST-13 — The Back Bible
  kycFlag:   { name:"KYC Contradiction", icon:"※", rounds:-1, thread:"ST-13",
    clearsVia:"none — permanent for the run",
    effect:"each lie told in the KYC Gauntlet becomes a defence exhibit; −1 credibility in Card Boss duels and S15-1 audit" },
  disclosed: { name:"KODER Disclosed", icon:"▤", rounds:-1, thread:"ST-13",
    effect:"board-wide: D10 lanes become closable; required for Witnesses and Empty Chair endings" },
  copySkipped:{name:"Page Not Copied", icon:"□", rounds:-1, thread:"ST-13",
    effect:"permanent gap in evidence; epilogue reads the skipped names as unresolved" },
  // ST-14 — Girls Who Do Not Speak Our Language
  unintelligible:{ name:"Unintelligible", icon:"∿", rounds:-1, thread:"ST-14",
    clearsVia:"INTERPRET with a recruited linguist ally (never coercion, never a bribe)",
    effect:"dialogue renders as shapes; escort and shield actions still available; testimony locked" },
  reshipped: { name:"Re-Shipped", icon:"↺", rounds:-1, thread:"ST-14",
    effect:"permanent epilogue list entry; visible on the Safe House screen for the rest of the campaign" },
  filedVisibly:{name:"Legally Visible", icon:"✓", rounds:-1, thread:"ST-14",
    effect:"this witness can be quoted in Codex, testimony counters and S15-B" },
  // ST-15 — The Thirty-Third Seat
  seated:    { name:"Seat Identified", icon:"♟", rounds:-1, thread:"ST-15",
    clearsVia:"SEATING CHECK success",
    effect:"unlocks M23/M24; a wrong identification narrows reachable endings" },
  // ST-16 — The Quiet Hotel
  tailed:    { name:"Tailed", icon:"◉", rounds:-1, thread:"ST-16",
    clearsVia:"make two tail units observe each other (TAIL READ x2) or reach a lawful gate",
    effect:"Zaza's route is known; every non-escort tile he enters raises HEAT +2. Never deals damage" },
  counterWatched:{name:"Counter-Watched", icon:"◎", rounds:-1, thread:"ST-16",
    effect:"one tail unit now follows the heroes instead of the journalist; spotters appear in later ST-16 maps" },
  sealedArchive:{name:"Archive Sealed", icon:"▣", rounds:-1, thread:"ST-16",
    clearsVia:"hand an unsealed exhibit to Lieutenant Kvirikashvili (Lawful Gate)",
    effect:"the archive cannot be quoted in Codex or testimony until unsealed; opening it as a hero forfeits the Witnesses path" },
  // ST-17 — Thirteen Antlers
  recognised:{ name:"Recognised", icon:"鹿→✓", rounds:-1, thread:"ST-17",
    clearsVia:"MATCH THE FACE with 3 attribute matches",
    effect:"enables Contract Language dialogue; the crew stops ambushing and starts invoicing" },
  gearSeized:{ name:"Gear Seized", icon:"⊘", rounds:-1, thread:"ST-17",
    clearsVia:"recovered by Sing \"Two Tickets\" at S17-B end (he always returns travel documents)",
    effect:"hero loses one passive for the mission; no HP loss, no injury, no animation" },
  retainerVoid:{name:"Retainer Void", icon:"§R", rounds:-1, thread:"ST-17",
    effect:"board-wide: the Golden Deer refuse the ring's next three contracts; fewer spotters campaign-wide" },
  // ST-18 — Empty As Declared
  lateFiled: { name:"Filed Late", icon:"⧗", rounds:-1, thread:"ST-18",
    clearsVia:"FILE ON TIME inside the Discrepancy Window",
    effect:"lane stays open on paper only; the world board shows the lane as EMPTY while the map shows it full" },
  discrepancyWindow:{name:"Discrepancy Window", icon:"12h", rounds:-1, thread:"ST-18",
    clearsVia:"three FILE ON TIME successes (4 hours drained each)",
    effect:"mission-level timer presented as a clock face, not a countdown bar; drains on filing, never on damage" },
  vindicated: { name:"Report Vindicated", icon:"✓H", rounds:-1, thread:"ST-18",
    effect:"Halyna's Act II report becomes a live exhibit; all D2 lanes become closable by paper alone" },
};

// ---- enemy archetypes added by the side-threads ----------------------------
// Reuse the existing ENEMY_DEFS shape so the engine's spawn list works unchanged.
const THREAD_ENEMY_DEFS = {
  courier:   { name:"Mercury Courier",    color:"#b8b8c4", hp:10, move:4, dmg:4, range:1, letter:"K" },        // ST-1
  burner:    { name:"Witness Burner",     color:"#8a8f9c", hp:16, move:3, dmg:6, range:1, letter:"B", boss:false }, // ST-1
  mercurio:  { name:"Julián \"Mercurio\"",color:"#d7d7e2", hp:26, move:4, dmg:7, range:2, letter:"M", boss:true, appliesStatus:"marked" }, // ST-1 boss
  nineveh:   { name:"Nineveh Three",      color:"#c48a5a", hp:14, move:5, dmg:5, range:1, letter:"T", linkedMorale:true }, // ST-2 (spawn x3)
  collector: { name:"Green Collector",    color:"#9fd6a0", hp:12, move:3, dmg:4, range:3, letter:"C", ranged:true },        // ST-2
  operative: { name:"Guest Operative",    color:"#6f6f8a", hp:18, move:5, dmg:6, range:2, letter:"O", immuneToOneAbility:true }, // ST-3 (spawn x5)
  tolkach:   { name:"Viktor \"Tolkach\"", color:"#a08f6f", hp:20, move:3, dmg:5, range:3, letter:"V", ranged:true, boss:true }, // ST-3
  tout:      { name:"Cielo Tout",         color:"#efe6d2", hp:8,  move:4, dmg:3, range:1, letter:"P", nonLethalOnly:true },     // ST-4 crowd pushers
  curandera: { name:"La Curandera",       color:"#f5f0ff", hp:22, move:3, dmg:0, range:0, letter:"D", parleyable:true },        // ST-4 (no attacks!)

  // ST-5 — Ghost Protocol
  spotter:   { name:"Motorway Spotter",   color:"#9aa7b8", hp:8,  move:4, dmg:0, range:3, letter:"S", ranged:false, watchOnly:true }, // detains, never damages
  ghostunit: { name:"Firm Ghost",         color:"#5f6b7a", hp:14, move:5, dmg:4, range:1, letter:"H", immuneToMeleeFirstRound:true },
  mariposa:  { name:"La Mariposa",        color:"#e6a8c8", hp:24, move:3, dmg:0, range:0, letter:"L", parleyable:true, boss:true, appliesStatus:"faeSight" },
  // ST-6 — Company Contract
  minder:    { name:"Rotation Minder",    color:"#8f7fa6", hp:12, move:3, dmg:0, range:1, letter:"M", detainsOnly:true },   // no damage at all
  clerk:     { name:"Agency Clerk",       color:"#c9c2b4", hp:6,  move:2, dmg:0, range:0, letter:"A", nonLethalOnly:true, interactable:true },
  rithy:     { name:"Khun Sombat Rithy",  color:"#d9c9a0", hp:18, move:3, dmg:0, range:0, letter:"R", parleyable:true, boss:true, processBoss:true },
  // ST-7 — Quill of Białystok
  hostelguard:{name:"Hostel Guard",       color:"#7d8590", hp:14, move:3, dmg:0, range:1, letter:"W", detainsOnly:true, evidenceSensitive:true },
  antov:     { name:"Warden Grigor Antov",color:"#6b5f57", hp:22, move:3, dmg:5, range:1, letter:"G", boss:true, appliesStatus:"silenced" },
  halman:    { name:"Meester Dirk Halman",color:"#efeae0", hp:0,  move:0, dmg:0, range:0, letter:"J", cardBoss:true, hpless:true }, // Cross-Examination Duel only
  kwillo:    { name:"Tomasz \"Kwillo\"",  color:"#f2d3a7", hp:1,  move:2, dmg:0, range:0, letter:"K", npcAutonomous:true, dignityRules:true, immuneToAll:true },
  // ST-8 — Glass House
  auditor:   { name:"Auditor Griet Vos",  color:"#bfe3ea", hp:16, move:3, dmg:0, range:0, letter:"V", bidsIntel:true, nonLethalOnly:true },
  packer:    { name:"Shed Packer",        color:"#a9c48f", hp:10, move:3, dmg:4, range:1, letter:"E", neutralAdjacent:true },
  quimico:   { name:"El Químico",       color:"#dfe8d0", hp:20, move:3, dmg:0, range:0, letter:"Q", parleyable:true, boss:true, killsEnding:true },

  // ST-9 — Roof of Hong Kong
  floorman:  { name:"Floor Manager",    color:"#c9a6b8", hp:12, move:3, dmg:0, range:1, letter:"F", detainsOnly:true },        // no damage at all
  rooftopdrone:{name:"Peak Drone",      color:"#9fb4c9", hp:6,  move:5, dmg:0, range:3, letter:"D", watchOnly:true, ranged:false },
  fong:      { name:"Auntie Fong",      color:"#e8d7c4", hp:16, move:2, dmg:0, range:0, letter:"G", parleyable:true, boss:true, handsLedger:true },
  // ST-10 — Carnival of the Guests
  steward:   { name:"Sponsor Steward",  color:"#b9c9a8", hp:9,  move:3, dmg:0, range:1, letter:"W", detainsOnly:true, badgeCheck:true },
  gatecrash: { name:"Credential Man",   color:"#8fa3b5", hp:11, move:4, dmg:3, range:1, letter:"C" },   // lowest damage in game
  delegation:{ name:"Delegation Unit",  color:"#d8cbe6", hp:0,  move:2, dmg:0, range:0, letter:"L", hpless:true, invulnerable:true, arrangeMeeting:true }, // objective, not enemy
  // ST-11 — Joke in San José
  collectorvan:{name:"Collection Van Crew",color:"#a59f92",hp:13, move:4, dmg:0, range:1, letter:"V", detainsOnly:true },
  mirrorping:{ name:"Mirror Decoy",     color:"#5fbfd8", hp:10, move:5, dmg:4, range:1, letter:"P", heroSilhouette:true, punishFriendlyFire:true },
  caregena:  { name:"Nicasio \"Caregena\"",color:"#e0c9a3",hp:1, move:2, dmg:0, range:0, letter:"N", immuneToAll:true, npcAutonomous:true, dignityRules:true },
  bermudez:  { name:"Dr. Ana Lucía Bermúdez",color:"#cfe6d8",hp:8,move:3, dmg:0, range:0, letter:"A", nonLethalOnly:true, interactable:true, healOnly:true },
  // ST-12 — Big Box in the Jungle
  sicario:   { name:"Clearance Contractor",color:"#7f8a6a",hp:15,move:4, dmg:5, range:2, letter:"S", nightDetainsOnly:true },
  relaytech: { name:"Shelter Technician", color:"#c6ccd4",hp:7, move:2, dmg:0, range:0, letter:"T", parleyable:true, nonLethalOnly:true }, // escortable, never a target
  pantano:   { name:"Coronel \"Pantano\"",color:"#5d6b52",hp:24, move:3, dmg:6, range:1, letter:"R", boss:true, zoneBound:true, appliesStatus:"inRing" },
  palacios:  { name:"Doña Yenica Palacios",color:"#e6d2b5",hp:1, move:2, dmg:0, range:0, letter:"Y", immuneToAll:true, carriesTitles:true },
  // ST-13 — The Back Bible
  compliance:{ name:"Compliance Officer",color:"#dfe3ea",hp:8, move:2, dmg:0, range:0, letter:"K", nonLethalOnly:true, interactable:true, kycAlly:true },
  vaultguard:{ name:"Vault Guard",      color:"#8b93a3", hp:14, move:3, dmg:0, range:1, letter:"U", detainsOnly:true, evidenceSensitive:true },
  sanseverino:{name:"Avv. Sanseverino", color:"#efe6da", hp:0,  move:0, dmg:0, range:0, letter:"J", cardBoss:true, hpless:true, objectionDeck:true },
  // ST-14 — Girls Who Do Not Speak Our Language
  minderbd:  { name:"Manifest Minder",  color:"#9b8fa6", hp:12, move:3, dmg:0, range:1, letter:"M", detainsOnly:true },
  clerkpe:   { name:"Contract Clerk",   color:"#cfc7b6", hp:6,  move:2, dmg:0, range:0, letter:"A", nonLethalOnly:true, interactable:true, forgedPaper:true },
  rani:      { name:"Rani Dasgupta",    color:"#f0c9a8", hp:10, move:3, dmg:0, range:0, letter:"I", interpreter:true, allyRecruitable:true, immuneToAll:true },
  witnesslinguist:{ name:"Witness (protected)",color:"#e9dfd0",hp:1,move:2,dmg:0,range:0,letter:"Z", immuneToAll:true, unintelligibleUntilInterpret:true },
  // ST-15 — The Thirty-Third Seat
  seatguard: { name:"Handover Detail",  color:"#9aa0ad", hp:15, move:3, dmg:4, range:1, letter:"H" },
  delegate33:{ name:"The Thirty-Third Delegate",color:"#d9cfbe",hp:0,move:1,dmg:0,range:0,letter:"E", hpless:true, invulnerable:true, seatingTarget:true },

  // ---- archetypes added by the fifth batch (§6D / ST-16..ST-18) ----
  // ST-16 — The Quiet Hotel
  tail:      { name:"Contract Tail",        color:"#8e97a6", hp:12, move:4, dmg:0, range:1, letter:"T", watchOnly:true, employerVaries:true }, // spawn x4, different buyers
  tailliaison:{name:"Lawful Liaison",       color:"#b9c6d8", hp:12, move:4, dmg:0, range:1, letter:"L", watchOnly:true, lawful:true },          // one of the four; revealed in S16-3
  clerkbatumi:{name:"Harbour Clerk",        color:"#cfc9bd", hp:6,  move:2, dmg:0, range:0, letter:"C", detainsOnly:true, interactable:true },
  kvirikashvili:{name:"Lt. Nino Kvirikashvili",color:"#dfe7f0",hp:1,move:2,dmg:0,range:0,letter:"N", immuneToAll:true, lawfulGate:true, cannotBeBribed:true },
  gogokhia:  { name:"\"Ambassador\" Gogokhia",color:"#e8ddca",hp:0, move:0, dmg:0, range:0, letter:"A", cardBoss:true, hpless:true, objectionDeck:true, boss:true },
  arslan:    { name:"\"Borderless\" Kemal Arslan",color:"#c9d6c4",hp:14,move:3,dmg:0,range:0,letter:"K", parleyable:true, sellsEvidence:true },
  zaza:      { name:"Zaza Beridze",         color:"#f0e2c0", hp:1,  move:2, dmg:0, range:0, letter:"Z", immuneToAll:true, npcAutonomous:true, dignityRules:true, journalist:true },
  sopiko:    { name:"Sopiko Beridze",       color:"#e6d8ea", hp:1,  move:2, dmg:0, range:0, letter:"S", immuneToAll:true, carriesArchive:true },
  // ST-17 — Thirteen Antlers
  deerfoot:  { name:"Antler Contractor",    color:"#a89a86", hp:13, move:4, dmg:0, range:1, letter:"A", detainsOnly:true, sameFaceAcrossMaps:true }, // gearSeized on capture
  kamcheong: { name:"Uncle Kam Cheong",     color:"#d8c8a8", hp:16, move:2, dmg:0, range:0, letter:"K", parleyable:true, contractLanguage:true },
  singtickets:{name:"Sing \"Two Tickets\"", color:"#c2b6a2", hp:10, move:4, dmg:0, range:0, letter:"T", nonLethalOnly:true, returnsDocuments:true, interactable:true },
  hoilan:    { name:"Hoi Lan",              color:"#cfd6de", hp:8,  move:2, dmg:0, range:0, letter:"L", escrowHolder:true, immuneToAll:false, nonLethalOnly:true },
  // ST-18 — Empty As Declared
  terminalcrew:{name:"Terminal Checker",    color:"#9fb0a8", hp:11, move:3, dmg:0, range:1, letter:"C", detainsOnly:true, evidenceSensitive:true },
  okonkwo:   { name:"C/O Bea Okonkwo",      color:"#e3d6c0", hp:1,  move:2, dmg:0, range:0, letter:"B", immuneToAll:true, allyRecruitable:true, testimonyKey:true },
  talypova:  { name:"Marina \"Talya\" Talypova",color:"#d6c2d0",hp:0,move:1,dmg:0,range:0,letter:"M", hpless:true, nonCombatBoss:true, reconcilable:true },
  raghunathan:{name:"Auditor P. Raghunathan",color:"#cfe0e6",hp:8, move:2, dmg:0, range:0, letter:"R", nonLethalOnly:true, interactable:true, auditAccess:true },
  rudenko:   { name:"Capt. Ilya \"Pustoy\" Rudenko",color:"#cbbfae",hp:0,move:1,dmg:0,range:0,letter:"I", hpless:true, processBoss:true, boss:true, windowBar:true, turnable:true },
};

// ---- campaign state (persist alongside the chronicle in localStorage) ------
const CAMPAIGN_STATE_SCHEMA = {
  act:1, chapter:1, heat:0, intel:0,
  closedLanes:[], clearedDesks:[], gaps:{ bh:0, ping:0, mer:0 },
  flags:{ manifestGuilt:true, dashcamOwner:null, rosaAlive:true, sarkarTrust:0,
          // side-thread flags (§6B)
          brotherAlive:true, witnessLedger:false, clientList:false,
          glassListCount:0, danExtracted:false, trioTurned:false,
          sealedCarton:false, operativesAccountedFor:0,
          caravanPaid:false, pilgrimsSaved:0, cieloBook:false,
          civilianDeaths:4,
          // ---- flags added by ST-5..ST-8 ----
          sober:100,              // PING's relapse meter (0..100), persisted per save
          sealBrokenBeforePing:false, lookedInside:false,
          wrongRoom:null,         // "contract" | "evacuated" | "broadcast" | null
          placementLedger:false, guestsExtracted:0, faeSightCleared:false,
          documentGapsClosed:0, manifestIncheon:false, dancersConsented:0,
          passportsRecovered:0, stampsPublished:0, rithyFlipped:false,
          hostelProved:false, custodyLog:false, notebookPage4:false,
          kwilloRescued:false, testimonyEntered:false, mistrial:false,
          coldChainRoundsLeft:8, boxWonByPlayer:true, shipmentIntegrityLog:false,
          quimicoKilled:false, coopLicenceBurned:false,
          // ---- flags added by ST-9..ST-15 (§6C) ----
          floorStockResolved:0,      // 0..11 named rescues from the Causeway Bay front
          stillInsideList:[],        // women who declined extraction — permanent epilogue list
          escrowVoided:false,        // ST-9 S9-B; if true D6 payouts suspend campaign-wide
          auntieFongTurned:false,    // parley outcome; grants Floor Ledger without a raid
          delegationsArranged:0,     // 0..3, ST-10-B win counter
          badgeTableErrors:[],       // false Codex entries pending PUBLISH A GAP
          civicRequestsDone:[],      // e.g. "streetlight", "camera" — Dona Célia's asks
          caregenaFound:false, caregenaNamed:false, caregenaTestified:false,
          faceArchiveSeized:false,   // removes Mirror Decoys from every future mission
          pingMirrorChecked:false,   // Relapse Meter event fired on PING in S11-1
          publicAttention:0,         // 0..100 meter, persisted per save
          silenceRingRadius:0,       // tiles; 0 = unmapped, set by S12-1
          bigBoxOwned:false,         // zone-denial flip available
          landTitlesRecovered:false, restitutionSigned:false,
          technicianEscorted:false,
          kycAnswers:[],             // [{q,truth:boolean}] -> kycFlag count feeds S15-1
          sarkarTrust:0,             // (already used above; kept here for clarity in docs)
          koderPagesCopied:[], copyBudgetSpent:0, koderDisclosed:false,
          ownershipChainLinks:0,     // 0..9 graph steps solved
          halynaFinanced:false,      // ST-13 twist flag: D2 violence funded by D4 trade
          rosaSignatory:false,
          testimoniesFiled:0,        // 0..12+, ST-14 counter feeding S14-B and M24
          interpretersRecruited:[],  // ["rani", "celna", ...]
          reshippedList:[],          // permanent failure list, Safe House visible
          seatIdentified:null,       // "rosa" | "halyna" | "empty" | null
          chairOwner:null,           // set in M24; drives the sixth ending
          ledgerWarsUnlocked:false,  // >=5 of ST-9..ST-14 closed
          gapsAuditScore:0,
          // ---- flags added by ST-16..ST-18 (§6D) ----
          zazaAlive:true,            // hard flag; never failable by combat inaction (guardrail 14)
          zazaExposed:false,         // S16-B branch (b): handed to ASEPO, publication delayed
          zazaPublished:false,       // S16-B branch (a)/(c): seventh epilogue list unlocked
          secondCopyOpened:false,    // forfeits Witnesses path if true
          kvyrikashviliPaperwork:false, // Lawful Gate satisfied -> exit route open
          tailsEmployers:[],         // ["firma","buyer","rival","liaison"] reveal order
          counterWatched:false,
          coverageMapFragments:0,    // 0..6; evidence only, NEVER a usable item (guardrail 15)
          coverageMapClosed:false,   // board-wide: D13 lanes become closable
          arslanParleyed:false,      // he offers the map free — the thread's worst moment
          deerSeen:0,                // 0..3 cities where a crew face was logged
          deerMatches:0,             // attribute matches banked for MATCH THE FACE
          deerWarned:false,          // false accusation fired in S17-2
          deerReleased:false,        // contract win -> retainer void, fewer spotters
          deerBoughtOff:false,       // paid out -> crew returns hostile in M23/S15-B
          escrowVoidClauseFound:false,
          halynaReportKept:true,     // Act II inventory decision read back here
          halynaVindicated:false,
          lateFilingHours:12,        // Discrepancy Window, drains 4h per FILE ON TIME success
          lateFilingWindowMissed:false,
          okonkwoTestimony:false, raghunathanAccess:false,
          rudenkoTrust:0,            // 0..100 built across S18-1/2/3; >=65 enables branch (c)
          rudenkoTurned:false,
          talypovaReconciled:false,
          weightTickets:false,       // ST-16-3 prerequisite exhibit (from Act II / D2)
          gapTradeUnlocked:false },  // >=2 of ST-16..ST-18 closed -> Act VII available
  threads:{ ST1:"locked", ST2:"locked", ST3:"locked", ST4:"locked",
            ST5:"locked", ST6:"locked", ST7:"locked", ST8:"locked",
            ST9:"locked", ST10:"locked", ST11:"locked", ST12:"locked",
            ST13:"locked", ST14:"locked", ST15:"locked",
            ST16:"locked", ST17:"locked", ST18:"locked" },
  // thread states: locked | active | done | done-dark (a closed-but-failed branch)
};
```

### 8.1 Thread data notes for implementers
- `THREAD_ENEMY_DEFS` is additive: merge into `ENEMY_DEFS` with
  `Object.assign(ENEMY_DEFS, THREAD_ENEMY_DEFS)` at campaign boot. Existing
  single-player missions are untouched.
- `linkedMorale:true` → the three Nineveh spawns share one Morale pool; isolating a
  member (chokepoint or peel trap) drops pool by 20 instead of dealing damage.
- `immuneToOneAbility:true` → each Operative ignores exactly one hero ability id
  (`slash|peel|shank|sprint|zap|patch|hatch|papers`). Display it in the tooltip after the
  first failed attempt — teaching, not punishing.
- `parleyable:true` / `nonLethalOnly:true` → these units cannot be damaged; they exit when
  the player spends Intel + passes a check. ST-4's boss fight can therefore be skipped
  entirely (that is the *Honest Road* ending route).
- `civilianDeaths` starts at 4 and only ever goes **down** (clearing D6/ST-1, rescuing the
  Glass List in ST-2, saving pilgrims in ST-4). It is printed in the epilogue text.

### 8.2 Implementer notes for ST-5…ST-8 (new flags and behaviours)
- **Relapse Meter** — `campaignState.sober` (number 0–100, default 100 outside ST-5).
  Engine hook: at `endTurn()` of any mission tagged `relapse`, apply
  `sober -= pressureTilesNearby * 5`. Two gates read it:
  `if (sober < 50) disableAbilitySlot(randomOf(hero.abilities))` and
  `if (sober < 20) skillCheckModifier -= 4`. Recovery hooks: `endTurn unseen → +6`,
  `waterTile → +12 (once per mission)`, `handoffToOtherHero → +10`. Never expose a
  refill item. Persist it in the same localStorage key as the chronicle so a reload
  cannot be used to reset the meter.
- **Ghost State** — missions tagged `ghostState` set `restartOnDetection = true`. The
  existing enemy AI needs one new behaviour: `watchOnly:true` units roll the §7 WATCH
  check instead of attacking, and on success call `restartCheckpoint()`. They must have
  `dmg:0` so no accidental kill path exists.
- **Objective Fork** — S5-3 stores its choice in `wrongRoom`. Branch (a) additionally runs
  `gaps.bh += 1` through the existing GAP archiver, i.e. it deletes a real chronicle line.
  That is intentional and must be shown in the confirmation prompt before commit.
- **fae-sight** — a targeting-layer flag, not a visual costume change. Implementation:
  give the affected hero token `misreadAsWitness = true`; enemy `pickTarget()` prefers
  witness-class tokens when it sees one. Do **not** swap hero sprites or portraits — the
  fiction claims a transformation, the game shows a *targeting error*, and the Codex entry
  states the truth. Art brief: an overlay of soft pink scan-lines on the target reticle only.
- **Consent Meter / NPC autonomy** — `kwillo`, `minder`, `clerk`, dancers use a new unit
  field `npcAutonomous:true`: they move on their own turn toward tiles the player has
  cleared (`clearedForNpc` tag) and refuse extraction tiles while their meter is low.
  Coercion verbs are removed from the action bar entirely in these missions
  (`mission.noHostileActions = true`) rather than being punished after the fact — teaching
  beats punishing.
- **Process Boss / Card Boss** — `processBoss:true` and `cardBoss:true` units have
  `hpless:true`; skip them in damage resolution and drive them with a tile pool
  (stamp-desk tiles) or a card deck (Objection cards). Both win conditions are counters,
  not HP bars, so reuse the existing objective-progress UI.
- **Chronicle Forensics (S7-2)** — reads the saved chronicle array from localStorage and
  treats archived (gap) entries as missing clues. Guard with try/catch and offer a
  designer fallback name so the mission can never soft-lock if the save is empty or corrupt.
- **Evidence-only missions** — `mission.evidenceOnly = true` makes any damaging ability
  return `"LOG DESTROYED"` and fail the mission immediately. Reuse for ST-7 S7-1 and
  ST-8 S8-B (where killing `quimico` sets `quimicoKilled` and locks one ending instead of
  failing outright).
- **Cold Chain** — a lane-scoped round counter stored in `coldChainRoundsLeft`; the world
  map renders it as a blue countdown on the almeria→rotterdam lane. Intel spend hook adds
  +2 rounds, max twice per chapter.
- **Ledger Duel** — `bidsIntel:true` enemies hold their own Intel pool (`auditorIntel`,
  default 4). Each round they may spend 1 to claim a box; the player sees the bid before
  committing. No RNG involved — pure resource play.
- **Lawful-trade allies** — `coopLicenceBurned` is displayed in the epilogue as a cost the
  player chose, with the exporter named and the six-month period stated. Never hide it.

**UI additions:** world-map screen (node graph, lane toggles, HEAT gauge), Safe House
screen (Intel spend + skill checks + GAP recovery), Status bar showing FORGETFUL with
a greyed ability slot, and a **Codex** tab listing desks D1–D6, contacts and recovered
entries. Side-threads appear on the world map as **dashed lanes** with a thread badge
(ST-1…ST-8) so players can see optional content without spoiling it. Additional UI needed
for this revision: a **Sober** gauge next to PING's portrait (ST-5), a **Consent** ring on
autonomous NPC tokens (ST-6/ST-7), an **Objection/Evidence** hand bar (ST-7 boss), and an
**Intel bid** readout during Ledger Duel rounds (ST-8). Fourth-batch additions: a **Floor
Selector** column strip for vertical maps (ST-9), a **Badge Table** board widget with error
chips (ST-10), a **Public Attention** arc meter (ST-11), a **Silence Ring** overlay circle drawn
on the tactical grid (ST-12), a **Copy Budget** page tray with greyed-out skipped pages (ST-13),
**glyph-shape dialogue rendering** for untranslated lines plus an INTERPRET action button
(ST-14), and a **Reachable Endings** panel that lists all six conditions live (ST-15/M24). The
Safe House screen gains a permanent **"Still Inside" / "Re-Shipped"** name list panel (§6C).

### 8.3 Implementer notes — fourth batch (§6C)

- **Vertical grids (`tower`, ST-9).** Do not build a new renderer: reuse the M7 three-tier
  container map with `floors:15, tilesPerFloor:6`. Camera cones are existing `cctv` tile logic
  rotated 90 degrees. Lift shaft = one fast-travel action per round (mirrors `hotSpot` rotation
  cost); stairwell = silent but costs 2 move per floor. `floorLocked` blocks a storey's tiles only.
- **`mission.noHostileActions = true`.** New mission flag: hides attack actions entirely, shows
  MOVE / SHIELD / ESCORT / DOCUMENT. Required on S9-2, S11-2, S12-2, S13-3, S14-*, S15-*. The
  engine must also refuse damage *dealt to* these missions' units by partner AI.
- **`detainsOnly` / `watchOnly` extension.** Units with `dmg:0` cannot enter combat resolution;
  they apply `marked`, `ghostTracked` or removal-to-holding-tile instead. Reuse ST-5/ST-7 code
  path; add `nightDetainsOnly` (S12) as a round-parity predicate.
- **`hpless:true` + `invulnerable:true`.** Objective units (delegation, delegate33) have no HP
  track at all; win counters read `delegationsArranged`, `testimoniesFiled`, `seatIdentified`.
  Never render an HP bar for these; render a counter chip instead.
- **`punishFriendlyFire` (Mirror Decoys).** On attack, roll the same silhouette check that
  generated the decoy; if it was a decoy, apply FORGETFUL to the attacker's chronicle line and
  log `mirrorStrike=true` in the Chronicle. This is the ONLY way a combat action can create a
  GAP outside Act III's designed GAP beats — gate it behind `faceArchiveSeized == false`.
- **Silence Ring (`inRing`).** A circular tile field centred on the BIG BOX node, radius stored
  in `silenceRingRadius`. Inside: ability cooldown jitter of plus or minus 1 round, Intel and
  radio actions return `FAILED_IN_RING` (a distinct error string, never a generic one). No
  textual description of how the equipment works, ever. `bigBoxOwned` flips the field's owner;
  then it applies to enemies only.
- **KYC persistence.** Every dialogue answer in S13-1 pushes `{q, truth:boolean}` into
  `kycAnswers[]`; `kycFlag` count equals the number of `truth:false` entries. Consumers: Card
  Boss credibility (objection hand size), S15-1 audit score, and the Empty Chair condition
  (`gapsAuditScore == 0` requires zero `truth:false`).
- **Copy Budget (irreversible partial evidence).** `koderPagesCopied[]` records page ids;
  `copySkipped` status is derived, not stored. The epilogue generator must read this array and
  print skipped names verbatim from a fixed list — never procedurally invent victim names.
- **INTERPRET gating.** `unintelligibleUntilInterpret:true` witnesses render dialogue as glyph
  shapes until `interpretersRecruited.length > 0`. Clearing requires the ally unit in the same
  room cluster; **no bribe or coercion option may exist in the dialogue tree** (G6/G8 veto).
- **Visibility Filing.** Each filed claim consumes 1 Intel and 2 rounds; unfiled protected NPCs
  are appended to `reshippedList[]` at thread close. The Safe House screen shows this list
  permanently, greyed, captioned "not your fault, but still true".
- **Parallel Testimony (S14-B).** Both halves share one round counter; testimony registers only
  when entered on both maps in the same round. Reuses two-team control plus a synchronisation
  predicate — do not build a new netcode path.
- **Cross-Thread Audit (S15-1).** Reads real save data exactly like Chronicle Forensics:
  `chronicle[]`, `kycAnswers[]`, `badgeTableErrors[]`, `stillInsideList[]`, `reshippedList[]`.
  Needs fallback text for every empty array so a fresh, minimal save can still finish it.
- **Seating Puzzle.** Answers derive from owned documents, not RNG: Rosa Vacca needs
  `rosaSignatory && rosaAlive`; Halyna needs `halynaFinanced`; Empty needs
  `koderDisclosed && testimoniesFiled >= 12`. Print required evidence next to each option before
  commit.
- **Governance Win Condition (M24).** Ending selection order: **Early Filing** → Empty Chair →
  Long Memory → Honest Road → Witnesses → Ghosts → Fourth Desk. Compute from flags only, never
  from a hidden score; all seven condition sets visible in the pre-mission briefing.
- **Save migration for batch 4:** old saves get `threads.ST9..ST15 = "locked"` and defaults for
  every new flag (`floorStockResolved:0`, `chairOwner:null`, arrays empty). Missing keys must
  never throw.
- **Save migration for batch 5:** old saves get `threads.ST16..ST18 = "locked"` plus defaults
  (`zazaAlive:true`, `lateFilingHours:12`, `rudenkoTrust:0`, `coverageMapFragments:0`,
  `tailsEmployers:[]`, `deerSeen:0`, `halynaReportKept:true`). Also back-fill
  `weightTickets` and `halynaReportKept` from Act II inventory if those items exist; if the save
  predates item tracking, default both to `true` so ST-16/ST-18 remain reachable.

### 8.3 Implementer notes — fifth batch (§6D)
- **Tail Counter (S16-1).** Four `tail` spawns with an `employer` field
  (`firma | buyer | rival | liaison`). They never target each other until two are placed within
  2 tiles of one another — that proximity check is the whole win condition, so do not gate it
  behind a roll. Store reveal order in `tailsEmployers[]`; the `liaison` unit is revealed only
  after S16-3 and must render identically before then (same sprite, same letter).
- **Coverage Map is read-only.** `coverageMapFragments` increments on pickup; there is no code
  path that consumes fragments for movement, stealth or route benefits. If a fragment count
  reaches 6, HEAT +8 fires once. Any future "use the map" feature is out of scope by guardrail 15.
- **Lawful Gate.** `kvyrikashviliPaperwork` can only be set by passing an exhibit whose
  `sealed:false` and whose `namedVessel && dated` fields are truthy. Bribe, forgery and
  distraction actions must be filtered out of the action bar on this map (not merely disabled —
  hidden, with a one-line reason string in the tooltip).
- **Cross-Match Board.** Nine attributes per sighting, stored as
  `{city, attrs:{sole,strap,receipt,slip,cuff,gait,phone,accent,prefix}}`. `MATCH THE FACE`
  compares two cities' attribute sets; `deerMatches` counts matches ≥3. Committing an accusation
  at exactly 2 sets `deerWarned` permanently. Never randomise which attributes match — the data
  is authored so the correct answer is always derivable from owned documents.
- **Escrow Retainer (S17-B).** The crew's "HP" is `retainerRemaining` (default 100), reduced by
  contract-failure evidence (−40 per clause), never by damage. Uncle Kam Cheong surrenders at
  ≤20. If the player pays from Intel bank, set `deerBoughtOff` and spawn `deerfoot` units with
  `dmg:5` in M23/S15-B (this is the only state in which the Golden Deer ever deal damage, and it
  is the consequence the player bought).
- **Three Emperor Shells (S18-3).** Extend the existing two-team control to three simultaneous
  grids using the same round clock. Each shell holds exactly one evidence type
  (`loaded | declared | reported`) and can only *verify* another shell's type through the shared
  Document Board. Solo play: allow pausing between shells but keep one global round counter, and
  print the attention-split cost in the briefing rather than hiding it.
- **Discrepancy Window.** `lateFilingHours` starts at 12 and drops 4 per FILE ON TIME success;
  render as a clock face (never a red countdown bar). At 0, `lateFilingWindowMissed:true` and
  branch (a)/(b) become the only closes. Rudenko has no HP; his "boss bar" reads this value.
- **No-weapons ship rule.** On `kolport`, filter all damaging abilities at load time
  (`noWeapons:true` tag). A hostile action ends the mission immediately with the text
  `"THE VISIT ENDED"` and locks the node for one act — do not soften this with a warning prompt.
- **Journalist immunity.** `zaza.immuneToAll:true` plus an engine assertion: any damage event
  targeting a unit with `journalist:true` throws to the log and resolves as 0. `zazaAlive` can
  only become false through the explicit `done-dark` narrative setter in S16-B, never via
  combat, HEAT or a failed check.

---

## 9. LAW-ENFORCEMENT LAYER — HOW TO USE REAL SOURCES CORRECTLY

The user asked for "EUROPOL / ASENOPOL / INTERPOL data based" grounding. Here is the
honest, workable version.

### 9.1 Naming correction (please fix before publishing anywhere)
There is no agency called **"ASENOPOL"**. The likely intended bodies are:
- **ASEANAPOL** — ASEAN Chiefs of National Police (Asia-Pacific police cooperation).
  Use this name if you want the Asian-leg faction to be accurate.
- **ASEPO** — Network of European Public Prosecutors (prosecution-side coordination).
- Or keep **ASENOPOL** as an *invented* task force — but then label it clearly as
  fictional in the codex, otherwise reviewers and press will read it as sloppy research.

**Used throughout this document:** the in-game body is named **ASEPO Task Force
"Meridian"** (fictional joint-investigation unit; Prosecutor Sarkar's office). Swap the
string `ASEPO` → `ASEANAPOL` in §2.3/§2.4/§6-M7/§10 if you prefer the real ASEAN
police-cooperation name for the Asian leg. Add a codex footnote that the task force is
fictional.

### 9.2 What real documents can legitimately inspire (verified public sources)
Use these for **tone, structure and terminology of the investigation layer** — i.e.,
what the investigators say in briefings, not how crime is committed.

| Source (public, official) | What to borrow | Where it lands in the game |
|---|---|---|
| Europol **SOCTA** — *Serious and Organised Crime Threat Assessment* (annual, europa.eu) | The framing that organised crime groups exploit logistics, use maritime containers, and diversify into environmental/property crime; the "service provider" model of modern groups | §3 desk structure; Rosa Vacca's briefing dialogue |
| Europol **MUSE** reports on *maritime containerised drug smuggling* | Port typology: gateway vs. consumer ports; "corruption-free corridors"; insider-enabled container manipulation as a *concept* | §4 port roles; Rotterdam/Cartagena/Sihanouville hubs; the three-toggle lane model (sea/land/paper) |
| UNODC **World Drug Report** + country cocaine bulletins | General facts: production concentrates in the Andes; maritime routes from the Atlantic coast of South America toward Europe; cannabis remains the most-used illicit substance | §5 fiction framing; HEAT consequences; why "low-potency bulk stock" is a plot problem rather than a money-maker |
| UNODC / INTERPOP-style **human-trafficking** reporting (see also UNTOC/Protocol of Palermo definitions) | The distinction between *smuggling* and *trafficking*; exploitation of migrants; recruitment-debt logic | D4 desk; M3/M13–M15 rescue missions; victim treatment rules (§5.3) |
| INTERPOL notices (**Red Notice** = arrest-request alert), **Project STORNOK**-era open reporting on stolen-vehicle document fraud | Notices as an *investigation* tool; document/identity fraud as a category; transnational vehicle flows | §7 TRACE/PAPER checks; El Contable's arrest-notice side quest; no technical detail reproduced |
| EU Directive 2024/1742 & Eurojust/FRA material on trafficking-in-persons offences (high level) | Legal stakes: what prosecutors need to secure a conviction (corroboration, victim testimony, financial trail) | Why the ledger/dashcam matter; M22 Witnesses-ending requirements |
| **West Africa / Gulf-of-Guinea port-security cooperation + Port of Rotterdam anti-drug programmes** (public press releases) | The idea that port authorities, insurers and shipping lines are partners, not just targets | Safe-House "partner" mechanic: recruit a port-watch contact to lower HEAT |
| Europol **SOCTA — "third-country" / foreign-contract threat sections** (high-level framing only) | Organised-crime groups hire *independent* service providers and travelling enforcement teams across borders; contracts travel faster than territories | D6 desk; ST-1 Mercury Cell; ST-2 Nineveh Three as an imported crew |
| UNODC / national reporting on **document & identity fraud in mixed cargo** (concept level) | Misdeclared consumer consignments move people and cash; seals and manifests are documents, not physical objects | ST-3 Seal Integrity mini-state, Checkpoint encounters, S3-3 reveal |
| UNODC **World Drug Report** West/Central-East-Africa transit observations | Coastal East Africa appears in world reporting as a *transit* space for other people's cargo — which is exactly why the game gives Mombasa a legitimate local counter-power instead of a criminal stereotype | ST-4 Chieftain Baraka's caravan; Lagos as transshipment, never as "origin of evil" |
| INTERPOL **Red Notice / notice-system** public descriptions | Notices are alerts and cooperation tools, visible to police, not to the public — used here as an epilogue device | ST-1 ending cameo; El Contable side quest (§9.2 above) |
| UNODC/EU public reporting on **intimidation of journalists & media workers** | Silencing as a *service* rented by other groups; why disinformation accompanies violence | D7 desk; ST-5 briefings; S5-3 fork consequences |
| Council of Europe **Lanzarote/others-style public material on facilitated sexual exploitation** (high-level framing only) | Exploitation chains prosecuted as offences; victim consent and exit as the measure of a "win" | ST-5 S5-B win condition; `faeSight` handling rules (§8.2) |
| ILO / national labour-inspectorate reporting on **irregular migration, wage theft & document retention** in hospitality/entertainment work | Contracts, sponsorship abuse and unpaid months as the crime surface; inspectors, not raids, as the remedy | ST-6 Document Board, Consent Meter, S6-3 lawful routes |
| Europol/FRA high-level material on **unlawful detention, debt bondage & coercion of witnesses** | Detention run as a rented service; conviction depends on corroboration + testimony | ST-7 hostel premise, Cross-Examination Duel, Long Memory ending |
| Port-authority public communications on **misdeclaration and insider-enabled reefer misuse** (concept level) | Legal goods diverted by paperwork; timing beats firepower | ST-8 Cold Chain, Ledger Duel, produce-code premise |

**Rule of thumb:** cite these in a *design-source appendix* (credits page), quote at
most one short paraphrased sentence per report, and never reproduce tables of methods.

### 9.2c Accuracy notes specific to threads ST-5…ST-8 (ST-5…ST-8 grounding)
- **ST-5 (silencing a journalist; incapacitation):** real-world framing comes from public
  reporting on *intimidation of media workers* and on *facilitated sexual exploitation by
  organised crime groups*, which is prosecuted as an offence chain (drugging → filming →
  placement), not as folklore. Use only that structure: the ring's sin is **monetising
  people who cannot consent**, and the game's answer is evidence plus exit for the victims.
  No agent name, no pharmacology, no dispersal device, no dose, no venue "how-to". The
  tabloid "he turned us into women" claim is modelled on documented moral-panic rumours and
  is always debunked in-text by the ARCHIVE branch.
- **ST-6 (entertainment work visas):** grounded in publicly reported patterns of
  **sponsorship/visa fraud, wage theft and passport retention** in hospitality and
  entertainment staffing across East Asia and the EU. These are labour-inspectorate and
  prosecution matters, so the thread's tools are contracts, payslips, boarding passes and a
  named inspector — never a raid. Do not state or imply that any country's entertainment
  industry is inherently a trafficking front; the ring abuses a lawful rotation it did not
  create. Community readers required (G6/G7).
- **ST-7 (private detention):** framed on documented European concerns about **unregistered
  detention, debt-bondage custody and witness suppression**, prosecuted through ordinary
  courts and Eurojust-style coordination. The site is licensed as a storage business — that
  paperwork irony is the point. No architectural detail, no guard routines, no escape or
  evasion method; the player wins with a custody log and testimony. Injury content follows
  the aftermath convention (§16.10) and survivor-advocacy review (G6).
- **ST-8 (produce-code diversion):** based on public port-security reporting about
  **misdeclared legal cargo and reefer-manipulation by insiders** — described at concept
  level only (a lane exists, a code is wrong, a clock runs out). No temperature settings, no
  container types, no documentation templates that could be copied. The lawful cooperative's
  grievance (four refused EU export licences) is drawn from real trade-facilitation reporting
  and keeps the Spanish/Thai counterpart communities non-criminal.

### 9.2b Accuracy notes specific to the four new threads
- **ST-1 (witness killing):** real UK/EU law-enforcement material frames witness
  intimidation as an *under-reported* problem tied to low conviction rates. Use that fact
  in Sgt. Nkemdirim's dialogue — it justifies why the heroes protect rather than punish.
  Never depict a real police force being bought wholesale; corruption stays inside the
  fictional ring.
- **ST-2 (travelling hit-team):** keep them *contractors with a client list*, not an
  ethnic stereotype. Their origin is mentioned once, in their own dialogue, and never by
  the narrator.
- **ST-3 (cosmetics/frontier gate):** Małaszewicze is a real, publicly known rail
  transshipment hub; the game uses its *existence and function* (gauge change → every
  consignment is touched) as a puzzle premise. No inspection procedure, dwell time,
  camera position or guard pattern may be written into mission text.
- **ST-4 (faith freight):** Nigeria and Kenya must be portrayed as places where the ring
  is a *guest*, not a host. Every NPC from Lagos/Mombasa has a lawful alternative income
  in their bio; if a writer cannot state it, cut the line. Review with regional
  consultants before localisation lock (§16.6).

### 9.2d Accuracy notes specific to the fourth batch (ST-9 … ST-15)
- **ST-9 (Hong Kong tower):** the real-world pattern this fictionalises is *domestic-worker and
  hospitality-labour trafficking through accommodation-linked venues*, documented publicly by
  HK labour-welfare reporting and by UN.GIFT/Ellis-type fact sheets used only for structure.
  Nothing about a real building, real club, real agency or real case may be named. Rescue routes
  in-game are always the lawful ones: Labour Department casework, ASPO liaison, shelter referral.
- **ST-10 (Rio festival):** credential and accreditation abuse at mass events is a documented
  logistics risk (public event-security after-action reviews). The game depicts *access control*
  failure, never a real Carnival organiser, sponsor or venue. Vila Aurora is fictional; the Codex
  card states that residents of informal settlements are overwhelmingly not involved in
  trafficking — a correction the campaign owes its audience.
- **ST-11 (Costa Rica decoy):** no cloning technology exists or appears. The "clone" is a
  surgically and behaviourally trained **decoy**, which matches public reporting on identity
  doubles used by criminal protection rings. Mental-health content follows WHO-style guidance:
  person-first language, no violence attributed to illness, a community-health worker as the
  responding professional. Substance use stays off-board (§5.3, §16.0).
- **ST-12 (Colombian Pacific):** displacement of Afro-Colombian coastal communities is a matter
  of public record (truth-and-memory commissions, IACHR findings, national unity-party
  registries). The game names the harm correctly, credits the communities' own organisations, and
  gives **zero** operational detail about comms equipment — the BIG BOX is a tile field with an
  icon, never a device description. No real battalion, police unit or paramilitary name appears.
- **ST-13 (Switzerland):** the fictional crime mirrors publicly reported laundering typologies —
  shell-company layering, correspondent balances, nominee signatories — as described in open
  FATF/OECD/EU reports. **No real bank, canton, regulator, banker or private-bank archetype may
  be named or evoked.** Bank Krystallis AG and canton Sternberg are inventions; the depicted
  offence is records theft and laundering, both well documented, neither instructional.
- **ST-14 (Bangladesh & Peru):** the premise reflects two documented realities: labour-export
  manifests that classify women as dependants ("relatives"), and language-access gaps that make
  non-English/non-Spanish speakers invisible to services. Source tone from public ILO/OIIL and
  OIG-Crime reports. Interpreters are paid allies with their own agenda; consent gates every
  testimony; no assault is ever depicted or reconstructed.
- **ST-15 (governance):** rotating-chair arbitration between criminal desks is a fiction device
  borrowed from corporate-governance language, not from any real organisation chart. It exists so
  the campaign's last decision is institutional rather than violent.

### 9.3 What must NOT be researched or included
No step-by-step container-modification, no real tampering/lock methods, no precursor
chemistry, no live corruption contacts, no real company names accused of involvement,
no mapping of a specific real terminal's blind spots. If a designer argues a mechanic
needs such detail, replace it with a check (§7) instead.

---

## 10. TRUST, MORALE AND THE CHRONICLE IN THIS CAMPAIGN

Reuse the existing Trust formula (≥70% → +2 dmg; <30% → −2 dmg; fallen hero −12) and
add campaign modifiers:

| Event | Trust |
|---|---|
| Successful civilian extraction (M3, M10, M13, M15) | +8 |
| Selling an intel token to a broker (NY, Dubai) | −6 |
| Hero ends a battle Forgetful | −4 and creates a GAP |
| Dashcam handed to ASEPO (act VI pre-choice) | +12, but −10 next chapter (crew fear) |
| Skipping a desk to chase profit | −10, +1 Intel |
| Recovering a GAP at a Safe House | +5 |
| ST-1: protecting a witness to the end of S1-1 (no lethal force) | +8 |
| ST-1: deleting Merhujus's line from the Witness Ledger | −10 (and `brotherAlive` stays true) |
| ST-2: letting Dockside Dan publish unredacted footage | −6, +2 Intel (his face is now on the Glass List) |
| ST-3: accepting Tolkach's unlisted carton | 0 now; −12 and a permanent GAP at S3-3 |
| ST-4: paying Baraka's caravan price (2 Intel) | +10, sets `caravanPaid` |
| ST-4: any hostile action in a neutral-crowd mission | −15 and mission fail |
| ST-5: `wrongRoom:"contract"` (complete the silencing contract) | −20, +HEAT 25, permanent `gaps.bh += 1` |
| ST-5: placement ledger seized and guests extracted with consent | +10, closes D7 |
| ST-6: passport recovered through the labour inspector (lawful) | +6 per dancer (max +24) |
| ST-6: any coercive action toward a dancer or clerk | −12 and that dancer's Consent Meter locks low |
| ST-7: custody log preserved (no lethal force in S7-1) | +8, unlocks S7-2 names |
| ST-7: Kwillo's testimony entered without mistrial | +14, enables the **Long Memory** ending |
| ST-8: lawful exporter's licence burned by your leak | −10 and a named epilogue cost |
| ST-8: El Químico killed instead of turned | −8 and **Honest Road ending locked** |

**Morale (new, per-hero 0–100):** drops with GAPs and lost civilians; at <25 the hero
auto-refuses one risky order per battle (they hesitate) — mechanical expression of
burnout, tied to the memory theme.

---

## 11. ART, AUDIO AND UX BRIEF

- **Palette per act:** I acid green/ochre (Verde) → II rust/silver (Hierro) →
  III milky white/violet haze (Flor) → IV navy/steel (Carga Viva) → V chrome/orange
  (Motorizado) → VI black/neon-rain (La Firma).
- **Palette per side-thread:** ST-1 *cold silver + CCTV blue* (surveillance, rain on
  estates); ST-2 *brick red + canal grey-green* (northern England, sodium lamps);
  ST-3 *bonded-warehouse amber + frost white* (Moscow/rail gate, hard floodlight);
  ST-4 *bleached white + candle gold + laterite red* (faith cargo, Lagos market, Mombasa
  noon). Threads must be instantly distinguishable from the six acts at thumbnail size.
- **Container language:** colour-code crate contents by *desk*, not by contraband type
  (green trim = D1, red = D2, blue = D3, amber = D4, **pearl white = D5 Cielo**,
  **gunmetal = D6 Mercurio**) — readable at a glance, avoids glorifying any product.
- **Mercury iconography (ST-1):** quicksilver motif — liquid-metal reflections in UI,
  a broken thermometer as chapter icon. Never alchemical "secret knowledge" imagery.
- **Maison Célysme packaging (ST-3):** invent one fictional fragrance-bottle silhouette;
  frosted glass, no logo resembling any real luxury house, no real brand typography.
- **Cielo props (ST-4):** generic votive candles, wrapped statues, prayer cards with
  invented saints' names. No real denominational liturgy, no scripture quotations.
- **Memory motif:** UI elements literally desaturate when a GAP is created; the
  codex page animates ink lifting off the paper. Sound: tape-stop, not orchestral sting.
- **Victim depiction:** silhouettes + personal objects only (a shoe, a school bag, a
  ticket stub). Never show faces of trafficked people; this is both ethical and
  cheaper to produce.
- **Maps reuse the engine:** water tiles (double cost), crates/walls (block LOS),
  peel traps — extend with `tilt`, `steam`, `fog`, `rubble`, `road`, `containerTier`,
  and for the threads: `cctvCone` (ST-1, sight-line hazard), `mud` (ST-1 Cardiff, move −1),
  `canal` (ST-2, water + no respawn), `ice` (ST-3 Moscow), `glassPanel` (ST-3 Warsaw,
  destructible LOS break), `crowd` (ST-4 neutral unit), `coralShelf` (ST-4 Mombasa,
  damage on move).

### 11.3 Art & audio beats added by ST-5…ST-8

| Asset | Brief |
|---|---|
| Sealed canister sprite | Rusted industrial wash-line cylinder, tape-sealed, stencilled **N-D / SELLATO**. No hazard symbol, nozzle or delivery device of any kind — it must read as *freight*, never as a weapon. |
| Motorway hot-spot tiles | Hard shoulder, barrier shadow, lit canopy, fog band. Palette: cold sodium amber on slate, deliberately unlike the sleeper-yard greens so ST-5 maps are never confused with M9/M18. |
| Pattaya penthouse tiles | Pool water (reflective), terrace glass, monsoon fog, service corridor. Neon kept low-saturation and off-camera; the mood is rain on glass. |
| `faeSight` overlay | Soft pink scan-lines on the **targeting reticle only** — never on hero sprites or portraits (§8.2). |
| Convention-centre tiles (ST-6) | Stage truss, costume rack, green-room mirror wall, turnstile, foyer carpet. Everything reads corporate hospitality, nothing reads club. |
| Document Board UI | Reuses the Codex cork-and-thread look; boarding passes and payslips as draggable cards with high-contrast legible print. |
| Detention-site tiles (ST-7) | Cage **silhouettes only**, chain-link as background texture, CCTV cones drawn as light shapes. No instruments, no open cells to peer into, no blood. |
| Playla Blanca apron tiles | Sand, trench edges as fall hazards with ladders visible, shade canopy, tool shed. Crew in recognisable work clothing; nobody styled as exotic labour. |
| Courtroom grid (ST-7 boss) | Bench, gallery, evidence table, two doors; Objection-card hand bar along the bottom with fictional ASPO card backs. |
| Cold-store tiles (ST-8) | Frost sheen, reefer stacks as destructible cover, blue countdown strip for the Cold Chain clock. |
| Audio — motorway | Wind buffeting, distant air-brakes, one crow per hot spot (reuses the M9 asset). In Ghost State missions duck **all** ambience while no enemy has line of sight: silence is the tension instrument. |
| Audio — Pattaya | Continuous rain on glass, muffled bass from a floor below. No chanting, no exotic percussion cue. |
| Audio — courtroom / office | Paper, chair legs, HVAC hum, turnstile beeps. Halman's objections are dry-spoken, never shouted. |

---

## 12. PROTOTYPE PLAN (browser build, matches this repo)

Milestone **P1 (≈2 weeks of part-time work)** — playable slice, no Unity needed:
1. Add `NODE_DEFS`/`LANE_DEFS` + a canvas world-map screen with node click → mission
   launch (reuse existing encounter loader).
2. Implement `forgetful` status: grey out one ability slot, apply on 2 scripted turns
   in M12; add GAP archival to the chronicle writer.
3. Implement HEAT (single integer, drives enemy count in the existing spawn lists).
4. Ship M1 + M4 + M22 as three grids to prove the loop: source → hub → endgame.
5. Codex tab with desk descriptions and the §9.2 source appendix (credits).

Milestone **P2:** Safe House + skill-check UI, 6 more missions, 3 endings tested.
Milestone **P3:** full 22 missions, Morale, partner-contact mechanic, localisation
(EN/ES/PL — already planned in the original GDD).

Milestone **P4 — side-threads (new):** build ST-1 first, because it is the cheapest and
teaches the two systems everything else reuses:
1. `THREAD_ENEMY_DEFS` merge + `Object.assign` boot line (10 min of code).
2. `MARKED` status + Witness-Protection objective type (ST-1 S1-1/S1-B).
3. `Neutral-crowd` mission flag with auto-fail on hostile action (reused by ST-4).
4. Race Timer (ST-2) → then Publications feed as a reskin of the Intel token counter.
5. Seal Integrity + Switched Objective template (ST-3) — this one unlocks the mid-mission
   goal flip that M22 also wants, so it pays off twice.
6. Parley/`caravanPaid` path (ST-4) last, since it gates the 4th ending.

Milestone **P5 — expansion threads ST-5…ST-8 (new):** build order chosen so each step reuses
a P4 system before adding one:
1. **Ghost State + `watchOnly` enemies** (ST-5 S5-1). Small code, big feel: it is the first
   mission in the game where damage is not an option at all. Also ships the checkpoint
   restart used later by stealth variants of main-campaign maps.
2. **Relapse Meter (`sober`)** (S5-2). Pure UI + `endTurn` hook; no new art. Add the
   confirmation prompt before any state change that can delete a chronicle line.
3. **Objective Fork with printed costs** (S5-3). Generic dialogue screen listing outcomes and
   their exact deltas; reused immediately by ST-8's Moral Toggle.
4. **Document Board** (ST-6 S6-1) — reskin of the Codex card grid; produces Intel tokens.
5. **Social Stealth** (S6-2) — BLEND/PHOTO/ASK action bar, HEAT instead of spawns.
6. **Consent Meter + NPC autonomy** (S6-3, then reused wholesale by ST-7 S7-3). This is the
   single most valuable new mechanic in the revision: two threads and M22 all use it.
7. **Process Boss** (S6-B) — tile-pool counter; also powers the Card Boss below.
8. **Chronicle Forensics** (ST-7 S7-2) — reads real saved chronicle data; needs a fallback
   name list so it can never soft-lock (§8.2).
9. **Evidence-Only missions + Dignity Rules** (S7-1, S7-3) — mostly flags on existing units.
10. **Cross-Examination Duel** (S7-B) — card matching, zero combat code paths.
11. **Cold Chain + Ledger Duel** (ST-8) — lane timer + AI Intel bidding; touches world map.
12. **Split-map boss halves** (S5-B, S6-B, S7-B, S8-B) — reuse the M18 two-team control; add
    three-team control once, for S8-B.
**Scope warning (revised):** eight threads × 4 missions = **32 extra grids**, roughly
+145% over the 22-mission main campaign. Do **not** attempt all eight at once. Recommended
shipping shape:
- **Launch:** main campaign + ST-1 + ST-3 (personal stakes, cheapest systems).
- **Pack A "Roads Not Taken" (post-launch 1):** ST-2, ST-4, ST-6 — the paper-and-people trio;
  shares Document Board, Social Stealth, Consent Meter.
- **Pack B "The Long Memory" (post-launch 2):** ST-5, ST-7, ST-8 — unlocks the fifth ending
  and requires Ghost State, Relapse Meter, Chronicle Forensics, Cross-Examination Duel.
  Pack B is the emotional payload of the whole campaign; it should ship together, not split.

---

## 13. CONTENT WARNINGS & RATINGS (ship with the build)

- Contains: human trafficking (implied, non-graphic), coercion of medical personnel,
  reference to illicit substances (fictional), death of named characters, corruption,
  **witness intimidation and contract killing (ST-1/ST-2 — never shown on screen)**,
  **reference to heroin as an off-board commodity (ST-1)**, **people smuggled inside a
  consumer-consignment premise (ST-3)**, **religious fraud used as a cover (ST-4)**.
- No: graphic sexual violence, no depiction of drug consumption, no real-world
  criminal instruction, no playable assassination, no brand-name contraband labels.
- Target rating: PEGI 18 / ESRB M. Include a skip-friendly narrative mode for
  classroom/accessibility builds.
- Also contains, from this revision: **substance-induced incapacitation of civilians and
  its exploitation (ST-5 — never depicted, always prosecuted)**, **alcohol dependence
  portrayed as illness (ST-5)**, **entertainment-sector labour migration and passport
  retention (ST-6)**, **unlawful private detention and its aftermath (ST-7 — off-screen,
  past tense, no interactive violence)**, **legal goods diverted by falsified paperwork
  (ST-8)**.
- Still absent, deliberately: graphic sexual content, client scenes, injury depiction,
  torture sequences, drug-use animation, real chemical detail, playable assassination,
  brand-name contraband.
- Also contains, from the fourth batch: **trafficking into forced prostitution implied and
  prosecuted, never depicted (ST-9 — zero client content, zero nudity, rescue-only gameplay)**,
  **mass-crowd credential abuse (ST-10)**, **identity doubles plus unmedicated psychosis treated
  with dignity (ST-11)**, **armed displacement of Afro-Colombian communities, named honestly and
  memorialised (ST-12)**, **shell-company laundering and stolen private records (ST-13)**,
  **language-barrier exploitation of migrant workers (ST-14)**, **criminal governance arbitrated
  by witnesses instead of guns (ST-15)**.
- Still absent after the fourth batch, deliberately: any playable assassination or hit contract
  (ST-9's contract is *refused and voided*), any sexualised content in the Hong Kong thread, any
  depiction of the killings in Colombia beyond named memorials, any technical description of the
  BIG BOX, any real financial institution, any scene of sexual violence anywhere in the game.
- **Per-thread opt-out:** add a "Thread selection" toggle in New Game so players can
  disable ST-1 (drug references), ST-2 (contract killing), ST-3 (people-in-cargo),
  ST-4 (religion themes), ST-5 (substance harm + relapse theme; opting out reroutes D7's
  closure through ST-8), ST-6 (venue content — offers a documents-only variant),
  ST-7 (detention aftermath), ST-8 (nothing sensitive; safe for classroom builds),
  ST-9 (venue/exploitation references — offers a documents-only variant where the tower is an
  accommodation register raid with no venue framing), ST-10 (crowd/festival content),
  ST-11 (mental-health content — opting out replaces Caregena with an unnamed decoy and removes
  the Naming Duel), ST-12 (violence/displacement references — opting out keeps the land-title
  puzzle but removes the camp map), ST-13 (financial crime), ST-14 (migration hardship —
  opting out requires the interpreter ally to be pre-recruited so no untranslated scene plays),
  ST-15 (requires nothing new; if fewer than five threads are enabled it stays locked)
  individually. Campaign completion percentage must be computed
  over *enabled* threads only, otherwise opt-outs look like failure.
- **Classroom build, updated:** main campaign + ST-6 (documents-only) + ST-8 + ST-13 + ST-14 is a
  complete logistics, paperwork, financial-crime and victim-care syllabus with zero substance
  content and zero venue content.
- **Classroom build:** main campaign + ST-6 (documents-only) + ST-8 is a complete, non-explicit
  logistics-and-law-enforcement syllabus with zero substance content.

---

## 14. OPEN QUESTIONS FOR YOU
1. Rename **ASENOPOL → ASEPO Task Force "Meridian"** (recommended, already used in this
   draft), or **ASEANAPOL** for the Asian leg specifically? See §9.1.
2. Do you want the three heroes to remain **infiltrators working for law enforcement**
   (recommended: gives the ports a purpose and keeps the tone heroic), or fully
   voluntary criminals? The dark ending already exists either way.
3. Should **FLOR DEL OLVIDO** stay a *status-effect-only* element (recommended), or do
   you want it as a tradeable board commodity (more risk, more controversy)?
4. Confirm the spelling of in-world names I normalised from your brief:
   **"La Hangüera"** (your "LA HANGUERA"), **"Sihanouville"** (your "sikhanovill";
   current official form is *Sihanoukville*), **"Chattogram–Mongla"** (your
   "Bangladesh" node; "Chattogram" is today's official form of "Chittagong"),
   **"Mexicali"** (your "MEXCIO"). Also tell me whether "new york" should be its own
   node — the schema currently links NY→Antwerp but has no `newyork` node entry yet.
   *(Update: `newyork` now exists as a node, so that item is resolved.)*
5. **ST-1:** is Mercurio an **arrested** end (recommended — Sgt. Nkemdirim takes him, keeps
   the Witnesses ending clean) or do you want an optional **killed-by-rival** end? Note that
   if the player kills him, `civilianDeaths` should go *up*, not down — otherwise the game
   rewards lethal solutions.
6. **ST-2:** pick the trio's identity: **(a) Nineveh Three** (Assyrian-Iraqi brothers raised
   in Birmingham — my default), **(b) Khmer Three** (Cambodian ex-trafficking-victims turned
   enforcers, used as the S2-3 branch), or **(c) both**, with (b) revealed as the truth in
   the final mission. I recommend (c).
7. **ST-3:** confirm the fictional maison name **MAISON CÉLYSME** replaces DIOR/CHANEL. Real
   luxury houses must not appear as contraband labels — trademark and defamation exposure.
   Also confirm the border gate is **Małaszewicze** (the real PL/BY rail transshipment point
   implied by your "POLAND EAST EU border").
8. **ST-4:** I converted "white magic" into **D5 Cielo faith-freight** (no real magic, no
   substances). Do you instead want a *supernatural* campaign layer (real miracles / curses)?
   That would change the genre — it can be bolted on as an unreliable-narrator DLC where the
   Curandera's claims are never confirmed either way.
9. **Heroin (ST-1):** keep it purely off-board as written, or show one non-graphic clinic
   scene with an addicted NPC (more humanising, +1 content-warning line)?
10. **ST-5 "toxic gas":** I have written it as a fictional aerosol (**NIEBLA DULCE**) whose
    only depiction is symptoms on tokens plus a sealed lab report, because any real agent
    description would be operational harm rather than fiction. Confirm: (a) keep as-is,
    (b) replace the canister with a non-chemical silencing tool (e.g. a compromising-footage
    package — removes substance content entirely), or (c) make the incident purely rumour and
    never confirm anything happened? My recommendation is **(b)** if you want maximum safety
    and **(a)** if you want the strongest ST-7 link.
11. **ST-5 "magic'd into sexy ladies":** implemented as in-world disinformation plus a
    targeting debuff (`faeSight`) — the game never transforms anyone visually or mechanically.
    Do you want (a) this version, (b) a genuinely supernatural layer (changes genre — see Q8),
    or (c) drop the beat and keep only the relapse arc? Recommendation: **(a)**. Six adult
    NPCs retain agency and consent, and the satire lands on the ring's gossip machine.
12. **ST-6 framing:** I treated the go-go-dancer premise as **labour migration inside a legal
    industry** (contracts, rates, unpaid months, passport retention) and made the dancers'
    venues corporate hospitality in coworking/convention spaces, with zero client content.
    Confirm (a) keep, (b) remove all venue content and ship documents-only, or (c) raise the
    stakes by making Neang a union delegate (she already testifies; this just gives her a title
    and three more lawful options)? Recommendation: **(c)** — it costs nothing and it makes the
    thread's win condition collective rather than individual.
13. **ST-7 reading of your brief:** I interpreted *"sunspots to died … without fingers … head
    support be digger"* as: tortured in illegal private detention near Białystok, hands injured
    so he can never type again, sold downstream as a hands-free labourer on a Caribbean drainage
    crew, and surviving to become the campaign's key witness. Everything is aftermath-only and
    off-screen. Please confirm this is the story you meant, and confirm the tone: (a) hopeful
    (he testifies, the Long Memory ending exists — current build), or (b) tragic (he dies before
    the hearing and the player carries his notebook — darker, drops the fifth ending).
14. **Playla Blanca:** I kept your spelling **"Playla"** deliberately, treating it as the
    ring's own misspelling painted on a site hoarding (an in-world joke about how these
    contractors label things). The real Cartagena neighbourhood counterpart appears only as
    named lawful NPCs (market traders, fishermen). Keep the joke, or normalise the spelling to
    the real place name?
15. **ST-8 was derived, not requested.** It exists to answer the question ST-5 leaves open
    ("who packs and ships this?") and to give Blackhujus a solo climax. Cut it if you want
    seven threads — but then D7 must close through ST-5 alone and the Honest Road ending loses
    its second supplier thread.

### 14.1 Name normalisation table (your brief → in-game name)
| As you wrote it | In-game / schema name | Note |
|---|---|---|
| human traffic | **D4 "CARGA VIVA"** desk + rescue missions | handled as trafficking/exploitation, non-graphic |
| green powered / old mountain powder | **VERDE POLVO** ("Green Mountain Powder") | fictional low-potency bulk stock, board-level only |
| Colombian Peru flower based memory lost drugs | **FLOR DEL OLVIDO** ("Flower of Forgetting") | drives the FORGETFUL/GAP memory system |
| weapons traffic in part of motorcycle ocean containers | **D3 "MOTORIZADO"** | parts crates carrying components (paper-level depiction only) |
| stolen cars ocean containers | **D2 "HIERRO"** | scrap kits + export-paperwork abuse |
| CARTEGAN | **Cartagena** (CO) | main port, Act-I hub |
| new York | **New York** (US) | broker district node (`newyork`) |
| South Of Spain | **South Spain Strip** (Málaga/Almería) + **La Hangüera** | Algeciras-bay chokepoint |
| South Of Turkey | **South Turkey Strip** (Antalya/Mersin) + **Samsun/Egei link** | Mediterranean + Black Sea feeder |
| Odessa Ukraine | **Odessa** (UA) | Act-VI opener |
| sikhanovill phonem Peng | **Sihanouville** + **Phnom Penh** (KH) | Sihanoukville is today's spelling |
| Bangladesh | **Chattogram–Mongla** (BD) | D3 crane-lane missions |
| ho Chi Ming da Nang | **Ho Chi Minh City** + **Da Nang** (VN) | |
| Main truck parking hot spot | **"Platoons' Sleepers"** (§4.4) | Białystok, Berlin, Rotterdam ring, Paris, La Hangüera, Rio, Cartagena apron, Texas yard, California yard, Mexicali |
| USA TEXAS / USA CALIFORNIA / MEXCIO | **Texas Border Yard**, **California Port Zone**, **Mexicali** | twin-map border mission |
| ASENOPOL | **ASEPO Task Force "Meridian"** (fictional) | see §9.1 — real names would be ASEANAPOL or ASEPO |
| EUROPOL / INTERPOL data | §9.2 source appendix | public reports used for tone/structure only |
| **MERHUJUS brother, Euro sicario, "Mercurius", UK** | **Julián "Mercurio" Ocampo**, desk **D6 MERCURIO**, thread **ST-1** | Mercurius = his *nickname*, not the Roman god; arrest ending recommended |
| heroine / heroin (ST-1) | off-board commodity only, never shown | no production/pricing/use detail (§6B guardrail 3) |
| three Cambodian sicarios in UK | **Nineveh Three** (default) / **Khmer Three** (branch) | nationality vs ethnicity clarified in §6B ST-2 |
| SHREK enemies | **"the Glass List"** (in-game slang *SZKŁO* = snitches) | must NOT use the real film franchise name |
| blogger chased across UK | **"Dockside Dan" Adeyemi**, Publications-feed mechanic | OSINT-flavoured ally, not a victim prop |
| DIOR / CHANEL cosmetics | **MAISON CÉLYSME** (fictional luxury house) | trademark-safe; packaging brief in §11 |
| Moscow → POLAND EAST EU border | **Moscow → Małaszewicze Rail Gate** (+ Warsaw) | lane `l-mos-mal`, `l-mal-waw` in §8 |
| Iranian and East Asian assassins in cargo | **five Guest Operatives** (`operative` archetype) | origin is background only; never a nationality stereotype (§9.2b) |
| white magic from Colombia | **D5 CIELO faith freight** (La Curandera) | no real magic system, no substances |
| NIGERIA → PORT OF MOMBASA | **Lagos–Ikorodu/Ladipo → Mombasa/Port Tudor** | lanes `l-cart-lag`, `l-lag-mba`, `l-mba-dxb` |
| green powder from ocean containers in Cardiff & Liverpool | **VERDE POLVO sacks**, nodes `cardiff`, `liverpool`, `bristol`, `manchester` | observation-only mission S2-1; no handling detail |
| mission impossible ghost protocol | **ST-5 "GHOST PROTOCOL" / *Protocolo Fantasma*** | generic deniable-infiltration premise; no franchise names, characters, gear or music |
| Bialystok Poznan motorway | **A2/E30 corridor**: `bialystok → a2lodz → a2poznan → swiecko` | four linked hot-spot maps, Ghost State rules |
| Pattaya Thailand | **`pattaya` (Jomtien strip)** + **`bkksoi`** | penthouse/fog/pool tiles; D7 seat |
| toxic gas "HOBBY blogger" | **NIEBLA DULCE** (fictional aerosol) aimed at channel **"Hobby Blog"**; target is **Wale Adeyemi** | symptoms-only depiction, sealed lab report, guardrail 7 + Q10 |
| start drinking alcohol again | **Relapse Meter** (`campaignState.sober`) | illness framing, no on-screen drinking, §16.7 |
| magic'd into sexy ladies | **`faeSight` misidentification** status + in-world tabloid rumour | no transformation mechanic or costume gag; §16.8, guardrail 8 |
| GO GO DANCER from siem reap | **Srey Neang ("Neang") Sok**, node `siemreap` | contract professional; introduced via work record |
| SOUTH KOREA AND WARSAW coworking spaces | **`incheon` (Convention Belt)** + **`warsawmok` (coworking high-rise)** | corporate-hospitality venues; no club content, no clients |
| "kobieta do towarzystwa" | scanned HR contract title in S6-1, glossed once | real Polish term used as paperwork, never as banter or enemy name |
| bloggers who sunspots to died in private prison in Bialystok | **Tomasz "Kwillo" Wieczorek**, node `bialpark` ("debt-recovery hostel") | survives; thread is about undoing what was done to him |
| without fingers | past-tense medical summary only ("I cannot type. I dictate.") | never shown, never interactive; guardrail 10 |
| head support be digger in playa Blanca cartegne | **`playablanca` apron labour crew**, drainage-cutting contract | "Playla" kept as the ring's own misspelling on a site hoarding (Q14) |
| life change his destiny | **`testimonyEntered` flag → THE LONG MEMORY ending** | the campaign's fifth ending, won by carrying his words |
| who packs/ships the fictional aerosol | **ST-8 "THE GLASS HOUSE"**, nodes `almeria`, `laemchabang`, desk **D7 NIEBLA** | derived thread (Q15); legal goods diverted by paperwork |

---

## 16. SIDE-THREAD DOSSIERS & WRITING BIBLE

Everything a writer needs to draft ST-1…ST-4 dialogue without inventing real-world
criminal technique or accusing real people/places.

### 16.0 Substance policy (extends §5.3 to all eight threads)
The rule is unchanged and now covers ST-5…ST-8: **no chemistry, no preparation, no
dispersal, no dosing, no route-specific evasion.** Concretely for the new threads:
- **NIEBLA DULCE** (ST-5) exists only as: a name, a sealed canister sprite, and two status
  icons on tokens (`dazed`, `faeSight`). Every in-world document about it is *sealed pending
  prosecution*. No scene shows it being mixed, loaded into anything, or administered; the
  venting in S5-3 is narrated by an alarm sound and a fog tile, never by a device close-up.
- **Veterinary sedative** (ST-8 S8-2) is named only as a lawful product misused by paperwork;
  no quantity, no species, no effect detail beyond "the box was not what the label said".
- ST-6 contains **zero** substances. Its contraband is paper. This is deliberate: the thread
  proves the campaign can be tense without any chemical MacGuffin at all.
- ST-7 contains **zero** substances. Its horror is custody paperwork.
If a reviewer ever finds a sentence that could teach, scale or source anything real, delete
the sentence — do not soften it. Gate G5 (§16.5) is a hard build gate.

### 16.1 Julián "Mercurio" Ocampo — ST-1 antagonist
- **Age 41. Half-brother of Merhujus** (same father, different mothers; he stayed with the
  father in the Cali corridor while she left for school). Never call him "Mercurius" in
  narration — that is his *ring handle*, used only by La Firma documents and wire-tap
  subtitles, which keeps the mythic name at arm's length.
- **Self-image:** a professional. Keeps receipts, refuses children as employees, pays funerals
  for people he maims. His horror is that he is *reasonable*.
- **Voice rules:** short declaratives; never monologues; addresses Merhujus formally
  ("usted") even in English — the crew uses first names. He says "I don't do witnesses"
  and then does them, because a client asked. The lie matters more than the crime.
- **What he must never say:** anything instructional; anything that makes witness-killing
  sound efficient or cool; any boast about police being bought.
- **Sgt. Delia Nkemdirim** is his true antagonist. She has a file on him, not a body count.
  Their one shared scene (S1-3) is her reading his rights while he asks after his sister.

### 16.2 The Nineveh Three / Khmer Three — ST-2
- **Azzam (37), Bahram (33), Lemi (29)** — raised Birmingham; Assyrian heritage, Iraqi
  grandparents. They speak a little Syriac between themselves for emphasis only (two words
  max per scene, glossed in subtitles). Their competence is real; their worldview is small.
- **Branch (b) truth reveal:** if you choose option (c), S2-B's post-credits Codex entry
  states they arrived in the UK as children in a D4 shipment and were recruited from a Hull
  hostel at fourteen. This recontextualises every earlier fight: the player was beating up
  other victims. Handle it in one sentence, no music.
- **Never write:** accent phonetics, broken-English jokes, religious markers as personality
  traits, or any line where another character explains their whole culture.
- **"Dockside Dan" Adeyemi** — 26, from Hull, films port logistics for 40k subscribers,
  monetised by merch and a podcast. He is brave, slightly annoying, and always right about
  containers. He must remain competent: he survives because he livestreams from a moving
  vehicle, not because a hero saves him at the last second. Give him two correct predictions
  per mission that the player can ignore at a cost.

### 16.3 Viktor "Tolkach" Druzhba & Marianna "Celna" Tarkowska — ST-3
- **Tolkach** (52, ex-rail freight manager) sells *certainty*: "sealed, insured, nobody
  opens." He genuinely does not know what his consignments contain, and the game must keep
  that ambiguity alive until S3-3. He is not evil; he is a man who stopped asking.
- **Celna** is the campaign's best civil servant: single mother, night shifts, reports
  anomalies through official channels and gets nothing back for eight months. Her deal with
  the crew is *evidence in exchange for protection of her identity* — the only honest
  bargain in the game. Write her as bored and precise, never as a femme fatale or a snitch.
- **The five Guest Operatives:** name them by contract number in UI (`OP-1 … OP-5`), never
  by nationality. Each gets one humanising object in the Codex (a bus pass, a child's drawing,
  a prayer card) so the player remembers they were also cargo. Their origin countries are
  stated once, in Prosecutor Sarkar's legal summary, in neutral language.
- **Maison Célysme:** fictional house, founded 1974 in Grasse, known for "Sel de Verre"
  (invented fragrance name). Only ever referenced as packaging and invoices.

### 16.4 Chieftain Baraka Mwinyi & the Mombasa leg — ST-4
- Baraka is 63, runs a licensed coastal haulage cooperative and a school transport route;
  he has been refused an EU export licence four times, which is why La Firma's offer looked
  rational. Give him that grievance in one line — it explains everything without excusing
  anyone.
- **La Curandera Belkys Duarte** (48, Cali→Lagos): she is not a witch and not a fraud — she
  is a *logistics woman who uses faith vocabulary because that is the vocabulary her clients
  trust*. Her `parleyable:true` flag is thematic: she cannot be defeated by damage because
  damage is not the argument. Beat her with documents and with the pilgrims' own testimony.
- **Language note:** Swahili words may appear max 3 per scene, always self-glossing
  ("*pole pole* — slowly"). Yoruba devotional terms likewise. Do not transliterate prayers.
- **No real shrine, church, mosque or saint is named.** Invented: *Nuestra Señora del
  Retraso* ("Our Lady of Delay" — darkly comic, ring-invented), *St. Kit of the Causeway*.

### 16.7 Mr. PING's relapse, written honestly — ST-5
- The meter is called `sober`, not `willpower`. It drains from **stress**, never from a
  player choice to drink on screen. There is no drinking animation, no bottle prop, no
  "one more" temptation prompt. The relapse happens off-camera between S5-1 and S5-2; the
  player learns of it from PING's own log entry, which is short and ugly and unfunny.
- Voice rules: PING does not monologue about it. He says *"I know what I am doing"* twice in
  the thread, and both times the mission state contradicts him. Recovery language follows
  the framing used by public-health services: illness, maintenance, support, no moral frame.
- The ending beat is a **clinic meeting room** with the door open — nobody applauds, nothing
  is cured, the chronicle line reads *"PING stayed in the room."* That is the win.
- Never let another hero joke about it, including Merhujus. If a writer needs levity there,
  put it on the enemy instead (the spotter's parking-ticket obsession).

### 16.8 La Mariposa, Wale and the disinformation beat — ST-5
- **La Mariposa (Nattara Suwannee, 41)** runs placement, not violence. She is polite, she
  uses HR vocabulary, and she genuinely believes she is helping people find work. Her horror
  is administrative. She has no attack move (`dmg:0`) and cannot be damaged — you beat her
  with a ledger, which is also the thematic point: the only weapon against a broker is a list.
- **Wale "Two Cameras" Adeyemi**: the man PING is briefed to silence. He is not brave or
  tragic — he is a working cameraman who is annoyed, tired, and worried about his gear. Let
  him be ordinary. His survival is the thread's proof that the campaign's heroes can fail
  upward.
- **The "magic'd into sexy ladies" line stays in the world, never in the UI.** Enemy chatter
  and tabloid Codex cards repeat it; every mechanic file calls the status
  `faeSight/misidentification`; the epilogue states plainly that six adults were drugged,
  filmed and then sold a story about it. No costume change, no voice-pitch gag, no sprite
  swap, no achievement name referencing it. Trans and intersex consultants hold veto on all
  tabloid card text (gate G6).

### 16.9 Neang, Grzelak and the labour framing — ST-6
- **Srey Neang Sok (27, Siem Reap)** is introduced through her **work record**, not her body:
  contract number, five-week rotation, per-show rate, one unpaid month in Incheon, a refused
  extension. Players should be able to summarise her after reading the board and the summary
  must contain the words *contract*, *rate* and *dispute*.
- She is the thread's expert, not its patient. She corrects Merhujus on venue logistics twice;
  both corrections are mechanically useful (they open doors).
- **Pani Iwona Grzelak (Warsaw)** is the mirror character: a small contractor trapped by one
  guarantor form. Do not write her as a victim or a monster — write her as someone who did
  bookkeeping badly once and has been paying for it eight years. Her sister-in-law link to
  Celna (ST-3) is how the player realises the ring recruits through family obligation.
- Terminology: *kobieta do towarzystwa* appears exactly once, inside a scanned contract, with
  an in-world gloss ("woman for company — hospitality staffing"). It is never used as dialogue
  banter or as an enemy name. Venue content is dance-floor and loading-bay only; no client is
  ever seen, heard or implied. Opt-out toggle reduces the thread to documents-only (§13).

### 16.10 Kwillo, Antov and the aftermath convention — ST-7
- **Tomasz "Kwillo" Wieczorek (34, Białystok)** posts delivery-route videos with a phone
  balanced on his steering column — which is why he knows names and plate patterns nobody else
  bothered to record. Give him that skill first, his injuries second, in that order.
- **Aftermath convention:** the game shows a **crime scene the player reads**, using the repo's
  existing silhouette/personal-object language (a chair, a phone mount, a notebook cover). The
  medical summary is one paragraph, past tense, clinical, no adjectives. There is no flashback,
  no interrogation minigame, no injury model, no close-up, and no sound design of pain. Any
  enemy line that threatens a captive ends the encounter immediately with a failure card naming
  the crime (guardrail 10).
- **His hands are never described on screen.** They are described once, in his own testimony,
  in terms of what he can no longer do (*"I cannot type. I dictate."*) — which is also the
  mechanical reason the Long Memory ending requires the player to carry his words.
- **Warden Grigor Antov** speaks like a property manager: units, deposit, arrears, keys. His
  evil is that he rents cages. **Meester Dirk Halman** speaks like a procedure: he is never
  rude, never wrong on the letter of the law, and beats the player if they lose their tempers.
  Neither is given a torture monologue.
- Kwillo decides everything about himself: whether to leave Playla Blanca, whether to testify,
  whether to name the buyer. If the player has Trust < 55 he stays, and the mission fails with
  a card that says *"He did not ask to be taken."*

### 16.5 Review gates before these threads ship
| Gate | Who | Question it answers |
|---|---|---|
| G1 Trademark | Legal | Any real brand (fashion, film, ferry line, port operator) in text/art? Must be NO. |
| G2 Defamation of places | Design lead | Does any line state that a real city/port *is* a criminal hub? Must be NO — "used by a fictional ring" only. |
| G3 Regional review | Paid consultants, NG + KE | Are Lagos/Mombasa NPCs fully human with lawful options? |
| G4 Community review | UK-based reader | ST-1/ST-2 witness-intimidation framing; Assyrian/Khmer representation. |
| G5 Ops-safety sweep | Any writer | Search all thread text for method verbs (how to open/seal/dose/forge/evade) **and for any chemical, toxicological or dispersal detail**. Zero hits allowed. ST-5/ST-8 get a second pass specifically on NIEBLA DULCE wording. |
| G6 Dignity & harm review | Paid consultants: trans/intersex writers (ST-5), sex-worker-led orgs in KH/KR/PL (ST-6), torture-survivor advocacy (ST-7) | Does any line treat the affected people as a punchline, a prop or a lesson? Do NPCs retain decision power? Veto power on named-card text. |
| G7 Place-and-community review | Design lead + local readers (Pattaya, Siem Reap, Incheon, Warsaw, Białystok, Cartagena, Almería) | Is any real place described as criminal, corrupt-by-culture, or unsafe-for-visitors? Only fictional fronts may be indicted; real counterparts must appear as lawful NPCs with names. |

### 16.6 Mission-count summary after the expansion
| Block | Missions | Playable hours (est.) |
|---|---|---|
| Main campaign (Acts I–VI) | 22 | 28–34 |
| ST-1 Mercury Blood | 4 | 4–5 |
| ST-2 Nineveh Run | 4 | 4–5 |
| ST-3 Sealed for the Maison | 4 | 4–5 |
| ST-4 White Road | 4 | 3–4 (one is dialogue-only) |
| ST-5 Ghost Protocol | 4 | 4–5 (stealth-only; one is a fork chapter) |
| ST-6 Company Contract | 4 | 3–4 (two are non-combat) |
| ST-7 Quill of Białystok | 4 | 4–5 (three are evidence/non-combat) |
| ST-8 Glass House | 4 | 4 (one is a duel chapter) |
| **Total** | **54** | **58–71** |
Endings: **5** (Witnesses / Ghosts / Fourth Desk / Honest Road / **Long Memory**).
Desks: **7** (D1–D4 core, D5 CIELO, D6 MERCURIO, D7 NIEBLA) + 4 named sub-desks (§3.2).
Nodes: **55**. Lanes: **45**. Statuses: **12**. Thread enemy archetypes: **22**.
Non-combat missions: **11 of 54** — this expansion deliberately raises the share of
missions won with paper, testimony and timing rather than damage.

---

## 15. CHANGELOG / NEXT COMMIT

- Added `docs/SCENARIO_INTERCONTINENTAL_RING.md` (this file) — Campaign 2 scenario.
- No engine files touched yet; the §8 JS block passes `node --check`, evaluates to
  **33 nodes / 22 lanes**, with no duplicate node ids and no dangling lane endpoints.
- Next step on your go: implement P1 items 1–3 (world map screen, `forgetful`, HEAT).

### 15.1 Second revision — four side-threads added (this commit)
- **§6B** new: ST-1 *Mercury Blood* (Merhujus's brother "Mercurio", UK enforcement cell,
  witness killings), ST-2 *Nineveh Run* (three-man contract team, Cardiff/Liverpool green-
  powder pickups, UK-wide blogger chase), ST-3 *Sealed for the Maison* (Mr. PING: Moscow
  cosmetics → Małaszewicze PL border gate, cargo turns out to be five contract operatives),
  ST-4 *White Road* (Blackhujus escorts Colombian "faith freight" via Lagos to Mombasa).
- **§2.5** new cast table; **§3.1** two extra desks (**D5 CIELO**, **D6 MERCURIO**);
  **§4.5** nine new nodes + four new truck hot spots.
- **§7** two new checks (SEAL CHECK, WATCH). **§8** schema extended: **+9 nodes, +10 lanes,
  +4 statuses, +10 enemy archetypes (`THREAD_ENEMY_DEFS`), +12 campaign flags, thread state
  machine**; **§8.1** implementer notes. Re-validated below.
- **§9.2/§9.2b** real-source grounding extended (SOCTA service-provider framing, document
  fraud in mixed cargo, East-Africa transit reporting) + per-thread accuracy notes.
- **§10** thread Trust rows. **§11** thread palettes, tile types, D5/D6 crate colours,
  brand-safe prop briefs. **§12** Milestone P4 + scope warning. **§13** updated warnings +
  per-thread opt-out. **§14** questions 5–9 added, name table extended with all new terms.
- **§16** new dossiers & writing bible (substance policy, character voice rules, review gates).
- **Interpretations I made for you** (all reversible): heroin = off-board only; "SHREK
  enemies" = *the Glass List* (snitches); DIOR/CHANEL = fictional **Maison Célysme**;
  "white magic" = faith-freight cover, no supernatural system; Cambodian trio kept as an
  optional branch because Cambodia↔UK enforcement is logistically implausible (§6B ST-2).

### 15.2 Third revision — four more side-threads (ST-5…ST-8), fifth ending (this commit)
- **§6B** now covers **eight** threads. New: **ST-5 *Ghost Protocol*** (Mr. PING: sealed
  canister along the Białystok→Poznań A2/E30 motorway corridor → Pattaya; on-duty relapse;
  a wrong-room incident whose survivors are sold a "he turned us into women" story),
  **ST-6 *Kobieta do Towarzystwa*** (Merhujus: Siem Reap stage professional Neang's lawful
  rotation through Incheon and Warsaw "coworking" venues becomes La Firma's cover),
  **ST-7 *The Quill of Białystok*** (the campaign's moral centre: courier-blogger Kwillo,
  private detention, aftermath-only injury, sold to a Playla Blanca digging crew, rebuilt as
  the key witness), **ST-8 *The Glass House*** (Blackhujus: who actually packs and ships it —
  Almería produce codes, Rotterdam cold store, Laem Chabang).
- **§2.5** +11 named characters (La Mariposa, Wale, Neang, Rithy, Grzelak, Kwillo, Antov,
  Halman, El Químico, Auditor Vos, plus the hostel guards); **§3.1** new desk **D7 NIEBLA**;
  **§3.2** new: four named **sub-desks** so the org chart grows without growing the count.
- **§4.5** +13 nodes / +13 lanes (totals now **55 / 45**), three new real-named truck hot spots.
- **§6B guardrails** extended with items **7–11**: no chemical detail ever (symptoms-only
  fictional aerosol), no supernatural mechanic presented as real (disinformation + targeting
  debuff), sex work as labour with agency and never as a gag, torture/mutilation off-screen
  and non-interactive, real places stay innocent.
- **§7** six new skill checks (GHOST WALK, PUBLISH A GAP, HOLD THE ROOM, BID THE LEDGER,
  CITE THE LOG, plus SEAL/WATCH reuse). **§8** schema extended and re-validated: **+13 nodes,
  +13 lanes, +8 statuses, +12 enemy archetypes, +24 campaign flags**, thread state machine now
  `locked|active|done|done-dark`. **§8.2** implementer notes for every new mechanic.
- **§9** grounding note: threads model *document fraud, labour exploitation, unlawful
  detention and disinformation* — all four are documented crime types, none are instructions.
- **§10** Trust rows for D7 network, the dancers, Kwillo and the Almería cooperative.
- **§11.3** art/audio brief for all new tiles, the canister sprite (freight, never weapon),
  the reticle-only `faeSight` overlay, and ambience ducking for Ghost State.
- **§12** Milestone **P5** with a 12-step build order and a revised scope warning: eight
  threads = 32 extra grids (+145%). Recommended shape: launch ST-1+ST-3, Pack A (ST-2/4/6),
  Pack B (ST-5/7/8) shipped together because it carries the fifth ending.
- **§13** warnings extended; per-thread opt-outs for ST-5…ST-8; classroom build defined.
- **§14** questions **10–15** added (gas depiction options, magic-beat handling, Neang as
  union delegate, ST-7 interpretation confirmation, "Playla" spelling, whether to keep ST-8);
  name table extended with every phrase from your third brief.
- **§16.0** substance policy rewritten to cover all eight threads; **§16.7–§16.10** new
  dossiers (relapse written honestly, La Mariposa/disinformation, labour framing, the
  aftermath convention); gates **G6** (dignity & harm review) and **G7** (place & community
  review) added, G5 strengthened.
- **New systems available to the main campaign:** Objective Fork with printed costs, Consent
  Meter/NPC autonomy, Evidence-Only missions, Chronicle Forensics (reads real save data),
  Process Boss and Card Boss (no-HP enemies). Eleven of 54 missions are now winnable without
  dealing damage.
- **Fifth ending added: "THE LONG MEMORY"** — won by carrying a man's words to a hearing
  instead of carrying his cargo. Requires ST-7 clean, Trust ≥70, ≤1 GAP.
- **Interpretations I made for you in this revision** (all reversible, all listed in §14):
  "Mission Impossible" → generic deniable-contract premise (no franchise IP); "toxic gas" →
  fictional **NIEBLA DULCE**, symptoms-only; "magic'd into sexy ladies" → in-world
  disinformation + `faeSight` targeting debuff, nobody is transformed; go-go dancer → lawful
  contract labour whose paperwork is abused; "sunspots to died … without fingers … head
  support be digger" → survived unlawful detention and was sold to a digging crew, then
  became the campaign's key witness; "Playla" spelling kept as the ring's own bad signage.