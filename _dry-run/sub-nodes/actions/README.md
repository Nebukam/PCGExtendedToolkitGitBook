---
icon: bolt
description: Action sub-nodes for batch conditional operations
---

# Actions

Actions are conditional operations that execute based on filter results. They work with the **Batch Actions** node to perform different operations on points that pass or fail filter conditions.

## Available Actions

| Action | Description |
|--------|-------------|
| [Write Attributes](./write-attributes.md) | Forward attributes based on filter match results |

## How Actions Work

1. **Filter Evaluation**: Each point is tested against the action's filter conditions
2. **Match Routing**: Points are routed to either "success" or "fail" paths based on results
3. **Operation Execution**: The action performs its specific operation (e.g., writing attributes)
4. **Priority Ordering**: Multiple actions process in priority order (higher values last)

## Shared Settings

All actions share these common configuration options:

### Priority

<details>
<summary><strong>Priority</strong> <code>int32</code></summary>

Processing order when multiple actions are chained. Higher values are processed last, allowing later actions to override earlier ones.

Default: `0`

⚡ PCG Overridable

</details>

### Filter Input

Actions accept filter factories through their **Filters** input pin. Points matching the filters are routed to "success" operations, while non-matching points go to "fail" operations.

## Parent Node

Actions are consumed by the [Batch Actions](../../node-library/quality-of-life/batch-actions.md) node.

---

📦 **Module**: `PCGExElementsActions`
