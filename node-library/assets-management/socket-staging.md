---
description: 'In editor :: PCGEx | Socket Staging'
icon: circle
---

# Socket Staging

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Stages points based on sockets defined in an Asset Staging Collection Map.

#### How It Works

The Socket Staging node reads an Asset Staging Collection Map that contains asset entries with socket data. For each input point, it checks if that point corresponds to an asset entry in the collection map. If so, it retrieves all sockets defined for that asset and generates new points at each socket's location.

Each generated point inherits attributes from the source point but is positioned according to the socket's transform. The node supports filtering via a point filter subnode to determine which input points are used for staging. It also allows customization of how the output points are structured through the Output Socket Details configuration, including whether to include socket names and other metadata.

The processing is batched and optimized for performance across multiple points and sockets.

#### Configuration

<details>

<summary><strong>OutputSocketDetails</strong><br><em>Controls how socket data is output as point attributes.</em></summary>

Defines how the socket information (like name, transform) is written to the output points.

**Values**:

* **None**: No additional socket data is added.
* **Name Only**: Adds only the socket name as an attribute.
* **Full**: Adds full socket data including transform and name.

</details>

#### Usage Example

1. Create an Asset Staging Collection with assets that have sockets defined (e.g., a building asset with attachment points for windows or doors).
2. Connect this collection to the Socket Staging node via the `Map` input.
3. Optionally, use a point filter subnode to control which source points are used for staging.
4. Configure OutputSocketDetails to include socket names or full data in the output points.
5. The result will be a set of points placed at each socket location from the assets in your collection.

#### Notes

* Ensure that your Asset Staging Collection Map is properly configured with sockets before using this node.
* The point filter subnode allows you to selectively stage only certain points, which can improve performance when working with large datasets.
* Socket data includes position and orientation, so output points will be correctly aligned with the asset's socket transforms.
