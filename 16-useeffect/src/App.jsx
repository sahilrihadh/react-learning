import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function aChange() {
    console.log("A Value Change");
  }

  function bChange() {
    console.log("B Value Change");
  }

  useEffect(
    function () {
      aChange();
    },
    [a],
  );

  useEffect(
    function () {
      bChange();
    },
    [b],
  );

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>

      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        Set A
      </button>
      <button
        onClick={() => {
          setB(b + 1);
        }}
      >
        Set B
      </button>
    </div>
  );
};

export default App;
