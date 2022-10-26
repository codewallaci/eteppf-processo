import { useState } from "react";
import Footer from "./components/Footer";
import Soon from "./pages/Soon";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Soon />
      <Footer />
    </>
  );
}

export default App;
