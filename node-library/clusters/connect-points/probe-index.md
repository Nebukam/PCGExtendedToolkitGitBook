---
icon: circle-dashed
---

# Probe : Index

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Connects to a specific index, ignoring search radius.

#### How It Works

This subnode creates connections between points based on a fixed index rather than their spatial proximity. For each point in the data set, it determines which other point to connect to using the configured index value and mode settings.

The process works as follows:

1. It reads an index value — either a constant number or a value from a point attribute.
2. Depending on the selected **Mode**, it interprets this index:
   * In **Target** mode, it connects directly to the point at that index.
   * In **One-way Offset** mode, it adds the index value to the current point’s position to find the target.
   * In **Two-way Offset** mode, it creates two connections: one using the positive offset and another using the negative offset from the current point's index.
3. If the resulting index is outside the valid range of points, it applies the chosen **IndexSafety** method:
   * **Ignore**: No connection is made for invalid indices.
   * **Tile**: Wraps the index around using modulo arithmetic.
   * **Clamp**: Uses the first or last point in the data set.
   * **Yoyo**: Bounces the index back and forth like a ball.

This approach allows you to define predictable, structured connections without needing to consider spatial relationships between points.

#### Configuration

<details>

<summary><strong>Mode</strong><br><em>How the index value is interpreted.</em></summary>

Controls how the target index is used to determine which point to connect to.

**Values**:

* **Target**: The index is used directly.
* **One-way Offset**: The index is added to the current point's index.
* **Two-way Offset**: The index is used as both a positive and negative offset from the current point's index.

</details>

<details>

<summary><strong>IndexSafety</strong><br><em>How out-of-bounds indices are handled.</em></summary>

Determines what happens when a calculated index exceeds the valid range of point indices.

**Values**:

* **Ignore**: Invalid indices result in no connection.
* **Tile**: Wraps the index around using modulo arithmetic.
* **Clamp**: Clamps the index to the first or last valid index.
* **Yoyo**: Mirrors the index back and forth like a bouncing ball.

</details>

<details>

<summary><strong>IndexInput</strong><br><em>Whether the index is constant or read from an attribute.</em></summary>

Controls whether the target index is fixed or varies per point.

**Values**:

* **Constant**: Uses the value in **IndexConstant**.
* **Attribute**: Reads the index from a point attribute.

</details>

<details>

<summary><strong>Index (Attr)</strong><br><em>Point attribute to read the index from.</em></summary>

Only visible when **IndexInput** is set to **Attribute**. Specifies which attribute to use for the index value.

</details>

<details>

<summary><strong>Index</strong><br><em>Fixed index value to connect to.</em></summary>

Only visible when **IndexInput** is set to **Constant**. Defines the fixed index used for connection targets.

</details>

#### Usage Example

In a graph where you want to form a loop by connecting each point to the next one in sequence, use **Mode** = **One-way Offset** with an **Index** of 1. This creates edges from point 0→1, 1→2, 2→3, etc.

Alternatively, for a bidirectional chain (e.g., connecting each point to both its predecessor and successor), set **Mode** = **Two-way Offset** with an **Index** of 1. This will create both forward and backward edges from each point.

#### Notes

* The index is zero-based and must be within the valid range of points.
* Using **Two-way Offset** doubles the number of connections for each point, which can significantly increase output edge count.
* Out-of-bounds handling ensures robustness when indices might exceed data bounds.
