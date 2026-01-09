---
icon: circle-dashed
---

# Noise : Value

{% hint style="warning" %}
## AI-generated page - To be reviewed. 
While not 100% accurante, it should properly capture what it does. It stills needs to be reviewed and proofread by a human.
{% endhint %}

> Creates value noise, a fast procedural noise pattern that interpolates random values at grid points.

### Overview

Value noise generates smooth, interpolated random values across 3D space by sampling random values at grid points and interpolating between them. It's faster than gradient noise but produces a more "blocky" or "chunky" appearance.

This factory creates data that can be connected to Noise pins on other nodes for value sampling. It's commonly used for terrain generation, displacement effects, texture variation, and procedural pattern creation.

{% hint style="info" %}
Connects to **Noise** input pins on nodes like **PCGEx | Noise Sample**, **PCGEx | Noise Blend**, or any node that accepts noise data.
{% endhint %}

### How It Works

Value noise works by:

1. Placing random values at each point in a 3D grid
2. Interpolating between these values to create smooth transitions
3. Using trilinear interpolation for smooth gradients between grid points
4. Optionally combining multiple layers (octaves) for more complex patterns

The result is a smooth, continuous noise field that varies gradually across space.

### Configuration

***

#### General

**Octaves**

_Controls how many layers of noise are combined._

Each octave adds finer detail to the pattern. Higher values create more complex, detailed noise but require more computation.

* **1**: Single layer (smoothest)
* **4**: Four layers (more detailed)
* **8**: Eight layers (very detailed)

**Lacunarity**

_Controls the frequency multiplier between octaves._

Higher values increase the frequency of each octave, creating finer details. Typical values range from 1.0 to 4.0.

* **2.0**: Standard frequency progression
* **3.0**: Faster frequency increase

**Persistence**

_Controls the amplitude multiplier between octaves._

This determines how much each octave contributes to the final result. Lower values make higher octaves less influential.

* **0.5**: Balanced contribution from all octaves
* **0.25**: Higher octaves contribute less

### Usage Example

Use this factory to create terrain height variation:

1. Connect a **Noise : Value** factory to a **PCGEx | Noise Sample** node
2. Set Octaves to 4 for detailed terrain features
3. Set Lacunarity to 2.0 and Persistence to 0.5 for natural-looking variation
4. Use the output to drive point elevation in a terrain generation setup

### Notes

* Value noise is faster than gradient noise but produces more blocky results
* Good for creating organic-looking patterns with less computational cost
* Can be combined with other noise types using **Noise Blend** nodes
* Lower octaves create large-scale features, higher octaves add fine details
* Use persistence < 0.5 to prevent overly sharp transitions in multi-octave noise

### Inputs and Outputs

#### Inputs

* **Source**: Optional input for transforming the noise pattern
* **Seed**: Random seed value for deterministic noise generation

#### Outputs

* **Noise**: The generated noise data that can be used by other nodes
* **Transformed Noise**: The noise data after applying any source transformation
