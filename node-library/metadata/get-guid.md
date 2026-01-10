---
description: 'In editor :: PCGEx | Get GUID'
icon: circle
---

# Get GUID

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Retrieves a unique identifier (GUID) for a specific point in a point cloud, based on the point's index and configuration settings.

#### How It Works

This node fetches a GUID for a single point by:

1. Taking the specified point index
2. Applying the configured safety mode if the index is out of bounds (e.g., clamping or wrapping around)
3. Using the provided configuration to determine how the GUID should be generated and formatted
4. Returning the resulting GUID for that specific point

The GUID generation process uses a combination of point properties like position, seed, index, and grid data based on the settings in the Config subnode. This ensures deterministic results when given the same inputs.

#### Configuration

<details>

<summary><strong>Index</strong><br><em>Point Index</em></summary>

Specifies which point's GUID to retrieve. For example, setting this to `5` will return the GUID for the 6th point in the input data (0-based indexing).

</details>

<details>

<summary><strong>IndexSafety</strong><br><em>How to handle out-of-bounds indices.</em></summary>

Controls what happens when the specified index is outside the valid range of points.

* **Ignore**: Invalid indices are skipped.
* **Tile**: Wraps around to valid indices (e.g., index 7 with 5 points becomes index 2).
* **Clamp**: Clamps invalid indices to the nearest valid value (e.g., index -1 becomes 0, index 7 becomes 4).
* **Yoyo**: Mirrors indices back and forth (e.g., index 6 with 5 points becomes index 3).

</details>

<details>

<summary><strong>Config</strong><br><em>Config</em></summary>

Defines how the GUID is generated and formatted. This includes:

* Uniqueness flags to determine which point properties contribute to the GUID (Index, Position, Seed, Grid)
* Output type (Integer or String)
* Format style (Digits, Digits (Lowercase), Digits (Hyphens), etc.)

</details>

#### Usage Example

1. Create a point distribution using a Scatter node.
2. Connect it to a Get GUID node.
3. Set the Index to `0` to retrieve the GUID of the first point.
4. Configure the Config subnode to use Position and Seed for uniqueness.
5. The output will contain the original points with an additional attribute holding the computed GUID for the first point.

#### Notes

* This node is deterministic: given the same input data and configuration, it will always return the same GUID for a given index.
* If you're using multiple indices or need to compute GUIDs for all points, consider using the full GetGUID node instead.
* The IndexSafety setting helps prevent errors in cases where your point count might change dynamically.
