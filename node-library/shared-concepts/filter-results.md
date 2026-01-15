---
icon: arrow-right-to-bracket
---

# Filter Results

#### Settings

<details>

<summary><strong>Enabled</strong> <code>bool</code></summary>

Controls enabled.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Action</strong> <code>EPCGExResultWriteAction</code></summary>

How should the result be used.

**Values:**

* **Boolean**: Set a boolean attribute on the points. True when filters pass, False if they don't.
* **Counter**
* **Bitmask**: Mutates a bitmask flag with the operations associated with pass/fail.

⚡ PCG Overridable

</details>

<details>

<summary><strong>Result Attribute Name</strong> <code>FName</code></summary>

Name of the attribute to write the result to.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Pass Increment</strong> <code>double</code></summary>

Value added to the counter when filters pass (use minus sign to decrement)

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Fail Increment</strong> <code>double</code></summary>

Value added to the counter when filters fail (use minus sign to decrement)

⚡ PCG Overridable

</details>

<details>

<summary><strong>Do Bitmask Op On Pass</strong> <code>bool</code></summary>

Controls do bitmask op on pass.

⚡ PCG Overridable

</details>

<details>

<summary><strong>├─ Pass Bitmask</strong> <code>FPCGExBitmaskWithOperation</code></summary>

Operations executed on the flag when filters pass

⚡ PCG Overridable

</details>

<details>

<summary><strong>Do Bitmask Op On Fail</strong> <code>bool</code></summary>

Controls do bitmask op on fail.

⚡ PCG Overridable

</details>

<details>

<summary><strong>└─ Fail Bitmask</strong> <code>FPCGExBitmaskWithOperation</code></summary>

Operations executed on the flag if when filters fail

⚡ PCG Overridable

</details>

#### Used In

* FilterVtx
* RefineEdges
* UberFilter

***

Defined in: `Source\PCGExFilters\Public\Details\PCGExFilterDetails.h`
