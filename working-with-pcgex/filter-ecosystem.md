---
icon: filter
---

# The Filter Ecosystem

**Filters in PCGEx are modular, reusable conditions that decide "yes or no" for points, edges, paths, or any data.**

Think of filters like **bouncers at a club** - they check if something meets the criteria and either let it through or turn it away. The nice part: **you can attach the same filter to dozens of different nodes**, keeping your logic consistent and easy to update.

[[image placeholder: PCG graph showing filter provider nodes connected to multiple consumer nodes, demonstrating reusability]]

## Why Filters Are Everywhere

Almost every PCGEx operation asks: _"Should I process this point/edge/cluster?"_

Instead of each node having its own unique filtering logic, PCGEx uses a **unified filter system** that works everywhere:
- **Point operations:** Which points to transform, sample, or affect
- **Edge operations:** Which edges to keep, remove, or modify
- **Cluster operations:** Which vertices or edges to process
- **Path operations:** Which paths or segments to include
- **Pathfinding:** Which edges are traversable
- **Spawning:** Which points get actors
- **And more...**

[[image placeholder: Hub-and-spoke diagram showing "Filter System" in center with spokes to different operation categories]]

## Filters Are PCG Sub-Nodes

Filters are **PCG provider nodes** you place in your graph and connect to operations:

