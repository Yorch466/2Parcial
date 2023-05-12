import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Title } from "./assets/components/Title";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <Title />        
      </div>
    </>
  );
}

export default App;
