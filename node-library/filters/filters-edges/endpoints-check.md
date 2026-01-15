---
description: 'In editor :: PCGEx | Edge Filter : Endpoints Check'
icon: circle-dashed
---

# Endpoints Check

Uses filters applied to the edge endpoints' in order to determine whether this filter result'.

📌 **Subnode** — Connects to **Filters** pins.

**How It Works**

> AI-Generated, needs proofreading

* The Edge Filter node evaluates edge endpoints based on specified filters defined in the "Config" setting.
* Depending on the selected "Mode", the node checks if the filter results for each endpoint meet the criteria set by "Comparison". For example, if "Mode" is set to "Both" and "Comparison" expects a pass, both endpoints must individually pass their respective filters.
* The "Invert" boolean setting reverses the outcome of the comparison; if enabled, the node inverts whether the filter results are considered passing or failing according to the "Comparison".
* The final output is a determination of whether the edge passes the overall filter check based on the combined evaluation of its endpoints and the settings provided.

#### Configuration

<details>

<summary><strong>Mode</strong> <code>PCGExEdgeEndpointsCheckMode</code></summary>

Mode

**Values:**

* **None**: None of the endpoint must has the expected result.
* **Both**: Both endpoints must have the expected result.
* **Any Pass**: At least one endpoint must have the expected result.
* **Start**: Start must have the expected result.
* **End**: End must have the expected result.
* **SeeSaw**: One must pass and the other must fail

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExFilterResult</code></summary>

The expected result of the filter, in regard to the selected mode. i.e, if mode = "Both" and Expects = "Pass", both edge' endpoints must pass the filters for the check to pass, otherwise it fails.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Controls invert.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Config</strong> <code>PCGExEdgeEndpointsCheckFilterConfig</code></summary>

Test Config.

📦 See: EdgeEndpointsCheckFilter configuration

⚡ PCG Overridable

</details>

<details>

<summary><strong>Mode</strong> <code>PCGExEdgeEndpointsCheckMode</code></summary>

Mode

**Values:**

* **None**: None of the endpoint must has the expected result.
* **Both**: Both endpoints must have the expected result.
* **Any Pass**: At least one endpoint must have the expected result.
* **Start**: Start must have the expected result.
* **End**: End must have the expected result.
* **SeeSaw**: One must pass and the other must fail

⚡ PCG Overridable

</details>

<details>

<summary><strong>Comparison</strong> <code>PCGExFilterResult</code></summary>

The expected result of the filter, in regard to the selected mode. i.e, if mode = "Both" and Expects = "Pass", both edge' endpoints must pass the filters for the check to pass, otherwise it fails.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Controls invert.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExElementsClusters\Public\Filters\Edges\PCGExEdgeEndpointsCheckFilter.h`
