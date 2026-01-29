---
icon: cog
---

# Common Node Settings

All PCGEx nodes inherit a set of shared settings that control performance, output handling, and error behavior. These settings appear in collapsible sections on every node.

## Performance Settings

Found under the **Performance** category on most nodes.

### Bulk Init Data

<details>
<summary><strong>Bulk Init Data</strong> <code>Default | Enabled | Disabled</code></summary>

Pre-allocates all data on a single thread before processing to avoid contention. Not all nodes support this.

- **Default**: Node decides based on workload
- **Enabled**: Force single-threaded pre-allocation
- **Disabled**: Allow concurrent allocation

Use `Enabled` for very large datasets where allocation overhead matters.

</details>

### Cache Data

<details>
<summary><strong>Cache Data</strong> <code>Default | Enabled | Disabled</code></summary>

Caches the results of this node. Cached data persists until inputs change, avoiding re-computation on subsequent graph executions.

- **Default**: Node decides based on complexity
- **Enabled**: Always cache results
- **Disabled**: Never cache (always recompute)

Enable for expensive operations that don't need to recompute every frame.

</details>

### Scoped Attribute Get

<details>
<summary><strong>Scoped Attribute Get</strong> <code>Default | Enabled | Disabled</code></summary>

Controls whether attribute reads are scoped (batched) for efficiency. Disabling this on small datasets may improve performance.

- **Default**: Enabled (for legacy compatibility)
- **Disabled**: Direct attribute access (faster for small data)

Consider disabling for datasets under ~1000 points.

</details>

### Steal Data

<details>
<summary><strong>Steal Data</strong> <code>Default | Enabled | Disabled</code></summary>

Modifies input data directly instead of making copies. **Use with extreme caution.**

{% hint style="danger" %}
When enabled, you must ensure the input data is not used by any other node. Violating this causes undefined behavior.
{% endhint %}

Only visible on nodes that support data stealing.

</details>

### Execution Policy

<details>
<summary><strong>Execution Policy</strong> <code>Default | Ignored | Single Frame</code></summary>

Controls how execution is distributed across frames.

- **Default**: Node decides based on workload
- **Single Frame**: Force completion in one frame (may cause hitches)
- **Ignored**: Some nodes override this internally

{% hint style="warning" %}
Only change this if you understand the implications. Forcing single-frame execution on large datasets can freeze the editor.
{% endhint %}

</details>

---

## Cleanup Settings

Found under the **Cleanup** category.

### Flatten Output

<details>
<summary><strong>Flatten Output</strong> <code>bool</code></summary>

Merges hierarchical output data into a single flat collection.

Default: Disabled

</details>

### Cleanup Consumable Attributes

<details>
<summary><strong>Cleanup Consumable Attributes</strong> <code>bool</code></summary>

Deletes attributes that were registered as "consumable" by the node (temporary/intermediate attributes).

Default: Disabled

</details>

### Protected Attributes

<details>
<summary><strong>Protected Attributes</strong> <code>string / array</code></summary>

Comma-separated names (or array) of attributes that should NOT be cleaned up even if registered as consumable.

Only visible when Cleanup Consumable Attributes is enabled.

</details>

---

## Warnings and Errors

Found under the **Warnings and Errors** category.

### Propagate Aborted Execution

<details>
<summary><strong>Propagate Aborted Execution</strong> <code>bool</code></summary>

If this node's execution is cancelled internally, also cancel the entire graph execution.

Default: Disabled

</details>

### Quiet Invalid Input Warning

<details>
<summary><strong>Quiet Invalid Input Warning</strong> <code>bool</code></summary>

Suppress warnings about invalid input data (missing attributes, wrong data types, etc.).

Default: Disabled

</details>

### Quiet Missing Input Error

<details>
<summary><strong>Quiet Missing Input Error</strong> <code>bool</code></summary>

Suppress errors about missing required input connections.

Default: Disabled

</details>

### Quiet Cancellation Error

<details>
<summary><strong>Quiet Cancellation Error</strong> <code>bool</code></summary>

Suppress error messages when node execution is cancelled.

Default: Disabled

</details>

---

## When to Adjust These Settings

**Most users never need to change these.** The defaults work well for typical use cases.

Consider adjusting when:

- **Performance tuning**: Large datasets may benefit from caching, bulk init, or disabling scoped attribute get
- **Debugging**: Enable all warnings/errors to catch issues
- **Production**: Quiet non-critical warnings for cleaner logs
- **Memory constraints**: Disable caching if memory is limited

---

📦 **Module**: `PCGExCore` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExCore/Public/Core/PCGExSettings.h)
