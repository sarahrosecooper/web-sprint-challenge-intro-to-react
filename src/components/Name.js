import React from "react";
import styled from "styled-components";

const CharacterEmphasis = styled.span`
  font-weight: bold;
  text-transform: uppercase;
`;

const StyledH1 = styled.h1`
  margin: 8px 4px 5px 8px;
`;
const Name = ({ characterName, living }) => {
  return (
    <StyledH1>
      <CharacterEmphasis>{characterName} </CharacterEmphasis>| Status: {living}
    </StyledH1>
  );
};

export default Name;
