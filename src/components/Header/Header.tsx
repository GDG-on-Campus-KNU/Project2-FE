import React from "react";
import { useState } from "react";
import logo from "./logo.svg";
import { Route, Link } from "react-router-dom";
import "./css/header.css";
import images from "../../assets/images";

type Props = {
  isDropDown: boolean;
  onProfileClick: React.MouseEventHandler<HTMLButtonElement>;
  onSearch: React.MouseEventHandler<HTMLButtonElement>;
  setSearchContent: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({
  isDropDown,
  onProfileClick,
  onSearch,
  setSearchContent,
}: Props) => {
  // List.filter(item => item.content.match search,,,,)
  //filter로 검색한 거 띄우기
  //로그인 버튼 누르면 로그인 화면으로 넘어가게

  return (
    <header className="header-container">
      <h1 onClick={(e) => e.preventDefault()}>
        <img className="logo" src={images.logo} />
        <span>VOTE</span>
      </h1>

      <div className="search-container">
        <input
          className="searchInput"
          type="text"
          placeholder="검색"
          onChange={(e) => setSearchContent(e.target.value)}
        />
        <button className="search-button" type="submit" onClick={onSearch}>
          <img src={images.search} alt="검색" />
        </button>
      </div>

      <div className="right">
        <button className="alarm" onClick={(e) => e.preventDefault()}>
          <img src={images.notification} alt="알림" />
        </button>
        <ul className="profile-area">
          <button className="profile-button" onClick={onProfileClick}>
            <img src={images.user} alt="프로필" />
          </button>
          <li className={`sub-menu ${isDropDown ? "open" : "close"}`}>
            <ul>
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
