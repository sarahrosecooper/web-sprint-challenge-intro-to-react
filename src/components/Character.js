// Write your Character component here
import React from "react";
import Name from "./Name";
import Picture from "./Picture";
import Info from "./Info";
import styled from "styled-components";

const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 3px;
  justify-content: center;
  width: 29%;
  margin: 15px 17px 10px 1px;
`;

const MoveItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Character = ({ character }) => {
  console.log(character);
  return (
    <CharacterContainer>
      <MoveItems>
        <Name characterName={character.name} living={character.status} />
        <Picture image={character.image} />
        <Info
          gender={character.gender}
          species={character.species}
          type={character.type}
        />
      </MoveItems>
    </CharacterContainer>
  );
};

export default Character;
