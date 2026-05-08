# Button Unification Design

## Summary

Unify the project around `src/components/ui/button.tsx` as the single real button implementation.
Keep compatibility with the legacy API from `src/shared/ui/Button/Button.tsx` during migration so old call sites continue to work without urgent rewrites.

## Problem

The codebase currently has two button components with overlapping responsibility:

- `src/components/ui/button.tsx` is a modern design-system style primitive with `cva`, variants, sizes, and `asChild`.
- `src/shared/ui/Button/Button.tsx` is an older app-level button with a narrower API, custom CSS, and built-in tooltip behavior.

Keeping both as primary components creates duplication, inconsistent styling, and diverging behavior.

## Decision

Use `src/components/ui/button.tsx` as the source of truth.

`src/shared/ui/Button/Button.tsx` becomes a compatibility wrapper that maps the old props to the new base button API.

## Goals

- Keep one real button implementation.
- Preserve old props so existing screens do not break.
- Support modern button usage for new code.
- Keep tooltip behavior available without maintaining a second styling system.
- Make migration incremental instead of all-at-once.

## Non-Goals

- Rebuild the entire design system around buttons in this pass.
- Rewrite every button usage in the project immediately.
- Introduce a full standalone tooltip system outside the button scope unless the existing project already needs one.

## Architecture

### 1. Base Component

`src/components/ui/button.tsx` becomes the canonical button implementation.

It owns:

- visual variants via `cva`
- size variants
- shared interaction states like hover, focus, disabled, and active
- optional `asChild` composition
- optional tooltip rendering
- legacy prop compatibility where appropriate

### 2. Compatibility Wrapper

`src/shared/ui/Button/Button.tsx` remains temporarily, but only as an adapter.

It should:

- accept the existing legacy props
- translate them into the base component props
- avoid maintaining separate visual logic
- avoid separate CSS-driven button behavior except for temporary migration needs

This preserves imports used by older feature code while making the base button the real implementation.

## API Design

### Canonical API

The base button should support the modern API:

- `children`
- `variant`
- `size`
- `className`
- `asChild`
- `disabled`
- `type`
- `onClick`
- `tooltip`
- `tooltipPlacement`

### Legacy Compatibility

The base button should also accept:

- `buttonText?: string | number`

Resolution rule:

- if `children` is provided, render `children`
- otherwise if `buttonText` is provided, render `buttonText`
- otherwise render nothing

`buttonText` is treated as a compatibility alias, not the preferred API for new code.

### Wrapper Mapping

The wrapper in `src/shared/ui/Button/Button.tsx` should map:

- `buttonText -> children` or pass through as alias
- `tooltip -> tooltip`
- `tooltipPlacement -> tooltipPlacement`
- `onClick -> onClick`
- `type -> type`
- `disabled -> disabled`
- `className -> className`

The wrapper should remain intentionally thin.

## Styling Direction

The styling base should come from the new button in `src/components/ui/button.tsx`, not from the old `Button.css`.

Recommended direction:

- keep the modern rounded visual language and variant-based styling
- preserve the old button's readability and practical spacing
- keep states obvious and responsive
- keep mobile behavior predictable
- implement any old visual traits as `variant` or `size` options inside the base component rather than in a separate CSS implementation

Tooltip visuals should also live close to the base button behavior instead of remaining a second isolated styling path.

## Migration Plan

### Phase 1

Enhance `src/components/ui/button.tsx` so it supports:

- current modern button behavior
- legacy-compatible content via `buttonText`
- tooltip rendering and placement

### Phase 2

Refactor `src/shared/ui/Button/Button.tsx` into a thin wrapper over the base button.

At this stage:

- old imports keep working
- old props keep working
- visual behavior comes from the base button

### Phase 3

Gradually migrate call sites to import from `src/components/ui/button.tsx` directly.

New code should use:

- `children`
- `variant`
- `size`

instead of the old wrapper-first API.

### Phase 4

Once old imports are gone or acceptably reduced, remove the wrapper and its CSS if no longer needed.

## Testing Strategy

Verify:

- old usage with `buttonText` still renders correct text
- old usage with `tooltip` and `tooltipPlacement` still works
- modern usage with `children` still works
- variant and size styling still applies
- disabled state still works
- `asChild` composition still works if used
- build still passes

## Risks

- The unified button API can become too broad if every historical prop is preserved forever.
- Tooltip rendering can complicate markup if mixed with `asChild` without clear rules.
- Wrapper drift can return if styling logic is accidentally kept in both places.

## Risk Controls

- Treat `buttonText` as transitional compatibility, not the preferred long-term API.
- Keep wrapper logic minimal and visual-free.
- Keep all button styling decisions in the base component.
- Verify old and new usage styles with targeted checks before removing the wrapper.

## Open Decisions Resolved In This Spec

- The base component is `src/components/ui/button.tsx`.
- The old shared button remains temporarily as a wrapper.
- Legacy props stay supported during migration.
- The recommended architecture is the balanced hybrid approach.

## Implementation Shape

Expected end state:

- one true button implementation
- one temporary backward-compatible wrapper
- one styling system
- one migration path for old and new usage
