# Fundamentals

Before diving into the details, let's establish the core concepts and terminology you'll use throughout Valency.

### The Big Picture

Valency operates in three distinct phases:

{% stepper %}
{% step %}
### Authoring Phase (Editor, design time)

You work with:\
• Cages (actors in the level)\
• Orbitals (connection points on cages)\
• Context Volumes (grouping authoring data)\
• Builder (compiles everything into Bonding Rules asset)
{% endstep %}

{% step %}
### <mark style="color:$success;">→ Bonding rules</mark> _(Data asset)_
{% endstep %}

{% step %}
### Solving Phase (PCG Graph, runtime)

Solver works with: \
• Modules (compiled representation of cages) \
• Cluster nodes (your input points to place modules at) \
• Orbital masks (which connections each node has) \
• Wave Function Collapse solver (assigns modules to nodes)
{% endstep %}

{% step %}
### <mark style="color:$success;">→ Solved Points</mark> _(Module data)_
{% endstep %}

{% step %}
### Pattern Replacement (PCG Graph, runtime)

TBD
{% endstep %}

{% step %}
### Spawning Phase

TBD
{% endstep %}
{% endstepper %}

### Core Terminology

#### Orbitals

**Connection points in 3D space**, defined by direction vectors. Think of them as "sockets" where modules can connect to neighbors.

* Each orbital has a **direction** (normalized vector like `(1, 0, 0)` for "east")
* Orbitals are grouped into **Orbital Sets** (data assets defining all possible connection directions)
* Example: Cardinal4 set might have 4 orbitals: North, East, South, West
* Orbitals are **matched by direction**, not by index—solver uses dot product to find which orbital on module A points toward module B

**Key insight**: Orbitals are directional. When cage A connects to cage B, the solver finds the orbital on A that best points toward B, and the orbital on B that best points back toward A.

#### Cages

**Editor actors** that represent possible modules in your system. Each cage defines:

* Which **assets** it can spawn (static meshes, actors, blueprint classes)
* Which **orbitals** it uses (and where connections lead)
* Optional **properties** (metadata attached to the module)
* Optional **local transforms** (rotation/scale variants)

**Types of cages:**

* **Regular Cage** (`APCGExValencyCage`): Full module definition with assets
* **Simple Cage** (`APCGExValencyCageSimple`): Shape-based (box/sphere/capsule) for quick prototyping
* **Pattern Cage** (`APCGExValencyCagePattern`): Topology-only, used for pattern matching (no assets)
* **Null Cage** (`APCGExValencyCageNull`): Constraint placeholder (boundary/wildcard/unconstrained)

Cages are **connected visually** in the editor—you drag connections between orbitals, establishing which modules can neighbor which.

#### Modules

**Compiled representations** of cages, stored in Bonding Rules. A module is identified by:

* Asset reference
* Orbital mask (which orbitals have connections)
* Material variant (optional)

Multiple cages with the same asset + orbital mask = same module. Transform variants (if using local transforms) share the same module identity.

#### Orbital Masks

**64-bit integers** where each bit represents one orbital. Used for fast compatibility checks:

* `OrbitalMask`: Orbitals that have connections (regular or wildcard)
* `BoundaryOrbitalMask`: Orbitals that MUST have NO neighbor at runtime
* `WildcardOrbitalMask`: Orbitals that MUST have ANY neighbor at runtime

The solver checks if a module "fits" a node by comparing masks:

{% hint style="info" %}
## Module fits if:

* Module's orbitals are subset of node's connections
* Module's boundary orbitals are NOT in node's connections
* Module's wildcard orbitals ARE in node's connections
{% endhint %}

#### Orbital Sets

**Data assets** defining your connection topology. An orbital set contains:

* Array of **orbital entries** (direction vectors, optional names)
* **Angle threshold** (how precise direction matching must be)
* **Transform direction** flag (whether to apply cage rotation to directions)

You can have multiple orbital sets for different purposes (Cardinal4, Diagonal8, Hex6, Custom26, etc.).

#### Bonding Rules

**The compiled data asset** containing everything the solver needs:

* All modules (unique combinations of asset + orbital mask + variant)
* Neighbor relationships (which modules can connect on which orbitals)
* Compiled orbital masks and metadata
* Patterns (if using pattern matching)
* Properties and tags

Created by the **Builder** from all cages in one or more **Context Volumes**.

#### Context Volumes

**Editor volumes** (`AValencyContextVolume`) that group authoring data. Each volume:

