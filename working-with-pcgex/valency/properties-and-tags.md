# Properties & Tags

Properties and tags let you attach arbitrary data to cages that flows through to solved points. Use them for spawn weights, material parameters, gameplay tags, or any metadata your workflow needs.

### Cage Properties

Properties are **actor components** attached to cages. They're compiled into modules and accessible at solve time and in output attributes.

#### Available Property Types

Add as components on cage actors (Add Component → PCGEx Valency):

| Type             | Component Class                      | Output Type     | Use Cases                                  |
| ---------------- | ------------------------------------ | --------------- | ------------------------------------------ |
| String           | `UPCGExCageProperty_String`          | FString         | Names, descriptions, tags                  |
| Name             | `UPCGExCageProperty_Name`            | FName           | Identifiers, enum keys                     |
| Int32            | `UPCGExCageProperty_Int32`           | int32           | Counts, indices, costs                     |
| Int64            | `UPCGExCageProperty_Int64`           | int64           | Large numbers, IDs                         |
| Float            | `UPCGExCageProperty_Float`           | float           | Weights, probabilities                     |
| Double           | `UPCGExCageProperty_Double`          | double          | Precise values                             |
| Bool             | `UPCGExCageProperty_Bool`            | bool            | Flags, toggles                             |
| Vector           | `UPCGExCageProperty_Vector`          | FVector         | Positions, offsets, colors (RGB)           |
| Vector2D         | `UPCGExCageProperty_Vector2`         | FVector2D       | 2D positions, UV coords                    |
| Vector4          | `UPCGExCageProperty_Vector4`         | FVector4        | 4-component data                           |
| Color            | `UPCGExCageProperty_Color`           | FVector4        | Linear colors (output as Vector4)          |
| Rotator          | `UPCGExCageProperty_Rotator`         | FRotator        | Rotations (pitch/yaw/roll)                 |
| Quat             | `UPCGExCageProperty_Quat`            | FQuat           | Quaternion rotations                       |
| Transform        | `UPCGExCageProperty_Transform`       | FTransform      | Full transforms                            |
| Soft Object Path | `UPCGExCageProperty_SoftObjectPath`  | FSoftObjectPath | Asset references                           |
| Soft Class Path  | `UPCGExCageProperty_SoftClassPath`   | FSoftClassPath  | Class references                           |
| Asset Collection | `UPCGExCageProperty_AssetCollection` | N/A             | PCGExAssetCollection reference (no output) |

All property types support **attribute output** except Asset Collection (which is a reference, not primitive data).

\[\[SCREENSHOT: Adding property component to cage]]

#### Property Configuration

Each property component has:

**PropertyName** (FName):

* Identifier for this property
* Defaults to component's name if empty
* Used for querying and output attribute naming

**Value**:

* The property data (type-specific)

**Example**:

```
Component: UPCGExCageProperty_Float
PropertyName: "SpawnWeight"
Value: 2.5
```

#### Property Inheritance

Properties are inherited from **palettes** via `MirrorSources`:

* Cage's properties + all mirror source properties = merged set
* **Name collision**: Cage's value takes precedence
* Inheritance happens at build time

**Example**:

```
Palette_Premium:
  Property: Cost (Int32) = 100
  Property: Quality (Float) = 0.9

Cage_Wall (mirrors Palette_Premium):
  Property: Cost (Int32) = 150  // Overrides palette

Result:
  Module properties: Cost = 150, Quality = 0.9
```

\[\[SCREENSHOT: Cage with properties, mirroring palette with properties, showing inheritance]]

### Actor Tags

**Native Unreal actor tags** are also compiled into modules:

