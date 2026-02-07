# DVD Shelf Organizer Game

A web-based puzzle game where you organize DVDs on shelves in alphabetical order. Think Tetris meets library organization.

## How to Play

1. DVDs appear on the floor periodically (12 total per game)
2. Tap a DVD to select it, then tap an empty shelf slot to place it (or drag on touch devices)
3. Keep DVDs in **alphabetical order across ALL shelves** (left-to-right, top-to-bottom)
4. "The" at the start of titles is ignored for sorting (e.g., "The Matrix" sorts as "Matrix")
5. If you place a DVD out of order, it falls back to the floor
6. Place all 12 DVDs to win!

## Win/Lose Conditions

- **Win**: Place all 12 DVDs on the shelves (floor empty)
- **Lose**: If too many DVDs pile up on the floor (max 5), game over

## Scoring

- +10 points per correctly placed DVD (multiplied by level)
- Level up every 10 DVDs shelved (DVDs spawn faster)

## Running the Game

Simply open `index.html` in a web browser. No build step or server required.

```bash
open index.html
```

Or serve locally:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Files

- `index.html` - Game markup
- `styles.css` - Styling and animations
- `game.js` - Game logic

## Features

- Mobile-friendly touch controls (tap or drag)
- Responsive layout (max 500px on desktop, full width on mobile)
- No scrolling - fills viewport height
- Safe area support for notched devices
- 120+ movie titles from various genres
