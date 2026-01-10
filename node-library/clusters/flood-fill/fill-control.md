---
icon: comment-dots
---

# Fill Control

{% hint style="info" %}
This page was generated from the source code. It should properly capture what the node does, but still needs to be proofread by a human.
{% endhint %}

> Defines a fill control behavior for use with flood fill operations.

#### How It Works

This subnode sets up parameters that define how a fill control operates within a flood fill process. It determines whether the control uses seed data or another source, and specifies at which stages of the diffusion (capture, probing, candidate) the control should be active. The configuration is passed to the flood fill node to influence how it processes points during each step.

#### Configuration

<details>

<summary><strong>Support Source</strong><br><em>When enabled, allows specifying the source of attribute data.</em></summary>

When enabled, this setting lets you choose where the control's attribute data is fetched from. If disabled, the control will not use an external attribute source.

</details>

<details>

<summary><strong>Support Steps</strong><br><em>When enabled, allows specifying at which diffusion step the control should be applied.</em></summary>

When enabled, this setting lets you define during which stages of the flood fill process (capture, probing, candidate) the control is active. If disabled, the control applies to all steps.

</details>

<details>

<summary><strong>Source</strong><br><em>Where to fetch the attribute from.</em></summary>

Determines where the attribute data for this control comes from. Options include using seed data or other sources depending on the flood fill implementation.

**Values**:

* **Seed**: Uses the point's seed value.
* **Other**: Fetches from a different source (if supported).

</details>

<details>

<summary><strong>Steps</strong><br><em>At which diffusion step should this control be applied.</em></summary>

Defines at which stages of the flood fill process this control is active. Multiple steps can be selected.

**Values**:

* **Capture**: Applied when a node is captured by a diffusion.
* **Probing**: Applied during the probing phase, iterating through unvisited neighbors.
* **Candidate**: Applied when a node is identified as a candidate for flooding (neighbor of a captured node).

</details>

#### Usage Example

Create a fill control subnode and connect it to a flood fill node. Configure it to apply only during the "Candidate" step and fetch its attribute from the point's seed value. This allows you to define specific behaviors when nodes are identified as candidates for flooding, such as applying different weights or thresholds.

#### Notes

This is an abstract base subnode that must be extended with specific implementations. The configuration defined here is used by flood fill processing nodes to determine how to apply control logic during their execution.
