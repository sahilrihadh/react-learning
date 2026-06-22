import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  let navigate = useNavigate();
  return (
    <div className="flex justify-baseline p-4 gap-5 bg-violet-500">
      <button
        className="bg-white p-3 rounded min-w-40 hover:bg-amber-600"
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home
      </button>
      <button
        className="bg-white p-3 rounded min-w-40 hover:bg-amber-600"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <button
        className="bg-white p-3 rounded min-w-40 hover:bg-amber-600"
        onClick={() => {
          navigate(+1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Navbar2;
