import './App.css';
import {useState} from 'react';
import { useEffect } from 'react';

function App() {

  const [quotes, setQuotes] = useState("");

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
    .then((response) => response.json())
    .then((data) => {
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
        <p id="text">"{quotes.text}"</p>
        { (quotes.author === null) ?
          <p id="author"> - anon</p> :
          <p id="author">- {quotes.author}</p>}
        <div className="btn-box">
          <button onClick={getQuote} className="btn" id="new-quote">Get Quote</button>
          <a 
          href={`https://twitter.com/intent/tweet?text=${quotes.text} - ${quotes.author}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn" 
          id="tweet-quote">Tweet</a>
        </div>
      </div>
    </div>
  );
}

export default App;
