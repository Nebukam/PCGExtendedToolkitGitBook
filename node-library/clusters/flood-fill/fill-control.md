---
icon: comment-dots
---

# Fill Control

Creates a single Fill Control node, to be used with flood fill nodes.

📌 **Subnode** — Connects to **Fill Controls** pins.

**How It Works**

> AI-Generated, needs proofreading

* Fetches an attribute from the specified source to define the fill control parameters.
* Applies the defined fill control at the diffusion step indicated by the "Steps" setting.
* Outputs a single Fill Control node designed for integration with flood fill nodes.

#### Configuration

<details>

<summary><strong>Source</strong> <code>PCGExFloodFillSettingSource</code></summary>

Where to fetch the attribute from. Note that this may not be supported by all controls..

</details>

<details>

<summary><strong>Steps</strong> <code>uint8</code></summary>

At which diffusion step should this control be applied. Note that this may not be supported by all controls.

</details>

***

Source: `Source\PCGExElementsClusters\Public\Elements\FloodFill\FillControls\PCGExFillControlsFactoryProvider.h`
