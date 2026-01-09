# Page 1

## Path Processor

### Overview

The Path Processor node processes collections of points as paths, where each collection represents a continuous sequence of points that form a path. It is designed to work with point data organized into collections, making it ideal for creating and manipulating paths from point clouds.

This node allows you to process multiple paths simultaneously and apply operations to them, such as filtering, transformation, or other point-based modifications. It supports both open and closed loop paths, depending on your settings.

{% hint style="info" %}
The node works with collections of points that represent paths. Each collection is processed independently, allowing for batch processing of multiple paths.
{% endhint %}

<details>

<summary>Inputs</summary>

* **Main Input**: Accepts point data organized into collections (paths).
* **Point Filters** (Optional): Filters to apply to the input points before processing.

</details>

<details>

<summary>Outputs</summary>

* **Main Output**: The processed paths, either modified or forwarded based on settings.
* **Invalid Paths** (Optional): Paths with fewer than 2 points are omitted if `bOmitInvalidPathsOutputs` is enabled.

</details>

### Properties Overview

#### Main Settings

| Property                       | Description                                                                                              |
| ------------------------------ | -------------------------------------------------------------------------------------------------------- |
| **Support Closed Loops**       | If enabled, allows processing of closed-loop paths where the last point connects back to the first.      |
| **Omit Invalid Paths Outputs** | If enabled, collections with fewer than 2 points are omitted from the output instead of being processed. |

### Notes

* The node processes each path collection independently.
* Paths with less than two points are considered invalid and can be omitted based on the `bOmitInvalidPathsOutputs` setting.
* This node is ideal for working with point-based paths that need to be transformed, filtered, or otherwise manipulated as a group.
