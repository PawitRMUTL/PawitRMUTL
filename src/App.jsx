import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./main.css";
import Home from "./index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Home></Home>
    </div>
  );
}

export default App;
