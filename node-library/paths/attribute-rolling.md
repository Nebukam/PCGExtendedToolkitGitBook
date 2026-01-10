---
description: 'In editor :: PCGEx | Path : Attribute Rolling'
icon: circle
---

# Attribute Rolling

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Applies a rolling blend of properties and attributes along paths.

#### Overview

This node applies a rolling operation to points along a path, determining when to begin and stop applying blending or attribute modifications based on filter conditions. It's useful for creating smooth transitions or effects that begin at one point in a path and end at another, such as gradual lighting changes, terrain blending, or procedural material transitions.

It operates by scanning through the points of each path and using configurable filters to decide when to initiate or halt a rolling effect. The rolling can be controlled either via two separate filters (start/stop) or a single toggle filter that switches on and off as it passes points.

{% hint style="info" %}
Connects to **Path** processing pins.
{% endhint %}

#### How It Works

This node processes each path sequentially, evaluating points in order to determine when to begin and end a rolling effect. It uses filters defined by subnodes to decide whether a point should trigger the start or stop of a rolling range.

The rolling process works as follows:

1. The node evaluates the first point of the path to set an initial rolling state.
2. As it moves through points, it checks if the current point meets the criteria for starting or stopping the rolling effect.
3. If using **Start/Stop** mode, it uses two separate filters: one to detect when to start rolling and another to detect when to stop.
4. If using **Toggle** mode, a single filter determines whether to switch the rolling state on or off.
5. While rolling, it applies blending operations based on the current point's position within the range.
6. It optionally writes attributes to indicate where the rolling started, stopped, or is currently active.

The node supports reverse rolling order and can blend outside of the defined rolling range if enabled.

<details>

<summary>Inputs</summary>

* **Main Input**: Paths (Point data representing paths)
* **Optional Filter Subnodes**:
  * Pin filter subnode: Used to determine when a point should be considered for rolling
  * Start filter subnode: Used in Start/Stop mode to detect the start of a rolling range
  * Stop filter subnode: Used in Start/Stop mode to detect the end of a rolling range

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: Modified paths with updated attributes based on rolling behavior
* **Optional Attribute Outputs**:
  * Range start indicator
  * Range stop indicator
  * Range pole (start or stop)
  * Range index
  * Inside-range boolean flag
  * Index inside range

</details>

#### Configuration

<details>

<summary><strong>RangeControl</strong><br><em>Rolling range control.</em></summary>

Controls how the rolling range is determined.

**Values**:

* **StartStop**: Uses two separate set of filters to start & stop rolling
* **Toggle**: Uses a single set of filter that switches roll on/off whenever a point passes

</details>

<details>

<summary><strong>ValueControl</strong><br><em>Rolling value control.</em></summary>

Controls how the reference value for rolling is determined.

**Values**:

* **Pin**: Uses filter to determine when a point should be used as reference for rolling
* **Previous**: Use the previous point' value
* **RangeStart**: Use the first point of a range

</details>

<details>

<summary><strong>InitialValueMode</strong><br><em>How the initial rolling state is set.</em></summary>

Sets how the initial rolling state (true/false) is determined.

**Values**:

* **Constant**: Use a constant value.
* **ConstantPreserve**: Use a constant value, but does not switch if the first value is the same.
* **FromPoint**: Use the first point starting value.

</details>

<details>

<summary><strong>bInitialValue</strong><br><em>Starting toggle value.</em></summary>

When InitialValueMode is set to Constant or ConstantPreserve, this sets the initial rolling state.

</details>

<details>

<summary><strong>bReverseRolling</strong><br><em>Reverse rolling order.</em></summary>

When enabled, the rolling effect proceeds in reverse order along the path.

</details>

<details>

<summary><strong>bBlendOutsideRange</strong><br><em>Enable blend operations to be processed outside the rolling range.</em></summary>

When enabled, blending operations are applied even if a point is outside the defined rolling range. This can be useful for creating smooth transitions that extend beyond the start/stop points.

</details>

<details>

<summary><strong>bBlendStopElement</strong><br><em>Whether to blend the stop element.</em></summary>

When enabled and blending outside the range is disabled, the node will blend the point at which rolling stops.

</details>

<details>

<summary><strong>bWriteRangeStart</strong><br><em>Enable writing range start indicator.</em></summary>

When enabled, a boolean attribute is written to indicate where the rolling range starts.

</details>

<details>

<summary><strong>RangeStartAttributeName</strong><br><em>Name of the 'bool' attribute to write range start to.</em></summary>

The name of the attribute that will store whether a point marks the start of the rolling range.

</details>

<details>

<summary><strong>bWriteRangeStop</strong><br><em>Enable writing range stop indicator.</em></summary>

When enabled, a boolean attribute is written to indicate where the rolling range stops.

</details>

<details>

<summary><strong>RangeStopAttributeName</strong><br><em>Name of the 'bool' attribute to write range stop to.</em></summary>

The name of the attribute that will store whether a point marks the end of the rolling range.

</details>

<details>

<summary><strong>bWriteRangePole</strong><br><em>Enable writing range pole indicator.</em></summary>

When enabled, a boolean attribute is written to indicate whether a point is either the start or stop of the rolling range (a "pole").

</details>

<details>

<summary><strong>RangePoleAttributeName</strong><br><em>Name of the 'bool' attribute to write range pole to.</em></summary>

The name of the attribute that will store whether a point is a range pole (start or stop).

</details>

<details>

<summary><strong>bWriteRangeIndex</strong><br><em>Enable writing range index.</em></summary>

When enabled, an integer attribute is written to indicate the position within the rolling range.

</details>

<details>

<summary><strong>RangeIndexAttributeName</strong><br><em>Name of the 'int32' attribute to write range index to.</em></summary>

The name of the attribute that will store the current range index value.

</details>

<details>

<summary><strong>RangeIndexOffset</strong><br><em>Let you add an offset to the range index value.</em></summary>

Adds a fixed offset to the range index values, useful for adjusting the starting index.

</details>

<details>

<summary><strong>bWriteIsInsideRange</strong><br><em>Enable writing inside-range indicator.</em></summary>

When enabled, a boolean attribute is written to indicate whether a point is currently within the rolling range.

</details>

<details>

<summary><strong>IsInsideRangeAttributeName</strong><br><em>Name of the 'bool' attribute to write whether a point is inside the range or not.</em></summary>

The name of the attribute that will store whether a point is currently inside the rolling range.

</details>

<details>

<summary><strong>bWriteIndexInsideRange</strong><br><em>Enable writing index inside range.</em></summary>

When enabled, an integer attribute is written to indicate the index relative to the rolling range start.

</details>

<details>

<summary><strong>IndexInsideRangeAttributeName</strong><br><em>Name of the 'int32' attribute to write range index to.</em></summary>

The name of the attribute that will store the index within the rolling range.

</details>

#### Usage Example

Use this node to create a smooth transition effect along a path, such as changing material properties from one end to another. For example:

1. Set up a path with points.
2. Use a filter subnode to mark where the rolling should start (e.g., when a point's Y position exceeds 10).
3. Use another filter subnode to mark where it should stop (e.g., when a point's Y position is less than 5).
4. Configure blending operations to modify attributes like color or opacity.
5. Enable output flags to write range start/stop indicators for visual debugging.

#### Notes

* The node works best with paths that have a clear beginning and end.
* Blending outside the rolling range can cause unexpected behavior if not carefully configured.
* Use the range index attributes to create more complex effects, such as animating through a sequence of values.
