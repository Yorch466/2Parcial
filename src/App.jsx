import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Title } from "./components/Title";
import { PlateCard } from "./components/PlateCard";

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
