# Claude Code Context

## Project Overview

A simple browser-based puzzle game. Pure HTML/CSS/JS with no dependencies or build process.

## File Structure

- `index.html` - Minimal HTML structure with overlays (start, game over) and game container
- `styles.css` - All styles including responsive layout, animations, and mobile support
- `game.js` - Game state and logic

## Key Game Constants (in game.js)

- `SHELVES_COUNT = 3` - Number of shelves
- `SLOTS_PER_SHELF = 4` - Slots per shelf
- `MAX_FLOOR_DVDS = 5` - Floor capacity before game over
- `TOLERANCE = 3` - How many positions off is acceptable before shelf collapse

## Core Mechanics

1. **Sorting**: Alphabetical order ignoring "The " prefix via `getSortKey()`
2. **Validation**: On placement, checks if shelf order is maintained
3. **Collapse**: If placement breaks order beyond tolerance, shelf contents fall to floor
4. **Spawning**: New DVD every 4 seconds initially, speeds up with level

## Layout Approach

- Uses flexbox with `height: 100%` to fill viewport without scrolling
- `max-width: 500px` on desktop, full width on mobile
- Shelves use `flex: 1` to distribute vertical space evenly
- Floor area is `22%` height with `100px` minimum

## Mobile Considerations

- Touch: tap-to-select, tap-to-place (no drag-and-drop)
- `user-scalable=no` and `touch-action: manipulation` to prevent zoom
- `env(safe-area-inset-*)` for notched devices
- Text selection disabled

## When Making Changes

- Test on both mobile and desktop viewport sizes
- Ensure no vertical scrolling occurs
- Keep the game playable with just taps (no drag required)
- Movie titles array can be extended freely
