import React from "react";
import { Link, Outlet } from "react-router-dom";
import Men from "./ProductCategory/Men";
import Women from "./ProductCategory/Women";
import Kids from "./ProductCategory/Kids";

const Product = () => {
  return (
    <div className="p-10 mt-5">
      <h1 className="text-5xl">Prodcut</h1>

      <div className="">
        <hr className="mt-5" />
        <h1 className="text-3xl mt-4">Product Category</h1>
        <div className="mt-5 flex flex-wrap flex-col gap-5">
          <Link className="text-black hover:text-red-700" to="/product/men">
            Men's Collection
          </Link>
          <Link className="text-black hover:text-red-700" to="/product/women">
            Women's Collection
          </Link>
          <Link className="text-black hover:text-red-700" to="/product/kids">
            Kids Collection
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Product;
