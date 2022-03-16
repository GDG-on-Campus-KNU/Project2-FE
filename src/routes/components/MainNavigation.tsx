import React from "react";
import { Routes, Route } from "react-router";
import Header from "../../components/Header/Header";
import ScrollViewContainer from "../../components/ScrollView/containers/ScrollViewContainer";
import SideBoardContainer from "../../components/SideBoard/containers/SideBoardContainer";
import SideNavigationContainer from "../../components/SideNavigation/containers/SideNavigationContainer";
import "../../styles/css/not-Header.css"
const MainNavigation = () => {
  return (
    <div>
      <Header />
      <div className="not-Header" style={{ display: "flex", backgroundColor: "#eee" }}>
        <div style={{ display: "flex" }}>
          <SideNavigationContainer />
          <Routes>
            <Route path="/" element={<ScrollViewContainer />} />
          </Routes>

          <SideBoardContainer />
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
