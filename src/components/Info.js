import React from "react";

const Info = ({ gender, species, type }) => {
  return (
    <div>
      <p>{gender}</p>
      <p>{species}</p>
      <p>{type}</p>
    </div>
  );
};

export default Info;
