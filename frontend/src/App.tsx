import { useState } from "react";
import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button onClick={() => setCount((p) => p + 1)}>Hello There</Button>
      <h1>{count}</h1>
    </>
  );
}

export default App;

