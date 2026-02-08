---
icon: book-open
description: 'Guide: Understanding the Texture Parameter System'
---

# Texture Parameter System Guide

A comprehensive guide to PCGEx's texture sampling ecosystem: Texture Param, Get Texture Data, and Sample Texture nodes working together.

## Overview

PCGEx provides a flexible system for extracting and sampling textures from materials. This involves three interconnected nodes:

| Node | Purpose |
|------|---------|
| **Texture Param** | Defines which texture parameter to extract and how to sample it |
| **Get Texture Data** | Extracts textures from materials and creates PCG Texture Data |
| **Sample Texture** | Samples texture values at UV coordinates |

## The Problem This Solves

When working with PCG, you often need to sample textures from materials assigned to meshes. The challenge is:
- Materials reference textures through named parameters (e.g., "BaseColor", "Normal")
- You need to extract the actual texture from the material
- Then sample that texture at specific UV coordinates
- Finally write the sampled values to point attributes

The Texture Param system handles all of this through a configurable pipeline.

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        WORKFLOW                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌───────────────┐                                             │
│   │ Texture Param │     ← Defines: "BaseColor" parameter        │
│   │  (Factory)    │       Output to: $TextureId, $Sample        │
│   └──────┬────────┘       Channels: RGBA → Vector4              │
│          │                                                      │
│          ▼                                                      │
│   ┌──────────────────┐                                          │
│   │ Get Texture Data │  ← Input: Points with $MaterialPath      │
│   │                  │    Extracts texture from material        │
│   │                  │    Writes $TextureId to points           │
│   │                  │    Outputs: PCG Texture Data             │
│   └──────┬───────────┘                                          │
│          │                                                      │
│          ▼                                                      │
│   ┌──────────────────┐                                          │
│   │  Sample Texture  │  ← Input: Points with $UVCoords          │
│   │                  │    Input: Texture Data + Texture Params  │
│   │                  │    Samples at UV, writes $Sample         │
│   └──────────────────┘                                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Node Details

### Texture Param

This factory node defines **how** to extract and sample a texture parameter:

```
Configuration:
├─ Material Parameter Name: "BaseColor"     ← Name in material
├─ Texture ID Attribute: "TextureId"        ← Written by Get Texture Data
├─ Sample Attribute Name: "Sample"          ← Written by Sample Texture
├─ Output Type: Auto/Vector4/Vector/Double  ← Attribute type
├─ Sampled Channels: RGBA bitmask           ← Which channels
└─ Scale: 1.0                               ← Multiply sampled values
```

**Key insight**: Texture Param doesn't do any work itself — it's a configuration that other nodes use.

#### Channel Selection

The `Sampled Channels` bitmask determines which texture channels are read:

| Selection | Output Type (Auto) | Example Use |
|-----------|-------------------|-------------|
| R | Double | Height maps, masks |
| RG | Vector2 | Flow maps, 2D offsets |
| RGB | Vector | Color, normals |
| RGBA | Vector4 | Full color with alpha |

#### Output Type Behavior

When `Output Type = Auto`, the type is determined by channel count:
- 1 channel → Double
- 2 channels → Vector2
- 3 channels → Vector
- 4 channels → Vector4

You can force a specific type (e.g., Vector4 even with RGB selected), and extra components will be zero.

### Get Texture Data

This node bridges materials to textures:

#### Input Modes

**Material Path Mode** (default):
```
Points with $AssetPath containing material paths
    ↓
Texture Params define which parameters to extract
    ↓
Outputs:
  - Points with $TextureId attributes (one per Texture Param)
  - PCG Texture Data objects (one per unique texture)
```

**Texture Path Mode**:
```
Points with $AssetPath containing direct texture paths
    ↓
No Texture Params needed
    ↓
Outputs:
  - PCG Texture Data objects
```

#### How Texture Lookup Works

Get Texture Data creates a lookup system using tags:

1. Each texture is loaded and wrapped in `UPCGTextureData`
2. The texture's path becomes a lookup key
3. Tags are added in format `TEX:/Game/Path/To/Texture`
4. Points get a `$TextureId` attribute with the texture path

This enables Sample Texture to match points to their textures.

### Sample Texture

This node performs the actual texture sampling:

#### Required Inputs

1. **Points** with:
   - UV coordinates (default: `$UVCoords` as Vector2D)
   - Texture ID attributes (written by Get Texture Data)

2. **Texture Data** from Get Texture Data

3. **Texture Params** defining sampling configuration

#### Sampling Process

