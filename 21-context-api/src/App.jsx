import React from "react";
import Navabr from "./components/Navabr";
import Menu from "./components/Menu";
import { useContext } from "react";
import { ThemeContextData } from "./context/ThemeContext";

const App = () => {
  const [theme, setTheme] = useContext(ThemeContextData);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <div>
      <div className={`header ${theme}`}>
        <Navabr />
        <Menu />
      </div>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};

export default App;
