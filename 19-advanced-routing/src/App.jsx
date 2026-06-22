import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Men from "./pages/ProductCategory/Men";
import Kids from "./pages/ProductCategory/Kids";
import Women from "./pages/ProductCategory/Women";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Navbar2 from "./components/Navbar2";
const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />}></Route>
          <Route path="women" element={<Women />}></Route>
          <Route path="kids" element={<Kids />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