* Added via `Tags` array on actor (Details panel → Actor section)
* Inherited from palettes (merged with cage's own tags)
* Stored in `ModuleTags` array in compiled rules
* Output as comma-separated string attribute

**Use cases**:

* Gameplay filtering ("Cover", "Destructible", "HighValue")
* Material grouping ("Wood", "Stone", "Metal")
* LOD hints ("LOD0", "LOD1", "LOD2")
* Blueprint switches (check tags in spawn logic)

\[\[SCREENSHOT: Actor tags on cage]]

### Property Output to Attributes

Properties can be **written to point attributes** for downstream use.

#### Property Output Settings

Nodes that support property output have embedded **PropertyOutput** settings:

**FPCGExValencyPropertyOutputSettings** contains:

* **Configs**: Array of property output configs (which properties to output, attribute names)
* **bOutputModuleTags**: Whether to output tags as string attribute
* **ModuleTagsAttributeName**: Attribute name for tags (default: "ModuleTags")

**FPCGExValencyPropertyOutputConfig** (each entry):

* **bEnabled**: Toggle for easy experimentation
* **PropertyName**: Which property to output
* **OutputAttributeName**: Output attribute name (defaults to PropertyName if empty)

**Editor UI**: Custom inline widget shows:

```
[✓] SpawnWeight → Weight
[✓] Cost → ModuleCost
[ ] Quality → Quality
```

\[\[SCREENSHOT: Property output settings on Valency Staging node]]

#### Auto-Populate

Nodes provide **Auto-Populate** button to discover properties:

1. Reads bonding rules asset
2. Scans **property registry** (all unique properties across all modules)
3. Adds output config for each property that supports output
4. Skips properties already configured

**Property Registry**: Built during compilation, lists:

* PropertyName (FName)
* TypeName (FName, e.g., "String", "Vector")
* OutputType (EPCGMetadataTypes, for validation)
* bSupportsOutput (bool)

Registries are visible in bonding rules asset (VisibleAnywhere) for inspection.

\[\[SCREENSHOT: Auto-populate button and property registry in bonding rules]]

#### Output Workflow

**In PCG graph** (Valency Staging node):

1. Reference bonding rules asset (contains properties)
2. Expand PropertyOutput settings
3. Click "Auto-Populate from Bonding Rules" (or manually add configs)
4. Enable desired properties
5. Run graph

**Result**: Output points have attributes matching property values.

**Example**:

```
Module 4 properties:
  SpawnWeight (Float) = 2.5
  Cost (Int32) = 100

Output point (Module 4 assigned):
  Attribute "Weight" = 2.5
  Attribute "Cost" = 100
```

#### Property Writer (Technical)

Under the hood, nodes use **FPCGExValencyPropertyWriter**:

```cpp
// Initialize during boot
PropertyWriter = MakeShared<FPCGExValencyPropertyWriter>();
PropertyWriter->Initialize(
    CompiledBondingRules,
    VtxDataFacade,
    Settings->PropertyOutput);  // Embedded settings struct

// Write during processing
PropertyWriter->WriteModuleProperties(PointIndex, State.ResolvedModule);
```

Writer creates output buffers for each enabled property and writes values during the processing phase.

\[\[SCREENSHOT: Property attributes on output points in PCG debugger]]

### Property Query API (Blueprint/C++)

Properties are stored in modules as **FInstancedStruct arrays**. Query via helper functions in `PCGExValency` namespace:

#### Query Functions

**Get property by type and name**:

```cpp
const FPCGExCagePropertyCompiled_Float* WeightProp =
    PCGExValency::GetProperty<FPCGExCagePropertyCompiled_Float>(
        Module.Properties,
        FName("SpawnWeight"));

if (WeightProp)
{
    float Weight = WeightProp->Value;
}
```

**Get all properties of type**:

```cpp
TArray<const FPCGExCagePropertyCompiled_String*> StringProps =
    PCGExValency::GetAllProperties<FPCGExCagePropertyCompiled_String>(
        Module.Properties);
```

**Get property by name (any type)**:

```cpp
const FInstancedStruct* Prop =
    PCGExValency::GetPropertyByName(Module.Properties, FName("Cost"));

if (Prop && Prop->GetScriptStruct() == FPCGExCagePropertyCompiled_Int32::StaticStruct())
{
    const auto* IntProp = Prop->GetPtr<FPCGExCagePropertyCompiled_Int32>();
    int32 Cost = IntProp->Value;
}
```

**Check existence**:

```cpp
bool HasCost = PCGExValency::HasProperty(Module.Properties, FName("Cost"));
bool HasAnyFloat = PCGExValency::HasPropertyOfType<FPCGExCagePropertyCompiled_Float>(Module.Properties);
```

#### Property Access Locations

**Module properties**: From cages, accessible at solver stage

```cpp
const FPCGExValencyModuleDefinition& Module = BondingRules->Modules[ModuleIndex];
// Query Module.Properties
```

**Pattern entry properties**: From pattern cages, accessible at matcher/replacement stage

```cpp
const FPCGExValencyPatternEntryCompiled& Entry = Pattern.Entries[EntryIndex];
// Query Entry.Properties
```

Module properties and pattern entry properties are **validated separately**—same PropertyName can exist in both domains without collision.

### Use Case Examples

#### Example 1: Weighted Spawning

**Goal**: Some modules spawn more frequently than others.

**Setup**:

1. Add `Float` property "SpawnWeight" to cages:
   * Common modules: 1.0
   * Rare modules: 0.1
   * Special modules: 5.0
2. In solver (custom or existing):
   * Query "SpawnWeight" property
   * Use value to bias selection probabilities

**Alternative**: Use solver's built-in weight system (Module.Settings.Weight), but property approach is more flexible.

#### Example 2: Material Parameters

**Goal**: Pass material parameters to spawned meshes.

**Setup**:

1. Add `Color` property "TintColor" to cages
2. Enable property output (attribute name: "TintColor")
3. In spawn Blueprint:
   * Read "TintColor" attribute
   * Apply to dynamic material instance

#### Example 3: Gameplay Tags

**Goal**: Mark modules for gameplay systems (cover, destructible, etc.).

**Setup**:

1. Add actor tags to cages:
   * `Cage_Crate`: Tags "Destructible", "Cover"
   * `Cage_Wall`: Tags "Cover"
2. Enable `bOutputModuleTags` on Valency Staging node
3. Output points have "ModuleTags" attribute (string):
   * "Destructible,Cover"
   * "Cover"
4. In gameplay logic:
   * Query "ModuleTags" attribute
   * Parse comma-separated tags
   * Apply behaviors

#### Example 4: Asset Variant Selection

**Goal**: Different modules reference different asset collections for detail spawning.

**Setup**:

1. Add `AssetCollection` property to cages:
   * Premium cages → Premium\_Details collection
   * Basic cages → Basic\_Details collection
2. In spawn logic:
   * Query property (not output, use query API in code)
   * Load referenced asset collection
   * Spawn detail meshes accordingly

### Validation & Compilation

During bonding rules build:

**Property Name Validation**:

* **Same PropertyName with different types = ERROR** (within same domain)
* Module properties validated separately from pattern entry properties

**Example (error)**:

```
Cage_A: Property "Cost" (Int32) = 100
Cage_B: Property "Cost" (Float) = 99.9  // ERROR: Type mismatch
```

**Attribute Name Validation**:

* Output attribute names checked via `PCGExMetaHelpers::IsWritableAttributeName()`
* Rejects reserved prefixes, invalid identifiers
* Happens when PropertyOutput is configured (immediate feedback)

**Property Registry Building**:

* Scans all module properties
* De-duplicates by PropertyName
* Builds registry entries (name, type, supports output)
* Serialized with bonding rules asset

### Best Practices

#### Consistent Property Names

Use same PropertyName across all cages for same concept:

* Good: All cages use "SpawnWeight"
* Bad: Some use "Weight", others "Probability"

Query API relies on names—inconsistency = manual per-module handling.

#### Typed Queries

Always query properties with correct type:

```cpp
GetProperty<FPCGExCagePropertyCompiled_Float>(...)  // Safe
GetPropertyByName(...) + manual cast                // Error-prone
```

Type safety prevents runtime errors.

#### Property vs Attribute Naming

**PropertyName**: Internal identifier (cage component name) **OutputAttributeName**: What appears on output points

Can be different:

* PropertyName: "InternalWeight"
* OutputAttributeName: "Weight"

Useful for backwards compatibility or workflow clarity.

#### Limit Property Output

Only output properties you actually use downstream:

* Fewer attributes = better performance
* Clearer data contracts
* Use auto-populate as starting point, then trim

#### Tags for Categorical Data

Use actor tags for **categories** (material type, gameplay role):

* Easier to add/remove than creating property components
* Natural comma-separated output
* Blueprint-friendly (string parsing)

Use properties for **numerical or structured data** (weights, transforms, references).

#### Document Property Meanings

Add comments in cage actors or maintain external property list:

* "SpawnWeight": Relative probability (1.0 = baseline)
* "Cost": Build cost in gameplay currency
* "LODDistance": Distance to switch to LOD variant

Future designers will thank you.

### Common Issues

**"Property not appearing in output"**

* Check `bEnabled` on property output config
* Verify property name matches (case-sensitive)
* Ensure property supports output (Asset Collection doesn't)
* Rebuild bonding rules (properties captured at build time)

**"Property name collision error"**

* Two cages have same PropertyName with different types
* Rename one property or ensure types match
* Check both module properties AND pattern entry properties

**"Query returning null"**

* PropertyName mismatch (typo?)
* Property doesn't exist on this module
* Type mismatch (querying Float, property is Int)

**"Tags not outputting"**

* Check `bOutputModuleTags = true` on node
* Verify cages have actor tags set
* Rebuild bonding rules (tags captured at build time)

**"Inherited property not overriding"**

* Ensure cage's property has **exact same PropertyName** as palette's
* Case-sensitive match required
* Rebuild to apply

**"Auto-populate not finding properties"**

* Bonding rules not compiled (build first)
* Property registry empty (check bonding rules asset)
* Property type doesn't support output

***

**Next:** The Solving Process — Wave Function Collapse and orbital matching deep dive
