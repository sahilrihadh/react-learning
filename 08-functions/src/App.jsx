import React from "react";

const App = () => {
  function greet() {
    console.log("Hello Sahil");
  }

  return (
    <div>
      <h1>Hello</h1>
      <button onClick={greet}>Greet</button>
    </div>
  );
};

export default App;
