import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Title } from "./assets/components/Title";
import { PlateCard } from "./assets/components/PlateCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <Title />   
        <PlateCard/>     
      </div>
    </>
  );
}

export default App;
