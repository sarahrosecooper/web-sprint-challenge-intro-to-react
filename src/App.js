import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "../src/components/Character";
import styled from "styled-components";

const CharacterCard = styled.div`
  background-color: red;
  width: 200px;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((response) => {
        return setCharacters(response.data.results);
      })
      .catch((error) => console.log("Uh-oh, we have an error!", error));
  }, []);

  console.log(characters);
  return (
    <CharacterCard>
      {characters.map((character) => {
        return <Character key={character.id} character={character} />;
      })}
    </CharacterCard>
  );
};

export default App;
