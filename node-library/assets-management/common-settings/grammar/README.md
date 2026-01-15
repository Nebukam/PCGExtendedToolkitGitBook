---
icon: list-tree
---

# Grammar

#### Settings

<details>

<summary><strong>Symbol</strong> <code>FName</code></summary>

Symbol for the grammar.

</details>

<details>

<summary><strong>Scale Mode</strong> <code>EPCGExGrammarScaleMode</code></summary>

If the volume can be scaled to fit the remaining space or not.

**Values:**

* **Fixed**: Fixed size. Will use the bound size of the selected axis.
* **Flexible**: Flexible size. Will use the bound size of the selected axis as a base but will be marked scalable.

</details>

<details>

<summary><strong>Size</strong> <code>EPCGExGrammarSizeReference</code></summary>

If the volume can be scaled to fit the remaining space or not.

**Values:**

* **X**: X size
* **Y**: Y size
* **Z**: Z axis
* **Smallest**: Use smallest axis size
* **Largest**: Use largest axis size
* **Average**: Average size of all axes.

</details>

<details>

<summary><strong>Debug Color</strong> <code>FLinearColor</code></summary>

For easier debugging, using Point color in conjunction with PCG Debug Color Material.

</details>

#### Used In

* AssetCollection

***

Defined in: `Source\PCGExCollections\Public\Core\PCGExAssetGrammar.h`
