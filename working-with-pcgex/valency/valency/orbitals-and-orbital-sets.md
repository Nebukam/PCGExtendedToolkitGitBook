# Orbitals & Orbital Sets

Orbitals are the foundation of Valency's flexibility. Understanding how they work unlocks the full power of the system.

### What Are Orbitals?

An **orbital** is a connection point defined by a **normalized direction vector**. When the solver needs to determine if two nodes can connect, it:

1. Computes the direction vector from node A to node B
2. Finds the orbital on A whose direction best matches that vector (dot product)
3. Finds the orbital on B whose direction best matches the reverse vector
4. Checks if both orbitals pass the angle threshold
5. Verifies those orbitals allow that connection in the bonding rules

**Key insight**: Orbitals are directional, not positional. The orbital at index 0 doesn't mean "north"—it means "the direction this orbital points." This allows the same orbital set to work with rotated modules.

### Orbital Sets: Defining Your Topology

An **Orbital Set** is a data asset (`UPCGExValencyOrbitalSet`) that defines all possible connection directions for a given system.

#### Creating an Orbital Set

1. **Content Browser**: Right-click → PCGEx → Valency → Orbital Set
2. **Name it descriptively**: `OS_Cardinal4`, `OS_Hex6`, `OS_Custom26`
3. **Add orbital entries**:

Each entry defines:

* **Direction** (FVector): Normalized direction vector
  * Example: `(1, 0, 0)` for +X axis ("east")
  * Example: `(0.707, 0.707, 0)` for diagonal NE
* **Orbital Name** (FName): Optional, for debugging/display

#### Common Topologies

**Cardinal 4 (2D grid):**

```
North: (0, 1, 0)
East:  (1, 0, 0)
South: (0, -1, 0)
West:  (-1, 0, 0)
```

**Diagonal 8 (2D grid with diagonals):**

```
N:  (0, 1, 0)
NE: (0.707, 0.707, 0)
E:  (1, 0, 0)
SE: (0.707, -0.707, 0)
S:  (0, -1, 0)
SW: (-0.707, -0.707, 0)
W:  (-1, 0, 0)
NW: (-0.707, 0.707, 0)
```

**Cubic 26 (3D grid):**

```
6 faces: ±X, ±Y, ±Z
12 edges: combinations of 2 axes (normalized)
8 corners: combinations of 3 axes (normalized)
```

**Hexagonal 6 (flat-top hex grid):**

```
E:    (1, 0, 0)
NE:   (0.5, 0.866, 0)
NW:   (-0.5, 0.866, 0)
W:    (-1, 0, 0)
SW:   (-0.5, -0.866, 0)
SE:   (0.5, -0.866, 0)
```

**Custom Topologies:** You're not limited to regular grids! Define orbitals for:

* Irregular branching (3, 5, 7 connections from a hub)
* Vertical pipes with angled offshoots
* Organic growth with probabilistic branching angles

\[\[SCREENSHOT: Orbital set asset showing Cardinal4 setup with direction vectors]]

### Angle Threshold

The **Angle Threshold** (in degrees) determines how precisely directions must match for an orbital to be considered.

```cpp
Match succeeds if: DotProduct(EdgeDirection, OrbitalDirection) >= cos(AngleThreshold)
```

**Practical values:**

* **45°**: Strict matching, edges must clearly align with orbital direction
* **60°**: Moderate, allows some deviation (good for organic/irregular layouts)
* **89°**: Very loose, almost any forward-ish direction matches

**Example**: With 45° threshold and Cardinal4:

* Edge pointing `(0.9, 0.1, 0)` matches East orbital `(1, 0, 0)` ✓ (angle \~6°)
* Edge pointing `(0.6, 0.8, 0)` does NOT match East ✗ (angle \~53°)

**Debugging tip**: If nodes aren't matching expected orbitals, increase threshold temporarily to see if direction matching is the issue.

\[\[SCREENSHOT: Angle threshold visualization showing match vs non-match scenarios]]

### Transform Direction Flag

The `bTransformDirection` property controls whether orbital directions are rotated by the cage's transform.

#### When FALSE (default):

Orbital directions are **world-space absolute**. Rotating a cage in the editor doesn't change which world direction its orbitals point.

**Use when**: You want all cages to use the same world-space coordinate system (e.g., all "North" orbitals point world +Y regardless of cage rotation).