* References a Bonding Rules asset (where compiled data goes)
* Captures all cages within or near its bounds
* Can trigger PCG regeneration when rules rebuild
* Multiple volumes can contribute to the same Bonding Rules (aggregation)

#### Layers

**Independent orbital systems** running in parallel. Each layer has its own:

* Orbital set (defining connection directions)
* Neighbor relationships
* Orbital masks

Use cases:

* Layer 0: Structural connections (walls align)
* Layer 1: Detail alignment (trim matches)
* Layer 2: Utility routing (pipes/wires)

Layers are **solved together**—a module must satisfy ALL layers simultaneously to fit a node.

#### Palettes

**Asset containers** (`APCGExValencyAssetPalette`) that act as "data prefabs". Palettes hold:

* Asset entries (meshes, actors)
* Properties
* Actor tags

Cages can **mirror palettes**, inheriting their contents. Update the palette → all mirroring cages update. Great for variant management (wood/stone/metal versions).

#### Patterns

**Multi-module topologies** you want to detect and transform after solving. Patterns are authored using **Pattern Cages**, which:

* Connect to form a specific shape/configuration
* Specify which modules can match each position (via **proxied cages**)
* Define what happens when matched (remove, collapse, swap, annotate)

Example: Define a T-junction pattern (3 connected modules), detect all T-junctions in solved cluster, replace each with a single high-detail asset.

#### Properties

**Arbitrary data** attached to cages as actor components:

* Types: String, Int, Float, Vector, Transform, Bool, Asset references, etc.
* Flow through compilation to modules
* Accessible at solve time
* Can be written to point attributes for downstream use

Use cases: Spawn weights, material parameters, gameplay tags, cost values, etc.

#### Fixed Picks

**Pre-assigned module selections** on specific cluster nodes, bypassing the solver for those nodes. Useful for:

* Enforcing specific start/end points
* Manually placing special modules
* Seeding structures before solving the rest

### Data Flow Diagram

```
Editor Authoring                    Compilation                  Runtime Solving
────────────────                    ───────────                  ───────────────

┌──────────┐
│  Cages   │─────┐
└──────────┘     │
                 │
┌──────────┐     │     ┌──────────┐    ┌──────────┐    ┌──────────┐
│ Palettes │─────┼────>│ Builder  │───>│ Bonding  │───>│  Solver  │
└──────────┘     │     └──────────┘    │  Rules   │    └──────────┘
                 │                      └──────────┘         │
┌──────────┐     │                           ▲               │
│  Volume  │─────┘                           │               ▼
└──────────┘                                 │         ┌──────────┐
                                             │         │  Output  │
┌────────────┐                               │         │  Points  │
│ Input      │                               │         └──────────┘
│ Cluster    │───────────────────────────────┘
└────────────┘     (references bonding rules)
```

#### Step by Step

1. **Author**: Place cages in level, connect orbitals, add properties
2. **Group**: Create Context Volume, reference Bonding Rules asset
3. **Build**: Builder aggregates all cages, compiles into Bonding Rules
4. **Prepare**: PCG graph generates or loads cluster (points + edges)
5. **Annotate**: Write Valency Orbitals node reads cluster topology, matches edge directions to orbitals, writes masks to points
6. **Solve**: Valency Staging node runs Wave Function Collapse, assigns compatible module to each point
7. **Refine** (optional): Pattern Replacement node detects and transforms specific configurations
8. **Output**: Points now have module assignments, properties, tags—ready for spawning

### Important Distinctions

#### Cage vs Module

* **Cage** = Editor actor (authoring tool)
* **Module** = Compiled data (what solver works with)
* One cage might produce one module, or multiple transform variants might share one module

#### Node vs Point

* **Node** = Position in cluster topology (graph vertex)
* **Point** = PCG point data entry (has transform, attributes, etc.)
* Usually 1:1 mapping, but architecturally distinct spaces

#### Orbital Index vs Direction

* Orbitals are **matched by direction** (dot product), not by array index
* Edge direction vectors are compared against orbital direction vectors
* Best match (above angle threshold) = that orbital is "used"

#### Manual vs Auto Connections

* **Manual**: You explicitly drag connection from cage A's orbital to cage B
* **Auto**: Editor detects spatial proximity when cages are moved, suggests connections
* Both produce same result in compiled rules

***

**Next:** Orbitals & Orbital Sets — Deep dive into connection topology
