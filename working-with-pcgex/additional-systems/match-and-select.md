---
icon: link-simple
---

# Match & Select

**"Which point over there corresponds to this point here?"** That question comes up constantly — in sampling, filtering, cluster operations, anywhere two datasets need to talk to each other. Match & select sub-nodes answer it.

Two families: **matching** (correlate data between sources) and **pickers** (select indices from collections). Both follow the same provider/consumer pattern you've seen in filters and heuristics.

### Matching

Matching rules define how points from one dataset correspond to points in another. You configure the rules, and any consuming node uses them to find the right pairing.

| Rule                                                                                                      | Matches By                                                                                                                                  |
| --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| [match-attributes.md](../../node-library/utilities/data-matching/match-attributes.md "mention")           | Compares attribute values between datasets — numeric (equal, nearly equal, greater/less than) or string (exact, contains, starts/ends with) |
| [match-tags-attributes.md](../../node-library/utilities/data-matching/match-tags-attributes.md "mention") | Compares tag values on one side against attribute values on the other                                                                       |
| [match-shared-tag.md](../../node-library/utilities/data-matching/match-shared-tag.md "mention")           | Common tags between datasets — specific tag, any shared, or all shared                                                                      |
| [match-overlap.md](../../node-library/utilities/data-matching/match-overlap.md "mention")                 | Spatial bounding box intersection with configurable expansion and octree acceleration                                                       |
| [match-by-index.md](../../node-library/utilities/data-matching/match-by-index.md "mention")               | Pairs elements by index position, with safety modes for mismatched sizes (clamp, wrap, yoyo)                                                |
| [match-random.md](../../node-library/utilities/data-matching/match-random.md "mention")                   | Probabilistic matching with seed-based threshold — deterministic randomness                                                                 |
| [match-copy-tags.md](../../node-library/utilities/data-matching/match-copy-tags.md "mention")             | Side-effect rule: copies tags from matched targets to candidates when other rules succeed                                                   |

#### Multi-Rule Composition

Rules compose into compound logic. Each rule can be marked **required** or **optional** — required rules must all pass, optional rules improve the match score. This lets you express "must share this category tag _and_ preferably overlap spatially."

Aggregation across rules uses strictness modes: **Any** (match if any rule passes) or **All** (every rule must pass). Combined with inversion on individual rules, this covers complex correlation logic without writing custom code.

#### Matching Details

When a node uses matching to pair entire datasets (not just individual points), the **Matching Details** struct controls the behavior:

* **Mode**: Disabled (all combinations), Any (share any tag), All (share all tags)
* **Limit Matches**: Cap how many targets each source can match — useful for 1-to-1 or 1-to-N relationships
* **Split Unmatched**: Route unmatched elements to a separate output

**Used by:** Filters, sampling operations, cluster operations, and any node that needs data correlation between two sets.

***

### Pickers

Pickers answer a simpler question: "which index do I want?" They select entries from ordered collections — constant values, ranges, attribute-driven lookups.

| Picker                                                                                                  | Selection Strategy                                                                  |
| ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| [picker-constant.md](../../node-library/utilities/pickers/picker-constant.md "mention")                 | Single index — discrete value or 0–1 normalized position                            |
| [picker-range.md](../../node-library/utilities/pickers/picker-range.md "mention")                       | Contiguous span from start to end, with auto-swap if reversed                       |
| [picker-indices-from-set.md](../../node-library/utilities/pickers/picker-indices-from-set.md "mention") | Multiple discrete indices read from one or more attributes                          |
| [picker-ranges-from-set.md](../../node-library/utilities/pickers/picker-ranges-from-set.md "mention")   | Multiple ranges from `FVector2D` attributes (X=start, Y=end), merged if overlapping |

All pickers share these behaviors:

* **Negative indexing**: `-1` is the last element, `-2` second-to-last
* **Normalization**: Treat values as 0–1 positions mapped to collection size, with configurable rounding (round, ceil, floor)
* **Safety modes**: What happens when an index is out of bounds — Ignore (skip), Clamp (pin to range), Wrap (modulo), or Tile (ping-pong at boundaries)

**Used by:** Filters, selection operations, distribution.

### The Pattern

Both matching and pickers follow the provider/consumer pattern:

1. Place match or picker sub-nodes in your graph
2. Configure their behavior
3. Connect outputs to the consumer node's input
4. Multiple sub-nodes can combine into composite logic

If you're comfortable with how filters compose, these work the same way. The difference is what they do — filters pass/fail individual points, match & select sub-nodes correlate _between_ datasets or _select from_ collections.

### Related

* [provider-consumer-pattern.md](../architecture/provider-consumer-pattern.md "mention")
* [data-matching](../../node-library/utilities/data-matching/ "mention") nodes
* [pickers](../../node-library/utilities/pickers/ "mention") nodes
