# DVD Shelf Organizer

A web-based puzzle game where you organize DVDs on shelves in alphabetical order. Think Tetris meets library organization.

## How to Play

1. DVDs appear on the floor periodically
2. Tap a DVD to select it, then tap an empty shelf slot to place it
3. Keep DVDs in **alphabetical order** on each shelf (left to right)
4. "The" at the start of titles is ignored for sorting (e.g., "The Matrix" sorts as "Matrix")
5. Leave gaps for future movies that might need to go between existing ones

## Lose Conditions

- **Floor overflow**: If too many DVDs pile up on the floor (max 5), game over
- **Shelf collapse**: Place a DVD too far from its correct alphabetical position and the entire shelf collapses, dumping all its DVDs back to the floor

## Scoring

- +10 points per correctly placed DVD (multiplied by level)
- +5 points for "close enough" placements
- -50 points per DVD when a shelf collapses
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

- Mobile-friendly touch controls
- Responsive layout (max 500px on desktop, full width on mobile)
- No scrolling - fills viewport height
- Safe area support for notched devices
- 120+ movie titles from various genres
