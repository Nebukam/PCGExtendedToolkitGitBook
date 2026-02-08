---
icon: code-branch
---

# Module Cherry-Picking Guide

#### Overview

PCGExtendedToolkit features a modular architecture that allows you to selectively enable only the feature sets you need. This reduces compile times, binary size, and minimizes dependency overhead for production builds.

The cherry-picking system is implemented through:

* **Configuration files** that declare which modules to enable
* **Automated scripts** that generate the plugin manifest (.uplugin)
* **Build-time validation** that ensures dependency integrity

***

#### Quick Start

**1. Configure Enabled Modules**

Edit `Config/PCGExSubModulesConfig.ini` (plugin-level) or `<ProjectRoot>/Config/PCGExSubModulesConfig.ini` (project-level):

````ini
# PCGExtendedToolkit SubModules Configuration
# List the modules you want enabled.

PCGExCollections
PCGExElementsClusters
PCGExElementsPaths
PCGExElementsPathfinding

# Commented modules are disabled
;PCGExElementsZoneGraph
;PCGExElementsWatabou
```<div data-gb-custom-block data-tag="hint" data-style='info'>**Note**: Project-level config takes precedence over plugin-level config.</div>

#### 2. Generate Plugin Manifest

Run the generation script from your project root or the Scripts folder:

**Windows:**

```batch
Plugins\PCGExtendedToolkit\Scripts\RunGeneratePCGExUplugin.bat
````

**macOS/Linux:**

```bash
./Plugins/PCGExtendedToolkit/Scripts/RunGeneratePCGExUplugin.sh
```

The script automatically:

* Detects and uses Node.js or Python (whichever is available)
* Validates module names with fuzzy matching (suggests corrections for typos)
* Resolves module dependencies by scanning Build.cs files
* Adds editor companion modules (e.g., `PCGExGraphsEditor` for `PCGExGraphs`)
* Determines required external plugins from `PluginsDeps.ini`
* Updates `PCGExtendedToolkit.uplugin` with the final module list

**3. Rebuild Project**

After updating the .uplugin, regenerate your project files and rebuild:

```bash
# Right-click .uproject → "Generate Visual Studio project files"
# Then rebuild in your IDE or via UBT
```

***

#### Architecture

**Module Discovery Flow**

```
PCGExSubModulesConfig.ini
         ↓
  [Requested Modules]
         ↓
  Validation & Fuzzy Matching
         ↓
  Dependency Resolution (scan *.Build.cs)
         ↓
  Add Editor Companions
         ↓
  Resolve External Plugin Requirements
         ↓
  Generate PCGExtendedToolkit.uplugin
         ↓
  Build.cs loads modules and validates
```

**Build.cs Validation (Compile-Time)**

The `PCGExtendedToolkit.Build.cs` performs additional validation:

1. **Reads .uplugin** to determine declared modules
2. **Scans each module's Build.cs** to extract PCGEx dependencies
3. **Validates dependencies**: Warns if a module references another module that isn't enabled
4. **Validates editor modules**: Warns if an editor module exists but isn't declared
5. **Validates plugin requirements**: Throws build error if required plugins aren't enabled
6. **Generates header**: Creates `PCGExSubModules.generated.h` containing:
   * `GetEnabledModules()` - list of enabled module names
   * `GetModuleDependencies()` - dependency graph for startup ordering

**Dependency Resolution**

Dependencies are automatically discovered by parsing each module's Build.cs:

```csharp
// In PCGExGraphs.Build.cs
PublicDependencyModuleNames.AddRange(new[] {
    "PCGExCore",
    "PCGExFoundations",
    "PCGExCollections"
});
```

If you enable `PCGExGraphs`, the scripts will automatically include `PCGExCore`, `PCGExFoundations`, and `PCGExCollections` (and their editor companions).

***

#### Configuration Reference

**PCGExSubModulesConfig.ini**

**Location (priority order):**

1. `<ProjectRoot>/Config/PCGExSubModulesConfig.ini` (project-level)
2. `Plugins/PCGExtendedToolkit/Config/PCGExSubModulesConfig.ini` (plugin-level)

**Format:**

```ini
# Comment lines start with # or ;
# List one module name per line

ModuleName1
ModuleName2
;DisabledModule  # Prefix with ; to disable
```

**Supported formats:**

