---
icon: grid-round-2
---

# Topology

Base processor to output meshes from clusters

**How It Works**

> AI-Generated, needs proofreading

* The Topology node processes clusters to generate and output mesh structures based on specified settings.
* It utilizes the Output Mode setting (PCGExTopologyOutputMode) to determine how the final mesh is generated from the input clusters.
* Projection Details settings are applied during processing, influencing how the mesh is projected or transformed according to these parameters.
* Constraints (PCGExCellConstraintsDetails) and Topology settings further refine the output by applying specific rules and configurations; however, some of these settings may be disregarded depending on the Output Mode selected.
* The node references a Target Actor (AActor), which likely serves as a reference or destination for the generated mesh output.

#### Configuration

<details>

<summary><strong>Output Mode</strong> <code>PCGExTopologyOutputMode</code></summary>

Controls output mode.

**Values:**

* **Legacy**
* **PCG Dynamic Mesh**: Creates a PCG dynamic mesh.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Projection Details</strong> <code>PCGExGeo2DProjectionDetails</code></summary>

Projection settings.

📦 See: Geo2DProjection configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Constraints</strong> <code>PCGExCellConstraintsDetails</code></summary>

Controls constraints.

📦 See: CellConstraints configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Topology</strong> <code>PCGExTopologyDetails</code></summary>

Topology settings. Some settings will be ignored based on selected output mode.

📦 See: Topology configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Target Actor</strong> <code>AActor</code></summary>

Controls target actor.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comma Separated Component Tags</strong> <code>String</code></summary>

Comma separated tags

⚡ PCG Overridable

</details>

<details>

<summary><strong>Post Process Function Names</strong> <code>Array of FName</code></summary>

Specify a list of functions to be called on the target actor after dynamic mesh creation. Functions need to be parameter-less and with "CallInEditor" flag enabled.

</details>

<details>

<summary><strong>Attachment Rules</strong> <code>PCGExAttachmentRules</code></summary>

Controls attachment rules.

</details>

***

Source: `Source\PCGExElementsTopology\Public\Core\PCGExTopologyClustersProcessor.h`
