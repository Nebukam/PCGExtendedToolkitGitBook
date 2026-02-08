---
icon: puzzle-piece
description: 'Sub-Points Base Factory - Abstract base for all sub-point insertion operations'
---

# Sub-Points Base Factory

Abstract base for all sub-point insertion operations.

## Overview

This is the root factory class for operations that insert and configure sub-points along paths. It provides the fundamental interface that all sub-point operations implement, whether they perform blending, inheritance, or custom transformations.

## How It Works

1. **Factory Pattern**: Serves as the abstract base that specific sub-point operations inherit from
2. **Data Preparation**: Establishes the connection to target data facades for attribute access
3. **Scope Processing**: Provides the interface for processing sub-points between two existing points

#### Usage Notes

- **Abstract Base**: This class is not used directly - it's inherited by specific sub-point operation types like blending, inheriting, or custom transformations
- **Common Interface**: All sub-point operations share this base interface for consistency across different implementation strategies

## Settings

This abstract base class has no configurable settings. Settings are defined in derived classes that implement specific sub-point operations.

---

📦 **Module**: `PCGExBlending` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExBlending/Public/SubPoints/PCGExSubPointsInstancedFactory.h)

<!-- VERIFICATION REPORT
Node-Specific Properties: 0 documented (abstract base class with no UPROPERTYs)
Inherited Properties: None documented (top-level base for sub-points operations)
Inputs: N/A (instanced factory)
Outputs: N/A (instanced factory)
Nested Types: None
-->