* `ModuleName` - Simple module name
* `ModuleName=1` - Explicit enable (legacy)
* `;ModuleName` or `#ModuleName` - Disabled (commented out)

**Validation:**

* Module names must start with `PCGEx` prefix
* Non-existent modules trigger a warning with fuzzy-match suggestions
* Invalid modules are skipped (build continues)

**PluginsDeps.ini**

**Location:** `Plugins/PCGExtendedToolkit/Config/PluginsDeps.ini`

**Purpose:** Declares external plugin dependencies for specific modules.

**Format:**

```ini
# INI-style sections

[ModuleName]
RequiredPluginName1
RequiredPluginName2

[PCGExElementsTopology]
GeometryScripting
PCGGeometryScriptInterop

[PCGExZoneGraph]
ZoneGraph
```

**Behavior:**

* Scripts add these plugins to the `Plugins` array in .uplugin
* Build.cs validates that listed plugins are actually enabled
* Missing required plugins cause a **compile-time error**

***

#### Available Modules

To discover available modules, browse `Plugins/PCGExtendedToolkit/Source/`:

```
PCGExCore                       # Core framework (always required)
PCGExBlending                   # Blending operations (always required)
PCGExCollections                # Collection handling
PCGExFoundations                # Foundation utilities
PCGExFilters                    # Filtering system
PCGExGraphs                     # Graph operations
PCGExElementsActions            # Action nodes
PCGExElementsBridges            # Bridge generation
PCGExElementsClusters           # Cluster operations
PCGExElementsClustersRefine     # Cluster Refinements
PCGExElementsClustersRelax      # Cluster Relaxation
PCGExElementsClustersDiagrams   # Cluster Diagrams
PCGExElementsFloodFill          # Cluster Diagrams
PCGExElementsMeta               # Metadata operations
PCGExElementsPathfinding        # Pathfinding algorithms
PCGExElementsPathfindingNavmesh # Navmesh pathfinding
PCGExElementsPaths              # Path operations
PCGExElementsProbing            # Probing nodes
PCGExElementsSampling           # Sampling operations
PCGExElementsShapes             # Shape generators
PCGExElementsSpatial            # Spatial queries
PCGExElements3DNoises           # 3D noise generators
PCGExElementsTensors            # Tensor operations
PCGExElementsTopology           # Topology operations
PCGExElementsClipper2           # Clipper2 integration
PCGExElementsValency            # Valency system
```

**Companion editor modules** (automatically included):

* Each runtime module may have a corresponding `<ModuleName>Editor` module
* Example: `PCGExGraphs` → `PCGExGraphsEditor`

***

#### Advanced Usage

**CI/CD Pipeline Integration**

**Generate uplugin in CI:**

```bash
#!/bin/bash
# Assumes Node.js or Python is installed in CI environment

cd /path/to/project
./Plugins/PCGExtendedToolkit/Scripts/RunGeneratePCGExUplugin.sh

if [ $? -ne 0 ]; then
    echo "Failed to generate uplugin manifest"
    exit 1
fi

# Continue with project file generation and build
```

**Validate module list in CI:**

```python
# validate_modules.py
import sys
from pathlib import Path

config_path = Path("Config/PCGExSubModulesConfig.ini")
modules_dir = Path("Plugins/PCGExtendedToolkit/Source")

enabled = []
for line in config_path.read_text().splitlines():
    line = line.strip()
    if line and not line.startswith('#') and not line.startswith(';'):
        module = line.split('=')[0].strip()
        if module.startswith('PCGEx'):
            enabled.append(module)

missing = [m for m in enabled if not (modules_dir / m).exists()]
if missing:
    print(f"ERROR: Missing modules: {missing}")
    sys.exit(1)
```

**Multi-Project Shared Plugin**

If using PCGEx as a shared plugin across multiple projects:

**Option 1: Project-level config (recommended)**

* Each project has its own `<ProjectRoot>/Config/PCGExSubModulesConfig.ini`
* Shared plugin source remains unchanged
* Generate uplugin per-project before build

**Option 2: Build-time generation hook**

* Add pre-build step that runs generation script
* Unreal Build Tool picks up the updated .uplugin automatically

**Minimal Feature Set Example**

For a production build that only needs graph operations and pathfinding:

```ini
# Minimal config
PCGExCollections
PCGExGraphs
PCGExElementsClusters
PCGExElementsPathfinding
```

