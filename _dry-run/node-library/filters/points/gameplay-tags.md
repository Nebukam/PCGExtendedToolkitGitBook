---
icon: tags
description: 'In editor :: PCGEx | Filter : Gameplay Tags'
---

# Gameplay Tags

Evaluates gameplay tag queries on actors referenced by points.

## How It Works

For each point:

1. Read **actor reference** from the specified attribute
2. Resolve the actor in the world
3. Navigate **property path** to find the tag container
4. Evaluate **tag query** against the container
5. Return result: pass if query matches

## Settings

### Actor Reference

<details>
<summary><strong>Actor Reference</strong> <code>FName</code></summary>

The attribute containing the actor reference (soft object path or actor pointer).

Default: `"ActorReference"`

⚡ PCG Overridable

</details>

### Tag Container

<details>
<summary><strong>Property Path</strong> <code>FString</code></summary>

Path to the gameplay tag container property on the actor. Use dot notation to navigate nested properties.

Examples:
- `Tags` - Direct property on actor
- `Component.TagContainer` - Property on a component
- `CharacterData.AbilityTags` - Nested struct property

Default: `"Component.TagContainer"`

⚡ PCG Overridable

</details>

### Tag Query

<details>
<summary><strong>Tag Query</strong> <code>FGameplayTagQuery</code></summary>

The gameplay tag query to evaluate. Supports standard Unreal tag query syntax:

- **Any Tags Match** - Has at least one of the specified tags
- **All Tags Match** - Has all of the specified tags
- **No Tags Match** - Has none of the specified tags
- **Complex Queries** - AND/OR combinations

</details>

### Fallback Behavior

<details>
<summary><strong>Fallback Missing Actor</strong> <code>bool</code></summary>

Filter result when the actor reference cannot be resolved.

Default: `false` (fail)

</details>

<details>
<summary><strong>Fallback Property Path</strong> <code>bool</code></summary>

Filter result when the property path cannot be resolved.

Default: `false` (fail)

</details>

<details>
<summary><strong>Quiet Missing Property Warning</strong> <code>bool</code></summary>

Suppress warning messages when property path resolution fails.

Default: `false`

</details>

## Prerequisites

For this filter to work:
1. Points must have an attribute containing valid actor references
2. The referenced actors must exist in the world
3. The property path must lead to a valid `FGameplayTagContainer`

## Examples

**Keep points referencing enemies**:
- Actor Reference: `SpawnedActor`
- Property Path: `Tags`
- Tag Query: Any tags match `Enemy`

**Keep points for actors with full ability set**:
- Actor Reference: `CharacterRef`
- Property Path: `AbilityComponent.OwnedTags`
- Tag Query: All tags match `Ability.Attack`, `Ability.Defend`

## Related

- [Boolean Compare](./boolean-compare.md) - Simple true/false attributes
- [String Compare](./string-compare.md) - String-based classification

---

📦 **Module**: `PCGExFilters` · 📄 [Source](https://github.com/Nebukam/PCGExtendedToolkit/blob/main/Source/PCGExFilters/Private/Filters/Points/PCGExGameplayTagsFilter.cpp)
