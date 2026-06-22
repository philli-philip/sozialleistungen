# Opinion

This whole project is based on the statement from the IFO-institute that Germany has more than 500 social benefits. With the subtext being that 500 is way too many and overcomplicating the system. This angle is superficial, just because 500 is a large number, does not make it any less valid. So this project tries to visualize the 500 rules so that everyone can make their own decision. I will not shy away from opinions but want to stay neutral if the social benefits themself are valid or not.

## Oberservations

Following a few observations 

### The IFO mapping between paragraphs and entries is inconsistent

The claim "506 Gesetzesparagraphen" is an oversimplification. The IFO data does not apply a consistent rule for how paragraphs map to entries:

- **1 paragraph → multiple entries (legitimate split):** § 27 Abs. 2 SGB II is split into 5 distinct entries — Mehrbedarf Schwangere, Mehrbedarf Alleinerziehende, Mehrbedarf kostenaufwendige Ernährung, Mehrbedarf besondere Umstände, Erstausstattung. These are genuine distinct entitlements within one paragraph.
- **Multiple paragraphs → 1 entry:** BAföG sometimes combines e.g. § 11 and § 17 into a single entry.
- **Sub-rules listed as separate entries:** § 23, § 25 and § 29 BAföG (income/asset/parental allowances) are purely calculation parameters of the same Förderung, yet each gets its own entry.
- **Scale:** 22 distinct Rechtsnormen appear more than once in the dataset; the worst case (§ 27 Abs. 2 SGB II) appears 5 times.

The practical consequence: the `rechtsnorm` field cannot serve as a unique identifier for an entry, and grouping by paragraph on detail pages must aggregate all matching entries.

### A law itself is not a social benefit