This excludes:

* Noise generators
* Tensor operations
* Topology/geometry tools
* Third-party integrations (ZoneGraph, Watabou, Clipper2)

Resulting in faster compile times and smaller binaries.

***

#### Troubleshooting

**"Module not found" warnings**

**Symptom:**

```
[WARNING] Invalid module names in PCGExSubModulesConfig.ini:
  - 'PCGExGraps' not found. Did you mean 'PCGExGraphs'?
```

**Solution:**

* Fix the typo in your config file
* The script uses Levenshtein distance (max 3 edits) to suggest corrections

**"Dependency required by \[...] is not declared in .uplugin"**

**Symptom:**

```
[WARNING] Dependency 'PCGExFoundations' required by [PCGExGraphs] is not declared in .uplugin.
```

**Solution:**

* Run the generation script again - it should auto-add missing dependencies
* If the warning persists, manually add the module to PCGExSubModulesConfig.ini

**"Module requires plugin to be listed and enabled"**

**Symptom:**

```
[ERROR] Plugin requirements not met:
  - Module 'PCGExElementsTopology' requires plugin 'GeometryScripting' to be listed and enabled in .uplugin
```

**Solution:**

* The generation script should automatically add required plugins
* Verify PluginsDeps.ini has the correct mapping
* Re-run the generation script

**"Build artifacts from previous configuration"**

**Symptom:**

* Linker errors about missing symbols from disabled modules
* Old module classes still appearing in editor

**Solution:**

*   Clean Binaries and Intermediate folders:

    ```bash
    rm -rf Plugins/PCGExtendedToolkit/Binaries
    rm -rf Plugins/PCGExtendedToolkit/Intermediate
    ```
* Regenerate project files
* Full rebuild

**Script can't find runtime**

**Symptom:**

```
ERROR: Neither Node.js nor Python found.
```

**Solution:**

