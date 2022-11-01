import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Home from "./pages/Home/Home";

import "./App.scss";

library.add(faMagnifyingGlass);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/product/:id" element={<Product />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
