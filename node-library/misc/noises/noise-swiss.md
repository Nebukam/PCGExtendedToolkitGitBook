---
icon: circle-dashed
---

# Noise : Swiss

Swiss noise - terrain with natural erosion patterns.

📌 **Subnode** — Connects to **Noise** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node generates Swiss noise, which creates terrain patterns that simulate natural erosion.
* It uses settings such as Octaves (an integer), Lacunarity (a double precision floating point number), and Persistence (another double) to control the noise generation process.
* Erosion Strength determines the extent to which derivatives influence the erosion effect on the generated terrain, with a value of 0 indicating standard fBm behavior without additional erosion effects.
* The Warp Factor setting applies a warping effect based on derivatives, altering the terrain's appearance according to specified parameters.

#### Configuration

<details>

<summary><strong>Octaves</strong> <code>int32</code></summary>

Controls octaves.

_Range: min: 1, max: 16_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Lacunarity</strong> <code>double</code></summary>

Controls lacunarity.

_Range: min: 1.0, max: 4.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Persistence</strong> <code>double</code></summary>

Controls persistence.

_Range: min: 0.0, max: 1.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Erosion Strength</strong> <code>double</code></summary>

How much derivatives affect erosion (0 = standard fBm)

_Range: min: 0.0, max: 2.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Warp Factor</strong> <code>double</code></summary>

Warp factor for derivative warping

_Range: min: 0.0, max: 1.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExNoiseConfigSwiss</code></summary>

Controls config.

📦 See: NoiseConfigSwiss configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Octaves</strong> <code>int32</code></summary>

Controls octaves.

_Range: min: 1, max: 16_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Lacunarity</strong> <code>double</code></summary>

Controls lacunarity.

_Range: min: 1.0, max: 4.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Persistence</strong> <code>double</code></summary>

Controls persistence.

_Range: min: 0.0, max: 1.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Erosion Strength</strong> <code>double</code></summary>

How much derivatives affect erosion (0 = standard fBm)

_Range: min: 0.0, max: 2.0_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Warp Factor</strong> <code>double</code></summary>

Warp factor for derivative warping

_Range: min: 0.0, max: 1.0_

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExNoise3D\Public\Noises\PCGExNoiseSwiss.h`
