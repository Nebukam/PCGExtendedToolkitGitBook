---
icon: circle-dashed
---

# Noise : Curl

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Generates divergence-free 3D vector noise suitable for fluid simulations and particle systems.

#### How It Works

Curl noise creates a special kind of 3D vector field that has no sources or sinks. This means the flow looks like swirling patterns — like whirlpools or vortexes — where the amount of material going in equals the amount coming out. The result is a smooth, continuous motion that's perfect for simulating realistic fluid behavior.

This subnode works by taking a scalar noise field and computing its gradient (a mathematical operation that shows how quickly values change in different directions). Then it calculates the curl of that gradient to produce a vector field that is guaranteed to be divergence-free. This ensures that the movement looks natural and physically accurate, especially when used in simulations where mass conservation is important.

#### Configuration

<details>

<summary><strong>Octaves</strong><br><em>Number of noise layers to combine.</em></summary>

Controls how many layers of noise are combined. Higher values create more detailed and complex patterns.

**Values**:

* **1**: Single layer noise
* **8**: Maximum octaves

</details>

<details>

<summary><strong>Lacunarity</strong><br><em>Frequency multiplier between octaves.</em></summary>

Determines how much the frequency increases with each octave. Higher values create more intricate details.

**Values**:

* **1.0**: Minimal frequency increase
* **4.0**: Maximum frequency increase

</details>

<details>

<summary><strong>Persistence</strong><br><em>Amplitude multiplier between octaves.</em></summary>

Controls how much each octave contributes to the final result. Lower values make higher octaves less influential.

**Values**:

* **0.0**: No contribution from higher octaves
* **1.0**: Full amplitude for all octaves

</details>

<details>

<summary><strong>Epsilon</strong><br><em>Epsilon for derivative computation.</em></summary>

Used in numerical differentiation to compute gradients. Smaller values increase accuracy but may cause instability.

**Values**:

* **0.0001**: Very small epsilon
* **0.1**: Larger epsilon

</details>

<details>

<summary><strong>CurlScale</strong><br><em>Scale the curl magnitude.</em></summary>

Multiplies the final curl vector to control its strength or intensity.

**Values**:

* **0.1**: Very weak curl
* **10.0**: Very strong curl

</details>

#### Usage Example

Use this subnode in a fluid simulation graph where you need a divergence-free velocity field. For example, connect it to a particle system that simulates smoke or water flow, ensuring the particles move in realistic swirling patterns without creating or destroying mass.

#### Notes

* Curl noise is computationally more expensive than regular noise due to gradient calculations.
* The output vector field is guaranteed to be divergence-free, making it perfect for physical simulations.
* Adjusting `CurlScale` allows you to fine-tune the intensity of the swirling motion.
