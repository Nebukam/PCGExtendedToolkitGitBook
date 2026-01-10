---
icon: grid-round-2
---

# Clipper2

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Performs Clipper2 operations and path manipulations on point data.

#### How It Works

This node processes input point data as paths and applies Clipper2-based geometric operations such as union, intersection, difference, or XOR. It organizes input paths into groups based on matching settings, then performs the specified operation on those groups. The results are converted back into point data with optional attribute blending and hole tagging.

The processing follows these steps:

1. Input paths are converted to Clipper2's internal format.
2. If enabled, open paths are filtered out or handled according to the Open Paths Output setting.
3. Paths are grouped based on matching rules (if enabled) or processed individually.
4. Clipper2 operations are performed using the specified fill rule and join/end types.
5. The resulting paths are converted back into point data with optional blending of attributes from input points.
6. If tagging is enabled, holes in the result are marked with a tag.

#### Configuration

<details>

<summary><strong>MainDataMatching</strong><br><em>If enabled, lets you create sub-groups to operate on. If disabled, data is processed individually.</em></summary>

When enabled, this setting allows you to define how main input paths relate to operand paths. This enables operations between specific groups of paths rather than processing all paths together.

</details>

<details>

<summary><strong>MainInputGroupingPolicy</strong><br><em>How should data be grouped when data matching is disabled.</em></summary>

Controls how input paths are grouped when data matching is turned off.

* **Split**: Each path is processed individually.
* **Consolidate**: All paths are combined into a single group.

</details>

<details>

<summary><strong>OperandsDataMatching</strong><br><em>If enabled, lets you pick which operand data matches with which main data.</em></summary>

When enabled, this setting defines how operand paths match with main input paths. This is used when you want to perform operations between specific pairs or groups of paths.

</details>

<details>

<summary><strong>bSkipOpenPaths</strong><br><em>Skip paths that aren't closed.</em></summary>

When enabled, open paths (paths that don't form a complete loop) are ignored during processing. This can be useful when you only want to work with closed shapes.

</details>

<details>

<summary><strong>Precision</strong><br><em>Decimal precision.</em></summary>

Controls the internal precision used for Clipper2 calculations. Higher values provide more accurate results but may slow down processing. The default value is 100, which scales floating-point coordinates to int64 internally.

</details>

<details>

<summary><strong>bSimplifyPaths</strong><br><em>Cleanup.</em></summary>

When enabled, the resulting paths are simplified by removing unnecessary points and collapsing small segments. This reduces complexity in the output.

</details>

<details>

<summary><strong>bPreserveCollinear</strong><br><em>Whether to preserve collinear points during simplification.</em></summary>

When enabled, collinear points (points lying on a straight line) are preserved during path simplification. When disabled, these points may be removed to reduce complexity.

</details>

<details>

<summary><strong>ArcTolerance</strong><br><em>Arc tolerance for path simplification.</em></summary>

Controls how closely simplified paths approximate the original shape when using arc-based simplification. A higher value allows more deviation from the original curve, resulting in fewer points.

</details>

<details>

<summary><strong>CarryOverDetails</strong><br><em>Filter in/out which attributes get carried over from inputs to outputs.</em></summary>

Controls which input attributes are copied to output paths. You can specify which attributes should be included or excluded from the result.

</details>

<details>

<summary><strong>BlendingDetails</strong><br><em>Filter in/out which attributes get carried over from inputs to outputs.</em></summary>

Controls how attribute values are blended when multiple input points contribute to a single output point. You can choose different blending modes like average, sum, or weighted sum.

</details>

<details>

<summary><strong>OpenPathsOutput</strong><br><em>How to handle open paths in the output.</em></summary>

Controls how open paths are handled in the output.

* **Ignore**: Open paths are not included in the result.
* **Output**: Open paths are included on the main output pin.
* **Output (Pin)**: Open paths are sent to a separate output pin.

</details>

<details>

<summary><strong>bTagHoles</strong><br><em>Whether to tag paths that are holes.</em></summary>

When enabled, paths identified as holes in the result are tagged with the specified Hole Tag. This allows downstream nodes to distinguish between solid and hole regions.

</details>

<details>

<summary><strong>HoleTag</strong><br><em>Write this tag on paths that are holes.</em></summary>

The string used to tag paths identified as holes in the output. Only used when bTagHoles is enabled.

</details>

<details>

<summary><strong>bUnionGroupBeforeOperation</strong><br><em>(DEBUG) If enabled, performs a union of all paths in the group before proceeding to the operation.</em></summary>

When enabled, this setting performs a union of all paths within a processing group before applying the main Clipper2 operation. This is useful for debugging or combining multiple shapes into one before performing operations.

</details>

<details>

<summary><strong>bUnionOperandsBeforeOperation</strong><br><em>(DEBUG) If enabled, performs a union of all paths in the operand group before proceeding to the operation.</em></summary>

When enabled, this setting performs a union of all operand paths before applying the main Clipper2 operation. This is useful for debugging or combining multiple operands into one shape.

</details>

#### Usage Example

To create a complex shape using boolean operations:

1. Connect two sets of point data to the Main and Operands pins.
2. Set the operation type in a downstream node (e.g., Union, Difference).
3. Enable data matching to control which operand paths relate to main paths.
4. Use CarryOverDetails to preserve relevant attributes from input paths.
5. Optionally enable bTagHoles to identify hole regions in the result.

#### Notes

* Clipper2 uses integer coordinates internally for high precision; floating-point values are scaled based on the Precision setting.
* Boolean operations may produce self-intersecting or invalid paths, which can be cleaned up using path simplification options.
* For performance reasons, avoid enabling bUnionGroupBeforeOperation and bUnionOperandsBeforeOperation in production workflows unless debugging is required.
