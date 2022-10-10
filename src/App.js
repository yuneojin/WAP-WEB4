import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Details from "./components/Details";
import FusionFood from "./components/FusionFood";
import Home from "./components/Home";
import KoreanFood from "./components/KoreanFood";
import SchoolFood from "./components/SchoolFood";
import Login from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/korean" element={<KoreanFood />} />
        <Route path="/school" element={<SchoolFood />} />
        <Route path="/fusion" element={<FusionFood />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
