# PCGEx Documentation Session

When starting a documentation session, follow this workflow:

## Setup (run once per session)

```bash
cd D:\GIT\PCGExtendedToolkitGitBook\_automation
```

## Document Next Node

1. **Get the next item from the queue:**
   ```bash
   node scripts/pcgex-doc.js queue next
   ```
   This outputs the full context including the **Output Path** where the doc should be written.

2. **Read the doc-agent prompt for formatting rules:**
   ```bash
   cat prompts/doc-agent.md
   ```

3. **Write the documentation** to the Output Path shown in the context.
   - Follow the template structure exactly
   - Only document node-specific settings
   - Reference inherited settings with a link
   - Be use-case agnostic in the Overview

4. **Mark as complete:**
   ```bash
   node scripts/pcgex-doc.js queue done
   ```

5. **Repeat** - go back to step 1 for the next node.

## Queue Management

```bash
# Check queue status
node scripts/pcgex-doc.js queue list

# Add nodes to queue
node scripts/pcgex-doc.js queue add "Heuristics :"

# Skip a problematic node
node scripts/pcgex-doc.js queue skip
```

## Key Rules

- **Output Path**: Write docs to the exact path shown in the context
- **Inherited Settings**: Link to shared settings pages, don't duplicate
- **Use-case agnostic**: Describe WHAT the node does, not WHY you'd use it
- **Behavior section**: Put visual examples right after "How It Works"

## Example Session

```
You: "Document the next 5 nodes in the queue"

Claude:
1. Runs queue next
2. Reads context
3. Writes doc to output path
4. Runs queue done
5. Repeats 4 more times
```
