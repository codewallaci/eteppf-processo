import { useState } from "react";
import Soon from "./pages/soon";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Soon />
    </>
  );
}

export default App;
