---
icon: puzzle-piece
---

# Property Collection Component

Actor component for attaching property collections to any actor.

### Overview

This component allows property schema collections to be attached directly to actors in the world. It provides a way to store typed, named property data on actors that can be read by PCG operations at runtime. The Valency system uses these components to scan cages and patterns during compilation, and other systems can scan spawned actors at runtime.

### How It Works

1. **Add Component**: Attach the Property Collection Component to any actor
2. **Define Properties**: Configure property schemas with types, names, and default values
3. **Compile/Scan**: PCG operations scan actors for this component to read property data
4. **Use Values**: Property values are extracted and used in PCG graph processing

### Usage

```
Actor with Property Collection Component:

┌─────────────────────────────────────┐
│ Actor: "Building_01"                │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │ Property Collection Component   │ │
│ │                                 │ │
│ │ Properties:                     │ │
│ │   Height (Float) = 15.0         │ │
│ │   Style (String) = "Modern"     │ │
│ │   HasRoof (Bool) = true         │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘

PCG can read these properties when processing this actor
```

### Properties

<details>

<summary><strong>Properties</strong> <code>FPCGExPropertySchemaCollection</code></summary>

The property collection containing schema definitions and default values. Each schema defines a property's type, name, and default value. These compile into runtime property data during cage/pattern builds or can be read at runtime.

</details>

**Usage Notes**

* **Runtime Compatible**: This component works at runtime, not just in the editor.
* **Valency Integration**: The Valency system automatically scans for these components on cage and pattern actors during compilation.
* **Blueprint Spawnable**: Can be added to actors via Blueprint or C++.

***

📦 **Module**: `PCGExProperties` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExProperties/Public/PCGExPropertyCollectionComponent.h)
