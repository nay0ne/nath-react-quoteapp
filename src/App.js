import './App.css';
import {useState} from 'react';
import { useEffect } from 'react';

function App() {

  const [quotes, setQuotes] = useState("");

    const getQuote = () => {
    fetch("https://api.api-ninjas.com/v1/quotes?", {
      method: 'GET',
      headers: {
        'X-API-KEY': 'r+tiyUGL3Lu6jxRJESW1Ow==Xctijubm6DnV6Wx5'
      }
    })
    .then((response) => response.json())
    .then(data => {
      let randomNum = Math.floor(Math.random() * data.length);
      setQuotes(data[randomNum]);
    });
  };

  useEffect(() => {
    getQuote();
  },[]);
  
  return (
    <div className="App">
      <div className="quote" id="quote-box">
        <p id="text">"{quotes.quote}"</p>
        <p id="author">- {quotes.author}</p>
        <div className="btn-box">
          <button onClick={getQuote} className="btn" id="new-quote" aria-label="Get a new quote">Quote</button>
          <a 
          href={`https://twitter.com/intent/tweet?text=${quotes.quote} - ${quotes.author}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn" 
          id="tweet-quote"
          aria-label="Tweet this quote">Tweet</a>
        </div>
      </div>
    </div>
  );
}

export default App;
