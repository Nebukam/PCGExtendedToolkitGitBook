# Grammar (Collection)

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

<summary><strong>Size Mode</strong> <code>EPCGExCollectionGrammarSize</code></summary>

How to define the size of this collection "as a grammar module"

**Values:**

* **Fixed**: Fixed size.
* **Smallest**: Uses the smallest size found within the collection entries.
* **Largest**: Uses the largest size found within the collection entries.
* **Average**: Uses an average of the sizes of all the collection entries.

</details>

<details>

<summary><strong>Size</strong> <code>double</code></summary>

Fixed size

</details>

<details>

<summary><strong>Debug Color</strong> <code>FLinearColor</code></summary>

For easier debugging, using Point color in conjunction with PCG Debug Color Material.

</details>

#### Used In

* AssetCollection

***

Defined in: `Source\PCGExCollections\Public\Core\PCGExAssetGrammar.h`
