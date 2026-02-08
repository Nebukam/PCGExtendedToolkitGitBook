---
icon: circle
---

# Tuple

A simple Tuple attribute for creating structured parameter data.

### Overview

This node creates tuple data — structured collections of named, typed values organized in rows and columns. Each column has a defined type (boolean, float, string, etc.) and name, while each row represents a complete set of values. Tuples are useful for passing structured configuration data through PCG graphs or defining parameter sets.

### How It Works

1. **Define Composition**: Specify column types and names in the schema
2. **Add Rows**: Create value rows with data for each column
3. **Toggle Columns**: Enable/disable specific columns per row
4. **Output Tuple**: Generates tuple data for downstream consumption

### Behavior

```
Tuple Structure:

Composition (Schema):
┌──────────┬──────────┬──────────┐
│ Name     │ Radius   │ Active   │
│ (String) │ (Float)  │ (Bool)   │
└──────────┴──────────┴──────────┘

Values (Rows):
┌──────────┬──────────┬──────────┐
│ "Alpha"  │ 10.0     │ true     │
│ "Beta"   │ 25.0     │ false    │
│ "Gamma"  │ 5.0      │ true     │
└──────────┴──────────┴──────────┘

Output: Tuple data with 3 rows × 3 columns
```

### Outputs

| Pin       | Type       | Description                                                 |
| --------- | ---------- | ----------------------------------------------------------- |
| **Tuple** | Tuple Data | The generated tuple containing all defined rows and columns |

### Settings

<details>

<summary><strong>Composition</strong> <code>FPCGExPropertySchemaCollection</code></summary>

Defines the tuple's column structure — the property types and names that make up each row. Changes to composition automatically sync with value rows.

</details>

<details>

<summary><strong>Values</strong> <code>TArray&#x3C;FPCGExPropertyOverrides></code></summary>

The data rows of the tuple. Each row contains values for the columns defined in Composition. Individual columns can be enabled/disabled per row using the override toggles.

</details>

<details>

<summary><strong>Comma Separated Tags</strong> <code>FString</code></summary>

A list of tags separated by commas to apply to the output tuple data. Useful for matching and filtering in downstream operations.

⚡ PCG Overridable

</details>

***

📦 **Module**: `PCGExProperties` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExProperties/Public/Elements/PCGExTuple.h)