#### When TRUE:

Orbital directions are **transformed by cage rotation**. A cage rotated 90° around Z will have its orbitals rotated accordingly.

**Use when**: You're authoring modules that should naturally rotate (e.g., a corner piece that can face any direction, but its "forward" and "right" orbitals should rotate with it).

**Pattern cage note**: Pattern cages always use the orbital set's `bTransformDirection` flag, NOT the individual pattern cage's transform. This ensures consistent matching.

\[\[SCREENSHOT: Two cages with same orbital set, one rotated, showing difference with bTransformDirection true vs false]]

### Orbital Matching Algorithm (Technical Deep Dive)

When an edge exists between cluster nodes A and B:

```
1. Compute EdgeDirection = normalize(B.Position - A.Position)

2. If bTransformDirection:
     EdgeDirection = A.Transform.InverseTransformVector(EdgeDirection)

3. For each orbital in orbital set:
     Compute: dot = DotProduct(EdgeDirection, Orbital.Direction)
     Track: bestDot, bestOrbitalIndex

4. If bestDot >= cos(AngleThreshold):
     A's orbital = bestOrbitalIndex
   Else:
     A has NO matching orbital (edge won't contribute to mask)

5. Repeat for B using reverse direction
```

**Why this matters**: The solver writes orbital indices to edge attributes. If edge directions don't match any orbital, that edge is effectively invisible to the solver—nodes won't see each other as neighbors.

### Multi-Layer Workflow

You can use **multiple orbital sets simultaneously** by configuring layers.

#### Example: Structural + Detail Layers

**Layer 0** (Structural): `OS_Cardinal4`

* Handles primary wall connections (N/E/S/W)
* Must align perfectly for structural integrity

**Layer 1** (Detail): `OS_Diagonal8`

* Handles corner trim, decoration alignment
* Allows diagonal connections for detail meshes

A module must satisfy **both layers** to fit a node:

* Its Layer 0 orbitals must match node's structural connections
* Its Layer 1 orbitals must match node's detail connections

**Setting up layers**: Configured on the Write Valency Orbitals node and propagated through the pipeline.

\[\[SCREENSHOT: Multi-layer setup showing different orbital sets for different purposes]]

### Maximum Orbitals: 64 Per Layer

Due to 64-bit mask storage, each layer supports **up to 64 orbitals**. This is rarely a limitation (even 3D cubic grids only need 26).

If you exceed 64:

* Compilation will fail with an error
* Consider splitting into multiple layers or simplifying topology

### Orbital Naming & Labels

Orbital names are optional but helpful for:

* **Debugging**: Seeing "North" instead of "Orbital 0" in visualizations
* **Editor labels**: Displayed on connection arrows when enabled
* **Log output**: Clearer error messages

Names don't affect solving—only direction vectors matter.

### Best Practices

#### Start Simple

Begin with a well-known topology (Cardinal4, Cubic6) before creating custom sets. Prove your workflow, then customize.

#### Normalize Directions

Always use normalized vectors. Non-normalized directions will produce incorrect dot products and fail matching.

#### Test Threshold

Use the editor visualization to verify direction matching. If connections look wrong, adjust threshold before blaming other parts of the system.

#### Name Your Orbitals

Even simple names like "0", "1", "2" help when debugging. Descriptive names like "Up", "Down", "Forward" are better.

#### Document Custom Topologies

If you create a custom orbital set for a specific use case, add a comment in the asset or keep a reference diagram. Future you will thank you.

#### One Set, Many Cages

Reuse orbital sets across all cages in a system. Don't create duplicate sets unless they genuinely differ in topology or threshold.

### Common Issues

**"Nodes are connected but solver doesn't see neighbors"**

* Check angle threshold (increase to test)
* Verify orbital directions are normalized
* Check `bTransformDirection` matches your expectation
* Inspect edge orbital attributes (see Debugging section)

**"Rotated cages don't connect properly"**

* If using world-space orbitals: Don't rotate cages arbitrarily
* If using local-space: Enable `bTransformDirection`

**"64-orbital limit error"**

* Count your orbitals: You've exceeded 64 in one layer
* Split into multiple layers or simplify topology

***

**Next:** Cages & Modules — Creating and configuring your modular assets
