---
icon: list-tree
---

# Attribute to Tag

#### Settings

<details>

<summary><strong>Add Index Tag</strong> <code>bool</code></summary>

Use reference point index to tag output data.

</details>

<details>

<summary><strong>Index Tag Prefix</strong> <code>FString</code></summary>

Prefix added to the reference point index

</details>

<details>

<summary><strong>Prefix With Attribute Name</strong> <code>bool</code></summary>

If enabled, prefix the attribute value with the attribute name

</details>

<details>

<summary><strong>Attributes</strong> <code>Array of FPCGAttributePropertyInputSelector</code></summary>

Attributes which value will be used as tags.

</details>

<details>

<summary><strong>Comma Separated Attribute Selectors</strong> <code>FString</code></summary>

A list of selectors separated by a comma, for easy overrides. Will be appended to the existing array.

⚡ PCG Overridable

</details>

#### Used In

* WaitForPCGData
* FloodFillClusters
* CopyClustersToPoints
* PickClosestClusters
* AttributesToTags
* PathfindingEdges
* PathfindingFindContours
* PathfindingGrowPaths
* _...and 5 more_

***

Defined in: `Source\PCGExCore\Public\Data\Utils\PCGExDataForwardDetails.h`
