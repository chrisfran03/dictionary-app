import axios from "axios";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import './App.css';

function App() {
  // Declare a new state variable, which we'll call "word"
  const [word, setWord] = useState("");
  const [wordMeaning, setWordMeaning] = useState<undefined | any>(undefined);

  const DICTIONARY_BASE_URL = "https://api.dictionaryapi.dev/api/v2";

  return (
    <div>
      <h1>English Dictionary</h1>

      <div>
        <TextField
          id="search-bar"
          className="text"
          value={word}
          onChange={(prop: any) => {
            setWord(prop.target.value);
          }}
          label="Enter a the word for meaning..."
          variant="outlined"
          placeholder="Search..."
          size="small"
        />
        <IconButton
          aria-label="search"
          onClick={() => {
            search();
          }}
        >
          <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
      </div>

      <p>You have entered {word}</p>

      {wordMeaning === undefined || wordMeaning === null ? (
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