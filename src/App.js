import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/User/home";
import Landing from "./components/Landing/landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
