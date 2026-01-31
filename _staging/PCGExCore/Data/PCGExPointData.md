---
icon: database
description: 'Point Data (Base) - Abstract base class for all PCGEx point data types.'
---

# Point Data (Base)

Abstract base class for all PCGEx point data types.

## Overview

UPCGExPointData is the foundational abstract class for all PCGEx point-based data structures, extending Unreal's native UPCGPointArrayData with PCGEx-specific functionality. This base class provides the infrastructure for specialized point data types used throughout PCGExtendedToolkit, including cluster nodes, cluster edges, and other custom point data representations that require extended capabilities beyond standard PCG point arrays.

## Data Type Hierarchy

```
UPCGPointData (PCG native)
  └─ UPCGPointArrayData (PCG native array storage)
      └─ UPCGExPointData (PCGEx base - ABSTRACT)
          └─ UPCGExClusterData (Cluster base - ABSTRACT)
              ├─ UPCGExClusterNodesData (Cluster vertices)
              └─ UPCGExClusterEdgesData (Cluster edges)
```

## Purpose

**Foundation for Extensions**: Provides a common base for PCGEx data types that need specialized behavior beyond standard point data.

**Copy Management**: Implements custom internal copy logic that respects PCGEx property inheritance and spatial data handling.

**Type Safety**: Establishes the PCGEx data type system, enabling type-specific operations and validation.

**Thread Safety**: Supports multi-threaded operations with proper object allocation semantics (`NewObject_AnyThread`).

#### Usage Notes

**Abstract Class**: This class cannot be instantiated directly - it serves as a base for concrete implementations.

**Spatial Data Inheritance**: The copy mechanism checks `SupportsSpatialDataInheritance()` to determine whether to copy unallocated properties.

**Internal Use**: Most users interact with derived classes (like cluster data) rather than this base class directly.

**Macro Support**: Provides `PCGEX_NEW_CUSTOM_POINT_DATA` macro for creating new instances of derived types.

## Derived Classes

This base class is extended by:

- **[UPCGExClusterData](PCGExClusterData.md)** - Abstract base for cluster structures
  - **UPCGExClusterNodesData** - Cluster vertices/nodes
  - **UPCGExClusterEdgesData** - Cluster edges/connections
- Other specialized PCGEx point data types

## Internal Functionality

**CopyInternal**: Custom copy implementation that handles PCGEx-specific property copying and spatial data inheritance.

**NewObject_AnyThread**: Thread-safe object creation supporting multi-threaded PCG operations.

**Property Inheritance**: Conditional copying of unallocated properties based on spatial data inheritance support.

---

📦 **Module**: `PCGExCore` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExCore/Public/Data/PCGExPointData.h)

<!-- VERIFICATION REPORT
Base Class Type: Abstract (UPCGPointArrayData)
Own Properties: None (pure base class)
Purpose: Foundation for all PCGEx point data types
Key Features: Custom copy logic, spatial data inheritance, thread-safe creation
Derived Classes: UPCGExClusterData hierarchy and other specialized point data
Internal Use: Infrastructure class - users interact with derived classes
Thread Safety: Supports multi-threaded object creation
-->
