---
icon: sliders
---

# None

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Defines a blending behavior that performs no interpolation or combination of point data.

#### How It Works

This subnode defines a blending behavior that performs no actual blending operation. When used in a path processing workflow, it passes through the original point data without applying any interpolation or combination logic.

* It does not compute averages, weighted blends, or any form of data mixing
* It preserves each point's original attributes exactly as they are
* It serves as a "no-op" for blending operations, meaning no transformation is applied to the data

This behavior is particularly useful when you want to maintain distinct properties along a path without introducing blended values. For example, if you're creating a path with specific color or scale values at each point, using this subnode ensures those values remain unchanged during processing.

#### Configuration

No configuration options are available for this subnode. It is a simple pass-through operation with no parameters.

#### Usage Example

Use this subnode when you're creating paths where each point should retain its original properties, such as:

* Creating a path with distinct color values at each point
* Maintaining unique scale or density settings along a route
* Preserving specific metadata without blending between points

#### Notes

* This subnode is ideal for cases where blending would introduce unwanted artifacts or loss of data integrity
* It can be used as a fallback when you want to disable blending behavior entirely
* When connected to a path processing node, it ensures that no interpolation or combination occurs between source and target points
