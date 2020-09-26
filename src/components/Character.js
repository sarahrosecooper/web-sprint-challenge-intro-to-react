// Write your Character component here
import React from "react";
import Name from "./Name";
import Picture from "./Picture";
import Info from "./Info";

const Character = ({ character }) => {
  console.log(character);
  return (
    <div>
      <Name characterName={character.name} living={character.status} />
      <Picture image={character.image} />
      <Info
        gender={character.gender}
        species={character.species}
        type={character.type}
      />
    </div>
  );
};

export default Character;
