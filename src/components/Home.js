import React from "react";
import Sidebar from "../sidebar/Sidebar";

function Mainbody() {
  return (
    <div class="mainbody">
      <div id="menuboard"></div>
    </div>
  );
}

const Home = () => {
  return (
    <div className="App">
      <div id="grid">
        <Sidebar />
        <Mainbody />
      </div>
    </div>
  );
};

export default Home;
