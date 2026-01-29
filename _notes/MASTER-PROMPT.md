# PCGEx Documentation - Session Prompt

Copy and paste the section below to kickstart a new session or resume work.

---

## Kickstart Prompt

```
I'm working on documentation for PCGExtendedToolkit, a large PCG plugin for Unreal Engine.

**Key paths:**
- Working directory: D:\GIT\PCGExtendedToolkitGitBook\_dry-run
- Notes/planning: D:\GIT\PCGExtendedToolkitGitBook\_notes
- Plugin source: D:\GIT\PCGExWorkbench\Plugins\PCGExtendedToolkit\Source

**Before doing anything, read these files:**
1. D:\GIT\PCGExtendedToolkitGitBook\_notes\CLAUDE-REFERENCE.md (rules, review process, progress)
2. D:\GIT\PCGExtendedToolkitGitBook\_notes\TEMPLATES.md (exact page structures to follow)
3. D:\GIT\PCGExtendedToolkitGitBook\_notes\MASTER-PROMPT.md (this file, for task prompts)

**Current state:**
- 27 runtime modules analyzed in _notes/modules/
- Core shared concepts documented in _dry-run/shared-concepts/
- Some filter docs completed, most node docs pending
- Documentation structure validated with dry-run samples

**Two documentation categories:**
1. "Working with PCGEx" - conceptual, progressive complexity, use-case agnostic
2. "Node Library" - factual per-node reference, links to shared concepts

**Critical rules:**
- DON'T mention parallel execution (everything is parallel by default)
- Use editor display names, not code identifiers
- VERIFY all "Works Well With" relationships against actual code
- NO use-case assumptions (dungeons/forests/cities)

What would you like me to work on?
```

---

## Resume Prompt (for continuing existing work)

```
I'm resuming PCGEx documentation work.

**Key paths:**
- Working directory: D:\GIT\PCGExtendedToolkitGitBook\_dry-run
- Notes: D:\GIT\PCGExtendedToolkitGitBook\_notes
- Source: D:\GIT\PCGExWorkbench\Plugins\PCGExtendedToolkit\Source

**Read first:** D:\GIT\PCGExtendedToolkitGitBook\_notes\CLAUDE-REFERENCE.md

**Last session I was working on:** [describe what you were doing]

**Continue with:** [specific task]
```

---

## Task-Specific Prompts

### Write a Node Doc
```
Write documentation for the [NodeName] node.

Source location: D:\GIT\PCGExWorkbench\Plugins\PCGExtendedToolkit\Source\[Module]\

Follow the template in CLAUDE-REFERENCE.md. Read the source code first to understand:
- What the node actually does (order of operations)
- All settings and their effects
- What filters/factories it accepts
- Output attributes created

Output to: D:\GIT\PCGExtendedToolkitGitBook\_dry-run\[category]\[node-name].md
```

### Write a Shared Concept Doc
```
Write documentation for the [ConceptName] shared concept.

This concept appears in: [list modules/nodes where it's used]

Source references:
- D:\GIT\PCGExWorkbench\Plugins\PCGExtendedToolkit\Source\PCGExCore\Public\[relevant-header].h

Follow the shared concept template in CLAUDE-REFERENCE.md. Focus on:
- What it is (1 sentence)
- When users encounter it
- All options with descriptions
- How it works (theory, not implementation)

Output to: D:\GIT\PCGExtendedToolkitGitBook\_dry-run\shared-concepts\[concept-name].md
```

### Analyze a Module
```
Analyze the [ModuleName] module and update its notes file.

Source: D:\GIT\PCGExWorkbench\Plugins\PCGExtendedToolkit\Source\[ModuleName]\

Update: D:\GIT\PCGExtendedToolkitGitBook\_notes\modules\[ModuleName].md

Include:
- All nodes in the module (check Private/ folder for PCGEx*.cpp files)
- Dependencies on other modules
- Shared settings/factories this module provides
- What it exports for other modules to use
```