[[image placeholder: PCG graph showing filter provider nodes (Compare Numeric, Distance, Bounds) with their output pins connected to a consumer node's "Filters" input pin]]

**The workflow:**
1. Place a Filter Provider node in your graph (e.g., "Filter: Compare (Numeric)")
2. Configure its conditions (comparison type, thresholds, attributes)
3. Connect its output pin to any node with a "Filters" input pin
4. Multiple filters can connect to the same pin (stacked filtering)

**The power:**
- Filters work through a **factory pattern** - they're lightweight provider nodes that create runtime filter instances
- You can **wrap filters in subgraphs** and reuse those subgraphs as "prefab filters"
- Properties marked `PCG_Overridable` can be parameterized per subgraph instance
- Change a subgraph filter, all instances update automatically

{% hint style="success" %}
**Pro Tip**\
Create subgraphs for common filter combinations: "Buildable Area", "Road-Adjacent", "Water Boundary". Package them once, reuse everywhere with different parameters.
{% endhint %}

## Filter Types

PCGEx has 50+ filter types, each checking different things:

### Attribute Filters (Compare Values)
- **Number comparisons:** "Height > 100", "Distance < 50"
- **String matching:** "Type equals 'residential'"
- **Boolean tests:** "IsValid equals true"
- **Self-comparison:** "Height greater than neighbor average"

---

### Spatial Filters (Location-Based)
- **Bounds tests:** "Inside this volume"
- **Distance checks:** "Within 500 units of target"
- **Nearest neighbor:** "Closest to reference point"
- **Within range:** "Distance between min/max"

---

### Topology Filters (Cluster-Specific)
- **Adjacency:** "Has at least 3 neighbors"
- **Edge tests:** "Connected to node of type X"
- **Degree:** "Is a leaf node" (only 1 connection)
- **Edge direction:** "Edge points toward target"

---

### Math Filters
- **Dot product:** "Facing direction aligned with up vector"
- **Angle tests:** "Slope angle < 45 degrees"
- **Modulo:** "Index is divisible by N"

---

### Special Purpose
- **Tensor filters:** "Tensor direction aligns with reference"
- **Random:** "Pass 50% of the time"
- **Index-based:** "Even indices only"
- **Gameplay tags:** "Has tag X"

[[image placeholder: Visual examples of each filter type showing what they check]]

## Filter Modes

Filters can work in different modes:

### Pass/Fail (Default)
Point either passes (yes) or fails (no). Binary decision.

---

### Weighted/Score
Instead of yes/no, outputs a score (0.0 to 1.0). Used for blending, prioritization.

---

### Invert
Flip the logic: "Keep everything that DOESN'T match."

---

## Filter Groups (Boolean Logic)

Combine multiple filters using **Filter Group** nodes:

**AND Mode (All Must Pass):**
- Connect multiple filters to an AND group node
- Only points passing ALL filters succeed
- Early exit on first failure (performant)

**OR Mode (Any Can Pass):**
- Connect multiple filters to an OR group node
- Points passing ANY filter succeed
- Early exit on first success

**Complex Nesting:**
- Groups can contain other groups
- Build complex logic: (A AND B) OR (C AND D)
- Unlimited nesting depth

[[image placeholder: PCG graph showing nested filter groups with multiple filter providers connected in AND/OR combinations]]

**How it works in the graph:**
1. Place a "Filter Group" node
2. Set mode (AND or OR) in node settings
3. Connect filter provider nodes to the group's input pins
4. Connect the group's output to your consumer node
5. The group acts as a single combined filter

{% hint style="info" %}
**Subgraphs for Reusability**\
Put complex filter group setups in subgraphs. Expose key parameters with `PCG_Overridable`. Now you have a reusable "prefab filter" configuration that can be instantiated with different parameters.
{% endhint %}

## Where Filters Are Used

### Point Processing Nodes
Almost every point operation node has filter inputs:

[[image placeholder: Node details panel showing "Source Filters" and "Target Filters" input pins with filter nodes connected]]

**Source Filters:** Which input points to process
**Target Filters:** Which output points to generate

---

### Edge Refinement
Filter which edges to keep/remove in clusters:

[[image placeholder: Dense cluster becoming sparse as edges failing filter are removed]]

---

### Pathfinding
Define which edges are traversable:

[[image placeholder: Path avoiding edges that fail "IsWalkable" filter]]

---

### Flood Fill
Control where flood fill can spread:

[[image placeholder: Flood fill respecting filter boundaries, not crossing filtered edges]]

---

### Conditional Operations
Execute operations only on filtered subsets:

[[image placeholder: Operation applied to green (passing) points, skipping red (failing) points]]

---

## Architecture: Provider → Factory → Runtime Filter

Under the hood, filters use a three-layer pattern (you don't need to understand this to use them):

**1. Provider Settings (What You See in the Graph)**
- The PCG node you place and configure
- Contains UPROPERTY fields for user input
- Example: `UPCGExNumericCompareFilterProviderSettings`

**2. Factory Data (Created at Runtime)**
- Generated during PCG execution
- Holds the configured settings in a compact form
- Example: `UPCGExNumericCompareFilterFactory`

**3. Runtime Filter (Actual Execution)**
- Lightweight object that performs the test
- Created per-cluster/per-batch for parallel processing
- Example: `FNumericCompareFilter`

**Why this architecture?**
- Keeps PCG graphs clean (one node = one filter configuration)
- Enables parallel processing (many runtime instances from one factory)
- Supports dynamic configuration through `PCG_Overridable` properties

[[image placeholder: Diagram showing Provider Node → Factory → Multiple Runtime Instances for parallel processing]]

**Practical implication:**
You work with **provider nodes** in the graph. Everything else happens automatically behind the scenes.

## Working with Filters in Practice

**Basic Usage:**
1. Search in node palette: "Filter: Compare", "Filter: Distance", etc.
2. Place filter provider node in your graph
3. Configure settings in the node details panel
4. Connect output pin → consumer node's "Filters" input
5. Run PCG - points that pass go to "Inside" pin, failed go to "Outside"

**Stacking Filters (Implicit AND):**
1. Connect multiple filter provider nodes to the same "Filters" pin
2. All filters must pass (AND logic)
3. Early exit on first failure

**Filter Groups (Explicit AND/OR):**
1. Place "Filter Group" node, set mode (AND or OR)
2. Connect filter providers to the group's input pins
3. Connect group output to consumer node
4. Nest groups for complex boolean expressions

**Subgraph Reusability:**
1. Create a subgraph with your filter setup inside
2. Expose key properties as subgraph parameters (`PCG_Overridable`)
3. Use the subgraph like a "custom filter" node
4. Each instance can have different parameter values
5. Update the subgraph once, all instances update automatically

**Example: "Buildable Area" Prefab Filter Subgraph**
```
Subgraph: Buildable_Area
├─ Filter: Compare (Slope < SlopeThreshold)     ← Exposed param
├─ Filter: Compare (Height > MinHeight)         ← Exposed param
├─ Filter: Bounds (Not in exclusion zones)
└─ Filter Group (AND) → Output Pin

Reuse in multiple graphs with different slope/height requirements
```

This approach scales beautifully - build your filter library once, reuse everywhere.

## Common Filter Patterns

### Buildability Check
```
Filter Group (AND):
├─ Filter: Compare (Slope < 30 degrees)
├─ Filter: Compare (Height > 10 above water)
├─ Filter: Bounds (NOT inside excluded volume)
└─ Filter: Distance (< 200 units to road)
```

---

### Path Walkability
```
Filter Group (AND):
├─ Filter: Edge Length (< 500 units, not too long)
├─ Filter: Node (Start AND End not steep)
└─ Filter: Bounds (NOT crosses obstacle)
```

---

### Territory Boundary
```
Filter Group (OR):
├─ Filter: Adjacency (Adjacent node has different faction attribute)
└─ Filter: Bounds (Edge crosses defined border volume)
```

---

## Performance Considerations

Filters are evaluated per-element (point/edge), so efficiency matters:

**Fast Filters:**
- Attribute comparisons (cached in memory)
- Index-based tests
- Boolean checks

**Slower Filters:**
- Spatial queries (distance to many targets)
- Neighbor comparisons (requires traversal)
- Complex dot product calculations

{% hint style="warning" %}
**Optimization Tip**\
In AND groups, put cheap filters first - early exit on failure skips expensive later filters.
{% endhint %}

## Debugging Filters

When filters don't behave as expected:

**Visualize Results:**
Many nodes can output filter results as attributes:

[[image placeholder: Points colored by filter result - green=pass, red=fail, showing exact filter behavior in viewport]]

**Test Individually:**
Test each filter provider in isolation before combining into groups.

**Check Filter Mode:**
Make sure you're using the right mode (pass/fail vs weighted vs inverted).

**Check Connections:**
Verify filter outputs are connected to the correct consumer input pins.

## Key Takeaways

{% hint style="success" %}
**Filters are PCG nodes**\
Place filter providers in your graph, connect them to operations. Wrap in subgraphs for reusability across your project.
{% endhint %}

{% hint style="info" %}
**Filters are composable**\
Connect multiple filters to one pin (AND logic), or use Filter Group nodes (AND/OR logic). Nest groups for complex boolean conditions.
{% endhint %}

{% hint style="info" %}
**Filters are versatile**\
Same filter system works for points, edges, clusters, paths - learn once, use everywhere.
{% endhint %}

{% hint style="warning" %}
**Filters affect performance**\
Complex filters on large datasets add up. AND groups early-exit on failure (put cheap tests first).
{% endhint %}

## The Filter Philosophy

PCGEx filters embody "modular, reusable conditions":
- **Composability:** Build complex logic from simple filter provider nodes
- **Consistency:** Same filter configuration, predictable behavior everywhere
- **Reusability:** Create subgraph "prefab filters" for common patterns
- **Clarity:** Visual graph shows filter logic explicitly (no hidden inline code)
- **Flexibility:** Override parameters in subgraph instances without editing the original
- **Maintainability:** Update a subgraph filter once, all instances inherit the change

This is why filters appear in almost every PCGEx node - they're the **universal condition system** that makes complex procedural logic manageable and maintainable.

## Further Reading

For specific filter types and detailed documentation:

{% content-ref url="../node-library/filters/" %}
[filters](../node-library/filters/)
{% endcontent-ref %}

For technical details on how filters integrate with the framework:

{% content-ref url="tips-and-tricks/technical-note-pcgex-framework.md" %}
[technical-note-pcgex-framework.md](tips-and-tricks/technical-note-pcgex-framework.md)
{% endcontent-ref %}
