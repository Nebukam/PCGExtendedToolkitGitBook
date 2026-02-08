---
icon: bug
description: 'Draw Attributes - Visualizes point attribute values as debug draw elements in the viewport.'
---

# Draw Attributes

Visualizes point attribute values as debug draw elements in the viewport.

## Overview

This debug node renders attribute values as visual debug elements in the editor viewport, allowing you to inspect vector directions, connections between points, positions, and boolean values directly in 3D space. Multiple attributes can be visualized simultaneously with customizable colors, sizes, and drawing styles. The node supports per-point attribute-driven sizing and coloring for detailed data visualization.

**Important**: Toggle debug drawing OFF (D key) before disabling this node (E key) to avoid persistent debug lines. This node clears persistent debug lines on execution.

## How It Works

1. **Debug Configuration**: Defines what attributes to visualize and how to interpret their values
2. **Attribute Binding**: Binds to specified attributes from input point data
3. **Value Interpretation**: Reads attribute values and interprets them based on ExpressedAs mode
4. **Optional Modifiers**: Applies size and color from attributes if enabled
5. **Debug Drawing**: Renders debug shapes in viewport using engine debug draw API
6. **Per-Point Processing**: Draws debug elements for each point in the collection

#### Usage Notes

- **Performance**: Debug drawing is intended for editor use only and may impact performance with large point counts.
- **Clearing Debug Lines**: Always toggle debug drawing OFF (D key) before disabling the node (E key) to avoid persistent debug lines cluttering the viewport.
- **Persistent Lines**: This node clears persistent debug lines on execution to prevent accumulation.
- **Viewport Visibility**: Debug draws only appear in editor viewports, not in Play mode or builds.

## Behavior

#### Direction Mode (Vectors as Normals):
```
Attribute: Forward (Vector)
Size: 100
Color: Red

Point A: Position (0, 0, 0), Forward (1, 0, 0)
  → Draws red line from (0,0,0) to (100,0,0)

Point B: Position (100, 0, 0), Forward (0, 1, 0)
  → Draws red line from (100,0,0) to (100,100,0)

bNormalizeBeforeSizing = true:
  Vector (2, 0, 0) → Normalize to (1,0,0) → Scale by 100 → (100,0,0)

bNormalizeBeforeSizing = false:
  Vector (2, 0, 0) → Scale by 100 → (200,0,0)
```

#### Connection (Point Index) Mode:
```
Attribute: NextIndex (Int32)
Size: N/A (connects to indexed point)
Color: Green

Point 0: Position (0, 0, 0), NextIndex = 2
  → Draws green line from Point 0 to Point 2

Point 1: Position (100, 0, 0), NextIndex = 0
  → Draws green line from Point 1 to Point 0

bAsOffset = true:
  NextIndex = 2 means "2 points ahead" (current + 2)
```

#### Connection (Position) Mode:
```
Attribute: TargetPos (Vector)
Size: N/A (connects to position)
Color: Blue

Point A: Position (0, 0, 0), TargetPos (100, 100, 0)
  → Draws blue line from (0,0,0) to (100,100,0)

bAsOffset = true:
  TargetPos (50, 0, 0) means "50 units in X from current position"
  → Draws from (0,0,0) to (50,0,0)
```

#### Point Mode:
```
Attribute: Waypoint (Vector)
Size: 20 (sphere radius)
Color: Yellow

Point A: Position (0, 0, 0), Waypoint (500, 500, 100)
  → Draws yellow sphere at (500, 500, 100) with radius 20

bAsOffset = true:
  Waypoint (100, 0, 0) relative to Point position
  → Draws sphere at (100, 0, 0) instead of (500,500,100)
```

#### Boolean Mode:
```
Attribute: IsActive (Bool)
Color: Green (true color)
SecondaryColor: Red (false color)
Size: 50

Point A: Position (0, 0, 0), IsActive = true
  → Draws green sphere at (0,0,0) with radius 50

Point B: Position (100, 0, 0), IsActive = false
  → Draws red sphere at (100,0,0) with radius 50
```

