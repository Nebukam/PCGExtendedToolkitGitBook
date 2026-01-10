---
icon: circle-dashed
---

# Noise : Open Simplex 2

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Generates high-quality, patent-free 3D gradient noise using the OpenSimplex2 algorithm.

#### How It Works

The OpenSimplex2 algorithm creates smooth, natural-looking noise by:

1. Taking the input 3D position and transforming it into a specialized space for efficient computation
2. Finding the closest grid points in this transformed space
3. Calculating contributions from gradient vectors at those grid points
4. Blending these contributions using a smooth interpolation method
5. Layering multiple noise samples with different frequencies and amplitudes to build complex patterns

The algorithm uses 24 precomputed gradient vectors arranged on the edges of a rhombic dodecahedron, which ensures consistent visual quality in all directions. Each additional layer (octave) adds finer detail by increasing frequency and reducing amplitude according to the lacunarity and persistence settings.

#### Configuration

<details>

<summary><strong>Octaves</strong><br><em>Number of noise layers to combine.</em></summary>

Controls how many times the noise is sampled at different frequencies and amplitudes. Higher values create more detailed, complex patterns.

**Values:**

* **1 to 16**: Number of noise octaves (default: 1)

</details>

<details>

<summary><strong>Lacunarity</strong><br><em>Frequency multiplier between octaves.</em></summary>

Determines how much the frequency increases with each octave. Higher values create more fine-grained detail.

**Values:**

* **1.0 to 4.0**: Frequency multiplier (default: 2.0)

</details>

<details>

<summary><strong>Persistence</strong><br><em>Amplitude multiplier between octaves.</em></summary>

Controls how much each octave contributes to the final result. Lower values make higher octaves less influential.

**Values:**

* **0.0 to 1.0**: Amplitude multiplier (default: 0.5)

</details>

#### Usage Example

Use this subnode in a graph where you want to add natural-looking variation to point positions:

1. Place the Noise : OpenSimplex2 subnode in your graph
2. Connect it to a "Noise" input pin on a node like "Point Noise" or "Scalar Noise"
3. Adjust Octaves to 3-5 for smooth, organic variation
4. Set Lacunarity to around 2.0 and Persistence to 0.5 for balanced detail
5. Use the output noise values to displace points or modulate scalar attributes

#### Notes

* OpenSimplex2 is patent-free and suitable for commercial use
* Compared to classic Simplex noise, it provides better visual isotropy (directional consistency)
* Higher octave counts increase computational cost but improve detail resolution
* The noise field is deterministic - the same input position always produces the same output value
