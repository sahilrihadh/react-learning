import React from "react";
import { useContext } from "react";
import { ThemeContextData } from "../context/ThemeContext";

const Menu = () => {
  const [theme, setTheme] = useContext(ThemeContextData);

  //console.log(data);

  return (
    <div className="menu">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">{theme}</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