* Install Node.js (https://nodejs.org) or Python (https://python.org)
* Ensure the runtime is in your system PATH
*   Alternatively, call the script directly:

    ```bash
    node generate-uplugin.js
    # or
    python3 generate-uplugin.py
    ```

***

#### Technical Implementation Details

**Generated Header Format**

The Build.cs generates `Intermediate/Generated/PCGExSubModules.generated.h`:

```cpp
// Auto-generated by PCGExtendedToolkit.Build.cs - DO NOT EDIT
#pragma once
#include "CoreMinimal.h"

namespace PCGExSubModules
{
    inline const TArray<FString>& GetEnabledModules()
    {
        static TArray<FString> Modules = {
            TEXT("PCGExCollections"),
            TEXT("PCGExGraphs"),
            // ...
        };
        return Modules;
    }

    inline const TMap<FString, TArray<FString>>& GetModuleDependencies()
    {
        static TMap<FString, TArray<FString>> Dependencies = {
            { TEXT("PCGExGraphs"), { TEXT("PCGExCore"), TEXT("PCGExFoundations") } },
            // ...
        };
        return Dependencies;
    }
}
```

This header is consumed by `PCGExtendedToolkit.cpp` during `StartupModule()` to load modules in correct dependency order.

**Module Loading Order**

The main module uses a recursive loader to ensure dependencies load first:

```cpp
// From PCGExtendedToolkit.cpp
TFunction<void(const FString&)> LoadWithDeps = [&](const FString& ModuleName)
{
    if (Loaded.Contains(ModuleName)) { return; }

    // Load dependencies first
    if (const TArray<FString>* Deps = Dependencies.Find(ModuleName))
    {
        for (const FString& Dep : *Deps) { LoadWithDeps(Dep); }
    }

    // Now load this module
    FModuleManager::Get().LoadModule(*ModuleName);
    Loaded.Add(ModuleName);
};
```

This ensures no module loads before its dependencies, preventing initialization-order issues.

**Dependency Scanning Regex**

The scripts use regex to extract dependencies from Build.cs files:

**Pattern:**

```regex
(?:Public|Private)DependencyModuleNames\s*\.\s*AddRange\s*\(\s*new\s*(?:string)?\s*\[\s*\]\s*\{([^}]*)\}
```

**Matched code:**

```csharp
PublicDependencyModuleNames.AddRange(new[] { "PCGExCore", "PCGExGraphs" });
PrivateDependencyModuleNames.AddRange(new string[] { "PCGExFilters" });
```

Only modules starting with `PCGEx` are considered internal dependencies.

***

#### Performance Considerations

**Compile Time Reduction**

Typical savings when disabling unused feature sets:

| Configuration              | Modules | Clean Build Time | Iteration Time |
| -------------------------- | ------- | ---------------- | -------------- |
| Full (\~20 modules)        | 20      | \~12 min         | \~45 sec       |
| Graphs + Paths (8 modules) | 8       | \~6 min          | \~20 sec       |
| Minimal (4 modules)        | 4       | \~3 min          | \~12 sec       |

_Times are approximate and depend on hardware_

**Binary Size Impact**

Shipping build size reduction (approximate):

* Full feature set: \~85 MB (plugin DLL)
* Graphs + Paths: \~45 MB (47% reduction)
* Minimal: \~25 MB (70% reduction)

**Editor Startup Time**

Each disabled module saves \~50-200ms during editor startup (cumulative).

***

#### Best Practices

1. **Start minimal**: Enable only modules you actively use
2. **Use project-level config**: Keep plugin source clean for version control
3. **Commit generated .uplugin**: Ensures team members have consistent builds
4. **Run generation in CI**: Validate configuration before merge
5. **Document your config**: Add comments explaining why specific modules are enabled
6. **Test incrementally**: When adding modules, verify dependencies resolve correctly

***

#### Migration Guide

**From Full Plugin to Cherry-Picked**

1. **Audit node usage**: Identify which PCGEx nodes your project uses
2. **Map to modules**: Check node class prefixes (e.g., `UPCGExGraphSettings` → `PCGExGraphs`)
3. **Create config**: Start with identified modules only
4. **Generate and test**: Run generation script, rebuild, test in editor
5. **Iterate**: Add missing modules as compilation/runtime errors surface

**Updating Config for New Features**

When adding a new PCGEx feature to your project:

1. Identify the module containing the node/feature
2. Add the module name to PCGExSubModulesConfig.ini
3. Run generation script (dependencies added automatically)
4. Rebuild

No manual .uplugin editing required.

***

#### FAQ

**Q: Are PCGExCore and PCGExBlending always required?** A: Yes. They are base dependencies for all other modules and are automatically included even if not listed in the config.

**Q: Can I selectively disable editor modules?** A: No. Editor modules are automatically included if their runtime counterpart is enabled. This ensures editor visualizations and tools remain functional.

**Q: What happens if I manually edit .uplugin?** A: The generation script overwrites it. Always use PCGExSubModulesConfig.ini to manage modules.

**Q: Can I use environment variables in the config?** A: Not currently supported. The config parser only handles static module names and comments.

**Q: Does this work with Unreal's plugin marketplace version?** A: This feature is designed for source builds. Marketplace binaries include all modules pre-compiled.

**Q: How do I find which module contains a specific node?** A: Check the node's class prefix in C++. For example:

* `UPCGExPathfindingNavmeshSettings` → `PCGExElementsPathfindingNavmesh`
* `UPCGExProbeFactoryBase` → `PCGExElementsProbing`

**Q: Can I create custom module bundles?** A: Yes. Create separate config files (e.g., `PCGExSubModulesConfig_Minimal.ini`) and swap them before generation. Alternatively, maintain multiple .uplugin files and swap them via build scripts.

***

#### Related Files

* **Build script**: `Source/PCGExtendedToolkit/PCGExtendedToolkit.Build.cs`
* **Main module**: `Source/PCGExtendedToolkit/Private/PCGExtendedToolkit.cpp`
* **Generation scripts**: `Scripts/generate-uplugin.{py,js}`
* **Runtime launchers**: `Scripts/RunGeneratePCGExUplugin.{bat,sh}`
* **Plugin manifest**: `PCGExtendedToolkit.uplugin` (auto-generated)
* **Generated header**: `Intermediate/Generated/PCGExSubModules.generated.h` (auto-generated)

***

#### Support

For issues with cherry-picking:

1. Verify module names match source folder names exactly (case-sensitive)
2. Run generation script with verbose output to see resolution steps
3. Check Build.cs warnings for dependency issues
4. Consult this guide's troubleshooting section

For feature-specific questions, go to the [Discord](https://discord.gg/mde2vC5gbE)!.
