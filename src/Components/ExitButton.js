import React from "react";

const ExitButton = (props) => {
  return (
    <button className="exit-button" onClick={props.closeOut}>
      X
    </button>
  );
};

export default ExitButton