---
description: 'In editor :: PCGEx | Transform Points'
icon: circle
---

# Transform Points

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Transforms point positions, rotations, and scales with variation and snapping support.

#### How It Works

The Transform Points node modifies the location, orientation, and size of points in your procedural graph. It applies random variations within specified ranges for each transformation type, allowing you to introduce subtle differences into your point placements.

For position, it calculates a random offset between minimum and maximum values, which can be scaled or snapped to grid steps. If enabled, rotation is first reset to zero before applying a random variation, also with optional scaling and snapping. Scale transformations work similarly, resetting to one if selected, then applying a random variation that can be uniform across all axes.

Each transformation operates independently, so you can combine offsetting, rotating, and scaling effects on the same set of points. The node also supports resetting point centers and adjusting scale based on bounding volumes.

{% hint style="info" %}
Connects to **Point Filters** subnode (for filtering points), and expects input via the main **Points** pin.
{% endhint %}

#### Configuration

<details>

<summary><strong>OffsetMin</strong><br><em>Minimum offset to apply to point position.</em></summary>

Defines the minimum translation vector applied to each point's position. Values are in world units.

</details>

<details>

<summary><strong>OffsetMax</strong><br><em>Maximum offset to apply to point position.</em></summary>

Defines the maximum translation vector applied to each point's position. Values are in world units.

</details>

<details>

<summary><strong>OffsetScaling</strong><br><em>Scale applied to both Offset Min &#x26; Offset Max.</em></summary>

Multiplies the offset range defined by `OffsetMin` and `OffsetMax`. Useful for scaling the variation uniformly.

</details>

<details>

<summary><strong>SnapPosition</strong><br><em>Snapping behavior for position variations.</em></summary>

Controls how variation values are snapped:

* **No Snapping**: No snapping occurs.
* **Snap Offset**: The variation value is snapped to grid steps before being applied.
* **Snap Result**: The final result after applying the variation is snapped to grid steps.

</details>

<details>

<summary><strong>OffsetSnap</strong><br><em>Grid step size for position snapping.</em></summary>

Defines the grid step size used when snapping position variations. Only active when `SnapPosition` is set to "Snap Offset" or "Snap Result".

</details>

<details>

<summary><strong>AbsoluteOffset</strong><br><em>Whether offset should be applied in world space.</em></summary>

When enabled, the offset is applied in absolute world coordinates rather than relative to the point's current position.

</details>

<details>

<summary><strong>bResetRotation</strong><br><em>If enabled will first reset rotation to 0, then apply variation.</em></summary>

When enabled, all rotations are reset to zero before applying the random variation from `RotationMin` to `RotationMax`.

</details>

<details>

<summary><strong>RotationMin</strong><br><em>Minimum rotation to apply to point.</em></summary>

Defines the minimum rotation applied to each point. Values are in degrees.

</details>

<details>

<summary><strong>RotationMax</strong><br><em>Maximum rotation to apply to point.</em></summary>

Defines the maximum rotation applied to each point. Values are in degrees.

</details>

<details>

<summary><strong>RotationScaling</strong><br><em>Scale applied to both Rotation Min &#x26; Rotation Max.</em></summary>

Multiplies the rotation range defined by `RotationMin` and `RotationMax`. Useful for scaling the variation uniformly.

</details>

<details>

<summary><strong>SnapRotation</strong><br><em>Snapping behavior for rotation variations.</em></summary>

Controls how rotation variation values are snapped:

* **No Snapping**: No snapping occurs.
* **Snap Offset**: The variation value is snapped to grid steps before being applied.
* **Snap Result**: The final result after applying the variation is snapped to grid steps.

</details>

<details>

<summary><strong>RotationSnap</strong><br><em>Grid step size for rotation snapping.</em></summary>

Defines the grid step size used when snapping rotation variations. Only active when `SnapRotation` is set to "Snap Offset" or "Snap Result".

</details>

<details>

<summary><strong>bResetScale</strong><br><em>If enabled will first reset scale to 1, then apply variation.</em></summary>

When enabled, all scales are reset to one before applying the random variation from `ScaleMin` to `ScaleMax`.

</details>

<details>

<summary><strong>ScaleMin</strong><br><em>Minimum scale to apply to point.</em></summary>

Defines the minimum scale applied to each point. Values are multipliers.

</details>

<details>

<summary><strong>ScaleMax</strong><br><em>Maximum scale to apply to point.</em></summary>

Defines the maximum scale applied to each point. Values are multipliers.

</details>

<details>

<summary><strong>ScaleScaling</strong><br><em>Scale applied to both Scale Min &#x26; Scale Max.</em></summary>

Multiplies the scale range defined by `ScaleMin` and `ScaleMax`. Useful for scaling the variation uniformly.

</details>

<details>

<summary><strong>UniformScale</strong><br><em>Whether to apply uniform scaling.</em></summary>

When enabled, all three axes are scaled equally using a single scalar value derived from the scale range.

</details>

<details>

<summary><strong>SnapScale</strong><br><em>Snapping behavior for scale variations.</em></summary>

Controls how scale variation values are snapped:

* **No Snapping**: No snapping occurs.
* **Snap Offset**: The variation value is snapped to grid steps before being applied.
* **Snap Result**: The final result after applying the variation is snapped to grid steps.

</details>

<details>

<summary><strong>ScaleSnap</strong><br><em>Grid step size for scale snapping.</em></summary>

Defines the grid step size used when snapping scale variations. Only active when `SnapScale` is set to "Snap Offset" or "Snap Result".

</details>

<details>

<summary><strong>bApplyScaleToBounds</strong><br><em>Whether to apply scaling based on bounds.</em></summary>

When enabled, the scale is adjusted so that the points fit within a defined bounding box.

</details>

<details>

<summary><strong>bResetPointCenter</strong><br><em>Whether to reset point center location.</em></summary>

When enabled, resets the center of each point's bounds to a specified coordinate.

</details>

<details>

<summary><strong>PointCenterLocation</strong><br><em>Bounds-relative coordinate used for the new center.</em></summary>

Defines where the new center should be located within the bounds. Values are relative coordinates (0-1).

</details>

#### Usage Example

To scatter trees with slight variations in position and rotation:

1. Connect a point source to the input.
2. Set `OffsetMin` to `(-50, -50, 0)` and `OffsetMax` to `(50, 50, 0)` to randomly shift points horizontally.
3. Enable `bResetRotation` and set `RotationMin` to `(-10, 0, 0)` and `RotationMax` to `(10, 0, 0)` for small random rotations.
4. Apply the node — each tree will be placed within a 100x100 area around its original spot and rotated slightly.

#### Notes

* Transformations are applied in order: offset → rotation → scale.
* Snapping works differently depending on the mode selected (`Snap Offset` vs `Snap Result`).
* Using `AbsoluteOffset`, `AbsoluteRotation`, or `UniformScale` can override default behavior for more precise control.
