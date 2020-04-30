import React from "react";

const HomePage = (props) => {
  return (
    <div className="page-area" id="home-page">
      <div className="jumbotron neu-container">
        <div className="neu-container inset wrapper col">
          <h2>Welcome to Documentor!</h2>
            <p>Documentor is an application meant to help writers, worldbuilders, game designers, and anyone else who needs a complex and interconnected system for their writing.</p>
        </div>
      </div>

      <div className="grid d-1x2">
        <div className="grid-item neu-container">Home Area 1</div>

        <div className="grid-item grid d-2x2 w-50 neu-container">
          <div className="grid-item neu-container inset">Space 1</div>
          <div className="grid-item neu-container inset">Space 2</div>
          <div className="grid-item neu-container inset">Space 3</div>
          <div className="grid-item neu-container inset">Space 4</div>
        </div>
      </div>

      <div className="grid d-1x3">
        <div className="grid-item neu-container">Space 1</div>
        <div className="grid-item neu-container">Space 2</div>
        <div className="grid-item neu-container">Space 3</div>
      </div>
    </div>
  );
};

export default HomePage;
