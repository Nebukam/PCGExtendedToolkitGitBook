---
icon: grid-round-2
---

# Sorting

**Point order matters more than you'd expect.** Many PCGEx operations — paths, clusters, index-based selection — are sensitive to the order points appear in a collection. Sorting gives you explicit control over that order.

**Sort Points** reorders points within each collection using pluggable sorting rule sub-nodes that define the comparison criteria. You can chain multiple rules for tie-breaking. **Sort Data** operates one level up, reordering entire collections relative to each other rather than the points inside them. **Reverse Order** simply flips point ordering — useful when a path needs to run in the opposite direction.
