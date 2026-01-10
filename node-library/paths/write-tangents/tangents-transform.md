---
icon: sliders
---

# Tangents : Transform

{% hint style="warning" %}
This page was generated from the source code. It captures what the node does, but still needs some serious  proofreading.
{% endhint %}

> Defines tangents based on the rotation of point transforms in a path.

#### How It Works

This subnode computes tangent directions for each point in a path by analyzing the orientation of its transform. For every point, it:

1. Reads the rotation of the point's transform
2. Selects a specific axis (Forward, Right, Up, etc.) from that rotation
3. Converts the selected axis into a direction vector
4. Inverts the vector to ensure correct tangent orientation
5. Applies scaling factors to define both arrive and leave tangents

The process is repeated for every point in the path, creating smooth transitions between tangents. The chosen axis determines which direction from the transform becomes the tangent.

#### Configuration

<details>

<summary><strong>Axis</strong><br><em>The axis of the transform to use for computing tangents.</em></summary>

Controls which direction from the transform is used as the tangent.

**Values**:

* **Forward**: Uses the X+ axis (typically forward direction)
* **Backward**: Uses the X- axis (typically backward direction)
* **Right**: Uses the Y+ axis (typically rightward direction)
* **Left**: Uses the Y- axis (typically leftward direction)
* **Up**: Uses the Z+ axis (typically upward direction)
* **Down**: Uses the Z- axis (typically downward direction)

</details>

#### Usage Example

Use this subnode when you want path tangents to match the orientation of objects placed along the path. For example, if you're placing vehicles on a road, you can use "From Transform" with the Forward axis so that each vehicle's tangent points in the direction it's facing.

#### Notes

* The tangent vectors are inverted for proper orientation (e.g., -1 multiplier)
* This subnode works best with paths where transforms represent meaningful orientations
*   Consider using with smoothing operations to avoid sharp transitions between tangents

    <div data-gb-custom-block data-tag="hint" data-style="info" class="hint hint-info"><p>Connects to <strong>Tangents</strong> input pins on path processing nodes.</p></div>