#### Per-Point Size:
```
bSizeFromAttribute = true
LocalSizeAttribute: $Scale
Size: 100 (base multiplier)

Point A: $Scale = 0.5
  → Drawn size = 100 * 0.5 = 50

Point B: $Scale = 2.0
  → Drawn size = 100 * 2.0 = 200
```

#### Per-Point Color:
```
bColorFromAttribute = true
LocalColorAttribute: $Color
bColorIsLinear: true

Point A: $Color = (255, 0, 0) as Vector
  → Divides by 255 → (1.0, 0, 0) → Red

bColorIsLinear: false
  → Uses value as-is (0-255 range)
```

Good for: debugging attribute values, visualizing vectors, inspecting point relationships, validating data flow, spatial debugging

## Settings

<details>
<summary><strong>Debug List</strong> <code>TArray<FPCGExAttributeDebugDrawConfig></code></summary>

Array of attribute debug visualization configurations.

Each entry defines:
- Which attribute to visualize
- How to interpret its value
- Visual styling (color, size, thickness)

Add multiple entries to visualize several attributes simultaneously.

</details>

### Debug Configuration (FPCGExAttributeDebugDrawConfig)

<details>
<summary><strong>Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

The attribute to visualize.

Select the point attribute whose values will be drawn.

Examples:
- Vector attributes: Normals, Velocities, Directions
- Position attributes: TargetPosition, Waypoints
- Integer attributes: ConnectionIndices, NextPoint
- Boolean attributes: IsValid, IsActive

⚡ PCG Overridable

</details>

<details>
<summary><strong>Enabled</strong> <code>bool</code></summary>

Enable or disable this debug visualization.

Allows toggling individual debug draws without removing the configuration.

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Expressed As</strong> <code>EPCGExDebugExpression</code></summary>

How the attribute value is interpreted for visualization.

| Mode | Description |
|------|-------------|
| **Direction** (default) | Attribute is a vector direction/normal (draws directional line) |
| **Connection (Point Index)** | Attribute is an int32 index to another point (draws connection line) |
| **Connection (Position)** | Attribute is a vector position to connect to (draws connection line) |
| **Point** | Attribute is a world space position (draws sphere at position) |
| **Boolean** | Attribute is a bool (draws sphere with color based on value) |

**Direction**: Visualizes vector directions as arrows
**Connection (Index)**: Shows relationships between points by index
**Connection (Position)**: Shows connections to world positions
**Point**: Marks positions in space
**Boolean**: Color-codes points by true/false state

Default: `Direction`

⚡ PCG Overridable

</details>

<details>
<summary><strong>As Offset</strong> <code>bool</code></summary>

Treat the value as an offset from the point's position rather than absolute.

**false** (default): Value is in world space
**true**: Value is relative to point position

Examples:
- Connection (Index) + Offset: Index is relative (current + N)
- Connection (Position) + Offset: Position is offset from point
- Point + Offset: Position is relative to point location

📋 *Visible when Expressed As = Connection (Point Index), Connection (Position), or Point*

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Normalize Before Sizing</strong> <code>bool</code></summary>

Normalize direction vectors before applying the size multiplier.

**true** (default): Normalize to unit length, then scale by Size
**false**: Scale raw vector by Size

Examples:
- Vector (2, 0, 0), Size 100:
  - Normalized: (1,0,0) * 100 = (100,0,0)
  - Not normalized: (2,0,0) * 100 = (200,0,0)

📋 *Visible when Expressed As = Direction*

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Thickness</strong> <code>float</code></summary>

Draw line thickness in pixels.

Controls visual weight of debug lines and shapes.

Default: `1.0`

