---
icon: gear-complex
---

# Pattern Matcher

Base factory for creating pattern matcher operations in the valency system.

### Overview

This is the abstract base class for all pattern matcher factories. Pattern matchers receive compiled patterns from bonding rules, scan cluster topology for matches, and annotate matched nodes with pattern metadata. Derived matchers implement different matching strategies — the factory handles pattern selection filtering and operation lifecycle.

### How It Works

1. **Pattern Selection**: Filters the available pattern set by required/excluded tags and explicit pattern names.
2. **Operation Creation**: Creates a matcher operation instance (implemented by derived classes).
3. **Initialization**: Passes compiled patterns, orbital cache, and module data to the operation.
4. **Match Phase**: The operation scans cluster nodes and populates its match results.
5. **Annotate Phase**: Writes `PatternName` and `MatchIndex` attributes to matched nodes.
6. **Custom Output** (optional): Derived matchers can declare additional output pins and write data to them.

**Usage Notes**

* **Abstract Base**: This class is not used directly. Concrete matchers (entropy solver, priority solver, etc.) derive from it.
* **Exclusive Matching**: When enabled, matched nodes are claimed and won't be matched by subsequent matchers in the chain.
* **Pattern Filtering**: Tags and names filter which patterns this matcher considers. Empty filters mean "match all."

### Settings

<details>

<summary><strong>Required Tags</strong> <code>TArray&#x3C;FName></code></summary>

Only consider patterns whose source cage has all of these actor tags. Empty means no tag requirement.

Default: empty

⚡ PCG Overridable

</details>

<details>

<summary><strong>Excluded Tags</strong> <code>TArray&#x3C;FName></code></summary>

Skip patterns whose source cage has any of these actor tags.

Default: empty

⚡ PCG Overridable

</details>

<details>

<summary><strong>Pattern Names</strong> <code>TArray&#x3C;FName></code></summary>

Only match specific patterns by name. Empty means match all patterns (subject to tag filters).

Default: empty

⚡ PCG Overridable

</details>

<details>

<summary><strong>Exclusive</strong> <code>bool</code></summary>

Whether this matcher claims exclusive ownership of matched nodes. When enabled, nodes matched by this matcher won't be available to subsequent matchers in the chain.

Default: `true`

⚡ PCG Overridable

</details>

***

![Static Badge](https://img.shields.io/badge/Module-PCGExElementsValency-473F69)  ·  [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExElementsValency/Public/Core/PCGExPatternMatcherOperation.h)
