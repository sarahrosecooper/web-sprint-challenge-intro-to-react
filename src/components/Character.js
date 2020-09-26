// Write your Character component here
import React from "react";
import Name from "./Name";
import Picture from "./Picture";
import Info from "./Info";

const Character = () => {
  return (
    <div>
      <Name />
      <Picture />
      <Info />
    </div>
  );
};

export default Character;
