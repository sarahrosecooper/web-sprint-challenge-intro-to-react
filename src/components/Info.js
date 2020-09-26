import React from "react";
import styled from "styled-components";

const InfoText = styled.div`
  padding-left: 10px;
  text-align: center;
`;
const Info = ({ gender, species, type }) => {
  return (
    <InfoText>
      <p>{gender}</p>
      <p>{species}</p>
      {type !== "" && <p>❓Type: {type}</p>}
      {type == "" && <p>❓Type: unknown creature</p>}
    </InfoText>
  );
};

export default Info;
