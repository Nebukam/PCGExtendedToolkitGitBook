---
icon: circle-dashed
---

# Noise : Spots

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Generates procedural noise patterns with circular or shaped spot motifs.

#### How It Works

This subnode creates a grid-based pattern of spots by:

1. Dividing 3D space into a regular grid of cells
2. Placing a spot at the center of each cell (with optional jitter)
3. Applying a shape function to define the spot's form and falloff
4. Randomly varying each spot's radius and value for natural variation

Each point in space is evaluated against this grid, and the noise value is determined by how much that point contributes to any nearby spot. The algorithm uses distance calculations from the spot center to determine intensity, with different shape types producing distinct visual effects.

The process works in three main steps:

* **Cell Placement**: Spots are positioned at regular intervals across the 3D space
* **Shape Evaluation**: Each spot's contribution is calculated using a distance-based function
* **Variation Application**: Radius and value are randomized per spot for natural variation

#### Configuration

<details>

<summary><strong>Shape</strong><br><em>Shape of the spots.</em></summary>

Controls the geometric form of each spot.

**Values**:

* **Circle (Hard)**: Sharp-edged circular spots with a hard transition
* **Circle (Soft Falloff)**: Smoothly fading circular spots
* **Square**: Square-shaped spots with soft edges
* **Diamond**: Diamond-shaped spots with soft edges
* **Star**: Star-shaped spots with soft edges

</details>

<details>

<summary><strong>SpotRadius</strong><br><em>Base radius of spots (0-1, relative to cell size).</em></summary>

Sets the base size of each spot in relation to the grid cell size. A value of 0.4 means each spot is 40% of the cell's width/height.

</details>

<details>

<summary><strong>RadiusVariation</strong><br><em>Random variation in spot radius.</em></summary>

Adds randomness to each spot's size, creating natural-looking variation. A value of 0.1 allows spots to vary by ±10% of their base radius.

</details>

<details>

<summary><strong>Jitter</strong><br><em>Jitter of spot positions within cells.</em></summary>

Controls how much each spot can deviate from the center of its grid cell. A value of 0.3 means spots can be placed up to 30% of a cell's width/height away from center.

</details>

<details>

<summary><strong>bInvertSpots</strong><br><em>Invert spots (holes instead of dots).</em></summary>

When enabled, creates holes or negative space where spots would normally appear. This is useful for creating patterns like a "leopard spot" texture with inverted spots.

</details>

<details>

<summary><strong>ValueVariation</strong><br><em>Random value variation per spot.</em></summary>

Adds random variation to each spot's intensity, making the pattern less uniform. A value of 0.5 means each spot can vary by ±50% in strength.

</details>

#### Usage Example

Create a "Leopard Spot" texture:

1. Use Noise : Spots with Shape set to Circle (Soft Falloff)
2. Set SpotRadius to 0.3 for medium-sized spots
3. Enable Jitter at 0.4 for natural placement variation
4. Set RadiusVariation to 0.2 for slightly different spot sizes
5. Enable ValueVariation at 0.3 to vary spot intensity
6. Connect this subnode to a node that uses noise to drive color or displacement

#### Notes

* The pattern repeats every cell size, so larger cells create coarser patterns
* Higher jitter values make spots appear more scattered and less grid-aligned
* Soft shapes (Circle, SoftCircle) produce smoother transitions between spots and background
* Hard shapes (Circle (Hard)) create sharp, well-defined spot edges
* Value variation works best with soft shapes to avoid harsh transitions
* Invert spots can be combined with other noise operations for complex pattern mixing
