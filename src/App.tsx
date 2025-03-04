import { useState } from "react";
import { Button } from "./components/ui/button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Vite + React</h1>
      <p className="bg-primary text-primary-foreground">hello</p>
      <div className="card">
        <Button size="sm" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Button size="lg" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Button size="icon" onClick={() => setCount((count) => count + 1)}>
          {count}
        </Button>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <Button
          className="bg-red-50 font-bold text-[#f0f] hover:bg-[#333]"
          size="lg"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={() => setCount((count) => count + 1)}
        >
          {count}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCount((count) => count + 1)}
        >
          {count}
        </Button>
        <Button
          variant="link"
          size="icon"
          onClick={() => setCount((count) => count + 1)}
        >
          {count}
        </Button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
