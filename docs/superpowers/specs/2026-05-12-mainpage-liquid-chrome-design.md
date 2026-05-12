# MainPage LiquidChrome Background Design

**Goal**

Add a real-time animated `LiquidChrome` background to the CRA-based `MainPage` only, rendering behind the existing content across the full viewport height with an overlay that preserves text readability.

**Context**

- Project type: Create React App with React 18 and TypeScript
- Existing page: `src/pages/main/ui/MainPage/MainPage.tsx`
- Existing styles: `src/pages/main/ui/MainPage/MainPage.css`
- Existing state: `MainPage` already contains a partial, unfinished `LiquidChrome` usage
- User requirement: keep the effect interactive and visible on desktop and mobile

## Scope

In scope:

- Render `LiquidChrome` only on `MainPage`
- Cover the full visible page area with the animated background
- Keep the current title and auth buttons above the background
- Add a readability overlay between the animated background and the content
- Preserve clickability of links and buttons
- Keep the page functional if the animated layer fails or is temporarily unavailable

Out of scope:

- Global application background changes
- Re-theming the rest of the app
- Performance fallbacks that disable interaction on mobile
- Refactoring unrelated pages or shared UI

## Recommended Approach

Use a dedicated local React component for the animated background instead of relying on a direct one-shot registry insertion into page code.

Why this approach:

- It is more reliable in this CRA codebase than depending on framework-specific generator behavior
- It keeps WebGL and animation concerns isolated from page layout concerns
- It makes the `MainPage` structure easier to read and maintain
- It avoids spreading background-specific logic into unrelated files

## Architecture

### 1. Background component

Create a focused component, tentatively named `LiquidChromeBackground`, responsible only for rendering the `LiquidChrome` effect and exposing a small set of configuration props:

- `speed`
- `amplitude`
- `frequencyX`
- `frequencyY`
- `interactive`

This component should own the effect container and any setup required for the animation dependency.

### 2. MainPage layer composition

`MainPage` should compose three visual layers:

1. Background animation layer
2. Readability overlay layer
3. Existing page content layer

This keeps `MainPage` responsible for layout and stacking, while the animation component remains responsible for rendering the effect.

### 3. CSS ownership

`MainPage.css` should define:

- full-viewport root container behavior
- absolute positioning for the animated background
- overlay styling for readability
- stacking order via `z-index`
- safe content positioning above the background

## Visual Behavior

### Background

- The animated background fills the entire `MainPage` viewport height using `min-height: 100vh`
- The effect sits behind all content
- The effect remains interactive on desktop and mobile

### Overlay

- The overlay sits above the animated background and below the content
- The overlay should darken the page enough for legibility without hiding the animation
- The preferred look is a soft combined treatment:
  - subtle darkening across the whole page
  - a slightly lighter center zone behind the main heading and buttons

### Content

- The existing heading and auth actions remain visually above the overlay
- Buttons, links, and other controls must remain fully clickable
- The page should not visually jitter because of the background layer

## Error Handling and Resilience

- `MainPage` must remain usable even if the animation component does not render correctly
- The page root should keep a plain fallback background color so the screen never becomes unreadable
- The background layer should not capture pointer interaction intended for content controls

## Files Expected to Change

- `src/pages/main/ui/MainPage/MainPage.tsx`
- `src/pages/main/ui/MainPage/MainPage.css`
- one new local component file for the animated background
- one new style file for the background component if the chosen implementation needs it
- tests covering the `MainPage` layering/rendering contract

## Testing Strategy

Add focused tests that verify the page contract rather than WebGL internals:

- `MainPage` renders its main content
- `MainPage` renders the background layer
- `MainPage` renders the overlay layer
- `MainPage` keeps the content layer present above the background structure

Verification after implementation:

- `npm run build` succeeds
- `MainPage` displays the animated background only on that page
- text remains readable over the animated layer
- links and buttons remain interactive

## Open Decisions Resolved

The following decisions are now fixed:

- Use `LiquidChrome`
- Apply it only to `MainPage`
- Fill the full viewport height
- Keep interaction enabled
- Keep interaction enabled on mobile
- Use a readability overlay

## Implementation Constraints

- Do not migrate away from CRA
- Do not introduce app-wide background side effects
- Do not replace the existing `MainPage` content structure unless required for layering
- Keep the solution local and maintainable
