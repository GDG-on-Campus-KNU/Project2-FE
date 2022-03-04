import React from "react";
import { Routes, Route } from "react-router";
import Header from "../../components/Header/Header";
import ScrollViewContainer from "../../components/ScrollView/containers/ScrollViewContainer";
import SideBoardContainer from "../../components/SideBoard/containers/SideBoardContainer";
import SideNavigationContainer from "../../components/SideNavigation/containers/SideNavigationContainer";
const MainNavigation = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <SideNavigationContainer />
        <Routes>
          <Route path="/home" element={<ScrollViewContainer />} />
        </Routes>

        <SideBoardContainer />
      </div>
    </div>
  );
};

export default MainNavigation;
