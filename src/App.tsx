import { useState } from 'react';
import './App.css';

function App() {
  // Declare a new state variable, which we'll call ""
  const [word, setWord] = useState("");

  return (
    <div>
      <h1>
        Free Dictionary
      </h1>
      
      <div>
        <label>Search for a word</label><br/>
        <input type="text" id="word" name="word" onChange={e => setWord(e.target.value)}/><br/>
        <button onClick={search}>
        Search
        </button>
      </div>

      <p>
        You have entered {word}
      </p>
    </div>
  );

  function search(){
      alert("Search button has been clicked!");
  }
}

export default App;