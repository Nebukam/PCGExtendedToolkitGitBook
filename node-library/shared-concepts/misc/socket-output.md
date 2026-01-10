# Socket Output

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Controls how socket data is output from PCG nodes, including filtering options and attribute assignments.

#### Overview

This configuration block defines how socket information is written to points in your procedural graph. You can filter which sockets to include or exclude based on their name or tag, and specify which attributes should be carried over from the socket data. It also allows you to control whether socket names, tags, categories, and asset paths are written as point attributes.

This is useful when working with skeletal meshes or other assets that have defined sockets, allowing you to sample those sockets and write their properties into your point data for further processing or placement.

{% hint style="info" %}
This configuration appears in nodes like: Asset Staging, Socket Staging, Sample Sockets
{% endhint %}

#### Settings

<details>

<summary><strong>Socket Tag Filters</strong><br><em>Include or exclude sockets based on their tag.</em></summary>

Filters sockets by their associated tag. You can define a list of tags to include or exclude from the output.

</details>

<details>

<summary><strong>Socket Name Filters</strong><br><em>Include or exclude sockets based on their name.</em></summary>

Filters sockets by their name. You can define a list of names to include or exclude from the output.

</details>

<details>

<summary><strong>Write Socket Name</strong><br><em>Enable writing socket names as an attribute.</em></summary>

When enabled, the socket's name is written to a point attribute. The attribute name can be customized using the **Socket Name Attribute Name** setting.

</details>

<details>

<summary><strong>Socket Name Attribute Name</strong><br><em>Name of the attribute where socket names are stored.</em></summary>

Defines the name of the point attribute that will store the socket name. Only active when **Write Socket Name** is enabled.

</details>

<details>

<summary><strong>Write Socket Tag</strong><br><em>Enable writing socket tags as an attribute.</em></summary>

When enabled, the socket's tag is written to a point attribute. The attribute name can be customized using the **Socket Tag Attribute Name** setting.

</details>

<details>

<summary><strong>Socket Tag Attribute Name</strong><br><em>Name of the attribute where socket tags are stored.</em></summary>

Defines the name of the point attribute that will store the socket tag. Only active when **Write Socket Tag** is enabled.

</details>

<details>

<summary><strong>Write Category</strong><br><em>Enable writing socket categories as an attribute.</em></summary>

When enabled, the socket's category is written to a point attribute. The attribute name can be customized using the **Category Attribute Name** setting.

</details>

<details>

<summary><strong>Category Attribute Name</strong><br><em>Name of the attribute where socket categories are stored.</em></summary>

Defines the name of the point attribute that will store the socket category. Only active when **Write Category** is enabled.

</details>

<details>

<summary><strong>Write Asset Path</strong><br><em>Enable writing asset paths as an attribute.</em></summary>

When enabled, the path to the asset containing the socket is written to a point attribute. The attribute name can be customized using the **Asset Path Attribute Name** setting.

</details>

<details>

<summary><strong>Asset Path Attribute Name</strong><br><em>Name of the attribute where asset paths are stored.</em></summary>

Defines the name of the point attribute that will store the asset path. Only active when **Write Asset Path** is enabled.

</details>

<details>

<summary><strong>Transform Scale</strong><br><em>Which scale components from the sampled transform should be applied to the point.</em></summary>

Controls which components of the socket's scale are applied to the output point. This uses a bitmask where each bit represents a component (X, Y, Z).

**Values**:

* **None**: No scaling is applied.
* **X**: Only X-scale is applied.
* **Y**: Only Y-scale is applied.
* **Z**: Only Z-scale is applied.
* **XY**: X and Y scales are applied.
* **XZ**: X and Z scales are applied.
* **YZ**: Y and Z scales are applied.
* **All**: All scale components (X, Y, Z) are applied.

</details>

<details>

<summary><strong>Carry Over Settings</strong><br><em>Meta filter settings for socket points, as they naturally inherit from the original points.</em></summary>

Controls which attributes from the source point are carried over to the output point. This is particularly useful when you want to preserve metadata such as point color or custom data during socket sampling.

</details>

#### Common Use Cases

* **Mesh Socket Sampling**: When sampling sockets from skeletal meshes, you might want to write the socket name and tag as attributes so that downstream nodes can use them for placement or filtering.
* **Asset Metadata Preservation**: If your sockets are associated with specific asset paths, enabling **Write Asset Path** lets you track which assets each socket originated from.
* **Filtering Sockets by Name or Tag**: You can filter out unwanted sockets using the name and tag filters to reduce noise in your output data.

#### Notes

* The settings for writing attributes (socket name, tag, category, asset path) are all conditionally enabled. Only enable those you actually need to avoid unnecessary overhead.
* The **Transform Scale** setting allows fine-grained control over how scale is applied from the socket transform to the output point.
* The **Carry Over Settings** allow you to preserve important metadata from the original points, which can be useful for maintaining context in complex procedural workflows.
