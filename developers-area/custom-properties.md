---
icon: puzzle-piece
---

# Custom Properties

**Properties are lightweight value structs that know how to write themselves to PCG point attributes.** They're `USTRUCT`-based (not UObject), polymorphic via `FInstancedStruct`, and discovered automatically by UHT. No registration step, no factory pattern — define the struct, implement the interface, done.

The source header (`PCGExProperty.h`, lines 58–93) contains a numbered extension guide. This page walks through it with context.

***

#### Architecture

```
FPCGExProperty (USTRUCT base)
  └─ PropertyName                     ← user-defined name for disambiguation
  └─ virtual interface                ← 10 methods for output, copy, metadata
      │
      ├─ FPCGExProperty_Vector        ← simple: Value type == Output type (macro)
      ├─ FPCGExProperty_Color         ← converting: FLinearColor → FVector4 (manual)
      └─ FPCGExProperty_AssetCollection ← reference-only: no output support

FInstancedStruct                       ← polymorphic container
  └─ holds any FPCGExProperty derivative
  └─ UI picker constrained via meta=(BaseStruct=".../PCGExProperty")

FPCGExPropertySchemaCollection         ← defines a set of typed properties
  └─ used by Collections, Tuple, Valency
  └─ handles override sync, registry building
```

Properties support two independent output mechanisms:

- **Point attribute output** — `InitializeOutput()` creates a buffer on a facade; `WriteOutput()` / `WriteOutputFrom()` writes to it per-point
- **Metadata attribute output** — `CreateMetadataAttribute()` + `WriteMetadataValue()` for param data tables (used by the Tuple node)

Both are optional. A property can support one, both, or neither (reference-only).

***

#### What You Need

For a **simple property** (Value type matches output type):

1. A `USTRUCT` in a header, subclassing `FPCGExProperty`
2. A `Value` UPROPERTY (the authored field)
3. A protected `TSharedPtr<PCGExData::TBuffer<ValueType>> OutputBuffer`
4. One line in the `.cpp`: `PCGEX_PROPERTY_IMPL(ValueType, StructSuffix)`

That's it. The macro generates all six method implementations.

For a **converting property** (Value type differs from output type): implement all methods manually. For a **reference-only property**: override only `GetTypeName()`, skip the output interface.

***

#### Step-by-Step: Simple Property (Macro)

**Header** — define the struct following the built-in pattern:

```cpp
// In PCGExPropertyTypes.h or your own module header

USTRUCT(BlueprintType, meta=(PCGExInlineValue))
struct MYMODULE_API FPCGExProperty_MyType : public FPCGExProperty
{
    GENERATED_BODY()

    UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Property")
    FMyValueType Value;  // the user-editable value

protected:
    TSharedPtr<PCGExData::TBuffer<FMyValueType>> OutputBuffer;

public:
    virtual bool InitializeOutput(const TSharedRef<PCGExData::FFacade>& OutputFacade, FName OutputName) override;
    virtual void WriteOutput(int32 PointIndex) const override;
    virtual void WriteOutputFrom(int32 PointIndex, const FPCGExProperty* Source) const override;
    virtual void CopyValueFrom(const FPCGExProperty* Source) override;
    virtual bool SupportsOutput() const override { return true; }
    virtual EPCGMetadataTypes GetOutputType() const override { return EPCGMetadataTypes::/* your type */; }
    virtual FName GetTypeName() const override { return FName("MyType"); }
    virtual FPCGMetadataAttributeBase* CreateMetadataAttribute(UPCGMetadata* Metadata, FName AttributeName) const override;
    virtual void WriteMetadataValue(FPCGMetadataAttributeBase* Attribute, int64 EntryKey) const override;
};
```

**Implementation** — one line:

```cpp
// In PCGExPropertyTypes.cpp or your own .cpp

PCGEX_PROPERTY_IMPL(FMyValueType, MyType)
```

The macro expands to all six method bodies. Here's what it generates (using `FVector` as an example):

```cpp
// InitializeOutput — creates a writable buffer on the facade
bool FPCGExProperty_Vector::InitializeOutput(
    const TSharedRef<PCGExData::FFacade>& OutputFacade, FName OutputName)
{
    OutputBuffer = OutputFacade->GetWritable<FVector>(
        OutputName, Value, true, PCGExData::EBufferInit::Inherit);
    return OutputBuffer.IsValid();
}

// WriteOutput — writes this->Value to buffer at PointIndex
void FPCGExProperty_Vector::WriteOutput(int32 PointIndex) const
{
    check(OutputBuffer);
    OutputBuffer->SetValue(PointIndex, Value);
}

// WriteOutputFrom — reads from Source, writes to buffer (thread-safe)
void FPCGExProperty_Vector::WriteOutputFrom(
    int32 PointIndex, const FPCGExProperty* Source) const
{
    check(OutputBuffer);
    const FPCGExProperty_Vector* Typed =
        static_cast<const FPCGExProperty_Vector*>(Source);
    OutputBuffer->SetValue(PointIndex, Typed->Value);
}

// CopyValueFrom — copies Source->Value into this->Value
void FPCGExProperty_Vector::CopyValueFrom(const FPCGExProperty* Source)
{
    const FPCGExProperty_Vector* Typed =
        static_cast<const FPCGExProperty_Vector*>(Source);
    Value = Typed->Value;
}
```

