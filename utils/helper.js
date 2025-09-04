/** 
 * Helper Utilities for Quote Generator
 * @module utils/helper
 * @description Utility functions for colors, and URL generation
 */


/** 
 * Color palette for background themes
 * @constant {Array<string>} colorsArray
 */
const colorsArray = [
  "var(--dark-blue)",
  "var(--purple)",
  "var(--light-red)",
  "var(--dark-red)",
  "var(--khaki)",
  "var(--dark-brown)",
  "var(--green)",
  "var(--x-light-green)",
  "var(--deep-green)"
];

/**
 * Generate a randomized array of indices
 * @function shuffleIndices
 * @param {number} length - The length of the fetched quotes array, i.e. the number of indices to generate
 * @return {Array<number>} Returns an array of unique randomized indices
 */
const shuffleIndices = (length) => {
  let randomlyOrderedIndices = [];
  
  // Fisher-Yates shuffle implementation
  for (let i = 0; i < length; i++) {
    const newNumber = Math.floor(Math.random() * length);
    // Ensure unique indices
    randomlyOrderedIndices.includes(newNumber) ? length += 1 : randomlyOrderedIndices.push(newNumber);
  }
  
  return randomlyOrderedIndices;
};


/**
 * Select a random color from the color palette
 * @function getRandomColor
 * @return {string} Returns a random CSS variable from colorsArray
 */
const getRandomColor = () => {
  // Random number between 0 and the colorsArray.length
  const i = Math.floor(Math.random() * colorsArray.length);
  return colorsArray[i];
};


/**
 * Generate a tweet URL from the fetched quote
 * @function generateTweetUrl
 * @param {string} quote - The quote text
 * @param {string} author - The quote author
 * @return {string} Twitter intent URL
 */
const generateTweetUrl = (quote, author) => {
  const cleanQuote = `${quote}  –  ${author}`;
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(cleanQuote)}`;
};
