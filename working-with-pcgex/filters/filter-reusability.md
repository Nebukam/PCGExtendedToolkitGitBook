---
icon: rotate
---

# Filter Reusability

**One filter, many consumers.** Filters are designed so that a single filter instance can connect to multiple consumers. The logic stays in one place, behavior stays consistent, and updates apply everywhere at once.

<figure><img src="../../.gitbook/assets/image (180).png" alt=""><figcaption></figcaption></figure>

Connect the same filter output to as many Filters input pins as needed. The filter is evaluated independently for each consumer's context.

{% hint style="warning" %}
Filters with external data (Distance, Bounds, Inclusion) pre-compute internal structures. Reusing the same filter instance avoids redundant computation. Duplicating the filter node with identical settings causes each copy to pre-compute the same data independently.
{% endhint %}

{% hint style="info" %}
When filters reference unbounded input data (data spanning beyond the current generation grid cell), pre-computed structures from unbounded sources can be shared across grid cells. Structure your graphs so these filters connect to truly unbounded data rather than regenerating per-cell.
{% endhint %}

### Gather and Named Redirectors

For larger graphs, filters can be gathered like any other PCG data. Use **Named Redirectors** (reroute nodes with names) to maintain filters in one location and reference them throughout your graph. This avoids long wire runs across complex graphs and works within a single graph without subgraph overhead.

<figure><img src="../../.gitbook/assets/image (185).png" alt=""><figcaption></figcaption></figure>

### Subgraph Patterns

Subgraphs add complexity but enable cross-graph reuse. Consider simpler approaches first.

#### When Subgraphs Make Sense

* Filter setup appears across multiple separate graphs (not just one large graph)
* Complex filter logic benefits from encapsulation
* Multiple people work on the project and need shared definitions

#### Exposing Additional Conditions

A useful pattern: create internal "static" filters for core processing logic, then expose an "Additional Filters" pin that feeds into a Filter Group. Users can extend conditions without modifying the subgraph.

<figure><img src="../../.gitbook/assets/image (189).png" alt=""><figcaption></figcaption></figure>

```
Subgraph: Complex Operation
├─ [Internal] Filter : Compare (core condition)
├─ [Internal] Filter : Bounds (core exclusion)
├─ [Exposed Pin] Additional Filters
└─ Filter Group (AND/OR) ← combines internal + exposed
    └─ Output
```

{% hint style="info" %}
The Filter Group's Mode setting (AND/OR) is \`PCG\_Overridable\` and can be exposed as a graph parameter, letting users choose how additional filters combine with built-in logic.
{% endhint %}

```
Subgraph: Threshold Filter
├─ Filter : Compare (Numeric)
│   └─ Threshold: [Exposed as subgraph parameter]
└─ Output
```

Each instance of the subgraph uses different threshold values.

### When Not to Use Subgraphs

**Prefer inline filters + gather when**: Filters are used within a single graph, quick iteration matters, or filter setup is straightforward.

**Consider subgraphs when**: The same filter logic appears in multiple separate graphs, complex filter setups need clear encapsulation, or project-wide consistency matters more than iteration speed.

### Related

* [.](./ "mention") - Filter fundamentals
* [filter-composition.md](filter-composition.md "mention") - AND/OR logic, nesting groups
