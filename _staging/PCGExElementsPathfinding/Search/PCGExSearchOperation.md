---
icon: magnifying-glass
description: 'Search Algorithm : Base - Base class for all pathfinding search algorithms'
---

# Search Algorithm : Base

Base search algorithm settings inherited by all search algorithm sub-nodes.

## Overview

This is the abstract base class for pathfinding search algorithms. It defines the common interface and settings that all search algorithms share. Specific algorithms (A*, Dijkstra, Bellman-Ford, Bidirectional) extend this base to implement their search strategies while inheriting these common settings.

## How It Works

1. **Prepare Cluster**: Initializes the search operation for the target cluster.
2. **Resolve Query**: Executes the search from seed to goal using the algorithm's strategy.
3. **Apply Heuristics**: Uses provided heuristics to score paths.
4. **Build Path**: Reconstructs the path from search results.

#### Usage Notes

- **Abstract Class**: Cannot be used directly; use a specific algorithm instead.
- **Early Exit**: Controls whether search stops at first valid path or explores all options.
- **Algorithm Choice**: Different algorithms suit different graph characteristics.

## Available Algorithms

| Algorithm | Best For |
|-----------|----------|
| **A*** | General purpose, fast with good heuristics |
| **Dijkstra** | Accurate weight handling, no heuristic needed |
| **Bellman-Ford** | Negative edge weights, cycle detection |
| **Bidirectional** | Large graphs, long paths |

## Settings

<details>
<summary><strong>Early Exit</strong> <code>bool</code></summary>

When enabled, the search stops as soon as a valid path is found. When disabled, the search explores all possible paths, which can be useful for analysis or when combined with path filtering.

Default: `true`

⚡ PCG Overridable

</details>

---

[![Static Badge](https://img.shields.io/badge/Source-PCGExElementsPathfinding-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPathfinding/Public/Search/PCGExSearchOperation.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsPathfinding/Public/Search/PCGExSearchOperation.h -->

<!-- VERIFICATION REPORT
Node-Specific Properties: 1 documented (bEarlyExit)
Base Class: UPCGExInstancedFactory (Abstract)
Note: This is the base class for A*, Dijkstra, Bellman-Ford, Bidirectional
-->
