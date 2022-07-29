import axios from "axios";
import { useState } from "react";
import './App.css';

function App() {
  // Declare a new state variable, which we'll call ""
  const [word, setWord] = useState("");
  const [wordMeaning, setWordMeaning] = useState<undefined | any>(undefined);

  const DICTIONARY_BASE_URL = "https://api.dictionaryapi.dev/api/v2";

  return (
    <div>
      <h1>Free Dictionary App</h1>

      <div>
        <label>Search your word here</label>
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

      <p>You have entered {word}</p>

      {wordMeaning === undefined ? (
        <p>Word not found</p>
      ) : (
        <div id="word-meaning">
          Meaning:{wordMeaning[0].meanings[0].definitions[0].definition}
          </div>
      )}
    </div>
  );

  function search() {
    axios.get(DICTIONARY_BASE_URL + "/entries/en/" + word).then((res) => {
    setWordMeaning(res.data);
    })
    .catch((err) => {
      console.log("Word meaning not found");
      setWordMeaning(undefined);
    });
    axios.get(DICTIONARY_BASE_URL + "/entries/en/" + word).then((res) => {
      console.log(res.data);
      })
      .catch((err) => {
        console.log("Word meaning not found");
        setWordMeaning(undefined);
      });
  }
}

export default App;