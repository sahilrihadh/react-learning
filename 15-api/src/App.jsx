import React, { useState } from "react";

import axios from "axios";

const App = () => {
  // async function getData() {
  //   const data = await fetch("https://jsonplaceholder.typicode.com/users");

  //   const dataBind = await data.json();

  //   console.log(dataBind);
  // }

  // const getData = async () => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/users");

  //   const data = await response.json();

  //   console.log(data);
  // };

  const [data, setData] = useState([]);

  const getData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );

    //const data = await response.json();

    setData(data);

    console.log(data);
  };

  return (
    <div>
      <button onClick={getData}>Get Data</button>

      <div>
        {data.map((data) => (
          <p>{data.name}</p>
        ))}
      </div>
    </div>
  );
};

export default App;
