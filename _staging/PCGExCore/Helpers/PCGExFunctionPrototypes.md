---
icon: code
description: 'Function Prototypes - Blueprint function library providing function signature prototypes for actor function matching.'
---

# Function Prototypes

Blueprint function library providing function signature prototypes for actor function matching.

## Overview

UPCGExFunctionPrototypes is a utility class that defines function signature prototypes used to validate and locate matching functions on actor classes. When PCGEx nodes need to call functions on spawned or referenced actors, this system ensures the target actors have compatible function signatures before attempting invocation, preventing runtime errors and enabling type-safe dynamic function calls.

## How It Works

1. **Prototype Definition**: Define function signatures as prototype methods in this class
2. **Function Discovery**: Use helper functions to search actor classes for matching signatures
3. **Signature Validation**: Compare actor functions against prototype signatures
4. **Match Collection**: Return array of validated functions ready for invocation
5. **Safe Invocation**: Call validated functions knowing signatures match

#### Usage Notes

- **Blueprint Function Library**: Extends UBlueprintFunctionLibrary for Blueprint accessibility
- **Prototype Pattern**: Prototypes are never executed - they serve as signature templates
- **Type Safety**: Ensures actor functions have expected parameters and return types before calling
- **Dynamic Discovery**: Finds functions by name at runtime while validating signatures
- **Error Prevention**: Avoids crashes from calling functions with incompatible signatures

## Function Prototypes

### PrototypeWithNoParams

**Signature**: `void PrototypeWithNoParams()`

Prototype for functions that take no parameters and return void.

**Use Case**: Validating simple trigger/event functions on actors

**Example Actor Function**:
```cpp
UFUNCTION()
void OnSpawned()
{
    // Custom spawn logic
}
```

## Helper Functions

### FindUserFunctions

**Namespace**: `PCGExHelpers`

Searches actor class for functions matching given names and prototype signatures.

**Parameters**:
- `ActorClass`: The actor class to search
- `FunctionNames`: Array of function names to find
- `FunctionPrototypes`: Array of prototype signatures to match against
- `InContext`: PCG execution context

**Returns**: Array of UFunction pointers for validated, matching functions

**Behavior**:
```
FindUserFunctions(MyActorClass, ["OnSpawned", "OnDestroy"], [NoParamsPrototype], Context)

Searches MyActorClass for:
  - Function named "OnSpawned" matching NoParamsPrototype signature
  - Function named "OnDestroy" matching NoParamsPrototype signature

Returns: Array of UFunction* for found matches

If function exists but signature doesn't match:
  → Not included in results (validation failed)

If function doesn't exist:
  → Not included in results (not found)
```

## Function Matching Process

#### Signature Validation:
```
Actor has function: void MyFunction(int32 Value)
Prototype signature: void PrototypeWithNoParams()

Comparison:
  Parameter count: 1 vs 0 → MISMATCH
  Result: Function rejected (signature doesn't match)

Actor has function: void OnTrigger()
Prototype signature: void PrototypeWithNoParams()

Comparison:
  Parameter count: 0 vs 0 → MATCH
  Return type: void vs void → MATCH
  Result: Function accepted
```

#### Name and Signature Matching:
```
FunctionNames: ["OnSpawned", "OnUpdate"]
FunctionPrototypes: [PrototypeWithNoParams]

Actor class functions:
  void OnSpawned()      → Name match + Signature match → INCLUDED
  void OnUpdate()       → Name match + Signature match → INCLUDED
  void OnSpawned(int)   → Name match + Signature FAIL → EXCLUDED
  void OnDestroy()      → Name FAIL → EXCLUDED
```

## Extension Pattern

To add new prototype signatures, extend this class:

```cpp
// In UPCGExFunctionPrototypes

UFUNCTION()
void PrototypeWithInt32Param(int32 Value)
{
    // Prototype - never executed
}

static UFunction* GetPrototypeWithInt32Param()
{
    return FindObject<UFunction>(StaticClass(), TEXT("PrototypeWithInt32Param"));
}
```

Then use in validation:
```cpp
TArray<const UFunction*> Prototypes;
Prototypes.Add(UPCGExFunctionPrototypes::GetPrototypeWithInt32Param());

TArray<UFunction*> MatchingFunctions = PCGExHelpers::FindUserFunctions(
    ActorClass, FunctionNames, Prototypes, Context);
```

## Practical Applications

**Actor Spawn Callbacks**:
```
Spawn actors, then call "OnPCGSpawned" on each
  → FindUserFunctions ensures "OnPCGSpawned()" exists with correct signature
  → Safe to call on all spawned actors
```

**Event Notifications**:
```
Notify actors of generation completion via "OnGenerationComplete"
  → Validate signature matches before calling
  → Prevents crashes from parameter mismatches
```

**Custom Initialization**:
```
Call "Initialize" on spawned actors with specific parameters
  → Define prototype matching expected signature
  → Only call if signature matches
```

## Error Prevention

**Without Prototypes**:
```
Actor has: void OnSpawned(FVector Location)
Node calls: OnSpawned() with no parameters

Result: CRASH (parameter count mismatch)
```

**With Prototypes**:
```
Prototype: void PrototypeWithNoParams()
Actor has: void OnSpawned(FVector Location)

FindUserFunctions:
  → Signature doesn't match prototype
  → Function excluded from results
  → Node doesn't call it

Result: No crash, invalid function ignored
```

---

📦 **Module**: `PCGExCore` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExCore/Public/Helpers/PCGExFunctionPrototypes.h)

<!-- VERIFICATION REPORT
Base Class Type: UBlueprintFunctionLibrary
Purpose: Function signature validation for actor function calls
Prototypes: PrototypeWithNoParams (void, no params)
Helper Function: FindUserFunctions (searches and validates actor functions)
Validation: Matches function names and signatures against prototypes
Error Prevention: Prevents crashes from calling incompatible function signatures
Extension: Can add new prototypes for different signatures
Use Cases: Actor callbacks, event notifications, custom initialization
-->
