---
description: Correlate data collections based on various criteria
icon: link
---

# Match Rules

Match Rules define **how to pair data collections** together. They test whether a "candidate" data collection matches a "target" based on attributes, tags, spatial overlap, or other criteria.

📌 **Sub-node** — Connects to **Match Rules** pins.

{% hint style="warning" %}
Match Rules are used differently by different consuming nodes. Always check the specific node documentation for how "target" and "candidate" are defined in that context.
{% endhint %}

---

## Core Concepts

### Target vs Candidate

Match Rules test whether a **candidate** matches a **target**:

- **Target** — The data you're matching *against* (the reference)
- **Candidate** — The data being *tested* for a match

Different consuming nodes define these roles differently:
- In **Copy To** nodes: Targets are the destination, Candidates are the source
- In **Sampling** nodes: Targets are what you sample from, Candidates are the sampling points
- In **Clipper2** nodes: The roles may be swapped based on operation

### Strictness Levels

Each rule has a **Strictness** setting that determines how it affects the overall match:

| Strictness | Behavior |
|------------|----------|
| **Required** | Must pass for the match to succeed |
| **Optional** | Can fail without failing the entire match |

When combining multiple rules:
- **All Required** rules must pass, AND
- **At least one Optional** rule must pass (if any Optional rules exist)

### Match Mode

The consuming node's **Match Mode** setting controls rule aggregation:

| Mode | Behavior |
|------|----------|
| **Disabled** | No matching performed |
| **All** | All rules must pass |
| **Any** | Any single rule can make a match |

---

## Shared Settings

All match rules inherit these base settings:

<details>
<summary><strong>Strictness</strong> <code>EPCGExMatchStrictness</code></summary>

How this rule affects the overall match result.

| Value | Behavior |
|-------|----------|
| **Required** | Must pass for match success |
| **Optional** | Failure doesn't fail the match |

Default: `Optional`

⚡ PCG Overridable

</details>

<details>
<summary><strong>Invert</strong> <code>bool</code></summary>

Invert the match result (match becomes no-match and vice versa).

Default: `false`

⚡ PCG Overridable

</details>

---

## Available Match Rules

### Attribute-Based

| Rule | Description |
|------|-------------|
| [Attributes](attributes.md) | Compare attribute values between target and candidate |
| [Tag to Attribute](tag-to-attribute.md) | Match tag values against attribute values |

### Tag-Based

| Rule | Description |
|------|-------------|
| [Shared Tag](shared-tag.md) | Match collections that share common tags |
| [Copy Tags](copy-tags.md) | Copy tags from matched targets (post-processing) |

### Spatial

| Rule | Description |
|------|-------------|
| [Overlap](overlap.md) | Match based on bounding box intersection |

### Positional

| Rule | Description |
|------|-------------|
| [By Index](by-index.md) | Match based on collection order/index |
| [Random](random.md) | Random matching with threshold |

---

## Consuming Nodes

Match Rules are used by nodes with **Match Rules** input pins:

- **Copy To** — Copy points to matched targets
- **Sample Nearest Point** — Sample from matched targets
- **Sample Nearest Bounds** — Sample bounds from matched targets
- **Clipper2 : Boolean** — Match paths for boolean operations
- **Clipper2 : Offset** — Match paths for offset operations
- Various cluster operations

{% hint style="info" %}
Each consuming node may interpret match rules slightly differently. Check the node's documentation for specifics on what "target" and "candidate" mean in that context.
{% endhint %}

---

## Examples

### Match by shared "Region" tag
Connect a **Shared Tag** rule with `Tag Name = "Region"`:
- Collections with tag `Region:Forest` match other `Region:Forest` collections
- Collections with `Region:Desert` match other `Region:Desert` collections

### Match by attribute value
Connect an **Attributes** rule:
- `Candidate Attribute = "GroupID"`
- `Target Attribute = "@Data.GroupID"`
- `Comparison = Strictly Equal`

This matches collections where the candidate's `GroupID` equals the target's `@Data.GroupID`.

### Match overlapping bounds with tolerance
Connect an **Overlap** rule:
- `Expansion Mode = Add`
- `Expansion = (100, 100, 100)`

This matches collections whose bounding boxes overlap (with 100 unit tolerance).

---

📦 **Module**: `PCGExMatching` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/tree/dev/Source/PCGExMatching)