For each point:
1. Read UV coordinates from attribute
2. For each Texture Param:
   - Get texture ID from point attribute
   - Look up matching PCG Texture Data
   - Sample texture at UV coordinates
   - Apply channel selection and scale
   - Write to sample attribute

## Complete Example

### Scenario: Sample terrain color from landscape material

**Step 1: Create Texture Param**
```
Material Parameter Name: "BaseColor"
Texture ID Attribute: "TerrainTexId"
Sample Attribute: "TerrainColor"
Output Type: Vector
Sampled Channels: RGB
```

**Step 2: Get Texture Data**
```
Source Type: Material Path
Source Attribute: $LandscapeMaterial
Output Texture IDs: ✓

Input: Points with $LandscapeMaterial = "/Game/Materials/M_Terrain"
Output:
  - Points with $TerrainTexId = "/Game/Textures/T_Terrain_BC"
  - Texture Data for T_Terrain_BC
```

**Step 3: Sample Texture**
```
UV Source: $UV

Input: Points with $UV and $TerrainTexId
Output: Points with $TerrainColor = (0.3, 0.5, 0.2)
```

## Multiple Texture Parameters

You can use multiple Texture Params simultaneously:

```
┌────────────────────┐
│  Texture Param 1   │ → "BaseColor" → $ColorTexId, $Color
├────────────────────┤
│  Texture Param 2   │ → "Normal" → $NormalTexId, $Normal
├────────────────────┤
│  Texture Param 3   │ → "Roughness" → $RoughTexId, $Rough
└────────────────────┘
         │
         ▼
┌────────────────────┐
│  Get Texture Data  │ → Extracts all three textures
│                    │ → Writes all three ID attributes
└────────────────────┘
         │
         ▼
┌────────────────────┐
│  Sample Texture    │ → Samples all three
│                    │ → Writes $Color, $Normal, $Rough
└────────────────────┘
```

## Texture Arrays (Texture2DArray)

The system supports texture arrays through the Texture Index settings:

```
Texture Param:
├─ Texture Index Input: Constant or Attribute
├─ Texture Index: 2  (sample slice 2 of array)
└─ Texture Index Attribute: "SliceIndex" (per-point index)
```

Texture paths can also encode array indices:
```
/Game/Textures/T_Array:3  → Texture array, slice 3
```

## Common Patterns

### Pattern 1: Direct Texture Sampling (No Material)

When you have texture paths directly:

```
Points with $TexturePath
        ↓
Get Texture Data (Texture Path mode)
        ↓
    Texture Data
        ↓
Sample Texture (with Texture Params for channel config)
```

### Pattern 2: Material-Based Sampling

When extracting from materials:

```
Texture Params ─────────────────┐
        ↓                       │
Points with $MaterialPath       │
        ↓                       │
Get Texture Data ───────────────┤
        ↓                       │
Points with $TexIds + TexData   │
        ↓                       │
Sample Texture ◄────────────────┘
```

### Pattern 3: Sampling at Hit Locations

Combined with surface sampling:

```
Points
    ↓
Sample : Line Trace (get UV coords from hit)
    ↓
Points with $UVCoords, $MaterialPath
    ↓
Get Texture Data
    ↓
Sample Texture
    ↓
Points with sampled texture values at hit locations
```

## Troubleshooting

| Issue | Cause | Solution |
|-------|-------|----------|
| No texture extracted | Material parameter name mismatch | Check exact parameter name in material |
| Sampling returns zero | Texture ID doesn't match | Verify $TextureId matches texture data tags |
| Wrong channels | Channel selection mismatch | Check Sampled Channels bitmask |
| Missing UV data | UV attribute not found | Ensure $UVCoords exists as Vector2D |

## Technical Notes

### Texture Data Tags

Get Texture Data tags each texture output with:
- `TEX:/Game/Path/To/Texture` format
- Direct texture path as alternate key

Sample Texture uses these tags to match points to textures via the FLookup system.

### Thread Safety

- Get Texture Data must run on the main thread (texture loading)
- Sample Texture can run multi-threaded after textures are loaded

### Memory Considerations

- PCG Texture Data objects are managed by the PCG context
- Large textures consume significant memory during sampling
- Consider texture resolution when working with many unique textures

---

![Static Badge](https://img.shields.io/badge/Module-PCGExElementsSampling-473F69)

**Related Nodes**:
- [Texture Param](Core/PCGExTexParamFactoryProvider.md)
- [Get Texture Data](Elements/PCGExGetTextureData.md)
- [Sample : Texture](Elements/PCGExSampleTexture.md)
