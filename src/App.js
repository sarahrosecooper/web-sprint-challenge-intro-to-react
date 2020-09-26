import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "../src/components/Character";
import styled from "styled-components";

const CharacterCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-image: url("https://digitaladdictsblog.com/wp-content/uploads/2019/01/shutterstock_295846730.jpg");
  text-transform: lowercase;
  font-family: "Courier New";
  width: 100%;
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
