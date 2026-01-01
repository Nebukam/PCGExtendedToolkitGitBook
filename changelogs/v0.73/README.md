---
description: Tracking changes since 0.72
icon: tag
---

# v0.73

{% hint style="warning" %}
## Fix your redirectors before updating to this version!

This updates cleans up old redirectors in the config files; so make sure to fix your redirectors before updating or you will loose some config values.
{% endhint %}

{% hint style="info" %}
**At the time of writing, these changes are in their respective `-module-breakdown` branches, and not on main yet.**
{% endhint %}

## Module Breakdown Update

**This is a huge one for people building from source;** _folks using the precompiled binaries can stop reading there : there's no new major user-facing feature :)_

#### What's in it for you?

* Significantly improved compilation times. _(\~25-30% faster)_
* Smaller, more granular dependencies when extending the codebase.
* Granular control over the compiled feature set. _(See_ [_cherry picking_](./#feature-set-cherry-picking)_)_

{% hint style="success" %}
Skip to [#migration](./#migration "mention") if you just want the critical infos
{% endhint %}

> Historically, PCGEx has always been a plugin with a single internal module : PCGExtendedToolkit and its editor companion.
>
> As some of you know compile times for the plugin have been a pet peeve of mine, and i've been focusing on alleviating that over the past month. From type erasure to include cleanups, the last remaining step (and also the most painful one) was breaking down the monolith into smaller modules.
>
> _The only downside I've seen is an explosion in size of debug symbols (.pdb), but the full plugin is still \~30mb of dlls._



***

## Migration

Because the way unreal works and references classes by module+name, this update technically breaks _everything_. <mark style="color:$warning;">Currently, each module inject redirects at runtime</mark> from `PCGExtendedToolkit.XXX` to `PCGExSubModuleName.XXX` . Needless to say that's quickly a lot of useless redirects (_\~480)_

Once you're done with the migration, go to `Source/PCGExCore/PCGExCore.Build.cs` and change this line:

```
PublicDefinitions.Add("PCGEX_SUBMODULE_CORE_REDIRECT_ENABLED=1");
```

to this

```
PublicDefinitions.Add("PCGEX_SUBMODULE_CORE_REDIRECT_ENABLED=0");
```

And you'll need to recompile the plugin.

#### Custom code

{% hint style="info" %}
For those who rely on the API, you might need to revisit some includes but **struct/class name haven't changed** but include paths did.\
\
&#xNAN;_&#x53;ome utils structs have been moved around or isolated in their own file to allow more granular includes; so you may need to update those._
{% endhint %}

Most likely you'll need to declare dependencies on `PCGExCore` & `PCGExFoundations` which are the two core libs. If you rely on...

* Filters : `PCGExFilters`
* Data/Target Matching : `PCGExMatching`
* Heuristics : `PCGExHeuristics`
* Building Graph / Cluster nodes : `PCGExGraphs`&#x20;
  * _If you only consume clusters, `FCluster` is part of `PCGExCore`._
* Existing Cluster nodes (i.e `BuildCustomGraph`) : `PCGExElementsClusters`

#### Known Issues

{% hint style="danger" %}
### Broken Custom Types on Subgraphs pins

There was no way to "redirect" the custom pin types, so if you were using them in your subgraph, the editor will throw an error (but should not crash) — affected pins will be of type `None` and they will have no icon so it's easy to spot them.
{% endhint %}

{% hint style="warning" %}
#### Actor Data Packer Parent class misredirect

In my test cases, the parent blueprint class for custom [pack-actor-data](../../node-library/quality-of-life/pack-actor-data/ "mention")was reset — I suspect it's just a failed redirect from an _old_ redirect. If that happens to you, worry not: no data is lost. You just need to make sure you implement the `Initialize` method, as opposed to the old `InitializeWithContext`.&#x20;

The old method override should still be there with your init : copy paste it in the proper function.
{% endhint %}

***

### Feature Set Cherry Picking

Unreal didn't made it easy, <mark style="color:$success;">**but it's now possible to cherry pick the feature set to compile the plugin with.**</mark> I've added some handy scripts to automatically pull boilerplate dependencies and generate a clean .uplugin that's tailored to your config.

{% hint style="info" %}
The script requires either [**NodeJS**](https://nodejs.org/) or [**Python**](https://python.org/) (3.10+) to be installed.
{% endhint %}

{% stepper %}
{% step %}
### Create a config file for your project

Copy-paste the default submodule config from `PCGExtendedToolkit/Config/PCGExSubModulesConfig.ini` to `[YourProject]/Config/PCGExSubModulesConfig.ini`.

Comment out the sub-modules you don't care about.&#x20;

> The legacy, complete feature set is enabled by default but if you want to shave some compile time and reduce dependencies on external plugins you don't care about, easy candidates are :
>
> \- `PCGExElementsPathfindingNavmesh` _(pulls the nav system)_
>
> _-_ `PCGExElementsTopology` _(pulls `GeometryScript` and `PCGGeometryScriptInterop`),_
>
> _-_ `PCGExElementsTensors` (_which I know very few people are using_)
{% endstep %}

{% step %}
### Regenerate the .uplugin

Go to `PCGExtendedToolkit/Config/Scripts/` and run the .bat if you're on windows, or .sh if you're on macos/linux; this will regenerate a .uplugin with the right declarations.

{% hint style="info" %}
It kindda sucks but you'll have to regenerate the .uplugin each time you pull. However **you can copy the RunGeneratePCGExUplugin in your project root and execute it from there, it'll work all the same.**
{% endhint %}

> Note that Binaries & Intermediates folders will be deleted when regenerating the .uplugin
{% endstep %}

{% step %}
### Recompile

That's it.
{% endstep %}
{% endstepper %}

***

### Modules Dependency Graph

This is what the dependencies look like:

* A couple for core modules that each isolate a set of low level features/ecosystems (`Blending`, `Filters`, `Graphs`, etc)
* Feature-centric modules which contains actual nodes
* Foundations comes with a few basic nodes

> I know this looks completely overkill, but it's actually much better for compile times and maintenance to split things that way.

```mermaid
---
config:
  flowchart:
    nodeSpacing: 80
    rankSpacing: -20
  layout: dagre
---
flowchart RL
    M0["PCGExBlending"] --> M2["PCGExCore"]
    M1["PCGExCollections"] --> M2 & M16["PCGExFilters"] & M17["PCGExFoundations"]
    M3["PCGExElementsActions"] --> M2 & M16 & M17
    M6["PCGExElementsMeta"] --> M16 & M2 & M0 & M21["PCGExPickers"] & M17
    M4["PCGExElementsBridges"] --> M2 & M16 & M17
    M5["PCGExElementsClusters"] --> M2 & M16 & M0 & M20["PCGExMatching"] & M19["PCGExHeuristics"] & M17 & M18["PCGExGraphs"]
    M7["PCGExElementsPathfinding"] --> M2 & M0 & M20 & M19 & M17 & M18
    M8["PCGExElementsPathfindingNavmesh"] --> M2 & M0 & M17 & M7
    M9["PCGExElementsPaths"] --> M2 & M16 & M20 & M0 & M17
    M10["PCGExElementsProbing"] --> M2 & M16 & M17 & M18
    M11["PCGExElementsSampling"] --> M2 & M16 & M20 & M0 & M17
    M12["PCGExElementsShapes"] --> M2 & M16 & M17
    M13["PCGExElementsSpatial"] --> M2 & M16 & M0 & M20 & M18 & M17
    M14["PCGExElementsTensors"] --> M2 & M16 & M19 & M17 & M10
    M15["PCGExElementsTopology"] --> M2 & M16 & M17 & M18
    M16 --> M2 & M20 & M21
    M17 --> M2 & M0 & M16 & M21 & M20
    M18 --> M2 & M0 & M16 & M19 & M20 & M17
    M19 --> M2
    M20 --> M2
    M22["PCGExtendedToolkit"]

     M1:::leaf
     M3:::leaf
     M6:::leaf
     M4:::leaf
     M5:::leaf
     M7:::leaf
     M8:::leaf
     M9:::leaf
     M10:::leaf
     M11:::leaf
     M12:::leaf
     M13:::leaf
     M14:::leaf
     M15:::leaf
     M22:::main
     M17:::main
    classDef leaf stroke:#3ec188,stroke-width:2px
    classDef main stroke:#b29d09,stroke-width:2px

```

***

## Tweaks

#### Bounds Check Revamp

This release does come with a few tweaks and a lot of small bugfixes here and there. But most notably a complete refactor of OBB x OBB checks. This affects [bounds.md](../../node-library/filters/filters-points/spatial/bounds.md "mention"), [path-bounds-intersection.md](../../node-library/paths/path-bounds-intersection.md "mention"), [nearest-bounds.md](../../node-library/sampling/nearest-bounds.md "mention"), and [self-pruning.md](../../node-library/sampling/self-pruning.md "mention")

{% hint style="info" %}
Check your bounds filter, they might need a change of bounds target as a result. Some things were working "the wrong way" before!
{% endhint %}

_Also comes with some class cleanups, as historically a point cloud designed for testing was made available at a stupidly low level. Legacy from the early days of the plugin..._

#### Async Work Distribution

The number of batches distributed to threads is now less arbitrary — since the beginning of the plugin it was an int exposed in the plugin settings; defaulting to 512 or 1024 (probably what's in your config if you never changed it). The size of the batches are now computed as:

```c++
NumIterations / FPlatformMisc::NumberOfCores() * 2); // Desired
NumIterations / FPlatformMisc::NumberOfCores() * 4); // But never more than
```

This considerably reduces the synchronization overhead on big datasets, and creates less-but-larger allocations per batch.
