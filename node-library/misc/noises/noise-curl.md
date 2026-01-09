---
icon: circle-dashed
---

# Noise : Curl

{% hint style="danger" %}
This documentation has been AI-generated from the source code and may not be 100% accurate.
{% endhint %}

> Creates a divergence-free 3D vector field using curl noise, ideal for fluid simulation, particle movement, or any application requiring incompressible flow fields.

### Overview

This factory generates a specialized type of procedural noise that produces vector outputs where the divergence (∇·F) equals zero. This property makes it perfect for simulating fluid dynamics, vortex patterns, and other phenomena where conservation of mass is important.

{% hint style="info" %}
Connects to **Noise** input pins on nodes like **PCGEx | Noise Sample**, **PCGEx | Vector Field**, or any node that accepts noise factories.
{% endhint %}

### How It Works

Curl noise creates a vector field by computing the curl of a scalar potential field. The resulting field has no sources or sinks, meaning it conserves flow — making it ideal for fluid-like motion where particles don't accumulate or dissipate.

The algorithm uses finite differences to compute derivatives and build the curl vector at each point in space. It supports multi-octave generation with customizable lacunarity and persistence for varied complexity.

### Inputs and Outputs

#### Inputs

* **Noise** (optional): Connect a noise factory to modify the base noise field used by this node.

#### Outputs

* **Noise**: A divergence-free 3D vector field that can be consumed by downstream nodes.

***

### Configuration

#### General

**Octaves**

_Controls how many layers of noise are combined._

Higher values add more detail and complexity. Each octave adds finer-grained variation, but also increases computational cost.

**Values**:

* **1**: Single-layer noise (smoothest)
* **4**: Medium complexity with good detail
* **8**: Highly detailed noise with sharp variations

**Lacunarity**

_Controls the frequency multiplier between octaves._

Each octave is multiplied by this value to increase frequency. Higher values create more rapid changes in the field.

**Values**:

* **2.0**: Standard doubling of frequency per octave
* **3.0**: Faster progression between octaves
* **4.0**: Very high-frequency variation

**Persistence**

_Controls the amplitude multiplier between octaves._

Each octave's amplitude is multiplied by this value. Lower values reduce the contribution of higher-frequency layers.

**Values**:

* **0.5**: Balanced mix of low and high frequencies
* **0.25**: Emphasizes lower frequencies (smoother)
* **0.75**: Emphasizes higher frequencies (more detail)

**Epsilon**

_Epsilon for derivative computation._

Used internally to calculate finite differences when computing the curl. Smaller values give more precise derivatives but may cause instability with very small scales.

**Values**:

* **0.001**: Standard precision
* **0.0001**: Higher precision (slower)
* **0.01**: Lower precision (faster, less accurate)

**Curl Scale**

_Scales the overall magnitude of the curl vector field._

This allows you to control how strong or weak the resulting vector field is. Useful for fine-tuning particle behavior or fluid flow intensity.

**Values**:

* **1.0**: Default scale
* **2.0**: Double the strength
* **0.5**: Half the strength

### Usage Example

Use this factory with a **PCGEx | Noise Sample** node to generate vector field data for particle systems. For example:

1. Place a **Noise : Curl** factory in your graph
2. Connect it to a **PCGEx | Noise Sample** node
3. Set the sample node's input to use the curl noise
4. Use the output vector field to drive particle movement or fluid simulation

This setup creates smooth, divergence-free motion that mimics natural fluid flow patterns.

### Notes

* Curl noise is ideal for creating vortex effects and incompressible flow fields.
* Combine multiple curl noise sources with different weights to create complex vector fields.
* The **Curl Scale** parameter can be animated or driven by metadata to vary field strength dynamically.
* This factory outputs 3D vectors, so it works best when used in 3D space or with nodes that support 3D vector sampling.
