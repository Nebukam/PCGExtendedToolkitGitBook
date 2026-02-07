---
icon: grid-round-2
---

# Neighbors

**Cluster neighbor sampling sub-nodes. Aggregate attribute values from adjacent Vtx through cluster connectivity.**

These are sub-nodes consumed by the **Sample Neighbors** node.

| Sub-Node           | Description                                                                                              |
| ------------------ | -------------------------------------------------------------------------------------------------------- |
| **Vtx Blend**      | Blend neighbor attributes using connected blend operation sub-nodes.                                     |
| **Vtx Attributes** | Sample specific attributes with a configurable blend mode.                                               |
| **Vtx Properties** | Sample point properties (density, color, position, rotation, scale, etc.) with per-property blend modes. |
| **Test Neighbors** | Count neighbors passing connected filters. Outputs counts and weights.                                   |
