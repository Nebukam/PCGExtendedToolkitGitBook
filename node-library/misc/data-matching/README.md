---
icon: grid-round-2-plus
---

# Data Matching

### Inputs vs Targets

A handful of nodes have making use of "target" inputs, and will process each input against each targets. **Data matchings lets you cherry pick which target data is a "match" for each input using subnodes.**

<figure><img src="../../../.gitbook/assets/image (5) (1) (1) (1) (1).png" alt=""><figcaption><p>Copy Cluster to Point with Match by Index (Tiling)</p></figcaption></figure>

### How matching works

The goal of data matching is to let you choose which input can be paired with which target(s). There is no default limit to the number of targets that can be matched with a given input — by default (if matching is disabled), **all inputs will be working with every available target.**

Match rules lets you have control over that, and, for example, say:

* Input & target must share a tag.
* Input must have the `MyID:XXX` tag, and _XXX_ must be equal to the target `@Data.Pair` attribute value.
* Input are randomly matched with targets

#### Multiple target data vs Multiple target points

Different nodes have different ways to handle the concept of "targets" : Samplers for example do matching between multiple data vs target _data_; while nodes such as a Copy To Points & Copy Clusters To Points will do matching between multiple data and target _points_.

{% hint style="info" %}
The only major difference is when dealing with target data, using @Data domain attributes is preferred : if you target a per-point attribute and the check operates against the data, **it will default to the value of the first element**.
{% endhint %}

#### Settings

<details>

<summary><strong>Mode</strong> <code>EPCGExMapMatchMode</code></summary>

Whether matching is enabled or not.

</details>

<details>

<summary><strong>Cluster Match Mode</strong> <code>EPCGExClusterComponentTagMatchMode</code></summary>

Which cluster component must match the tags

</details>

<details>

<summary><strong>Split Unmatched</strong> <code>bool</code></summary>

Whether to output unmatched data in a separate pin

</details>

<details>

<summary><strong>├─ Output Unmatched</strong> <code>bool</code></summary>

Controls ├─ output unmatched.

</details>

<details>

<summary><strong>└─ Quiet Unmatched Warning</strong> <code>bool</code></summary>

If enabled, will throw a warning when there is no valid target matches.

</details>

<details>

<summary><strong>Limit Matches</strong> <code>bool</code></summary>

Whether to limit the number of matches or not

</details>

<details>

<summary><strong>Limit Input</strong> <code>EPCGExInputValueType</code></summary>

Type of Match limit

⚡ PCG Overridable

</details>

<details>

<summary><strong>Limit (Attr)</strong> <code>FPCGAttributePropertyInputSelector</code></summary>

Attribute to read Limit value from.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Limit</strong> <code>int32</code></summary>

Constant Limit value.

⚡ PCG Overridable

</details>

#### Used In

* Clipper2Processor
* CopyClustersToPoints
* PathfindingPlotEdges
* BoundsPathIntersection
* CopyToPaths
* SampleInsidePath
* SampleNearestBounds
* SampleNearestPath
* _...and 3 more_

***

Defined in: `Source\PCGExMatching\Public\Details\PCGExMatchingDetails.h`







