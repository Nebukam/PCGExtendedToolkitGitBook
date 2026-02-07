---
icon: layer-plus
---

# Filter Composition

**A single filter answers one question. Composition lets you ask compound questions.** PCGEx provides multiple ways to combine filters into complex conditions while keeping individual filter nodes simple and reusable.

### Stacking (Implicit AND)

The simplest composition: connect multiple filter outputs to the same Filters input pin.

When multiple filters connect to one pin:

* All filters must pass for an element to pass
* This is AND logic: Filter A **AND** Filter B **AND** Filter C
* Evaluation exits early on first failure
*   Order doesn't affect correctness, but affects performance

    <div data-gb-custom-block data-tag="hint" data-style="success" class="hint hint-success"><p>Put your cheapest filters first in a stack. Early exit on failure means expensive filters only run on elements that passed the cheap tests.</p></div>

    This implicit AND covers most cases. When you need OR logic or complex boolean expressions, use Filter Groups.

### Filter Groups

**Filter Group** is a special node that combines filters with explicit boolean logic.

#### AND Groups

Set a Filter Group to AND mode. Connect filter providers to its inputs. All connected filters must pass. Functionally identical to stacking, but useful as an organizational container.

#### OR Groups

Set a Filter Group to OR mode. Any connected filter passing means the group passes. Evaluation exits early on first success. Elements failing all filters fail the group.

#### Setting Up a Filter Group

1. Place a **Filter Group** node
2. Set Mode to AND or OR in node settings
3. Connect filter provider outputs to the group's filter inputs
4. Connect the group's output to your consumer node

The group acts as a single combined filter from the consumer's perspective.

{% hint style="info" %}
The Mode setting is `PCG_Overridable`. In subgraphs, you can expose it as a parameter, letting users choose AND or OR logic at instantiation time.
{% endhint %}

\## Nesting Groups

Filter Groups can contain other Filter Groups, enabling complex boolean expressions.

Example: (A AND B) OR (C AND D)

```
Filter Group (OR)
├─ Filter Group (AND)
│   ├─ Filter A
│   └─ Filter B
└─ Filter Group (AND)
    ├─ Filter C
    └─ Filter D
```

There's no depth limit. Build whatever logic your conditions require.

{% hint style="warning" %}
Deep nesting gets hard to read. If you find yourself building complex nested logic, consider wrapping the filter setup in a subgraph with a clear name, or restructuring the underlying data.
{% endhint %}

\## Combining Stacking and Groups

These approaches work together. Stack multiple simple filters on a consumer's pin (implicit AND), create groups for OR logic, and connect groups alongside individual filters to the same pin.

Example: Stack a Filter Group (OR) with individual filters:

```
Consumer Filters Pin
├─ Filter Group (OR)
│   ├─ Filter X
│   └─ Filter Y
├─ Filter A (individual)
└─ Filter B (individual)
```

Result: (X OR Y) AND A AND B

### Inversion

Most filters have an Invert option that flips their logic. This applies before the filter's result contributes to group logic.

* Inverted filter in AND group: All others must pass AND this one must fail
* Inverted filter in OR group: This filter failing counts as the OR succeeding

Use inversion sparingly; it makes filter logic harder to follow. Often a different comparison operator expresses the condition more clearly.

### Practical Patterns

#### Exclusion Zones

OR group with bounds filters, then invert the group result:

```
Filter Group (OR, Inverted)
├─ Filter : Inclusion (Bounds) → Zone A
├─ Filter : Inclusion (Bounds) → Zone B
└─ Filter : Inclusion (Bounds) → Zone C
```

Pass if NOT in any zone.

#### Conditional Requirements

AND group with OR sub-groups:

```
Filter Group (AND)
├─ Filter : Compare (Attribute > Threshold)
└─ Filter Group (OR)
    ├─ Filter : Compare (Type == "A")
    └─ Filter : Compare (Type == "B")
```

Pass if value exceeds threshold AND type is either A or B.

#### Graduated Conditions

Multiple filter groups feeding different consumers:

```
Strict Group (AND) → High-priority consumer
├─ All strict conditions

Lenient Group (AND) → Fallback consumer
├─ Fewer conditions
```

Route elements through strict criteria first; the fallback handles the rest.

### Debugging Composition

When composed filters don't behave as expected:

1. **Test individually**: Disconnect filters and test each one alone
2. **Check modes**: Verify AND vs OR on each group
3. **Check inversion**: Inverted filters/groups flip expected behavior
4.  **Visualize results**: Many nodes can output filter results as attributes for viewport visualization

    <div data-gb-custom-block data-tag="hint" data-style="info" class="hint hint-info"><p><strong>Uber Filter</strong> tests filter group outputs in isolation. It shows exactly what passes and fails without any other processing.</p></div>

### Related

* Filter Overview - Filter fundamentals
* Reusability - Wrapping filter setups in subgraphs
