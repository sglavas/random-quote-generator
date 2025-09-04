/**
 * QuoteBox Component - Main component for displaying and managing Breaking Bad quotes
 * @component
 * @module components/QuoteBox
 * @description Displays random quotes with smooth transitions and Twitter sharing
*/
const { useState, useEffect } = React;


const QuoteBox = () => {
  // State management for quote data and UI
  const [quote, setQuote] = useState(""); // Current quote text
  const [author, setAuthor] = useState(""); // Current quote author
  const [color, setColor] = useState(getRandomColor()); // Current color
  const [quotes, setQuotes] = useState([]); // Array of all fetched quotes
  const [index, setIndex] = useState([]); // Array of randomized unique indices for quote selection
  const [visibility, setVisibility] = useState("visible"); // CSS class for fade animations
  const [tweetUrl, setTweetUrl] = useState(""); // Twitter share URL
  const [count, setCount] = useState(0); // Counter for tracking current quote index

  /**
   * useEffect: Fetch quotes from API on component mount
   * @async
   * @function loadQuotes
   * @description Loads 50 random quotes from Breaking Bad API
   */
  useEffect(() => {
    const loadQuotes = async () => {
      try {
        // Set an array of 50 quotes to data
        const data = await fetchQuotes();
        setQuotes(data);
      } catch (error) {
        console.error("Failed to load quotes:", error);
      }
    };
    
    loadQuotes();
  }, []); // Empty dependecy array = run once on mount

  /**
   * useEffect: Set an array of uniquoe randomized indices when quotes are loaded
   * @effect
   * @description Shuffles indices and sets initial quote when quotes array is populated
   */
  useEffect(() => {
    // Check if quotes array is populated
    if (quotes.length > 0) {
      const shuffledIndices = shuffleIndices(quotes.length); // Array of unique randomized indices
      setIndex(shuffledIndices);
      setInitialData();
    }
  }, [quotes]); // Depencency array not empty = run when the quotes array is populated or when it changes

  /**
   * useEffect: Generate Twitter intent URL when quote or author changes
   * @effect
   * @description Creates Twitter intent URL for sharing current quote
   */
  useEffect(() => {
    // Check if quotes array is populated
    if (quote.length > 0) {
      const url = generateTweetUrl(quote, author);
      setTweetUrl(url);
    }
  }, [quote, author]); // Dependency array not empty = run when quote and author change

  /**
   * useEffect: Change background color when color state changes
   * @effect
   */
  useEffect(() => {
    // Update background color
    document.body.style.background = color;
    document.body.style.transition = 'background-color 0.5s ease-in-out'; 
  }, [color]); // Run when color changes

  /**
   * Set intial random quote on component load
   * @function setInitialData
   * @description Set an author and quote text using a random index
   */
  const setInitialData = () => {
    // Return the function early if quotes array is not populated
    if (quotes.length === 0) return;

    // Get a random number between 0 and quotes.length
    const i = Math.floor(Math.random() * quotes.length);
    setAuthor(quotes[i].author);
    setQuote(quotes[i].quote);
  };

  /**
   * Reset the count if it has reached the end of the quotes array
   * @function updateCount
   * @description Handles quote cycling and reshuffling when all quotes are used
   */
  const updateCount = () => {
    // Reset and reshuffle when all quotes are used
    if (count >= quotes.length) {
      // Set count to 0
      setCount(0);
      const shuffledIndices = shuffleIndices(quotes.length);
      // Reshuffle the indices
      setIndex(shuffledIndices);
    }

    // Display the next quote if data is available
    if (quotes.length > 0 && index.length > 0) {
      const currentContent = quotes[index[count]].quote;
      const currentAuthor = quotes[index[count]].author;
      renderUi(currentContent, currentAuthor);
      setCount(prevCount => prevCount + 1);
    }
  };

  /**
   * Handles the fade-in/fade-out animation for quote transitions
   * @function renderUi
   * @param {string} text - The new quote text
   * @param {string} character - The new quote author
   * @description Handles quote cycling and reshuffling when all quotes are used
   */
  const renderUi = (text, character) => {
    setVisibility("invisible"); // Fade out current quote

    setTimeout(() => {
      setQuote(text); // Update quote content during fade
      setAuthor(character);
    }, 500); // Half second delaay for fade out

    setTimeout(() => {
      setVisibility("visible"); // Fade in new quote
    }, 1000); // One second total transition
  };


  /**
   * Handles click event for "New Quote" button
   * @function handleClick
   * @description Updates the count and changes background color
   */
  const handleClick = () => {
    updateCount();
    setColor(getRandomColor());
  };



  return (
    <div className="wrapper justify-content-center align-items-center container-fluid" id="quote-box">

      {/* Quote display with Twitter share icon */}
      <div className="wrapper__quote" style={{ color: color }}>
        <p className={visibility} id="text">{quote}</p>
        <a className={`bi bi-twitter ${visibility}`} style={{ color: color }} href={tweetUrl} target="_blank" rel="noopener noreferrer"></a>
      </div>

      {/* Author attribution */}
      <div className="wrapper__author" id="author" style={{ color: color }}>
        <p className={visibility}>- {author}</p>
      </div>
      <div className="wrapper-bottom">

        {/* New quote button */}
        <button className="wrapper__button transition" id="new-quote" onClick={handleClick} style={{ background: color }}>
          New quote
        </button>
      </div> 
    </div>
  );
};
