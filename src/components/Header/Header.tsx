import React from "react";
import { useState } from "react";
import logo from "./logo.svg";
import { Route, Link } from "react-router-dom";
import "./css/header.css";

const Header = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [searchContents, setSearchContents] = useState("");
  const onClick = () => setIsDropDown((prev) => !prev);
  // List.filter(item => item.content.match search,,,,)
  //filter로 검색한 거 띄우기
  //로그인 버튼 누르면 로그인 화면으로 넘어가게

  return (
    <header className="header-container">
        <h1>
          <img className="logo" src={logo} onClick={e => e.preventDefault()} />
        </h1>

        <div className="search-container">
            <input
              onChange={(e) => setSearchContents(e.target.value)}
              type="text"
              placeholder="검색창"
            />
            <button>검색</button>
        </div>

<div className="right">
<button className="alarm" onClick={e => e.preventDefault()}>🔔</button>
        <ul className="profile-button">
          <button className="profile-button" onClick={onClick}>
            profile button
          </button>
          <li>
          <ul className={isDropDown ? "open" : "close"}>
            <li>
              <a href="#">내 정보</a>
            </li>
            <li>
              <a href="#">내 투표</a>
            </li>
            <li>
              <a href="#">로그아웃</a>
            </li>
          </ul>
          </li>
          
        </ul>
</div>
        
    </header>
  );
};

export default Header;
