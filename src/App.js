import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./components/User/home";
import Landing from "./components/Landing/landing";
import Login from "./components/Landing/login";
import Signup from "./components/Landing/signup";
import Calendar from "./components/Calendar/calendar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
