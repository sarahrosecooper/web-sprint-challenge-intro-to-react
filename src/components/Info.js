import React from "react";
import styled from "styled-components";

const InfoText = styled.div`
  padding-left: 10px;
  text-align: center;
`;

const StyledType = styled.span`
  color: darkgreen;
`;
const Info = ({ gender, species, type }) => {
  return (
    <InfoText>
      <p>gender: {gender}</p>
      {species == "Alien" && <p>species: 👽</p>}
      {species !== "Alien" && <p>species: {species}</p>}
      {type !== "" && (
        <p>
          ❓Type: <StyledType>{type}</StyledType>
        </p>
      )}
      {type == "" && (
        <p>
          ❓Type: <StyledType>unknown creature</StyledType>
        </p>
      )}
    </InfoText>
  );
};

export default Info;
