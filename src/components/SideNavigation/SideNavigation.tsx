import React from "react";
import { Link } from "react-router-dom";
import "./css/sideNavigation.css";

const SideNavigation = () => {
  return (
    <div className="side-navigation-wrap">
      <div className="side-navigation-container">
        <h2>카테고리</h2>
        <ul className="category-list">
          <li className="category-item">
            <button>
              <Link to={"/home"}>전체</Link>
            </button>
          </li>
          <li className="category-item">
            <button>
              <Link to={"/love"}>연애</Link>
            </button>
          </li>
          <li className="category-item">
            <button>
              <Link to={"/travel"}>여행</Link>
            </button>
          </li>
          <li className="category-item">
            <button>
              <Link to={"/fashion"}>패션</Link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavigation;
