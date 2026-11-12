---
name: 21st-ui
description: Find, install, and generate UI with 21st.dev. Use when the user asks for a UI component, wants design inspiration, needs a company logo as an SVG component, or wants new UI generated from a prompt.
source: https://github.com/21st-dev/magic-mcp/tree/main/skills/21st-ui
---

# 21st.dev UI Skill

21st.dev is a marketplace of production-ready React/Tailwind components, plus AI UI generation. This skill describes how to use the 21st.dev MCP server.

## When to use it

- The user asks to add or build a UI element.
- The user wants component options or design inspiration before committing to a design.
- The user needs a company logo as a JSX/TSX component.
- The user wants custom UI generated from a description.

## Workflow: install an existing component

Prefer catalog components over writing UI from scratch when the connected catalog has a suitable match.

1. Search the catalog with a short natural-language query. Results include names, descriptions, previews and install IDs.
2. Choose a component that fits the product's stack and visual system. Present 1–3 choices when the best fit is unclear.
3. Fetch the component's full source and metadata.
4. Install or adapt it using the project's existing conventions, then connect it to the page.

Catalog access requires the 21st.dev MCP server at `https://21st.dev/api/mcp`, authenticated with the `x-api-key` header. If the server is unavailable, do not claim a catalog search or component installation; continue with project-native components only when the user has asked for implementation and disclose the limitation.

## Workflow: generate new UI

1. Check whether AI generation is enabled and the `generate` tool is available.
2. If generation is unavailable, do not call generation tools, legacy builder aliases or the CLI as a workaround. Use catalog search and component retrieval when available, or make a project-native implementation when authorized.
3. If generation is enabled, describe the purpose, layout, content, style and stack constraints. Generation may use credits.

## Logos

Use the catalog's logo search for JSX/TSX brand logos when the tool is available.

## Project fit

- Keep existing design tokens, accessibility requirements, responsive breakpoints and component conventions.
- For this project, consult `CLAUDE.md` and the ShivAnvaya PRD before selecting or adapting components.
