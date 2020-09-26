import React from "react";

const Name = ({ characterName, living }) => {
  return (
    <div>
      {characterName} Status: {living}
    </div>
  );
};

export default Name;
