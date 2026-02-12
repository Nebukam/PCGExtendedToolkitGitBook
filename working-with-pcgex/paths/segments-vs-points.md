---
icon: book
---

# Segments vs Points

**Path operations often think in segments, not just points.** This is the single most important thing to internalize about how paths work in PCGEx — it prevents a whole category of "why isn't this working?" moments.

### The Segment Model

Consider a path with 4 points:

```actionscript-3
P0 ----S0---- P1 ----S1---- P2 ----S2---- P3
```

There are 4 points but only 3 segments (for an open path). Each segment connects adjacent points:

* Segment 0 (S0): P0 to P1
* Segment 1 (S1): P1 to P2
* Segment 2 (S2): P2 to P3

For closed paths, there's one additional segment connecting the last point back to the first.

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption><p>Diagram showing points P0-P3 with segments S0-S2 labeled between them</p></figcaption></figure>

### Segment Data Inheritance

Here's the key: when an operation processes segments, each segment reads attributes from its **start point**.

| Segment | Uses Data From |
| ------- | -------------- |
| S0      | P0             |
| S1      | P1             |
| S2      | P2             |

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption><p>Segments with arrows pointing to their start points showing data flow</p></figcaption></figure>

### Why This Matters

Consider an offset operation with per-point offset distances:

| Point | Offset Value |
| ----- | ------------ |
| P0    | 10           |
| P1    | 20           |
| P2    | 5            |
| P3    | 15           |

The operation offsets:

* Segment 0 by 10 units (from P0's value)
* Segment 1 by 20 units (from P1's value)
* Segment 2 by 5 units (from P2's value)

P3 has an offset value of 15, but in an open path there's no segment that starts at P3. That value only matters if the path is closed (for the segment from P3 back to P0).

<figure><img src="../../.gitbook/assets/placeholder-wide.jpg" alt=""><figcaption><p>Path showing varying offset creating a wavy result, colored by offset value</p></figcaption></figure>

### The Off-By-One Trap

This catches people regularly. Attributes affect "the segment starting from that point," not "the point itself." So when:

* An attribute doesn't seem to apply in the expected place
* The last point's attributes appear ignored on open paths
* Closed and open paths behave differently for the same data

...it's almost always the segment model at work. Once you see it, it stops being confusing.

### When Points Matter

Not all operations are segment-based. Some genuinely process individual points:

* Transforming point positions
* Writing per-point attributes
* Filtering individual points

Check the operation's documentation for whether it's point-centric or segment-centric.

### Practical Example

To give each segment a different color:

* Set the color attribute on the **start point** of each segment
* For an open path with N points, you need colors on points 0 through N-2
* Point N-1's color only matters if the path is closed

To give each point a different color (for visualization):

* Set the color attribute on every point
* All N points get their own colors

The distinction depends on what happens with the path downstream.

### Related

* [.](./ "mention") - Path fundamentals
* [common-path-operations.md](common-path-operations.md "mention") - Operation categories
