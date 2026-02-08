---
icon: circle
---

# Sample : Inside Path

Sample the points inside the paths.

### Overview

This node samples points based on their spatial relationship to path polygons. It determines whether points lie inside or outside closed paths (using 2D projection) and can compute distances to path edges. This is useful for filtering points by containment, computing signed distances, or identifying points within specific regions defined by paths.

### How It Works

1. **Project to 2D**: Projects points and paths using the specified projection.
2. **Test Containment**: Determines if each point lies inside closed path polygons.
3. **Compute Distance**: Calculates distance to nearest path edge.
4. **Apply Weights**: Weighs samples based on distance curve.
5. **Output Results**: Writes containment status and distance attributes.

**Usage Notes**

* **Closed Paths**: Inside testing only works with closed loop paths.
* **2D Projection**: Uses configurable projection for containment testing.
* **Height Check**: Optional vertical tolerance for 3D containment approximation.
* **Distance Modes**: Can sample closest, farthest, or all paths within range.

### Behavior

```
Inside Path Sampling:

Closed path (polygon):
    ┌─────────────────┐
    │  P1    P2       │
    │        ●────────┼──P3 (outside)
    │  ●     ●        │
    └─────────────────┘

Results:
   P1: Inside = true, Distance = 50
   P2: Inside = true, Distance = 20
   P3: Inside = false, Distance = 30

With bOnlySampleWhenInside = true:
   Only P1 and P2 are sampled
```

### Inputs

| Pin       | Type   | Description                       |
| --------- | ------ | --------------------------------- |
| **In**    | Points | Points to test for containment    |
| **Paths** | Points | Path collections defining regions |

### Settings

#### Projection

<details>

<summary><strong>Data Matching</strong> <code>FPCGExMatchingDetails</code></summary>

Controls how point collections are matched to paths for sampling.

</details>

<details>

<summary><strong>Projection Details</strong> <code>FPCGExGeo2DProjectionDetails</code></summary>

How points and paths are projected for 2D containment testing.

//→ See TODO FPCGExGeo2DProjectionDetails

</details>

#### Sampling

<details>

<summary><strong>Process Inputs</strong> <code>EPCGExPathSamplingIncludeMode</code></summary>

Which paths to include in sampling.

| Option                | Description              |
| --------------------- | ------------------------ |
| **All**               | Process all paths        |
| **Closed Loops Only** | Only sample closed paths |
| **Open Lines Only**   | Only sample open paths   |

Default: `All`

⚡ PCG Overridable

</details>

<details>

<summary><strong>Sample Method</strong> <code>EPCGExSampleMethod</code></summary>

How to select which paths to sample.

| Option              | Description                      |
| ------------------- | -------------------------------- |
| **Within Range**    | Sample all paths within range    |
| **Closest Target**  | Sample only the closest path     |
| **Farthest Target** | Sample only the farthest path    |
| **Best Candidate**  | Sample based on sorting criteria |

Default: `Within Range`

⚡ PCG Overridable

</details>

<details>

<summary><strong>Always Sample When Inside</strong> <code>bool</code></summary>

When enabled, always samples points inside paths even if beyond max range.

Default: `true`

⚡ PCG Overridable

</details>

<details>

<summary><strong>Only Sample When Inside</strong> <code>bool</code></summary>

When enabled, only samples paths if the point lies inside.

Default: `true`

⚡ PCG Overridable

</details>

<details>

<summary><strong>Inclusion Offset</strong> <code>double</code></summary>

Inset offset applied to path bounds for inclusion testing.

Default: `0`

⚡ PCG Overridable

</details>

<details>

<summary><strong>Distance Type</strong> <code>EPCGExDistanceType</code></summary>

Method for calculating distances.

| Option        | Description                     |
| ------------- | ------------------------------- |
| **Euclidean** | Standard straight-line distance |
| **Manhattan** | Sum of axis-aligned distances   |
| **Chebyshev** | Maximum of axis distances       |

Default: `Euclidean`

</details>

<details>

<summary><strong>Range Min</strong> <code>double</code></summary>

Minimum distance for sampling. Can be constant or from attribute.

Default: `0`

⚡ PCG Overridable

</details>

<details>

<summary><strong>Range Max</strong> <code>double</code></summary>

Maximum distance for sampling. Can be constant or from attribute.

Default: `300`

⚡ PCG Overridable

</details>

<details>

<summary><strong>Height Inclusion</strong> <code>double</code></summary>

Vertical tolerance for 3D containment (0 = infinite). Points outside this height difference are considered outside.

Default: `0`

</details>

#### Weighting

<details>

<summary><strong>Weight Method</strong> <code>EPCGExRangeType</code></summary>

How distance affects weight calculation.

| Option              | Description              |
| ------------------- | ------------------------ |
| **Full Range**      | Use full min-max range   |
| **Effective Range** | Use actual sampled range |

Default: `Full Range`

⚡ PCG Overridable

</details>

<details>

<summary><strong>Weight Over Distance</strong> <code>UCurveFloat</code></summary>

Curve controlling weight falloff based on distance.

⚡ PCG Overridable

</details>

#### Outputs

<details>

<summary><strong>Output Mode</strong> <code>EPCGExSampleInsidePathOutput</code></summary>

Which points to output.

| Option           | Description                             |
| ---------------- | --------------------------------------- |
| **All**          | Output all points                       |
| **Success Only** | Output only successfully sampled points |
| **Split**        | Split into success and failure pins     |

Default: `All`

</details>

<details>

<summary><strong>Write Success</strong> <code>bool</code></summary>

When enabled, writes sampling success to a boolean attribute.

Default: `false`

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Distance</strong> <code>bool</code></summary>

When enabled, writes sampled distance to an attribute.

Default: `false`

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Num Inside</strong> <code>bool</code></summary>

When enabled, writes the count of paths the point lies inside.

Default: `false`

⚡ PCG Overridable

</details>

<details>

<summary><strong>Write Num Samples</strong> <code>bool</code></summary>

When enabled, writes the number of sampled paths.

Default: `false`

⚡ PCG Overridable

</details>

#### Tagging

<details>

<summary><strong>Tag If Has Successes</strong> <code>bool</code></summary>

When enabled, adds a tag if at least one path was successfully sampled.

Default: `false`

</details>

<details>

<summary><strong>Tag If Has No Successes</strong> <code>bool</code></summary>

When enabled, adds a tag if no paths were sampled.

Default: `false`

</details>

### Outputs

| Pin         | Type   | Description                                 |
| ----------- | ------ | ------------------------------------------- |
| **Out**     | Points | Points with sampling results                |
| **Success** | Points | Successfully sampled points (if Split mode) |
| **Failure** | Points | Points that failed sampling (if Split mode) |

***

📦 **Module**: `PCGExElementsSampling` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsSampling/Public/Elements/PCGExSampleInsidePath.h)
