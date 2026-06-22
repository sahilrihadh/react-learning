import React from "react";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted");
    setTitle("");
  };

  return (
    <form
      onSubmit={(e) => {
        submitHandler(e);
      }}
    >
      <input
        type="text"
        placeholder="Enter You Name"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
