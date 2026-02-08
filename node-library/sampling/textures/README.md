---
icon: grid-round-2
---

# Textures

**Three-node pipeline for sampling textures through PCG points.**

| Node                 | Description                                                                                               |
| -------------------- | --------------------------------------------------------------------------------------------------------- |
| **Texture Param**    | Define which texture to extract from materials and how to read it. Channel selection, output type, scale. |
| **Get Texture Data** | Load texture data from material or texture paths. Bilinear or point filtering.                            |
| **Sample Texture**   | Sample loaded texture data at UV coordinates from point attributes.                                       |

The pipeline: **Texture Param** defines what to sample, **Get Texture Data** loads it, **Sample Texture** reads values at UV coordinates.
