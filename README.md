# Tic Tac Toe

A sleek, browser-based Tic Tac Toe game for two players built with vanilla HTML, CSS, and JavaScript. Features a dark theme with vibrant pink and teal accents, SVG game pieces, and smooth animations.

## Features

- **Two-player local gameplay** — take turns as X and O on the same device
- **Animated turn indicator** — a pulsing highlight slides between X and O to show whose turn it is
- **SVG game pieces** — clean, scalable X and O marks rendered as inline SVGs
- **Win detection & highlighting** — winning cells light up in teal when a player wins
- **Draw detection** — recognizes when the board is full with no winner
- **Persistent scoreboard** — tracks cumulative scores across rounds
- **Replay button** — resets the board while keeping the running score
- **Responsive design** — scales down for screens under 550px

## Getting Started

No build tools or dependencies required. Just open the game in a browser:

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/java-tictactoe.git
   ```
2. Open `index.html` in your browser.

Alternatively, serve the folder with any static file server:

```bash
npx serve .
```

## How to Play

1. **X** goes first — click any cell on the 3x3 grid to place your mark.
2. Players alternate turns. The turn indicator at the top shows whose move it is.
3. The first player to align three marks in a row, column, or diagonal wins.
4. If all nine cells are filled with no winner, the game ends in a draw.
5. Click the replay button to start a new round. Scores carry over.

## Project Structure

```
├── index.html      # Page layout: grid, scoreboard, turn indicator, replay button
├── style.css       # Dark theme, animations, responsive grid, hover effects
└── script.js       # Game logic: turn management, win/draw checks, score tracking
```

## Color Palette

| Color   | Hex       | Usage                          |
|---------|-----------|--------------------------------|
| Dark    | `#252A34` | Background                     |
| Pink    | `#FF2E63` | Accents, hover states, scores  |
| Teal    | `#08D9D6` | Win highlight, button hover    |
| Black   | `#000000` | SVG strokes, borders           |
| White   | `#FFFFFF` | Text                           |

## License

This project is open source and available under the [MIT License](LICENSE).
