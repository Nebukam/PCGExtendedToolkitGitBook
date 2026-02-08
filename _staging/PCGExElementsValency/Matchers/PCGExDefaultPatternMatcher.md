---
icon: puzzle-piece
description: 'Default Pattern Matcher - Subgraph isomorphism pattern matcher using DFS with backtracking'
---

# Default Pattern Matcher

Default subgraph isomorphism pattern matcher using depth-first search with backtracking.

## Overview

The standard pattern matcher for the valency system. It takes compiled patterns from the Bonding Rules and searches the solved cluster for matching topologies using recursive DFS. When multiple matches overlap (share nodes), an overlap resolution strategy determines which match wins.

## How It Works

1. **Iterate Patterns**: Processes each compiled pattern in order.
2. **Scan Nodes**: For each pattern, tries to match starting from every unmatched node.
3. **DFS Matching**: Recursively maps pattern entries to cluster nodes, checking module identity and adjacency at each step. Backtracks on mismatch.
4. **Resolve Overlaps**: When matches share nodes, the overlap resolution strategy selects winners.
5. **Claim Nodes**: Exclusive matches claim their nodes, preventing subsequent matchers from re-matching them.

#### Usage Notes

- **Subgraph Isomorphism**: Matching is exact — the pattern topology must exist as a subgraph of the cluster. Node modules and neighbor relationships must match precisely.
- **Overlap Resolution**: Overlapping matches are common in dense clusters. The resolution strategy determines priority — weight-based uses pattern weights, size-based prefers larger or smaller patterns.
- **Performance**: DFS with backtracking is exponential in the worst case but fast in practice for typical pattern sizes (under ~10 entries). Very large patterns or highly symmetric clusters may be slower.

## Settings

<details>
<summary><strong>Overlap Resolution</strong> <code>EPCGExPatternOverlapResolution</code></summary>

How to resolve when multiple pattern matches share the same nodes.

| Option | Description |
|--------|-------------|
| **Weight Based** | Higher-weight patterns win overlapping regions |
| **Largest First** | Patterns with more entries take priority |
| **Smallest First** | Patterns with fewer entries take priority |
| **First Defined** | Patterns defined earlier in the bonding rules take priority |

Default: `WeightBased`

⚡ PCG Overridable

</details>

### Inherited Settings

This matcher inherits common settings from its base factory.

→ See [Pattern Matcher Factory](../Core/PCGExPatternMatcherOperation.md) for: Required Tags, Excluded Tags, Pattern Names, Exclusive

---

📦 **Module**: `PCGExElementsValency` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsValency/Public/Matchers/PCGExDefaultPatternMatcher.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 1 documented (OverlapResolution)
Inherited Properties: Referenced to UPCGExPatternMatcherFactory
Inputs: N/A (factory sub-node)
Outputs: N/A (factory sub-node)
Nested Types: EPCGExPatternOverlapResolution
-->
