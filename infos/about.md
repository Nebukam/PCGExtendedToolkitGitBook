---
icon: circle-info
---

# About

## About

**PCGEx started as a personal Houdini toolkit ported to Unreal.** Tim ([@Nebukam](https://github.com/Nebukam)) had a collection of graph theory and spatial manipulation tools built over years of procedural work in Houdini, and when Unreal shipped its PCG framework, the gap was obvious: PCG handled scattering and rule-based placement well, but had no concept of explicit connectivity between points. No graphs, no pathfinding, no topology.

PCGEx filled that gap. What started as a handful of personal nodes grew into an open-source toolkit used by studios in production.

### Design Philosophy

#### Tools, not solutions

PCGEx is deliberately use-case agnostic. There's no "generate a city" node or "build a dungeon" preset. Instead, it provides low-level primitives : graph construction, pathfinding, spatial queries, composable filters that _you_ assemble into whatever your project needs.

This is a conscious tradeoff. Opinionated high-level nodes are faster to start with but collapse when your requirements diverge from the author's assumptions. Generic primitives take longer to learn but don't break when your project gets specific.

#### Points are points

Every data structure in PCGEx (paths, clusters, staged assets) is built from regular PCG points with semantic attributes. Vanilla PCG nodes work on PCGEx data and vice versa, because the format is the same.&#x20;

This means you're never locked in. If PCGEx doesn't have the operation you need, standard PCG nodes or custom blueprints can fill the gap without conversion steps.

#### Compose, don't configure

Filters, heuristics, probes, tensor effectors — they're all independent sub-nodes you wire together. One filter definition serves a dozen operations. Multiple heuristics blend into a composite pathfinding cost. Behavior emerges from composition rather than from dropdown menus with dozens of modes.

This keeps individual nodes focused and makes complex behavior legible in the graph: you can see what a setup does by reading the connections, not by opening a properties panel.&#x20;

#### No loops

A recurring design goal: eliminate the need for loop subgraphs. Where vanilla PCG often requires iterating over collections manually, PCGEx nodes process per-collection or per-cluster internally. The result is flatter, more readable graphs.

### Open Source

PCGEx is MIT-licensed. The full source is on [GitHub](https://github.com/Nebukam/PCGExtendedToolkit). The roadmap is community-driven — shaped by what users need, not a fixed plan.

* [Discord](https://discord.gg/Aze3puAg6T) — Community and support
* [GitHub Issues](https://github.com/Nebukam/PCGExtendedToolkit/issues) — Bug reports
* [Patreon](https://www.patreon.com/c/pcgex) — Support the project



<figure><img src="../.gitbook/assets/theyuseit.png" alt=""><figcaption><p>They got PCGEx in their pipeline!</p></figcaption></figure>
