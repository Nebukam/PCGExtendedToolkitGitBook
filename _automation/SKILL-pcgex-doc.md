# PCGEx Documentation Skill

This skill enables Claude Code to document PCGEx nodes with full source code context.

## Usage

From Claude Code, say:
- "Document the Bevel node"
- "Document UPCGExBevelPathSettings"
- "Review the bevel.md documentation"

## How It Works

1. **Index Check**: Verify `_automation/index/` exists (run `index-generator.ps1` if not)
2. **Context Assembly**: Load node from index, read source files, resolve dependencies
3. **Documentation**: Write markdown following the template
4. **Validation**: Verify all UPROPERTYs documented

## Manual Workflow

If automation isn't set up, follow this manual process:

### Step 1: Find the Source Files

```
Source Base: D:\GIT\PCGExWorkbench\Plugins\PCGExtendedToolkit\Source
```

Node naming pattern:
- Class: `UPCGEx<NodeName>Settings`
- Header: `Source/PCGExElements<Module>/Public/Elements/PCGEx<NodeName>.h`
- Impl: `Source/PCGExElements<Module>/Private/Elements/PCGEx<NodeName>.cpp`

### Step 2: Extract from Header

Look for:
```cpp
PCGEX_NODE_INFOS(Identifier, "Category : Display Name", "Description")
```

Extract ALL `UPROPERTY(...)` blocks:
```cpp
UPROPERTY(EditAnywhere, BlueprintReadWrite, Category="Group", meta=(PCG_Overridable))
Type PropertyName = Default;
```

### Step 3: Extract Pins from CPP

```cpp
TArray<FPCGPinProperties> UPCGExNodeSettings::InputPinProperties() const
{
    // FName("PinName")
}
```

### Step 4: Resolve Nested Types

For any `FPCGEx*` or `EPCGEx*` type:
- Find its definition header
- Document all its properties/values

### Step 5: Write Documentation

Follow template in `_notes/TEMPLATES.md`

## Validation Checklist

Before marking complete:
- [ ] Every UPROPERTY documented
- [ ] Correct types (exact C++ type)
- [ ] Correct defaults (from source)
- [ ] PCG_Overridable marked with ⚡
- [ ] EditCondition visibility noted
- [ ] All input pins listed
- [ ] All output pins listed
- [ ] Nested types expanded
- [ ] Module name correct
- [ ] Source link valid

## Quick Reference

### Common Nested Types

| Type | Location | Used For |
|------|----------|----------|
| FPCGExDistanceDetails | PCGExCore/Details | Distance calculations |
| FPCGExDotComparisonDetails | PCGExCore/Details | Dot product comparisons |
| FPCGExCarryOverDetails | PCGExBlending/Details | Attribute carry-over |
| EPCGExInputValueType | PCGExCore | Constant/Attribute pattern |

### Module Mapping

| Module | Category | Doc Path |
|--------|----------|----------|
| PCGExElementsPaths | paths | node-library/paths/ |
| PCGExElementsClusters | clusters | node-library/clusters/ |
| PCGExElementsSampling | sampling | node-library/sampling/ |
| PCGExFilters | filters | node-library/filters/ |

## Automation Scripts

Located in `_automation/scripts/`:

| Script | Purpose |
|--------|---------|
| `index-generator.ps1` | Parse source → JSON index |
| `queue-builder.ps1` | Create task queue from index |
| `run-single.ps1` | Assemble context for one node |
| `orchestrator.ps1` | Run multiple agents |

## Example Session

```
User: Document the Subdivide node

Claude: Let me assemble the context for the Subdivide node.

[Reads: _automation/index/nodes.json]
[Reads: Source/PCGExElementsPaths/Public/Elements/PCGExSubdividePath.h]
[Reads: Source/PCGExElementsPaths/Private/Elements/PCGExSubdividePath.cpp]
[Resolves: EPCGExSubdivideMode enum]

Now I'll write the documentation following the template...

[Writes: _dry-run/node-library/paths/subdivide.md]

Documentation complete. Verification:
- UPROPERTYs: 8/8 documented
- Inputs: 2/2 documented
- Outputs: 1/1 documented
- Nested types: 1 enum resolved
```
