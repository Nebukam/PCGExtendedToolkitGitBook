# PCG & Cluster Quick Reference

If you're fuzzy on PCG fundamentals or cluster/graph concepts, this page provides a quick refresher.

### PCG (Procedural Content Generation) Basics

#### What is PCG?

**Procedural Content Generation** (PCG) in Unreal Engine is a node-based system for creating content procedurally. Think of it like Blueprint, but for generating geometry, points, and metadata.

#### Core Concepts

**Nodes**:

* Building blocks of PCG graphs
* Each node performs one operation (generate points, filter, transform, etc.)
* Connected via pins (inputs and outputs)

**Pins**:

* **Input pins**: Receive data from upstream nodes
* **Output pins**: Send data to downstream nodes
* **Types**: Points, Splines, Surfaces, Volumes, Params, etc.

**Points**:

* Fundamental PCG data type
* Each point has:
  * **Transform**: Position, rotation, scale
  * **Attributes**: Custom metadata (floats, vectors, strings, etc.)
* Think of points as "spawn locations" or "data entries"

**Attributes**:

* Key-value pairs attached to points
* Examples: "Height", "Density", "ModuleIndex", "Cost"
* Used for filtering, weighting, downstream logic

**Execution**:

* PCG graphs execute when:
  * Component regenerated manually
  * Input data changes
  * Level loaded (if enabled)
* Execution is **off-thread** (runs in background)

#### PCG Component

**Actor** that executes a PCG graph:

* Place in level (Modes panel → PCG)
* Reference a PCG Graph asset
* Configure seed, bounds, generation triggers
* Generate button: Runs graph, spawns output

#### Common Nodes

**Generators** (create points):

* Static Grid Source: Regular grid
* Spline Sampler: Points along spline
* Surface Sampler: Points on surface
* Random points in volume

**Transformers** (modify points):

* Density Filter: Remove points based on attribute
* Transform Points: Change position/rotation/scale
* Set Attribute: Add/modify attribute values

**Spawners** (instantiate assets):

* Spawn Static Meshes: Spawn meshes at point locations
* Spawn Actors: Spawn actor instances

#### PCGEx Extension

**PCGEx** is a third-party plugin that extends PCG with advanced operations:

* **Clusters/Graphs**: Connected point networks (graph data structures)
* **Paths**: Ordered point sequences
* **Edges**: Connections between points
* **Advanced filters**: Sophisticated data manipulation
* **Valency**: The system you're learning!

PCGEx adds node types PCG doesn't have natively (graph operations, clustering, advanced sampling).

***

### Clusters & Graphs

#### What is a Cluster?

A **cluster** is a graph data structure: points (vertices) connected by edges.

**Mathematical graph**:

* **Vertices** (nodes): Points in space
* **Edges**: Connections between vertices

**Example**:

```
Point A ──edge─→ Point B
   │              │
  edge          edge
   │              │
   ↓              ↓
Point C ──edge─→ Point D
```

This is a 4-vertex, 4-edge cluster (simple grid).

#### Cluster Terminology

**Node** (or vertex):

* A point in the cluster
* Has position, attributes, neighbors

**Edge**:

* Connection between two nodes
* Directional or bidirectional
* Can have attributes (e.g., distance, orbital indices)

**Neighbor**:

* Node connected to another node via edge

**Topology**:

* The shape/structure of the cluster (which nodes connect to which)

**Cluster vs Graph**:

* Same thing in Valency context
* "Cluster" often implies spatial proximity
* "Graph" is more general (abstract connections)

#### Creating Clusters in PCG

**Method 1: Paths to Edges**

```
[Grid Source] → [Points to Paths] → [Paths to Edges]
```

* Grid creates points
* Points to Paths connects them in order
* Paths to Edges creates cluster with edges

**Method 2: Connect Points**

```
[Grid Source] → [Connect Points]
```

* Connects nearby points within threshold radius
* Creates cluster from spatial proximity

**Method 3: Delaunay Triangulation**

```
[Point Source] → [Delaunay 2D]
```

* Triangulates 2D point set
* Creates edges forming triangulation

**Method 4: PCGEx Graph Builders**

PCGEx has specialized graph-building nodes:

* Cluster from mesh vertices
* Cluster from spline points
* Custom graph topologies

#### Why Clusters Matter for Valency

Valency solves **clusters**:

* Each **node** in cluster = potential module placement
* Each **edge** defines neighbor relationships
* Solver assigns modules to nodes based on edge connectivity

