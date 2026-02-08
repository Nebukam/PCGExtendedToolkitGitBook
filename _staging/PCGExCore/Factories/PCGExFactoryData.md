---
icon: puzzle-piece
description: 'Factory Data - Base classes for factory system data storage and configuration.'
---

# Factory Data

Base classes for factory system data storage and configuration.

## Overview

Factory Data defines the foundational infrastructure for PCGEx's factory system, which enables modular, reusable operation configurations. The system consists of two base classes: UPCGExParamDataBase for basic param data, and UPCGExFactoryData for factory-specific configurations. Factories allow nodes to accept pluggable operation modules (filters, heuristics, noise generators, etc.) that can be configured once and reused across multiple contexts.

## Data Type Hierarchy

```
UPCGExPointData (Base point data)
  └─ UPCGExParamDataBase (Param data base)
      └─ UPCGExFactoryData (Factory data base - ABSTRACT)
          ├─ Filter Factories
          ├─ Heuristic Factories
          ├─ Noise Factories
          ├─ Picker Factories
          └─ Other specialized factories
```

## Base Classes

### UPCGExParamDataBase

**Type**: Param Data Base
**Data Type**: `EPCGDataType::Param`

Base class for parameter data in PCGEx. Extends point data to function as param data, allowing configuration data to flow through the PCG graph.

**Characteristics**:
- Returns Param data type for PCG system
- Can output configuration to metadata
- Serves as foundation for factory data storage
- Enables param-based factory transmission

### UPCGExFactoryData

**Type**: Abstract Factory Data
**Display Name**: "PCGEx | Factory"

Abstract base class for all factory data types. Factories encapsulate operation configurations that can be created in provider nodes and consumed by processing nodes.

**Properties**:

**Priority** (`int32`):
- Execution priority for this factory
- Higher priority factories execute first
- Used when multiple factories are applied
- Default: `0`

**Cleanup Consumable Attributes** (`bool`):
- Whether to cleanup temporary attributes created by this factory
- Helps reduce memory usage and data clutter
- Default: `false`

## Factory System

#### Factory Lifecycle:
```
1. Factory Creation
   [Provider Node] → Creates factory data

2. Factory Configuration
   Factory settings → Stored in factory data

3. Factory Transmission
   Factory data flows to consumer nodes via param pins

4. Factory Preparation
   WantsPreparation() → Prepare() → Register dependencies

5. Factory Consumption
   Consumer node uses factory to create operations

6. Operation Execution
   Factory-created operations process data
```

#### Factory Types:
```
PCGExFactories::EType enumeration:

- None: No type (base/invalid)
- Filter: Filtering operations
- Heuristic: Pathfinding/scoring operations
- Noise: Noise generation operations
- Picker: Value picking operations
- Custom: User-defined factory types
```

#### Preparation System:
```
Factory preparation phases:

WantsPreparation(Context):
  Returns true if factory needs pre-processing
  → If false, skip preparation

Prepare(Context, TaskManager):
  Executes factory-specific preparation
  → Returns preparation result:
     - Success: Factory ready to use
     - Failed: Factory cannot be used
     - Warning: Factory usable but with issues

PrepResult stored for runtime checks
```

#### Dependency Management:
```
Factories can register dependencies:

RegisterConsumableAttributes(Context):
  Declares which attributes factory consumes

RegisterAssetDependencies(Context):
  Declares which assets factory depends on

RegisterBuffersDependencies(Context, FacadePreloader):
  Declares which data buffers factory needs

AddDataDependency(InData):
  Adds specific data dependency

Dependencies ensure proper loading and cleanup.
```

#### Usage Notes

**Abstract Base**: UPCGExFactoryData cannot be instantiated - always use concrete derived classes (filter factories, heuristic factories, etc.).

**Priority System**: When multiple factories are used together, priority determines execution order (higher values first).

**Preparation**: Factories that need preprocessing (loading data, building caches) should implement WantsPreparation and Prepare methods.

**Consumable Attributes**: Factories can create temporary attributes for processing - enable cleanup to remove them after use.

**Data Dependencies**: Factories maintain strong references to data they depend on, preventing premature garbage collection.

**Type Safety**: Each factory type (Filter, Heuristic, etc.) returns its specific type via GetFactoryType() for validation.

## Common Factory Types

**Filter Factories**:
- Define point/edge filtering criteria
- Used by filtering nodes to select subsets
- Examples: Numeric filter, Boolean filter, Tag filter

**Heuristic Factories**:
- Define scoring/weighting algorithms
- Used by pathfinding and optimization nodes
- Examples: Steepness, Gradient, Azimuth heuristics

**Noise Factories**:
- Define 3D noise generation algorithms
- Used for procedural variation and texturing
- Examples: Perlin, Simplex, Voronoi noise

**Picker Factories**:
- Define value selection strategies
- Used for attribute-based picking
- Examples: Constant picker, Range picker, Attribute picker

## Related Systems

**Provider Nodes**:
- Create factory instances
- Configure factory settings
- Output factory data to param pins

**Consumer Nodes**:
- Accept factory data from param pins
- Use factories to create operations
- Execute factory-defined logic

**Operation Objects**:
- Created by factories at runtime
- Execute the actual data processing
- Stateful, per-execution instances

---

![Static Badge](https://img.shields.io/badge/Source-PCGExCore-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExCore/Public/Factories/PCGExFactoryData.h)

<!-- SOURCE: https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExCore/Public/Factories/PCGExFactoryData.h -->

<!-- VERIFICATION REPORT
Base Classes: UPCGExParamDataBase (param data), UPCGExFactoryData (factory data - abstract)
Factory Properties: Priority (int32), bCleanupConsumableAttributes (bool)
Factory Types: None, Filter, Heuristic, Noise, Picker, Custom
Preparation System: WantsPreparation, Prepare, PrepResult
Dependency Registration: Consumable attributes, asset dependencies, buffer dependencies
Lifecycle: Creation → Configuration → Transmission → Preparation → Consumption → Execution
Purpose: Infrastructure for modular, reusable operation configurations
Derived Classes: Filter, Heuristic, Noise, Picker factories
-->
