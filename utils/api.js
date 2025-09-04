/**
 * API Utilities for Breaking Bad Quotes
 * @module utils/api
 * @description Handles fetching quotes from external API
*/


// API endpoint for Breaking Bad quotes
const quoteList = "https://api.breakingbadquotes.xyz/v1/quotes/50";


/**
 * Fetches 50 quotes from Breaking Bad API
 * @async
 * @function fetchQuotes
 * @return {Promise<Array>} Array of quote objects
 * @throws {Error} Network or API errors 
 */
const fetchQuotes = async () => {
  try {
    const res = await fetch(quoteList);
    if (!res.ok) throw new Error("Network response was not ok.");
    return await res.json();
  } catch (err) {
    console.error("Error fetching quotes:", err);
    throw err;
  }
};
 