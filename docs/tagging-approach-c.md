# Tagging Proposal C — Target Groups (granular)

**Status:** Proposal, not yet implemented
**Axis:** *"Who am I? Does this apply to me?"*
**Replaces:** the existing IFO `zielgruppen` axis (only 5 values, of which 320× *Jedes Alter* — practically useless)
**Tags per Leistung:** typically 1–3 (Leistungen often hit multiple profiles)

---

## Tag set (19)

1. **Schwangere & junge Mütter**
2. **Säuglinge & Kleinkinder** (0–3)
3. **Schulkinder & Jugendliche**
4. **Studierende**
5. **Auszubildende**
6. **Eltern & Familien**
7. **Alleinerziehende**
8. **Pflegende Angehörige**
9. **Arbeitnehmende** (sozialversicherungspflichtig)
10. **Arbeitsuchende & Arbeitslose**
11. **Selbstständige & Gründende**
12. **Menschen mit Behinderung**
13. **Chronisch Kranke & Patient:innen**
14. **Pflegebedürftige Menschen**
15. **Senior:innen & Rentner:innen**
16. **Hinterbliebene** (widows, orphans)
17. **Beamt:innen, Soldat:innen & Richter:innen**
18. **Opfer von Gewalt, Krieg & Unfall**
19. **Geflüchtete & Asylsuchende**

---

## Pros

- **Enables a persona entry point.** Landing page can use "I am …" — directly maps onto search behavior.
- **Makes the weakest IFO axis useful.** `zielgruppen` in the source has 5 values (Jedes Alter, Erwerbsalter, Jugendliche, Senior:innen, Kinder) and is too coarse — 19 tags give real filter leverage.
- **Orthogonal to life situation and benefit type.** Combines later with Proposal A (life events) and B (benefit type) as facets without conflict.
- **Tangible and concrete.** Tags are nouns a person can self-identify with — not bureaucratic catch-alls like "Sozialhilfe & besondere Lebenslagen".
- **Robust against corpus growth.** When Phase 2 adds more Leistungen, most will fit one of the 19 profiles.

## Cons

- **Multi-tagging is frequent.** A benefit like "Mehrbedarf für Alleinerziehende" easily carries 3+ tags (Alleinerziehende, Eltern & Familien, Arbeitsuchende). Needs clear assignment rules.
- **Hierarchical overlaps.** *Alleinerziehende* ⊂ *Eltern & Familien*, *Pflegebedürftige* partially ⊂ *Menschen mit Behinderung*. Need a convention: "assign the more specific tag and drop the parent" or assign both.
- **Says nothing about actual entitlement.** That's a feature, not a bug — but users may assume every tag hit means they qualify. See *Exclusions* below.
- **Manual initial assignment for 506 entries.** IFO's zielgruppen aren't fine-grained enough to map automatically. Likely needs an LLM pass plus manual review.
- **Gendering** (e.g. *Senior:innen*) — pick a convention (colon? asterisk? generic masculine?) up front, otherwise inconsistency in the UI.

---

## Important: exclusions live on a separate layer

The 19 tags are **additive** — they only say "this benefit is potentially relevant for this profile". They do **not** mean a person can actually combine all tagged benefits.

Real exclusions live on a different layer and should be modeled separately.

### Five main fault lines in the corpus

1. **Beamt:innen / Soldat:innen** are completely outside SGB V, VI, III → BeamtVG, Beihilfe, freie Heilfürsorge replace it (≈37 BeamtVG entries).
2. **Selbstständige** are excluded from many SGB compulsory benefits, unless voluntarily insured.
3. **AsylbLG recipients** are excluded from SGB II/XII for the first 36 months.
4. **Studierende & Azubis** are generally excluded from Bürgergeld (BAföG/BAB instead of SGB II).
5. **Pension receipt** excludes ALG; Grundsicherung im Alter replaces Bürgergeld.

Within the "life situation" tags (Alleinerziehende, Pflegende Angehörige, Menschen mit Behinderung, Chronisch Kranke, Hinterbliebene, Opfer) there are **no** hard exclusions — those stack freely.

### Example: unemployed single mother

Tags: *Alleinerziehende* + *Eltern & Familien* + *Arbeitsuchende & Arbeitslose* + possibly *Schwangere & junge Mütter*.

| Benefit | Entitled? | Note |
|---|---|---|
| ALG I | yes (with qualifying period) | **or** Bürgergeld |
| Bürgergeld | yes | if no/insufficient ALG I |
| Kindergeld | yes | additive |
| Unterhaltsvorschuss | yes | counted against Bürgergeld |
| Mehrbedarf für Alleinerziehende | yes | within Bürgergeld |
| Bildung-und-Teilhabe-Paket | yes | for the child |
| Wohngeld in parallel with Bürgergeld | **no** | KdU already included |
| Kinderzuschlag in parallel with Bürgergeld | **no** | either/or |
| BAföG if she starts studying | **no** in parallel with Bürgergeld | Bürgergeld ends |

### Suggested second dimension (separate from the 19 tags)

Three possible forms, increasing complexity — (1) + (2) should suffice for Phase 1:

1. **Versorgungssystem tag per Leistung** — a single value from
   {*Gesetzliche Sozialversicherung*, *Steuerfinanzierte Fürsorge*, *Beamtenversorgung*, *AsylbLG*, *Steuerrecht*}.
   Lets the UI say directly: "You are a civil servant — this benefit is not relevant for you."
2. **Nachrang / Anrechnung notes** as free text in `annotation` ("Counted against Bürgergeld" / "Excludes parallel Wohngeld receipt").
3. **Structured exclusion relation** between Leistung IDs (`exclusiveWith: [<id>, …]`).
   Powerful but expensive to maintain — Phase 2 at the earliest.

---

## Open questions / notes

- **Mapping rule for hierarchies:** assign *Alleinerziehende* in addition to *Eltern & Familien*, or only the more specific one? Suggestion: both, so an "Eltern" filter also returns Alleinerziehende.
- **Merge Auszubildende and Studierende?** Legally distinct (BAföG vs. AFBG/BAB), but users probably see them as one profile. Lean toward keeping them separate, since the benefit landscape really differs.
- **Arbeitnehmende — what exactly?** Employees subject to social insurance. Mini-/Midi-Jobs? Include for now, sort edge cases later.
- **Beamt:innen, Soldat:innen & Richter:innen** could be split if the 37 BeamtVG entries cleanly subdivide. Keep as one tag for now.
- **Translation/language layer:** tags are currently German — if an EN or plain-German variant comes later, they need stable IDs (slugs), not the label string as key.
- **Assignment pass:** LLM suggestion per Leistung + manual review. Realistically 4–6 hours for 506 entries in two-eyes mode.

---

## Status & next steps (when picked up)

- [ ] Define assignment rules (hierarchy, multi-tagging)
- [ ] Pick gendering convention
- [ ] Define slug IDs for tags
- [ ] LLM pass for initial assignment across all 506 entries
- [ ] Manual review pass
- [ ] Schema extension in `src/data/schema.ts`
- [ ] Add Versorgungssystem tag as second dimension (Phase 1)
- [ ] Add Anrechnung notes to `annotation` (Phase 1)
- [ ] UI facet for the target-group filter
