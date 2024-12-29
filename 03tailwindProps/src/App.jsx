import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  const item = [
    {
      name: "dhanji",
      description: "tejiii",
    },
    { name: "Bagi", description: "420" },
  ];

  const item2 = [1,2,3,4,5]

  return (
    <>
      {/* <Card
        name="Zizek"
        description="Ruab Ruab Ruab Livin like a King in Worlds largest Democracy"
      /> */}
      
      {item.map((item)=>(<Card item={item} ></Card>))}
      <Card name="Hisha" description=" aAaa aAAa" button = "BagiMu"/>
     
    </>
  );
}

export default App;
