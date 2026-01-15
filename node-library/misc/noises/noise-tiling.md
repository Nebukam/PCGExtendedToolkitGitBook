---
icon: circle-dashed
---

# Noise : Tiling

Tiling noise - seamlessly tileable patterns.

📌 **Subnode** — Connects to **Noise** pins.

**How It Works**

> AI-Generated, needs proofreading

* The Noise : Tiling node generates seamless noise patterns that repeat according to specified periods on the X and Y axes.
* It uses the number of octaves, lacunarity, and persistence settings to control the complexity and variation in the generated noise pattern.
* Period X and Period Y define the dimensions over which the noise pattern repeats seamlessly, ensuring continuity at the edges.

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

<summary><strong>Period X</strong> <code>int32</code></summary>

Tile period on X axis

_Range: min: 1, max: 256_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Period Y</strong> <code>int32</code></summary>

Tile period on Y axis

_Range: min: 1, max: 256_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Period Z</strong> <code>int32</code></summary>

Tile period on Z axis

_Range: min: 1, max: 256_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExNoiseConfigTiling</code></summary>

Controls config.

📦 See: NoiseConfigTiling configuration

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

<summary><strong>Period X</strong> <code>int32</code></summary>

Tile period on X axis

_Range: min: 1, max: 256_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Period Y</strong> <code>int32</code></summary>

Tile period on Y axis

_Range: min: 1, max: 256_

⚡ PCG Overridable

</details>

<details>

<summary><strong>Period Z</strong> <code>int32</code></summary>

Tile period on Z axis

_Range: min: 1, max: 256_

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExNoise3D\Public\Noises\PCGExNoiseTiling.h`
