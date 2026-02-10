---
description: A single checkbox that silently breaks packaged builds.
icon: triangle-exclamation
---

# EditorOnly Subgraphs

{% hint style="danger" %}
If any PCG graph in your project has the `Editor Only` toggle enabled, your packaged build will silently lose content. Read this before shipping.
{% endhint %}

## The Problem

<figure><img src="../../.gitbook/assets/image (43).png" alt=""><figcaption></figcaption></figure>

This checkbox looks harmless. It isn't.

During cooking, Unreal checks each asset to determine whether it's editor-only. PCG graphs implement this check **recursively** — if any node in the graph (including disconnected, culled, or disabled nodes) has this toggle set to `true`, the entire graph hierarchy is flagged `EditorOnly` and stripped from the build.

The consequences cascade:

- The graph itself is removed from the cooked package
- Every PCG Component referencing that graph becomes `null`
- Every actor relying on those components loses its procedural content
- **No warning is logged during cooking** — the content simply vanishes

A single forgotten checkbox on a disconnected debug subgraph can silently null out entire levels.

## Detection

PCGEx ships a console command to audit your project:

```
pcgex.ListEditorOnlyGraphs
```

This scans every PCG graph asset and reports which ones will be flagged by the cooking process, including the full path. Run it before any packaging pass.

---

If you need the same functionality without PCGEx, here's a standalone console command you can drop into any module:

```cpp
static FAutoConsoleCommand CommandListEditorOnlyGraphs(
		TEXT("pcgex.ListEditorOnlyGraphs"),
		TEXT("Finds all graph marked as IsEditorOnly."),
		FConsoleCommandDelegate::CreateLambda(
			[]()
			{
				const FAssetRegistryModule& AssetRegistryModule = FModuleManager::LoadModuleChecked<FAssetRegistryModule>("AssetRegistry");
				const IAssetRegistry& AssetRegistry = AssetRegistryModule.Get();

				FARFilter Filter;
				Filter.ClassPaths.Add(UPCGGraph::StaticClass()->GetClassPathName());
				Filter.bRecursiveClasses = true;

				TArray<FAssetData> AssetDataList;
				AssetRegistry.GetAssets(Filter, AssetDataList);

				if (AssetDataList.IsEmpty())
				{
					UE_LOG(LogTemp, Warning, TEXT("No Editor-only graph found."));
					return;
				}

				const int32 NumTotalGraphs = AssetDataList.Num();
				int32 NumEditorOnlyGraphs = 0;
				for (const FAssetData& AssetData : AssetDataList)
				{
					if (UPCGGraph* Graph = Cast<UPCGGraph>(AssetData.GetAsset()))
					{
						if (Graph->IsEditorOnly())
						{
							NumEditorOnlyGraphs++;
							UE_LOG(LogTemp, Warning, TEXT("%s"), *Graph->GetPathName());
						}
					}
				}

				UE_LOG(LogTemp, Warning, TEXT("Found %d EditorOnly graphs out of %d inspected graphs."), NumEditorOnlyGraphs, NumTotalGraphs);
			}));
```

