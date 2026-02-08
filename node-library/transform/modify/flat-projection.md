---
icon: circle
---

# Flat Projection

Project points from their position in space to the XY plane.

### Overview

Flat Projection collapses 3D points onto a 2D plane by removing one axis of their position. It can optionally save the original transform as an attribute, allowing a later instance of this node to restore points to their original 3D positions. This is useful for performing 2D operations on 3D data, then projecting back.

### How It Works

**When projecting (Restore Previous Projection = false):**

1. **Capture Transform**: Optionally stores the original 3D transform as an attribute.
2. **Project Position**: Moves each point onto the projection plane by zeroing out the projected axis.
3. **Align Transform**: Optionally rotates the point's local transform to align with the projection plane.

**When restoring (Restore Previous Projection = true):**

1. **Read Stored Transform**: Loads the previously saved transform attribute.
2. **Apply Components**: Restores selected position, rotation, and scale components from the stored transform.

**Usage Notes**

* **Roundtrip Workflow**: Project points, perform 2D operations (like Delaunay, Lloyd Relax 2D, etc.), then use another Flat Projection with restore enabled to return to 3D.
* **Attribute Persistence**: The stored transform attribute persists through operations, enabling late restoration even after multiple intermediate nodes.

### Behavior

```
Original 3D Points:          After Flat Projection (Up = Z):

    ●A (10, 20, 50)              ●A (10, 20, 0)
    ●B (30, 40, 100)     →       ●B (30, 40, 0)
    ●C (15, 25, 75)              ●C (15, 25, 0)

Stored: FlatProjection.Transform attribute contains original transforms
```

### Settings

#### Node-Specific Settings

<details>

<summary><strong>Restore Previous Projection</strong> <code>bool</code></summary>

When enabled, restores points from a previously saved projection instead of creating a new one. The node reads the stored transform attribute and applies selected components back to the points.

Default: `false`

⚡ PCG Overridable

</details>

<details>

<summary><strong>Attribute Prefix</strong> <code>FName</code></summary>

Prefix for the attribute that stores/reads the original transform. The full attribute name will be `{Prefix}.Transform`.

Default: `FlatProjection`

⚡ PCG Overridable

</details>

<details>

<summary><strong>Position</strong> <code>uint8</code> (bitmask)</summary>

Which position components (X, Y, Z) from the stored transform should be restored to the point.

Default: `0` (none)

📋 _Visible when Restore Previous Projection is enabled_

</details>

<details>

<summary><strong>Rotation</strong> <code>uint8</code> (bitmask)</summary>

Which rotation components from the stored transform should be restored to the point.

Default: `0` (none)

📋 _Visible when Restore Previous Projection is enabled_

</details>

<details>

<summary><strong>Scale</strong> <code>uint8</code> (bitmask)</summary>

Which scale components (X, Y, Z) from the stored transform should be restored to the point.

Default: `0` (none)

📋 _Visible when Restore Previous Projection is enabled_

</details>

<details>

<summary><strong>Save Attribute For Restore</strong> <code>bool</code></summary>

When enabled, saves the original 3D transform as an attribute so it can be restored later.

Default: `true`

📋 _Visible when Restore Previous Projection is disabled_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Align Local Transform</strong> <code>bool</code></summary>

When enabled, rotates the point's local transform to align with the projection plane.

Default: `false`

📋 _Visible when Restore Previous Projection is disabled_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Projection</strong> <code>FPCGExGeo2DProjectionDetails</code></summary>

Settings controlling how points are projected to 2D.

📋 _Visible when Restore Previous Projection is disabled_

//→ See TODO FPCGExGeo2DProjectionDetails

</details>

#### Inherited Settings

This node inherits common settings from its base class.

→ See Points Processor Settings for shared point processing options.

### Outputs

| Pin     | Type       | Description                                |
| ------- | ---------- | ------------------------------------------ |
| **Out** | Point Data | Points projected to 2D (or restored to 3D) |

***

![Static Badge](https://img.shields.io/badge/Source-PCGExElementsSpatial-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsSpatial/Public/Elements/PCGExFlatProjection.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsSpatial/Public/Elements/PCGExFlatProjection.h -->
