# Provider/Consumer Pattern

**When you place a sub-node in your graph, you're not running logic — you're describing intent.** The sub-node says *what* should happen. The consumer node that receives it decides *when* and *where*.

Behind the scenes, this works through a three-layer model. You don't need to think about it constantly, but knowing how the layers connect helps when debugging or optimizing.

## The Three-Layer Model

### 1. Provider Settings (Graph Time)

This is the node you see and configure in the PCG graph editor. A `UPCGSettings` subclass with `UPROPERTY` fields: comparison operators, threshold values, attribute selectors, mode toggles. What you adjust in the Details panel lives here.

### 2. Factory Data (Execution Time)

When the graph executes, the provider creates a factory: a lightweight object that captures your configuration in a form consumers can use. Settings are validated, dependencies resolved, and the configuration is packaged for runtime.

### 3. Runtime Instance (Processing Time)

Consumers create runtime instances from factory data. These do the actual work — evaluating filters, calculating heuristics, sampling probes. Each cluster or batch gets its own instance, so parallel processing requires no shared state. Instances are created and destroyed efficiently.

{% hint style="info" %}
Runtime instances are short-lived by design. With unbounded generation grids, each grid cell simply requests its own instances. No accumulated state, no cross-cell interference.
{% endhint %}

<!-- IMAGE: Diagram showing the flow: Provider Node → Factory Data → Multiple Runtime Instances, with labels for each stage -->

The key takeaway: you configure once at the top, and the system handles replication at the bottom. The factory is the bridge.

## How Connections Work

### Output to Input

Sub-node outputs connect to specialized input pins on consumer nodes:
- Filter providers connect to `Filters` pins
- Probe providers connect to `Probes` pins
- Heuristics providers connect to `Heuristics` pins

Pin types are matched. A filter output won't connect to a heuristics input.

<!-- IMAGE: Sub-node output pin connected to a matching input pin on a consumer, showing the shared icon -->

### Multiple Providers to One Pin

Most sub-node input pins accept multiple connections. Connect several filters to one `Filters` pin, and the consumer receives all of them. How they combine depends on the consumer: filters use AND logic, heuristics sum or blend.

### One Provider to Multiple Consumers

A single provider output can connect to many consumer inputs. Each consumer creates its own runtime instances from the shared factory — no interference between them. Change the provider, all consumers update.

## What Consumers Do

Consumer nodes handle the full lifecycle:

1. **Collect** all factories from their input pins
2. **Prioritize** factory types that have priority (applied in order)
3. **Instantiate** runtime instances for their execution context
4. **Apply** instances during processing
5. **Dispose** instances after processing completes

The consumer controls context. A filter factory doesn't know whether it's being used for point selection, edge traversal, or cluster refinement. The consumer provides that context at instantiation.

## Factory Types

| Type | Purpose | Combination |
|------|---------|-------------|
| Filter | Pass/fail conditions | Connection order, AND logic |
| Probe | Sampling behaviors | Results combine |
| Heuristics | Pathfinding costs | Sum or blend |
| Action | Staged operations | Priority order |
| Shape Builder | Parametric generation | N/A |

The pattern is consistent across types; the specifics vary.

## Instanced Behaviors

Some nodes use a variation of this pattern. Instead of connecting external sub-nodes, the behavior is **instanced directly in the Details panel** — selected from a dropdown rather than wired as a separate node. Same factory model underneath, but embedded in the node itself.

The tradeoff: only one behavior can be active at a time (no additive composition like sub-nodes), and the settings live inside the node rather than being reusable across consumers. This avoids node bloat for cases where a single behavior selection is all that's needed.

### Overriding Instanced Parameters

Instanced behavior parameters can't be overridden as easily as sub-node settings, but it is possible through attribute matching:

{% stepper %}
{% step %}
### Expand the node to reveal the override pin

If the behavior supports overrides, a special pin becomes visible when the node is expanded. This pin accepts attribute set inputs.
{% endstep %}

{% step %}
### Find the internal property name

Expand the instanced behavior's settings and right-click the property you want to override. Select **Copy Internal Name** — the system will look for attributes with that exact name.
{% endstep %}

{% step %}
### Create a matching attribute and connect it

Create an attribute set with an attribute whose name matches the internal property name. Plug it into the override pin. The instanced behavior reads the matching attribute at execution time.
{% endstep %}
{% endstepper %}

{% hint style="info" %}
This is a workaround that requires specific attribute naming. It's less flexible than sub-node parameterization, but it covers the cases where instanced behaviors need per-point or per-execution variation.
{% endhint %}

## Overridable Properties

Many sub-node settings are marked with `PCG_Overridable` or support attribute-based input:

- **Subgraph parameterization**: Expose settings as subgraph inputs
- **Per-point variation**: Read values from attributes instead of constants
- **Runtime configuration**: Settings determined during execution

Check individual node documentation for which settings support overrides.

## Debugging

If a sub-node isn't behaving as expected:

1. **Test in isolation**: Connect only that sub-node, verify it works alone
2. **Check the consumer**: The consumer determines how sub-nodes combine
3. **Look at consumer output**: Sub-nodes don't appear in the profiler separately; their cost shows in consumer timing

## Performance

Sub-nodes themselves are cheap. Provider nodes do minimal work at graph time. Factory data is lightweight. Runtime instances are plain C++ objects (not UObjects). The processing cost appears in consumer nodes, so complex sub-node logic increases consumer execution time, not sub-node execution time.

## Serialization Limitation

Factory data lives only during execution. Sub-node outputs can't be saved to PCG Data Assets and won't persist across sessions. Design graphs to generate sub-nodes rather than store them.

## Related

- [Architecture Overview](README.md) - The broader PCGEx mental model
- [Filters](/concepts/04-filters/) - Detailed look at filter sub-nodes
- [Filter Composition](/concepts/04-filters/composition.md) - How filters combine