For example, [Freibeträge für eigenes Einkommen](https://sozialleistungen.onrender.com/leistungen/e8a7db7e58),[Freibeträge Elterneinkommen](https://sozialleistungen.onrender.com/leistungen/8d7924da91) and [Vermögensfreibeträge](https://sozialleistungen.onrender.com/leistungen/8d7924da91) are not social benefits in itself but are rules that apply in the context of the overall Bafög social benefit.

I identified around 67 social benefits that are not social benefits in itself but are rules that define how social benefits are awarded. Then we end up with already 13% less social benefits or.

### Benefits for every life situation

The IFO-institute groups into 7 broad categories. I used a different perspective of life situations to group benefits into 23 categories. Then on average we have 19 benefits per life situation.

### Entries I could not cleanly classify

These sit on the border between a benefit and a rule, so — per the rule above — they are listed here instead of being counted in the table. Almost all are top-ups expressed as extra *Entgeltpunkte* in the pension formula (SGB VI): arguably a benefit to the recipient, arguably just a calculation rule inside an existing pension.

- **Kindererziehungszeiten in der Rente** — `§ 56 Kindererziehungszeiten SGB VI` _(life situation: senior)_
- **Monatlicher Zuschuss für Familienangehörige** — `§ 295 Höhe der Leistung SGB VI` _(life situation: senior)_
- **Rentensplitting unter Ehegatten** — `§ 76c Zuschläge oder Abschläge beim Rentensplitting SGB VI` _(life situation: hinterbliebene)_
- **Rentenzuschlag für Rentenbeginne 1992/1993** — `§ 319a Rentenzuschlag bei Rentenbeginn in den Jahren 1992 und 1993 SGB VI` _(life situation: senior)_
- **Rentenzuschlag für besondere Auslandsverwendung** — `§ 76e Zuschläge an Entgeltpunkten für Zeiten einer besonderen Auslandsverwendung SGB VI` _(life situation: senior)_
- **Rentenzuschlag für nachversicherte Zeitsoldaten** — `§ 76f Zuschläge an Entgeltpunkten für nachversicherte Soldaten auf Zeit SGB VI` _(life situation: beamte, senior)_
- **Rentenzuschläge für Beiträge nach Rentenbeginn** — `§ 76d Zuschläge an Entgeltpunkten aus Beiträgen nach Beginn einer Rente wegen Alters SGB VI` _(life situation: senior)_
- **Zusatzentgeltpunkte für Arbeit untertage** — `§ 85 Entgeltpunkte für ständige Arbeiten unter Tage SGB VI` _(life situation: senior)_
- **Zuschlag bei Waisenrenten** — `§ 78 Zuschlag bei Waisenrenten SGB VI` _(life situation: hinterbliebene, senior)_
- **Zuschlag bei Witwenrente / Witwerrente** — `§ 78a Zuschlag bei Witwenrenten und Witwerrenten SGB VI` _(life situation: hinterbliebene)_

**Borderline cases I resolved in favour of "benefit"** (and therefore kept in the table): the BeamtVG _Unterhaltsbeitrag_ / _Unfallfürsorge_ families, the many SGB VI _Altersrente_ access variants (merged into one), and the GKV health-service catalogue in SGB V (each covered service kept as its own benefit). Reasonable people could draw these lines differently; the methodology above makes it easy to move an item from one column to the other.

### Labor law entitlements — a fourth category

Beyond "rules" (calculation parameters inside a benefit), a second kind of entry that is not a social benefit is a **labor law entitlement**: a right the government grants workers *against their employer*, with no government transfer attached. The employer bears the cost, not the state.

Examples: the right to reduce hours under *Familienpflegezeit* (FPfZG § 2), the right to full leave under *Pflegezeit* (PflegeZG § 3), and the employment-protection rules that run alongside both. The government gives you a legal stick; it gives you no money. The money — if any — comes from a separate instrument (e.g. the *zinsloses Darlehen* that compensates for lost income during Familienpflegezeit, which is a genuine state transfer and stays in the list).

The IFO source counts these entitlements as benefits, which inflates the number. This project excludes them on the grounds that no public resource flows: the state acts as legislator, not as payer.

### Parallel systems: the same help, counted more than once

Beyond rules and split paragraphs, a third reason the number is inflated: Germany runs **parallel benefit systems**, and the IFO list counts the same kind of help once per system. Every entry belongs to one of five financing logics — **Sozialversicherung** (you paid contributions: 52% of entries), **Fürsorge & Grundsicherung** (tax-funded, means-tested: Sozialhilfe SGB XII + Bürgergeld SGB II + AsylbLG, 14%), **Teilhabe & Jugendhilfe** (9%), **Entschädigung & Beamtenversorgung** (15%) and **Familien-, Bildungs- & Rechtsförderung** (10%). Sozialhilfe proper (SGB XII) is only ~8% of the distinct benefits — but it is *subsidiary*: it has to insure the same life risks as the contributory system, just for people without (sufficient) coverage. So SGB XII re-implements large parts of the insurance catalogue a second time.

The clearest case is long-term care: the care insurance (SGB XI) pays care allowance, in-kind care, short-term and day/night care, care aids… but only up to capped amounts. Whatever exceeds the cap, and whoever never paid in, receives nearly the same catalogue again as _Hilfe zur Pflege_ under Sozialhilfe (SGB XII). The same pattern repeats with _Hilfe bei Krankheit_ (SGB XII ↔ statutory health insurance) and with _Bildung & Teilhabe_, which is written into the law three times over — Bürgergeld (SGB II), Kinderzuschlag (BKGG) and Sozialhilfe (SGB XII). A chunk of "the 500", then, is not 500 distinct ideas but the same help delivered through a second or third track — separated only because each track runs on a different logic (contribution, need, compensation) and a different agency.

## Case-by-case decisions

Individual entries that required a deliberate call — documented here so the reasoning is traceable.

### § 33b EStG — split into Behinderten-Pauschbetrag and Pflegepauschbetrag

The IFO source lists § 33b EStG as a single entry. It contains two structurally different benefits for two different people:

- **§ 33b Abs. 1–3** — *Behinderten-Pauschbetrag* — flows to the **disabled person** (or their parents). Trigger: recognised GdB ≥ 20. Cap: 7.400 €/year.
- **§ 33b Abs. 6** — *Pflegepauschbetrag* — flows to the **caregiver**, who need not have any disability. Trigger: providing unpaid care to someone with Pflegegrad 2+. Cap: 1.800 €/year.

A caregiver without a disability would never think to look under "Behinderten-Pauschbetrag". The shared paragraph is an accident of legislative drafting, not a sign that these are one benefit. **Decision:** two entries, each with its own `who`/`when` tag. The split adds one entry to the total but corrects a navigational dead-end.

### Familienpflegezeit — removed as a labor law entitlement

*Familienpflegezeit* (FPfZG § 2) gives employees the right to reduce their hours for up to 24 months to care for a relative. The employer must accept this; the state pays nothing. This is a labor law entitlement (see category above), not a social benefit.

The accompanying *Zinsloses Darlehen während Familienpflegezeit* (FPfZG § 3) is a genuine state transfer and stays in the list. The two were also represented as duplicate entries in the IFO source (`familienpflegezeit` and `familienpflegezeit-2`) — both have been removed; the loan survives.

### Grundrentenzuschlag — removed as a standalone benefit

The IFO source lists the *Grundrentenzuschlag* (§ 76g SGB VI) as a separate entry. It has distinct eligibility criteria (≥ 33 Grundrentenzeiten, monthly average below 0.8 Entgeltpunkte, income below a threshold) and its own calculation logic — but it cannot be paid out independently. It exists only as an add-on to an already-running pension; there is no claim against the social system without a prior pension entitlement.

The key distinction from genuinely independent supplements like *Kinderzuschlag* is that Kinderzuschlag has its own legal relationship with the state that exists regardless of other benefits. The Grundrentenzuschlag has no such existence: it is a top-up modifier of the pension, delivered through the same payment, inseparable from it in law and in practice. The "cannot be paid standalone" fact is not a delivery detail — it reflects the conceptual reality.

**Decision:** removed as a standalone benefit; its norms (§§ 307e, 307f, 307i, 307j SGB VI, § 76g SGB VI) are mapped to *Altersrente (alle Varianten)* and surface as related norms on that benefit card.

### § 34 SGB V — three ifo entries split into two benefits

The IFO source groups three § 34 SGB V entries under a single "Erstattungsfähige OTC-/Entwöhnungsmittel (Ausnahmen)" benefit:

- `ebb0aeb6b7` § 34 Abs. 2 — OTC Tabakentwöhnungsmittel (once-off, any adult GKV member)
- `16fbe8692f` § 34 Abs. 1 — OTC medicines for children 0–11 (general child rule)
- `d68d2a70b1` § 34 Abs. 1 — OTC for adolescents 12–17 with developmental disorders

These serve completely different populations for completely different reasons. The tobacco cessation benefit has nothing to do with families or children — it applies to any GKV member who smokes and participates in a supervised programme. The children's OTC coverage is the default rule for under-12s (§ 34 Abs. 1 exempts them from the general OTC exclusion), and the developmental disorder exception targets a specific adolescent subgroup.

**Decision:** split into two benefits. *Tabakentwöhnungsmittel (GKV)* covers the adult tobacco exception (`who: alle`); *OTC-Arzneimittel für Kinder & Jugendliche* covers the children's entitlement (`who: familie`). Net effect: +1 benefit.

### § 43 SGB V — split into two benefits along Abs. 1 / Abs. 2

The IFO source maps all four § 43 SGB V entries to a single "Ergänzende Leistungen zur Rehabilitation" benefit. But Abs. 1 and Abs. 2 address genuinely different situations and populations:

- **§ 43 Abs. 1 S. 1 + S. 2** — ergänzende Reha-Leistungen and Patientenschulungsmaßnahmen for adults with disabilities in GKV-trägerschaft. The two sentences are sub-types of the same entitlement (patient education is one form of ergänzende Leistungen).
- **§ 43 Abs. 2** — Sozialmedizinische Nachsorge for chronically or severely ill *children* (0–13, up to 18 in severe cases) following a hospital stay. A structurally separate programme delivered by specialist organisations (e.g. Bunter Kreis), for a different population, triggered by a different event (hospital discharge, not a disability diagnosis), and with its own funding logic.

The two Abs. 2 entries (0–13 vs. 0–18 for severe cases) are a parameter split within one provision — collapsed into one benefit, same as §43b.

**Decision:** split into two benefits. *Ergänzende Leistungen zur Rehabilitation* retains Abs. 1 (`who: behinderung`, `when: rehabilitation`); *Sozialmedizinische Nachsorge (Kinder)* covers Abs. 2 (`who: familie`, `when: krankheit-behandlung`). Net effect: +1 benefit.

### § 43b SGB V — four ifo entries collapsed into one benefit

The IFO source lists four separate entries for nichtärztliche Leistungen in medizinischen Behandlungszentren (MZEB), all pointing to the same norm (§ 43b SGB V):

- *Psychologische Leistungen für Erwachsene mit geistiger Behinderung*
- *Heilpädagogische Leistungen für Erwachsene mit geistiger Behinderung*
- *Sozialarbeiterische Leistungen für Erwachsene mit geistiger Behinderung*
- *Nichtärztliche Leistungen … (Pflege)*

These are not four separate benefits. § 43b SGB V grants adults with intellectual or severe multiple disabilities a single entitlement to non-medical care in an MZEB; the paragraph merely enumerates which service types count (psychological, heilpädagogisch, social work, nursing). The claimant files one application with one insurer and receives one coordinated treatment plan. Splitting by service type is an artefact of the ifo's data model, not a meaningful eligibility distinction — no one applies for "sozialarbeiterische Leistungen" separately from "psychologische Leistungen". This is the same pattern as Fig. 1 (multiple entries, one Leistung).

**Decision:** all four entries are consolidated into *Nichtärztliche Leistungen (Erw. mit geistiger Behinderung)*, reducing the count by three.

### § 27 SGB II vs. SGB III — wrong law book in the ifo source

All 9 norms bundled under *Mehrbedarfe & Härtefalldarlehen für Azubis* are tagged by the ifo as `SGB III` with the rechtsnorm label "§ 27 Abs. 2/3 Versicherungsfreie Beschäftigte SGB III". This is factually wrong on two counts:

- **§ 27 SGB III** is titled "Versicherungsfreie Beschäftigte" and concerns who is exempt from unemployment insurance. It contains nothing about Mehrbedarfe, Härtefalldarlehen, pregnancy top-ups, or hardship loans for apprentices.
- **§ 27 SGB II** is explicitly titled "Leistungen für Auszubildende" and is the correct legal basis: Abs. 2 grants Mehrbedarfe (referencing § 21 Abs. 2, 3, 5, 6 SGB II), and Abs. 3 grants Härtefalldarlehen for housing, warm water, health insurance, and children's education & participation.

The Studierendenwerke confirms this: their guidance on hardship loans for apprentices cites § 27 SGB II throughout, not SGB III.

**Consequence for the ifo's count:** the benefit sits in the wrong law book and is incorrectly categorised under "Leistungen der Ausbildungsförderung" (SGB III logic) when it structurally belongs to Grundsicherung (SGB II logic) — a supplementary safety-net for apprentices who cannot receive regular Bürgergeld. The parallel-systems inflation discussed above applies here too: SGB II § 27 is the fallback for apprentices that BAB (SGB III) does not fully cover.

**Decision:** URLs in annotations corrected from `sgb_3/__27.html` → `sgb_2/__27.html`; benefit title updated from "(SGB III)" to "(SGB II)". The ifo `gesetz` field in the raw data remains SGB III as-sourced — the error is theirs to correct.

### § 33a EStG — Außergewöhnliche Belastungen (besondere Fälle) removed as a tax deduction

*Außergewöhnliche Belastungen (besondere Fälle)* allows taxpayers to deduct maintenance payments to needy relatives or vocational training costs for children living away from home from their taxable income. It sits in the Einkommensteuergesetz, not in social law.

A tax deduction is not a social benefit: the state does not transfer money to anyone. It reduces what it takes from a taxpayer who already owes tax. Someone with no taxable income gets nothing. The mechanism is the opposite of a Sozialleistung — it benefits higher earners more, whereas social benefits are typically targeted at lower incomes.

**Decision:** removed from the benefit list. The same reasoning applies to other EStG entries such as *Behinderten-Pauschbetrag* (§ 33b), *Altersentlastungsbetrag* (§ 24a), and *Kinderfreibetrag* (§ 32) — they are steuerliche Entlastungen, not Sozialleistungen.

### Kombileistung — removed as a coordination rule

*Kombileistung* (§ 38 SGB XI) describes what happens when a care recipient uses ambulatory Pflegesachleistungen (§ 36) only partially while also drawing Pflegegeld (§ 37): the unused Sachleistung fraction is proportionally paid out as Pflegegeld. § 38 contains no independent entitlement, no separate budget, and requires no separate application — the money always flows from the § 36 and § 37 pots. It is a coordination rule between two already-listed benefits, not a third benefit in its own right. **Decision:** removed from the benefit list.
