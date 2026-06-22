import React, { useState } from "react";

const App = () => {
  const [a, setA] = useState(0);
  return (
    <div>
      <h1>Value of a is {a}</h1>
      <button onClick={() => setA(a + 1)}>Increment</button>
      <button onClick={() => setA(a - 1)}>Decrement</button>
    </div>
  );
};

export default App;
