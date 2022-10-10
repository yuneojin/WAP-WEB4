import React from "react";
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import baekkyong from "../images/baekkyoung.jpg";
import login from "../images/login.png";
import mypage from "../images/mypage.png";
import "../styles/Sidebar.css";

function Sidebarheader() {
  return (
    <div id="sideheader">
      <div id="logo">WEB4</div>
      <div>
        <div id="login">
          <Link to="/sign-in">
            <img id="loginIcon" src={login} />
            로그인
          </Link>
        </div>
        <div id="mypage">
          <Link to="/mypage">
            <img id="mypageIcon" src={mypage} />
            마이페이지
          </Link>
        </div>
      </div>
    </div>
  );
}

function Baekkyong() {
  return (
    <div>
      <img id="baekkyong" src={baekkyong} />
    </div>
  );
}

function Sidebar() {
  const menus = [
    { name: "한식", path: "/korean" },
    { name: "분식", path: "/school" },
    { name: "퓨전푸드", path: "/Fusion" },
    { name: "상세정보", path: "/details" },
  ];

  return (
    <div className="Sidebar">
      <div className="sidebar">
        <Sidebarheader></Sidebarheader>
        {menus.map((menu, index) => {
          return (
            <div className="menu">
              <Link to={menu.path} key={index}>
                <SidebarItem menu={menu} />
              </Link>
            </div>
          );
        })}
        <Baekkyong></Baekkyong>
      </div>
    </div>
  );
}

export default Sidebar;
