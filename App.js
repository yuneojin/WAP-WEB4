import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Sidebar from "./components/Sidebar";
import Main from "./pages/Main";
import KoreanFood from "./pages/KoreanFood";
import SchoolFood from "./pages/SchoolFood";
import FusionFood from "./pages/FusionFood";
import Details from "./pages/Details"

function Mainbody() {
  return (
    <div class="mainbody">
      <div id="menuboard">
        
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div id="grid">
          <Sidebar></Sidebar>
          <Mainbody></Mainbody>
        </div>
        <Routes>
          <Route path="/" exact component={Main} />
          <Route path="/korean" component={KoreanFood} />
          <Route path="/school" exact component={SchoolFood} />
          <Route path="/fusion" exact component={FusionFood} />
          <Route path="/details" exact component={Details} />
        </Routes>
        
      </BrowserRouter> 
       
    </div>
   
  );
}

