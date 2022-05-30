import React from "react";
import { Link } from "react-router-dom";
import "./css/sideNavigation.css";

type Props = {
  selected: string;
  setCategory: (category: string) => void;
};

const SideNavigation = ({ selected, setCategory }: Props) => {
  return (
    <div className="side-navigation-wrap">
      <div className="side-navigation-container">
        <h2>카테고리</h2>
        <ul className="category-list">
          <li className="category-item">
            <button
              className={selected === "all" ? "selected" : ""}
              onClick={() => setCategory("all")}
            >
              전체
            </button>
          </li>
          <li className="category-item">
            <button
              className={selected === "Love" ? "selected" : ""}
              onClick={() => setCategory("Love")}
            >
              연애
            </button>
          </li>
          <li className="category-item">
            <button
              className={selected === "Travel" ? "selected" : ""}
              onClick={() => setCategory("Travel")}
            >
              여행
            </button>
          </li>
          <li className="category-item">
            <button
              className={selected === "Fashion" ? "selected" : ""}
              onClick={() => setCategory("Fashion")}
            >
              패션
            </button>
          </li>
          <li className="category-item">
            <button
              className={selected === "Political" ? "selected" : ""}
              onClick={() => setCategory("Political")}
            >
              정치
            </button>
          </li>
          <li className="category-item">
            <button
              className={selected === "Balance_Game" ? "selected" : ""}
              onClick={() => setCategory("Balance_Game")}
            >
              밸런스 게임
            </button>
          </li>
          <li className="category-item">
            <button
              className={selected === "Free" ? "selected" : ""}
              onClick={() => setCategory("Free")}
            >
              마음대로
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavigation;
