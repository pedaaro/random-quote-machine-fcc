import { useState } from 'react'
import quotes from "./assets/quotes.json"
import { FaTwitter, FaQuoteLeft, FaQuoteRight} from "react-icons/fa"
import './App.css'

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 128)
  const green = Math.floor(Math.random() * 128)
  const blue = Math.floor(Math.random() * 128)

  return `rgb(${red}, ${green}, ${blue})`
}

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  const changeQuote = () =>{
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  }

  return (
    <div className='background' style={{backgroundColor: randomColor}}>
      <div id="quote-box">
        <FaQuoteLeft size="30" style={{marginRight: "10px" }} />
        <div className="quote-content" style={{color: randomColor}}>
          <h2 id="text">{quote.quote}</h2>
          <h4 id="author">- {quote.author}</h4>
        <FaQuoteRight size="30" style={{marginRight: "10px" }} />
        </div>
        <div className="buttons">
          <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}
          id="tweet-quote"
          style={{
            backgroundColor: randomColor,
            marginRight: "10px"
          }}>
          <FaTwitter color="white" />
          </a>
          <button id="new-quote" onClick={changeQuote} style={{backgroundColor: randomColor,
          color: 'white'}}>Change Quote</button>
        </div>
      </div>
    </div>
  )
}

export default App
