---
icon: grid-round-2
---

# Pack & Unpack

**Pack and Unpack are legacy serialization tools.** They flatten a cluster's Vtx + Edges into a single point collection for storage or export, and restore them back. That's their only job.

{% hint style="warning" %}
**Don't use Pack/Unpack inside a running graph** to move cluster data between nodes. Packing discards topology metadata that cluster operations rely on. It exists for serialization — saving to disk, passing through data assets, exporting.

To retrieve Vtx/Edge pairs from mixed data sources during execution, use **Find Clusters** instead. It reads cluster metadata directly and outputs properly paired collections without any conversion overhead.
{% endhint %}

### Pack

Combines a cluster's Vtx and Edges into a single packed point collection. Attributes carry over according to filter settings.

| Pin                 | Direction | Description                   |
| ------------------- | --------- | ----------------------------- |
| **Vtx**             | In        | Cluster vertices              |
| **Edges**           | In        | Cluster edges                 |
| **Packed Clusters** | Out       | Single-collection packed data |

### Unpack

Restores separate Vtx and Edges from packed data.

| Pin                 | Direction | Description         |
| ------------------- | --------- | ------------------- |
| **Packed Clusters** | In        | Packed cluster data |
| **Vtx**             | Out       | Restored vertices   |
| **Edges**           | Out       | Restored edges      |

| Setting     | Description                                               |
| ----------- | --------------------------------------------------------- |
| **Flatten** | Trades memory for speed during unpacking. Off by default. |

### When to Use What

| Situation                                                   | Use                                                         |
| ----------------------------------------------------------- | ----------------------------------------------------------- |
| Saving clusters to a PCG Data Asset                         | **Pack** before saving, **Unpack** after loading            |
| Passing cluster data through a single pin                   | **Pack/Unpack** as a workaround, but consider restructuring |
| Retrieving Vtx/Edge pairs from mixed collections at runtime | **Find Clusters**                                           |
| Moving cluster data between nodes in a graph                | Just connect Vtx and Edges pins directly                    |

### In This Section

* Pack Clusters — Full node reference
* Unpack Clusters — Full node reference

### Related

* Find Clusters — The runtime alternative for retrieving cluster pairs
