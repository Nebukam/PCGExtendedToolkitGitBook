---
icon: book-open
---

# Shared Concepts

These foundational patterns appear throughout PCGEx. Understanding them once helps you work with any node that uses them.

## Core Concepts

<table data-view="cards">
<thead><tr><th></th><th></th></tr></thead>
<tbody>

<tr>
<td><strong>Input Value Sources</strong></td>
<td>How settings can read from constants or attributes</td>
</tr>

<tr>
<td><strong>Distance & Proximity</strong></td>
<td>How distance is measured between points</td>
</tr>

<tr>
<td><strong>Comparison Operators</strong></td>
<td>How values are compared in filters and conditions</td>
</tr>

<tr>
<td><strong>Attribute Mapping</strong></td>
<td>How attributes are copied and renamed</td>
</tr>

<tr>
<td><strong>Bitmask Operations</strong></td>
<td>How bit flags encode multiple states</td>
</tr>

</tbody>
</table>

## Why Shared Concepts?

Many PCGEx nodes share common settings patterns. Rather than re-explain "what does Distance Type mean?" on every node that measures distance, we document it once here.

When you see a setting you don't recognize, check if there's a shared concept page for it. The node documentation will link here when relevant.

## Common Node Settings

All PCGEx nodes share a set of [Common Node Settings](common-node-settings.md) for performance, cleanup, and error handling. These appear in collapsible categories on every node.

## Quick Reference

| When You See... | Read About... |
|-----------------|---------------|
| Constant/Attribute dropdown | [Input Value Sources](input-value-sources.md) |
| Source, Target, Distance Type | [Distance & Proximity](distance-and-proximity.md) |
| Comparison dropdown (==, >=, ~=) | [Comparison Operators](comparison-operators.md) |
| Source/Target attribute fields | [Attribute Mapping](attribute-mapping.md) |
| Bitmask, Flags, Bit operations | [Bitmask Operations](bitmask-operations.md) |
| Performance, Cleanup, Warnings | [Common Node Settings](common-node-settings.md) |
