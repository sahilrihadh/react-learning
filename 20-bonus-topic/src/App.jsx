import React from "react";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("Light");
  return (
    <div>
      <h1>Theme is {theme}</h1>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
