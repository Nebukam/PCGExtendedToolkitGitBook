---
icon: puzzle-piece
description: 'Instanced Factory (Base) - Abstract base class for factory modules that can be selected directly in node properties.'
---

# Instanced Factory (Base)

Abstract base class for factory modules that can be selected directly in node properties.

## Overview

UPCGExInstancedFactory is the foundational base class for instanced factories - modular operation configurations that can be selected directly within node properties rather than flowing through the graph as param data. Instanced factories appear as dropdown selectors or property panels within nodes, allowing inline configuration of operations like tangent calculation, blending modes, or custom algorithms. This pattern provides immediate, visual configuration while maintaining the modularity and reusability of the factory system.

## Instanced Factory Pattern

```
Instanced Factory (In-Node Selection):

[Node Property Panel]
  ↓ Select factory type from dropdown
[Tangents: Auto / Catmull-Rom / From Transform / ...]
  ↓ Configure selected factory inline
[Factory creates operation at runtime]
```

**vs Provider Factory Pattern:**

```
Provider Factory (Graph Flow):

[Provider Node] → Creates factory data
      ↓ (param pin)
[Consumer Node] → Uses factory
```

## How It Works

1. **Property Declaration**: Node declares instanced factory property (`UPROPERTY(Instanced)`)
2. **Editor Selection**: User selects factory type from dropdown in node properties
3. **Inline Configuration**: Factory settings appear in property panel for direct editing
4. **Context Binding**: Factory binds to execution context via `BindContext()`
5. **Initialization**: Factory initializes with context and override pin label
6. **Override Resolution**: Settings overrides loaded from optional override pins
7. **Operation Creation**: Factory creates runtime operation objects for execution

#### Usage Notes

- **Abstract Base**: Cannot be used directly - always extend with concrete implementations
- **DefaultToInstanced**: Automatically marked for instancing in property system
- **EditInlineNew**: Enables inline editing in property panels
- **Per-Data Instances**: Can optionally create separate instances per data collection (`WantsPerDataInstance`)
- **Thread Safety**: Most instanced factories support multi-threaded execution (`CanOnlyExecuteOnMainThread` returns false)
- **Settings Overrides**: Can read override values from dedicated pins for dynamic configuration

## Core Functionality

### Context and Initialization

**BindContext(InContext)**:
- Binds factory to execution context
- Stores context reference for runtime use
- Called during node initialization

**InitializeInContext(InContext, InOverridesPinLabel)**:
- Full initialization with context and override pin
- Loads settings overrides from graph connections
- Prepares factory for operation creation

**FindSettingsOverrides(InContext, InPinLabel)**:
- Searches for override attributes on specified pin
- Populates `PossibleOverrides` map
- Enables dynamic parameter modification

**ApplyOverrides()**:
- Applies collected overrides to factory settings
- Internal method called during initialization

### Instance Management

**CreateNewInstance(InManagedObjects)**:
- Creates a new instance of this factory
- Used when per-data instances are needed
- Returns properly initialized duplicate

**WantsPerDataInstance()**:
- Returns whether factory needs separate instance per data collection
- Default: `false` (shared instance)
- Override to `true` for stateful factories

**CopySettingsFrom(Other)**:
- Copies settings from another factory instance
- Base implementation for derived classes to extend
- Enables instance duplication with preserved configuration

### Dependencies and Resources

**RegisterAssetDependencies(InContext)**:
- Declares which assets this factory depends on
- Ensures assets remain loaded during execution
- Virtual method for derived classes to implement

**RegisterConsumableAttributesWithFacade(InContext, InFacade)**:
- Declares which attributes this factory consumes
- Helps cleanup systems remove temporary data
- Called during facade setup

**RegisterPrimaryBuffersDependencies(InContext, FacadePreloader)**:
- Declares which data buffers factory needs preloaded
- Optimizes data access patterns
- Called during buffer preparation phase

### Data Facades

**PrimaryDataFacade**:
- Shared pointer to primary data facade
- Main data source for factory operations
- Set during initialization

**SecondaryDataFacade**:
- Shared pointer to secondary data facade
- Optional additional data source
- Used for operations requiring multiple inputs

### Cleanup

**Cleanup()**:
- Override point for factory cleanup
- Called when factory is no longer needed
- Release resources, clear references

**BeginDestroy()**:
- UObject destruction handler
- Final cleanup before object deletion
- Calls Cleanup() internally

## Common Instanced Factory Types

**Tangent Factories** (see [Tangents Base](../../PCGExFoundations/Tangents/PCGExTangentsInstancedFactory.md)):
- Auto, Catmull-Rom, From Neighbors, From Transform, Zero
- Selected inline in Write Tangents node
- Calculate tangents for path smoothing

**Blending Factories**:
- Different blending/interpolation algorithms
- Selected for attribute blending operations
- Control how values merge

**Custom Operation Factories**:
- User-defined operation modules
- Extend base for application-specific logic
- Enable modular algorithm selection

## Comparison: Instanced vs Provider Factories

| Aspect | Instanced Factory | Provider Factory |
|--------|-------------------|------------------|
| **Selection** | In-node dropdown | Separate provider node |
| **Configuration** | Inline property panel | Provider node settings |
| **Graph Flow** | No graph connection needed | Flows through param pins |
| **Reusability** | Per-node configuration | One provider → many consumers |
| **Visibility** | Settings visible in node | Settings in provider node |
| **Use Case** | Single-use, immediate config | Shared, complex configs |

## Inherited By

Common instanced factory hierarchies:

- **Tangents Factories** - Path/spline tangent calculation
- **Blending Factories** - Attribute interpolation methods
- **Sampling Factories** - Value sampling strategies
- **Custom Factories** - Application-specific operations

---

![Static Badge](https://img.shields.io/badge/Module-PCGExCore-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExCore/Public/Factories/PCGExInstancedFactory.h)

<!-- VERIFICATION REPORT
Base Class Type: Abstract (UObject)
Purpose: Base for inline-selectable factory modules
Pattern: In-node dropdown selection with inline configuration
Key Features: Context binding, settings overrides, per-data instances, cleanup
Data Facades: Primary and secondary data facade support
Dependencies: Asset dependencies, consumable attributes, buffer dependencies
Thread Safety: Most implementations support multi-threading
Comparison: Alternative to provider pattern for immediate configuration
Derived Classes: Tangent factories, blending factories, custom operations
-->
