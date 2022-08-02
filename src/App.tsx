import axios from "axios";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import './App.css';

function App() {
  // Declare a new state variable, which we'll call "word"
  const [word, setWord] = useState("");
  const [wordMeaning, setWordMeaning] = useState<null | undefined | any>(undefined);

  const DICTIONARY_BASE_URL = "https://api.dictionaryapi.dev/api/v2";

  return ( 
    <body>
    <div className="wrapper">
      <h1 className="wrapper-header">English Dictionary</h1>

      <div className="search">
        <TextField
          id="search-bar"
          className="text"
          value={word}
          onChange={(prop: any) => {
            setWord(prop.target.value);
          }}
          label="Search for a word..."
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

      <p className="entered-word">Search the meaning of {word}</p>
      {wordMeaning === undefined ? (
        <div></div>
      ) : (
        <div>
      {wordMeaning === undefined || wordMeaning === null ? (
       <ul><li> <p>Word not found</p></li> </ul>
      ) : (
        <div id="word-meaning">
          <ul>
            <li className="meaning">  
        Meaning:{wordMeaning[0].meanings[0].definitions[0].definition}
        </li> 
        </ul> 
         </div>
        )}
     </div>
      )}
    </div>
    </body>
  );

  function search() {
    console.log(word);
    if(word === undefined || word === "") {
      return;
    }
    axios.get(DICTIONARY_BASE_URL + "/entries/en/" + word).then((res) => {
    setWordMeaning(res.data);
    })
    .catch(() => {
      setWordMeaning(null)
    });
    
  }
}

export default App;