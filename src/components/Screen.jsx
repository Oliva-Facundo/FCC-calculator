import React from "react";

const Screen = ({ result, evaluated }) => {
  return (
  <div id="display">
    <p>{result}</p>
    <p>{evaluated}</p>
     
  </div>);
};

export default Screen;
