import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
