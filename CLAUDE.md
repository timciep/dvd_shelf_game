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
- `TOTAL_DVDS = 12` - Total DVDs spawned per game (fills all slots)
- `MAX_FLOOR_DVDS = 5` - Floor capacity before game over

## Core Mechanics

1. **Sorting**: Alphabetical order ignoring "The " prefix via `getSortKey()`
2. **Global Order Validation**: DVDs must be alphabetically ordered across ALL shelves (positions 0-11 reading left-to-right, top-to-bottom)
3. **Invalid Placement**: If placement breaks global order, that DVD falls back to floor with animation
4. **Spawning**: New DVD every 4 seconds initially, speeds up with level (stops at 12 DVDs)
5. **Win Condition**: Place all 12 DVDs on shelves (floor empty) to win

## Layout Approach

- Uses flexbox with `height: 100%` to fill viewport without scrolling
- `max-width: 500px` on desktop, full width on mobile
- Shelves use `flex: 1` to distribute vertical space evenly
- Floor area is `22%` height with `100px` minimum

## Mobile Considerations

- Touch: tap-to-select/tap-to-place OR touch-drag-and-drop (both supported)
- Touch drag creates a visual clone that follows finger
- `user-scalable=no` and `touch-action: manipulation` to prevent zoom
- `env(safe-area-inset-*)` for notched devices
- Text selection disabled

## Movie Posters

Poster images are stored locally in `images/posters/` (146 movies, ~2.2MB total).

### Adding New Movies

1. Go to `https://www.themoviedb.org/movie/{movie-name}`
2. Right-click the movie poster and "Open image in new tab"
3. The URL will be like: `https://image.tmdb.org/t/p/w500/abc123def.jpg`
4. Download the image (use w185 size for consistency):
   ```bash
   curl -o images/posters/Movie_Title.jpg "https://image.tmdb.org/t/p/w185/abc123def.jpg"
   ```
5. Add to `MOVIE_POSTERS` object in game.js:
   ```javascript
   "Movie Title": "images/posters/Movie_Title.jpg",
   ```

### Poster Code Structure
- `MOVIE_POSTERS` object maps titles to local image paths
- `MOVIE_TITLES = Object.keys(MOVIE_POSTERS)` generates title list automatically
- `createDVD()` uses poster if available, falls back to random color gradient
- `.dvd-spine` CSS has semi-transparent background for text readability

## When Making Changes

- Test on both mobile and desktop viewport sizes
- Ensure no vertical scrolling occurs
- Keep the game playable with just taps (no drag required)
- Movie titles array can be extended freely (add to MOVIE_POSTERS object)
