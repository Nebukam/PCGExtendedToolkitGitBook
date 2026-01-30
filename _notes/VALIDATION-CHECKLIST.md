# Documentation Validation Checklist

**Standard: 100% accuracy, no omissions**

## Per-Node Verification Flow

### 1. Read Source Header
- [ ] Read the full `.h` file for the node
- [ ] Note the `PCGEX_NODE_INFOS` display name exactly
- [ ] Extract ALL `UPROPERTY` declarations

### 2. Extract Settings
For each UPROPERTY:
- [ ] Property name (use DisplayName meta if present)
- [ ] Type (exact C++ type)
- [ ] Default value (from initializer or constructor)
- [ ] `PCG_Overridable` vs `PCG_NotOverridable`
- [ ] `EditCondition` / `EditConditionHides` visibility rules
- [ ] `InlineEditConditionToggle` for toggle+value pairs
- [ ] Category grouping
- [ ] Any `ClampMin`/`ClampMax` constraints

### 3. Check Input/Output Pins
- [ ] Read `InputPinProperties()` implementation in `.cpp`
- [ ] Read `OutputPinProperties()` implementation in `.cpp`
- [ ] Note pin names, types, required status
- [ ] Check base class for inherited pins

### 4. Resolve Nested Types
For each struct/enum referenced:
- [ ] Find the definition header
- [ ] Document all nested UPROPERTYs
- [ ] Note enum display names (from UMETA)

### 5. Check Instanced Objects
For `TObjectPtr<UClass>` with `Instanced` meta:
- [ ] Find base class
- [ ] Find all derived classes (available types)
- [ ] Document each type's unique settings

### 6. Cross-Reference Base Classes
- [ ] Check parent class for inherited settings
- [ ] Check parent's input/output pins
- [ ] Note any virtual overrides

### 7. Final Verification
- [ ] Display name matches PCGEX_NODE_INFOS
- [ ] All UPROPERTYs documented
- [ ] All input pins documented
- [ ] All output pins documented
- [ ] Default values correct
- [ ] PCG Overridable markers correct
- [ ] EditCondition visibility noted
- [ ] Module name correct
- [ ] Source link correct

## Acceptable Simplifications

- "Supports constant value or attribute input" for the standard `EPCGExInputValueType` + constant/attribute pattern
- Grouping identical settings (e.g., "Same options as X")

## NOT Acceptable

- Omitting any UPROPERTY that exists
- Assuming properties exist that don't
- Wrong display names, types, or defaults
- Missing EditCondition visibility rules
- Inventing input pins or settings
