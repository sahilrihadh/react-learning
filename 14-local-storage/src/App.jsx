import React from "react";

const App = () => {
  //localStorage.setItem("user", "Sahil");
  //localStorage.setItem("age", 32);

  //const user = localStorage.getItem("user");
  //const age = localStorage.getItem("age");

  //localStorage.removeItem("user");

  //console.log(user, age);

  //localStorage.clear();

  const employee = { name: "sahil", age: 32, address: "Delhi" };

  localStorage.setItem("employee", JSON.stringify(employee));

  const empl = JSON.parse(localStorage.getItem("employee"));
  console.log(empl);

  return <div></div>;
};

export default App;
