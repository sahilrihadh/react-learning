import React, { useState } from "react";

const App = () => {
  const [info, setNum] = useState({ user: "Sahil", age: 31 });

  const [num, setCount] = useState(10);

  function btnClicked() {
    const newNum = { ...info };
    newNum.user = "Rihadh";
    newNum.age = "33";
    setNum(newNum);
  }

  const btnCount = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>
        Username : {info.user}, Age: {info.age}
      </h1>
      <button onClick={btnClicked}>Click</button>

      <h1>Counter : {num}</h1>
      <button onClick={btnCount}>Counter Button</button>
    </div>
  );
};

export default App;
