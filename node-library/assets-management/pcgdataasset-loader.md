---
icon: circle-m
---

# Staging : Load PCGData

Loads and spawns PCGDataAsset contents from staged points.

**How It Works**

> AI-Generated, needs proofreading

* Loads contents from a PCGDataAsset at specified staged points.
* Filters data to spawn based on Include and Exclude Tags settings; if Filter By Tags is enabled, only data matching the Include Tags and not in Exclude Tags gets spawned.
* Forwards specified target attributes on the spawned point data according to the Targets Forwarding setting.

#### Configuration

<details>

<summary><strong>Custom Output Pins</strong> <code>Array of FPCGPinProperties</code></summary>

Controls custom output pins.

</details>

<details>

<summary><strong>Quiet Unsupported Type Warnings</strong> <code>bool</code></summary>

Quiet warnings about unsupported spatial data types that cannot be transformed

⚡ PCG Overridable

</details>

<details>

<summary><strong>Quiet Invalid Entry Warnings</strong> <code>bool</code></summary>

Quiet warnings about missing or invalid entries

⚡ PCG Overridable

</details>

**Filtering**

<details>

<summary><strong>Filter By Tags</strong> <code>bool</code></summary>

If enabled, only spawn data from the PCGDataAsset that matches these tags. Empty means all data.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Include Tags</strong> <code>TSet</code></summary>

`Tags to include. If empty, all data is included.⚡ PCG Overridable`

</details>

**Tagging & Forwarding**`Source: Source\PCGExCollections\Public\Elements\PCGExPCGDataAssetLoader.h`
