---
icon: sliders
---

# Search Algorithms

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Defines a search behavior for pathfinding operations in procedural content generation.

#### How It Works

This behavior controls how a search operation behaves during pathfinding. It determines whether the search should stop as soon as it finds a valid solution, or continue exploring all possibilities. When early exit is enabled, the system stops searching once it discovers one acceptable path, which speeds up processing. When disabled, it keeps looking for potentially better paths, which can take more time but may produce higher quality results.

#### Configuration

<details>

<summary><strong>bEarlyExit</strong><br><em>When enabled, the search stops as soon as a valid path is found.</em></summary>

Controls whether the search operation should terminate immediately upon discovering a valid solution. When disabled, the search continues to explore all possible paths and may return multiple solutions or more optimal results.

</details>

#### Usage Example

Use this behavior in a pathfinding graph where performance is critical. For example, if you're generating navigation meshes for a large open world and only need one valid path from point A to B, enabling early exit can significantly reduce processing time without sacrificing the quality of the result.

#### Notes

* Enabling early exit is recommended for real-time or interactive applications.
* Disabling early exit may be useful when you want to explore multiple possible paths or optimize for path quality over speed.
* This setting affects all downstream search operations that consume this subnode.