***

#### Step-by-Step: Converting Property (Manual)

When your authored type differs from the PCG attribute type, implement each method by hand. The Color property demonstrates this — `FLinearColor` in the editor, `FVector4` in the buffer:

```cpp
// Header: Value is FLinearColor, but OutputBuffer is TBuffer<FVector4>
UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Property")
FLinearColor Value = FLinearColor::White;

protected:
TSharedPtr<PCGExData::TBuffer<FVector4>> OutputBuffer;
```

```cpp
// Implementation: convert on every write
bool FPCGExProperty_Color::InitializeOutput(
    const TSharedRef<PCGExData::FFacade>& OutputFacade, FName OutputName)
{
    OutputBuffer = OutputFacade->GetWritable<FVector4>(
        OutputName, FVector4(Value), true, PCGExData::EBufferInit::Inherit);
    return OutputBuffer.IsValid();
}

void FPCGExProperty_Color::WriteOutputFrom(
    int32 PointIndex, const FPCGExProperty* Source) const
{
    check(OutputBuffer);
    const FPCGExProperty_Color* Typed =
        static_cast<const FPCGExProperty_Color*>(Source);
    OutputBuffer->SetValue(PointIndex, FVector4(Typed->Value));
}
```

The pattern is the same — you just insert the conversion at each write site.

***

#### Step-by-Step: Reference-Only Property

Some properties exist purely as authored data — they hold a value that other systems read directly, but they never write to point attributes. The `FPCGExProperty_AssetCollection` demonstrates this:

```cpp
USTRUCT(BlueprintType)
struct FPCGExProperty_AssetCollection : public FPCGExProperty
{
    GENERATED_BODY()

    UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Property")
    TSoftObjectPtr<UPCGExAssetCollection> AssetCollection;

    virtual FName GetTypeName() const override { return FName("AssetCollection"); }
    // No output overrides — SupportsOutput() returns false by default
};
```

The base class defaults handle everything: `SupportsOutput()` returns `false`, all output methods are no-ops.

***

#### Thread Safety

{% hint style="warning" %}
`WriteOutputFrom()` is the **only** thread-safe write method. It reads from the Source parameter and writes directly to the buffer without mutating `this`.

`CopyValueFrom()` + `WriteOutput()` mutates the `Value` field — only use this pattern in single-threaded contexts.

`InitializeOutput()` must be called during the boot phase (single-threaded).
{% endhint %}

***

#### Discovery & Registration

There is no registration step. UHT discovers your `USTRUCT` automatically. Your type appears in any `FInstancedStruct` picker that uses `meta=(BaseStruct="/Script/PCGExProperties.PCGExProperty")`.

The optional `meta=(PCGExInlineValue)` tag controls how the property appears in the `FInstancedStruct` picker UI. Add it if you want compact inline display.

Properties can live in any module — they just need to derive from `FPCGExProperty`. The built-in types live in `PCGExProperties`, but the `FPCGExProperty_AssetCollection` lives in `PCGExCollections`, demonstrating cross-module property definitions.

***

#### Reference Implementations

| Type | Path | Pattern |
|------|------|---------|
| `FPCGExProperty_Vector` | `PCGExProperties/Public/PCGExPropertyTypes.h` | Simple (macro-based) |
| `FPCGExProperty_Color` | `PCGExProperties/Public/PCGExPropertyTypes.h` | Converting (FLinearColor → FVector4) |
| `FPCGExProperty_Enum` | `PCGExProperties/Public/PCGExPropertyTypes.h` | Converting (FEnumSelector → int64) |
| `FPCGExProperty_AssetCollection` | `PCGExCollections/Public/Collections/PCGExCollectionPropertyTypes.h` | Reference-only (no output) |

For the macro expansion and manual implementations side-by-side, see `PCGExProperties/Private/PCGExPropertyTypes.cpp`.

***

#### Related

- Source: `PCGExProperties/Public/PCGExProperty.h` — base class with inline extension guide
- Source: `PCGExProperties/Public/PCGExPropertyTypes.h` — all built-in types
- Source: `PCGExProperties/Private/PCGExPropertyTypes.cpp` — `PCGEX_PROPERTY_IMPL` macro and manual implementations
- Concept: [Collections](../working-with-pcgex/asset-staging/collections.md) (properties are used extensively in the collection system)
