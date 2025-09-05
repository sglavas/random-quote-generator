# Random Quote Generator

## Overview

A random quote generator built with React that fetches quotes from the <a href="https://github.com/shevabam/breaking-bad-quotes">Breaking Bad Quotes API</a> and displays them with smooth transitions, dynamic background colors, and Twitter sharing.

If you would like to, you can check out my <a href="https://delightful-choux-b64326.netlify.app/">live demo</a>.

---

## Features
- **Randomized quotes**: fetches 50 unique Breaking Bad quotes at a time
- Smooth Animations: CSS transitions for quote fading and background color changes
- Twitter Integration: One-click sharing with pre-filled tweet content
- Dynamic Theming: 9 different color themes that change with each quote
- Professional Code Structure: Well-documented with JSDoc comments

---

## Technologies Used
- **React 18**
- **JavaScript ES6+**
- **CSS3**
- **Breaking Bad API**
- **Font Awesome**
- **Bootstrap Icons**

---

## Project Structure

```text

src/
├── components/
│   └── QuoteBox.js          # Main React component
├── styles/
│   ├── main.css             # Primary styles and animations
│   ├── normalize.css        # CSS reset and base styles
│   └── social-icons.css     # Social media icon styles (for future use)
├── utils/
│   ├── api.js               # API fetching functions
│   └── helper.js            # Utility functions (colors, shuffling, URLs)
├── App.js                   # Root application component
├── index.js                 # Application entry point
└── index.html               # Main HTML file

```

---

## Installation $ Setup

1. Clone the repository
```bash
git clone https://github.com/sglavas/random-quote-generator.git
cd random-quote-generator
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm start
```

---

## Alternative - Use live server
```bash
# Install live-server globally
npm install -g live-server


# Navigate to project directory and serve
cd random-quote-generator
live-server src/
```
---

## Usage Example
```text
--------------------------------
"I am not in danger, Skyler. 
I am the danger."
- Walter White
--------------------------------
```

---

## Future Improvements
* Add social media icons (Facebook, YouTube, Instagram)
* Store liked quotes in local storage
* Add text-to-speech for quotes
