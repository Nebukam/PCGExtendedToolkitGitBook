# PCGExProperties Analysis

## Module Type
- [x] Core Infrastructure
- [x] Support System (provides factories/operations to other modules)
- [ ] Element Module (user-facing nodes)
- [ ] Hybrid

## Dependencies
| Depends On | Why |
|------------|-----|
| PCGExCore | Base framework |
| StructUtils | FInstancedStruct-based runtime property system |

## What This Module Provides

### Nodes (UPCGEx*Settings classes)

| Class | Display Name | Purpose |
|-------|--------------|---------|
| `UPCGExTupleSettings` | "Tuple" | Creates simple tuple attributes |

### Property Type System

**Base Class**: `FPCGExPropertyCompiled`

**17 Typed Implementations**:

#### Atomic Types
| Class | Value Type | PCG Metadata Type |
|-------|------------|-------------------|
| `FPCGExPropertyCompiled_String` | FString | String |
| `FPCGExPropertyCompiled_Name` | FName | Name |
| `FPCGExPropertyCompiled_Int32` | int32 | Integer32 |
| `FPCGExPropertyCompiled_Int64` | int64 | Integer64 |
| `FPCGExPropertyCompiled_Float` | float | Float |
| `FPCGExPropertyCompiled_Double` | double | Double |
| `FPCGExPropertyCompiled_Bool` | bool | Boolean |

#### Vector Types
| Class | Value Type | PCG Metadata Type |
|-------|------------|-------------------|
| `FPCGExPropertyCompiled_Vector2` | FVector2D | Vector2 |
| `FPCGExPropertyCompiled_Vector` | FVector | Vector |
| `FPCGExPropertyCompiled_Vector4` | FVector4 | Vector4 |
| `FPCGExPropertyCompiled_Rotator` | FRotator | Rotator |
| `FPCGExPropertyCompiled_Quat` | FQuat | Quaternion |

#### Specialized Types
| Class | Value Type | PCG Metadata Type |
|-------|------------|-------------------|
| `FPCGExPropertyCompiled_Color` | FLinearColor | Vector4 |
| `FPCGExPropertyCompiled_Transform` | FTransform | Transform |
| `FPCGExPropertyCompiled_SoftObjectPath` | FSoftObjectPath | SoftObjectPath |
| `FPCGExPropertyCompiled_SoftClassPath` | FSoftClassPath | SoftClassPath |
| `FPCGExPropertyCompiled_Enum` | FEnumSelector | Integer64 |

### Schema & Override System

| Struct | Purpose |
|--------|---------|
| `FPCGExPropertyRegistryEntry` | Read-only registry with PropertyName, TypeName, OutputType |
| `FPCGExPropertyOverrideEntry` | Single override with bEnabled flag + FInstancedStruct |
| `FPCGExPropertyOverrides` | Array of override entries |
| `FPCGExPropertySchema` | Single property definition with HeaderId |
| `FPCGExPropertySchemaCollection` | Array of schemas with query utilities |

### Property Writer System

| Class/Struct | Purpose |
|--------------|---------|
| `FPCGExPropertyWriter` | Output writer for point attributes |
| `IPCGExPropertyProvider` | Interface for per-index property lookup |
| `FPCGExPropertyOutputConfig` | Maps property name to output attribute |
| `FPCGExPropertyOutputSettings` | Array of output configs |

### Component-Based Authoring

| Class | Purpose |
|-------|---------|
| `UPCGExPropertyCollectionComponent` | Actor component for property schemas |

### Query API

```cpp
namespace PCGExProperties
{
    template <typename T> const T* GetProperty(TConstArrayView<FInstancedStruct>);
    template <typename T> TArray<const T*> GetAllProperties(TConstArrayView<FInstancedStruct>);
    const FInstancedStruct* GetPropertyByName(TConstArrayView<FInstancedStruct>, FName);
    void BuildRegistry(TConstArrayView<FInstancedStruct>, TArray<FPCGExPropertyRegistryEntry>&);
}
```

---

## Node Classification

### Standalone Nodes
- tuple.md [N] - `UPCGExTupleSettings`

### Nodes with Shared Factories
- (none)

### Nodes with Dedicated Sub-operations
- (none)

---

## Shared Factory Folders (Module-Level)

This module provides **infrastructure** rather than user-facing factories.

---

## Cross-Module Relationships

### Consumes From
- PCGExCore: FFacade, buffer system
- StructUtils: FInstancedStruct polymorphism

### Provides To
- PCGExCollections: Entry property system
- PCGExElementsValency: Cage property system
- Any module needing typed property definitions

---

## Documentation Notes

### Concepts to Cross-Reference
- Input Value Sources: Properties can be constant or attribute-driven
- Attribute Mapping: Property writer maps to output attributes

### Tricky Areas
- **HeaderId-stable identity**: Preserves override state through rename/reorder/type change
- **Three-tier resolution**: Override → Default → Not Found
- **FInstancedStruct polymorphism**: No virtual table overhead
- **Runtime-compatible**: Registry building works at runtime, not just editor

### Key Design Features
- Unified property system across modules
- Per-entry property overrides in collections
- Type-safe compilation to PCG metadata types
- Thread-safe output writing

---

## Header File Structure

**Total Public Headers**: 6 files

| File | Content |
|------|---------|
| PCGExProperties.h | Module interface |
| PCGExPropertyCompiled.h | Base + registry + override structs |
| PCGExPropertyTypes.h | 17 concrete type implementations |
| PCGExPropertyWriter.h | Output writer + provider interface |
| PCGExPropertyCollectionComponent.h | Actor component |
| Elements/PCGExTuple.h | Tuple node |

---

## File Counts

| Type | Count |
|------|-------|
| Nodes [N] | 1 |
| Providers [P] | 0 |
| Factories [F] | 0 (infrastructure only) |
| Shared Folders [S] | 0 |
| Data Assets [A] | 0 |
| Public Headers | 6 |
| Property Types | 17 |
