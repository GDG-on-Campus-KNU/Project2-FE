import { logDOM } from "@testing-library/react";
import React from "react";
import { useState } from "react";
import logo from "./logo.jpg";
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
    <div className="HeaderContainer">
      <div className="left">
        <Link to="#">
          <img className="logo" src={logo} />
        </Link>
      </div>

      <div className="middle">
        <div className="searchDiv">
          <form className="searchBar">
            <input
              onChange={(e) => setSearchContents(e.target.value)}
              type="text"
              placeholder="검색창"
            />
            <button>검색</button>
          </form>
        </div>
      </div>

      <div className="right-empty"></div>

      <div className="right-alarm">
        <Link to="#">
          <button className="alarm">🔔</button>
        </Link>
      </div>

      <div className="right-profile">
        <li className="profile-button">
          <button className="profile-button" onClick={onClick}>
            profile button
          </button>
          <ul className={isDropDown ? "open" : "close"}>
            {console.log(`isdropdown : ${isDropDown}`)}
            <li>
              <a href="#">개인정보 수정</a>
            </li>
            <li>
              <a href="#">내 투표</a>
            </li>
            <li>
              <a href="#">로그아웃</a>
            </li>
            <li>
              <a href="#">훔냥냥</a>
            </li>
          </ul>
        </li>
      </div>
    </div>
  );
};

export default Header;