### Verify/Update Module Notes
```
Verify the module notes in D:\GIT\PCGExtendedToolkitGitBook\_notes\modules\ are accurate.

For each module:
1. Count actual nodes in source (look for UPCGEx*Settings classes)
2. Compare against documented node count
3. Check for new nodes not yet documented
4. Update the .md file if discrepancies found

Start with: [ModuleName] or "all modules"
```

---

## Review Prompts

### Review a Single Doc
```
Review and verify the documentation for [NodeName].

Documentation: D:\GIT\PCGExtendedToolkitGitBook\_dry-run\[category]\[node-name].md
Source: D:\GIT\PCGExWorkbench\Plugins\PCGExtendedToolkit\Source\[Module]\

Follow the Review Pass Requirements in CLAUDE-REFERENCE.md:
1. Read the source header and implementation
2. List ALL UPROPERTY fields from the settings class
3. Compare against documented settings
4. Flag: missing properties, invented properties, wrong defaults
5. Check display names match source
6. Verify input/output pins
7. Report findings and fix errors
```

### Batch Review a Category
```
Review all documentation in the [category] folder.

Docs: D:\GIT\PCGExtendedToolkitGitBook\_dry-run\[category]\
Source: D:\GIT\PCGExWorkbench\Plugins\PCGExtendedToolkit\Source\[Module]\

For each file:
1. Run verification checklist from CLAUDE-REFERENCE.md
2. Create a summary of errors found
3. Fix errors or mark as NEEDS-REWRITE
4. Update progress tracking in CLAUDE-REFERENCE.md

Output a review report with:
- Files reviewed
- Errors found per file
- Files that need rewrite
- Files verified clean
```

### Quick Audit (Settings Only)
```
Quick audit: Compare documented settings vs source for [NodeName].

Just list discrepancies - don't fix yet:
- Settings in doc but NOT in source (invented)
- Settings in source but NOT in doc (missing)
- Wrong types or defaults

Source: D:\GIT\PCGExWorkbench\Plugins\PCGExtendedToolkit\Source\[Module]\Public\PCGEx[NodeName].h
Doc: D:\GIT\PCGExtendedToolkitGitBook\_dry-run\[category]\[node-name].md
```

---

## Quality Checklist

### Before Writing (Draft Phase)
- [ ] Read the actual source header file
- [ ] Read the implementation file
- [ ] Identify ALL UPROPERTY fields
- [ ] Note default values from code
- [ ] Check NodeDisplayName/AdditionalTaskName

### Before Marking Verified
- [ ] Every documented setting exists in source
- [ ] No invented/phantom settings
- [ ] Types match (bool, float, enum, etc.)
- [ ] Default values are accurate
- [ ] Display names match editor exactly
- [ ] Input/output pins documented correctly

### Before Marking Reviewed
- [ ] All "Related" links are valid
- [ ] "Works Well With" claims verified against pin compatibility
- [ ] Shared concept links correct
- [ ] No use-case assumptions (dungeons, forests, etc.)
- [ ] No mention of parallel execution
- [ ] Order of operations is accurate

### Common Mistakes to Avoid
- Inventing settings that don't exist
- Missing nested struct properties (FPCGEx* types expand to multiple fields)
- Wrong default values
- Documenting internal/private properties users can't see
- Guessing at behavior instead of reading implementation

---

## File Locations Quick Reference

| Content | Location |
|---------|----------|
| Consolidated reference | `_notes/CLAUDE-REFERENCE.md` |
| **Documentation templates** | `_notes/TEMPLATES.md` |
| Module analysis | `_notes/modules/[Module].md` |
| Shared concepts (output) | `_dry-run/shared-concepts/` |
| Node docs (output) | `_dry-run/node-library/[category]/` |
| Plugin source | `D:\GIT\PCGExWorkbench\...\Source\` |
| Deprecated GitBook | Root of `PCGExtendedToolkitGitBook\` |
