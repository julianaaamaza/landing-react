import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
    </Router>
  );
}

export default App;
