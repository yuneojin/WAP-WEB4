import React from "react";
import Sidebar from "../sidebar/Sidebar";
import eximage from "../images/bibimbap.jpg";
import eximage2 from "../images/bossam.jpg";
import eximage3 from "../images/soup.jpg";
import eximage4 from "../images/misosoup.jpg";
import eximage5 from "../images/chicken.jpg";
import eximage6 from "../images/kimchi.jpg";
import eximage7 from "../images/pot.jpg";
import eximage8 from "../images/albap.jpg";

import "../styles/index.css";

function Mainbody() {
  return (
    <div className="mainbody">
      <div id="menuboard">
        <div className ="showmenu">
          <img className="eximage" src={eximage}/>
          <div className = "menuname">비빔밥</div>
          <div className = "menuprice">4000원</div>
        </div>
        <div className = "showmenu">
          <img className="eximage" src ={eximage2}/>
          <div className = "menuname">보쌈</div>
          <div className = "menuprice">5000원</div>
        </div>
        <div className = "showmenu">
          <img className="eximage" src ={eximage3}/>
          <div className = "menuname">돼지국밥</div>
          <div className = "menuprice">5500원</div>
        </div>
        <div className = "showmenu">
          <img className="eximage" src ={eximage4}/>
          <div className = "menuname">된장찌개</div>
          <div className = "menuprice">3000원</div>
        </div>
        <div className = "showmenu">
          <img className="eximage" src ={eximage5}/>
          <div className = "menuname">닭볶음탕</div>
          <div className = "menuprice">6000원</div>
        </div>
        <div className = "showmenu">
          <img className="eximage" src ={eximage6}/>
          <div className = "menuname">김치찌개</div>
          <div className = "menuprice">4000원</div>
        </div>
        <div className = "showmenu">
          <img className="eximage" src ={eximage7}/>
          <div className = "menuname">소고기뚝배기</div>
          <div className = "menuprice">4500원</div>
        </div>
        <div className = "showmenu">
          <img className="eximage" src ={eximage8}/>
          <div className = "menuname">알밥</div>
          <div className = "menuprice">4000원</div>
        </div>
      </div>
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