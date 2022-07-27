import axios from "axios";
import { useState } from 'react';
import './App.css';

function App() {
  // Declare a new state variable, which we'll call ""
  const [word1, setWord] = useState("");

  const DICTIONARY_BASE_URL = "https://api.dictionaryapi.dev/api/v2";

  return (
    <div>
      <h1>Free Dictionary App</h1>

      <div>
        <label>Search your word</label>
        <br />
        <input
          type="text"
          id="word"
          name="word"
          onChange={(e) => setWord(e.target.value)}
        />
        <br />
        <button onClick={search}>Search</button>
      </div>

      <p>You have entered {word1}</p>

      <div id="word-meaning">This will show the result</div>
    </div>
  );

  function search() {
    axios.get(DICTIONARY_BASE_URL + "/entries/en/" + word1).then((res) => {
      console.log(res.data);
    });
  }
}

export default App;