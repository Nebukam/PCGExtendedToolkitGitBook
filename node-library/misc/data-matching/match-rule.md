---
icon: comment-dots
---

# Match Rule

Creates a single match rule node, to be used with nodes that support data matching.

📌 **Subnode** — Connects to **Match Rules** pins.

**How It Works**

> AI-Generated, needs proofreading

* The node generates a match rule based on specified parameters for integration with other data matching nodes.
* It utilizes the "Strictness" setting to define how closely the match criteria must be met for a successful match.
* The "Invert" boolean parameter determines whether to invert the logic of the match, effectively changing positive matches to negative and vice versa.

#### Configuration

<details>

<summary><strong>Strictness</strong> <code>PCGExMatchStrictness</code></summary>

Match Strictness

⚡ PCG Overridable

</details>

<details>

<summary><strong>Invert</strong> <code>bool</code></summary>

Controls invert.

⚡ PCG Overridable

</details>

***

Source: `Source\PCGExMatching\Public\Core\PCGExMatchRuleFactoryProvider.h`