**Without clusters**: Valency has no topology to work with (just disconnected points).

**With clusters**: Valency knows "Point A connects to Point B on this edge" → can enforce neighbor rules.

***

### Valency-Specific Cluster Requirements

#### Edges Must Exist

Valency needs **edges** (not just points):

* Edges define neighbor relationships
* Write Valency Orbitals reads edge directions
* Solver uses edges to check module compatibility

**How to verify**:

* PCG debugger: Check "Edges" output (should have data)
* Inspect edge attributes (should have orbital indices after Write Valency Orbitals)

#### Edge Directions Matter

Edges have **start and end points**:

* Direction = vector from start to end
* Write Valency Orbitals uses direction to match orbitals

**Example**:

```
Edge from Point A to Point B:
Direction = normalize(B.Position - A.Position)
If direction ≈ (1, 0, 0), matches "East" orbital
```

#### Node Index vs Point Index

**Point Index**:

* Position in PCG point data (attribute storage)
* Used for reading/writing attributes

**Node Index**:

* Position in cluster topology (graph vertex)
* Used for solver internal state, orbital cache

**Mapping**:

* Cluster nodes have `PointIndex` property
* Solver maps NodeIndex ↔ PointIndex

**Why this matters**:

* You'll see both in code/logs
* Attributes are read via PointIndex
* Solver works with NodeIndex

***

### Attributes & Metadata

#### Attribute Types

PCG supports various attribute types:

* **Float**: Single floating-point value
* **Double**: Double precision
* **Int32**: 32-bit integer
* **Int64**: 64-bit integer
* **Vector**: 3D vector (X, Y, Z)
* **Vector4**: 4-component vector
* **Rotator**: Rotation (pitch, yaw, roll)
* **Quat**: Quaternion rotation
* **Transform**: Position + rotation + scale
* **String**: Text
* **Name**: FName (optimized identifier)
* **Bool**: Boolean flag

#### Reading Attributes (in PCG Nodes)

Nodes can read attributes for filtering, weighting, etc.:

**Example**: Filter by attribute value

```
[Points] → [Density Filter]
  - Attribute: "Height"
  - Threshold: > 100
  - Output: Only points with Height > 100
```

#### Writing Attributes (in PCG Nodes)

Nodes can write attributes for downstream use:

**Example**: Set attribute

```
[Points] → [Set Attribute]
  - Attribute: "Cost"
  - Value: 50
  - Output: Points with Cost = 50
```

#### Valency Attribute Flow

**Write Valency Orbitals** writes:

* Vertex attributes: Orbital masks (int64)
* Edge attributes: Orbital indices (int64)

**Valency Staging** writes:

* Vertex attributes: Module data (int64), Module name (FName), Properties (various types)

**Your spawning logic** reads:

* Module data → determine which asset to spawn
* Properties → pass to spawned actors/materials

***

### Spawning from PCG

#### Spawn Static Meshes Node

Basic spawning:

```
[Points with attributes] → [Spawn Static Meshes]
  - Mesh: Reference to static mesh
  - Output: Mesh instances at point locations
```

**Per-point meshes**:

* Use **Mesh Selector** attribute
* Each point can spawn different mesh based on attribute value

#### Spawn Actors Node

Spawn actor instances:

```
[Points] → [Spawn Actors]
  - Actor class: Blueprint or native class
  - Output: Actor instances
```

**Passing attributes to spawned actors**:

* Actors can implement `IPCGDataAsset` interface
* Read point attributes in actor's `PostInitialize` or similar

#### Blueprint Logic for Valency

**Reading module data**:

```blueprint
On Spawn:
  Get Point Data
  Read Attribute "ModuleData" (Int64)
  Unpack module index (low 32 bits)
  Switch on module index:
    Case 0: Spawn Wall_Straight
    Case 1: Spawn Wall_Corner
    Case 2: Spawn Wall_Cap
```

**Reading properties**:

```blueprint
On Spawn:
  Read Attribute "SpawnWeight" (Float)
  Read Attribute "TintColor" (Vector)
  Apply to material instance
```

***

### Common Patterns

#### Pattern 1: Grid-Based Generation

```
[Static Grid] → [Points to Paths] → [Paths to Edges]
                                         ↓
                              [Write Valency Orbitals]
                                         ↓
                                 [Valency Staging]
                                         ↓
                              [Spawn Static Meshes]
```

**Use for**: Tile-based systems, grid-aligned modules.

#### Pattern 2: Spline-Based Generation