Range: `0.001` to `10.0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Size</strong> <code>double</code></summary>

Draw size. Meaning depends on debug type:
- **Direction**: Line length (in world units)
- **Connection**: N/A (connects to point/position)
- **Point/Boolean**: Sphere radius (in world units)

When using Size From Attribute, this acts as a multiplier.

Default: `100.0`

Range: `0.000001` to max

⚡ PCG Overridable

</details>

<details>
<summary><strong>Size From Attribute</strong> <code>bool</code></summary>

Fetch the size from a local attribute.

When enabled, the Size parameter acts as a scale multiplier for the attribute value.

Examples:
- LocalSizeAttribute = "$Scale", Size = 100
  - Point with $Scale = 0.5 → Drawn size = 50
  - Point with $Scale = 2.0 → Drawn size = 200

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Local Size Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read size values from.

Must be a numeric attribute (int32, int64, float, double).

📋 *Visible when Size From Attribute = true*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Color</strong> <code>FColor</code></summary>

Draw color for the debug visualization.

Used as primary color for most modes, and as "true" color for Boolean mode.

Default: `Red (255, 0, 0)`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Secondary Color</strong> <code>FColor</code></summary>

Color used for boolean false values.

When Expressed As = Boolean, points with false values use this color instead of the primary Color.

📋 *Visible when Expressed As = Boolean*

Default: `Green (0, 255, 0)`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Color From Attribute</strong> <code>bool</code></summary>

Fetch the color from a local attribute.

Allows per-point color variation based on attribute values.

Default: `false`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Local Color Attribute</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read color values from.

Should be a Vector attribute with RGB values.

Default: `"$Color"`

📋 *Visible when Color From Attribute = true*

⚡ PCG Overridable

</details>

<details>
<summary><strong>Color Is Linear</strong> <code>bool</code></summary>

Interpret color attribute values as linear (0-1) or sRGB (0-255).

**true** (default): Divides attribute values by 255 (255,0,0 → 1.0,0,0)
**false**: Uses values as-is (expects 0-1 range)

📋 *Visible when Color From Attribute = true*

Default: `true`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Depth Priority</strong> <code>int32</code></summary>

Depth rendering priority for debug draw elements.

Higher values render on top of lower values.

Default: `0`

⚡ PCG Overridable

</details>

<details>
<summary><strong>PCGEx Debug</strong> <code>bool</code></summary>

Master toggle for debug drawing.

Allows disabling all debug visualizations from this node without removing configurations. Useful in subgraphs for external control.

Default: `true`

⚡ PCG Overridable

</details>

## Inputs

| Pin | Type | Description |
|-----|------|-------------|
| **In** | Point Data | Point collections with attributes to visualize |

## Outputs

| Pin | Type | Description |
|-----|------|-------------|
| **Out** | Point Data | Pass-through of input data (unmodified) |

---

[![Static Badge](https://img.shields.io/badge/Source-PCGExFoundations-473F69)](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFoundations/Public/Elements/Debug/PCGExDrawAttributes.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFoundations/Public/Elements/Debug/PCGExDrawAttributes.h -->

<!-- VERIFICATION REPORT
Node-Specific Properties: 2 documented (DebugList, bPCGExDebug)
Debug Config Properties: 14 documented (Attribute, bEnabled, ExpressedAs, bAsOffset, bNormalizeBeforeSizing, Thickness, Size, bSizeFromAttribute, LocalSizeAttribute, Color, SecondaryColor, bColorFromAttribute, LocalColorAttribute, bColorIsLinear, DepthPriority)
Inherited Properties: UPCGExPointsProcessorSettings base class
Expression Types: Direction, Connection (Point Index), Connection (Position), Point, Boolean
Inputs: Point data with attributes
Outputs: Pass-through point data
Special Features: Per-point sizing, per-point coloring, multiple simultaneous visualizations
Use Cases: Debugging, attribute inspection, vector visualization, connection mapping
Warning: Must disable debug before disabling node
-->
