---
icon: box-archive
---

# Precompiled Headers (PCH)

**PCGEx uses a three-tier shared PCH system to cut compile times across its 30+ modules.** If you're hitting segfaults on macOS or memory exhaustion errors on Windows during compilation, PCHs are the first thing to disable.

***

**How It Works**

Three modules define shared PCH headers. Every other module consumes them automatically through dependency chains.

```
Tier 1 — PCGExCorePCH.h  (PCGExCore)
  CoreMinimal, PCGCommon, PCGExData, PCGExMath, PCGExContext
  └─ consumed by: all modules

Tier 2 — PCGExFoundationsPCH.h  (PCGExFoundations)
  extends Tier 1 + Filters, Blending, base processor
  └─ consumed by: ~24 modules

Tier 3 — PCGExGraphsPCH.h  (PCGExGraphs)
  extends Tier 2 + Clusters processor
  └─ consumed by: ~13 modules
```

Modules that don't define their own PCH header (most of them) inherit from whichever tier their dependencies provide. The Build.cs for these modules sets `PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs` and lets UBT resolve the rest.

All modules also enable unity builds (`bUseUnity = true`, `inSourceFilesForUnityBuildOverride = 4`).

***

**Disabling PCHs**

Every Build.cs in the plugin checks for the same sentinel file:

```csharp
bool bNoPCH = File.Exists(
    Path.Combine(ModuleDirectory, "..", "..", "Config", ".noPCH"));
PCHUsage = bNoPCH
    ? PCHUsageMode.NoPCHs
    : PCHUsageMode.UseExplicitOrSharedPCHs;
```

The path resolves to `Plugins/PCGExtendedToolkit/Config/.noPCH`. If the file exists, all modules switch to `NoPCHs` mode. The file's contents don't matter — only its existence.

**To disable PCHs:**

Create an empty file at `Plugins/PCGExtendedToolkit/Config/.noPCH`:

{% tabs %}
{% tab title="Windows" %}
`batch type nul > Plugins\PCGExtendedToolkit\Config\.noPCH`
{% endtab %}

{% tab title="macOS / Linux" %}
`bash touch Plugins/PCGExtendedToolkit/Config/.noPCH`
{% endtab %}
{% endtabs %}

#### **When to Disable**

**macOS segfaults during compilation** — Clang on macOS can produce invalid PCH data under certain Xcode/SDK combinations, leading to segmentation faults in the compiler itself (not at runtime). Disabling PCHs forces every translation unit to include headers directly, bypassing the serialized PCH format entirely.

**Windows memory exhaustion** — On machines with limited RAM, large shared PCHs can cause MSVC errors `C3859` or `C1076`. Disabling PCHs trades compile time for lower peak memory usage.

**Diagnosing include issues** — When tracking down missing includes or circular dependencies, disabling PCHs ensures each `.cpp` file only sees the headers it explicitly includes.

{% hint style="danger" %}
## Disabling PCHs increases compile times significantly

The three-tier system exists because PCGEx has many small modules that share a common header set. Expect a noticeably longer full rebuild with PCHs off. Only disable them if you're hitting a concrete problem.
{% endhint %}

***

**Related**

* Guide: [module-cherry-picking-guide.md](module-cherry-picking-guide.md "mention")
* Source: `PCGExCore/Public/PCGExCorePCH.h` — Tier 1 shared PCH
* Source: `PCGExFoundations/Public/PCGExFoundationsPCH.h` — Tier 2 shared PCH
* Source: `PCGExGraphs/Public/PCGExGraphsPCH.h` — Tier 3 shared PCH
