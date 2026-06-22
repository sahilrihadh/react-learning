import React from "react";

const submitHandler = (e) => {
  e.preventDefault();
  console.log("form submitted");
};

const App = () => {
  return (
    <form
      onSubmit={(e) => {
        submitHandler(e);
      }}
    >
      <input type="text" placeholder="Enter You Name" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