```
[Spline] → [Spline Sampler] → [Connect Points]
                                    ↓
                         [Write Valency Orbitals]
                                    ↓
                            [Valency Staging]
                                    ↓
                          [Spawn Actors]
```

**Use for**: Roads, pipes, cables following splines.

#### Pattern 3: Organic Layouts

```
[Random Points] → [Delaunay 2D] → [Write Valency Orbitals]
                                         ↓
                                 [Valency Staging]
                                         ↓
                                     [Spawn]
```

**Use for**: Organic growth, non-grid structures.

#### Pattern 4: Multi-Stage Processing

```
[Generate Cluster] → [Write Valency Orbitals]
                              ↓
                      [Valency Staging]
                              ↓
                   [Pattern Replacement]
                              ↓
                      [Custom Processing]
                              ↓
                           [Spawn]
```

**Use for**: Complex workflows with pattern detection and custom logic.

***

### Debugging PCG Graphs

#### PCG Debugger

Built-in Unreal tool for inspecting PCG output:

**Activate**:

* Select PCG Component in level
* Details panel → Debug section
* Enable debugging

**What you can see**:

* All intermediate node outputs
* Point positions (visualized in viewport)
* Attribute values (inspect individual points)
* Edge connections (if supported)

**How to use**:

* Click node in graph to see its output
* Select individual points to inspect attributes
* Verify data flow (are points reaching next node?)

#### Common PCG Issues

**"No points generated"**:

* Check generator settings (grid size, sample count, etc.)
* Check filters (might be removing all points)
* Verify bounds (generator might be outside PCG component bounds)

**"Nodes not executing"**:

* Check pin connections (must be wired)
* Check node settings (some nodes have enable flags)
* Regenerate component (manual execute)

**"Attributes missing"**:

* Verify upstream node writes attribute
* Check attribute name (case-sensitive)
* Inspect point in debugger (attributes listed)

***

### PCGEx-Specific Concepts

#### Edges Data Type

PCGEx adds **Edges** pin type:

* Stores graph topology (which points connect)
* Required for cluster-based nodes
* Created by "Paths to Edges", "Connect Points", graph builders, etc.

#### Cluster Operations

PCGEx provides nodes for cluster manipulation:

* Filter edges/nodes
* Transform based on topology
* Extract sub-clusters
* Merge clusters

#### Facades (Internal)

PCGEx uses **facades** for efficient data access:

* Abstraction over point data
* Pre-loads frequently-accessed attributes
* Valency uses facades internally (you don't interact with them directly)

***

### Helpful Resources

#### Official UE Documentation

* [PCG Quick Start](https://docs.unrealengine.com/5.7/en-US/pcg-quick-start/)
* [PCG Overview](https://docs.unrealengine.com/5.7/en-US/procedural-content-generation-overview/)

#### PCGEx Documentation

* [PCGEx GitHub](https://github.com/Nebukam/PCGExtendedToolkit)
* [PCGEx Discord](https://discord.gg/pcgex) (community support)

#### Learning Tips

**Start small**:

* Create simple PCG graph (grid + spawn meshes)
* Verify it works before adding Valency

**Use debugger**:

* Always inspect intermediate outputs
* Don't assume—verify data is correct

**Iterate**:

* Test with 10 points before testing with 1000
* Catch errors early

**Read logs**:

* Console output has valuable info
* Enable verbose logging when stuck

***

### Glossary

| Term           | Definition                                                 |
| -------------- | ---------------------------------------------------------- |
| **PCG**        | Procedural Content Generation (UE's procedural system)     |
| **PCGEx**      | Third-party plugin extending PCG with advanced features    |
| **Point**      | Fundamental PCG data type (transform + attributes)         |
| **Attribute**  | Key-value metadata on points                               |
| **Cluster**    | Graph of connected points (vertices + edges)               |
| **Graph**      | Same as cluster (abstract connections)                     |
| **Node**       | Vertex in cluster (not to be confused with PCG graph node) |
| **Edge**       | Connection between two cluster nodes                       |
| **Topology**   | Structure of cluster (which nodes connect to which)        |
| **NodeIndex**  | Position in cluster topology (solver space)                |
| **PointIndex** | Position in PCG point data (attribute space)               |
| **Facade**     | Internal abstraction for efficient data access             |
| **Orbital**    | Connection point in Valency (directional socket)           |
| **Module**     | Compiled cage representation (what solver works with)      |

***

**Congratulations!** You now have a complete reference for Valency, from fundamentals to advanced usage. Go build something amazing!
