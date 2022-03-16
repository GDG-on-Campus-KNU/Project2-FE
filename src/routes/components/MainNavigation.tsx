import React from "react";
import { Routes, Route } from "react-router";
import PopUp from "../../components/common/PopUp/PopUp";
import Header from "../../components/Header/Header";
import ScrollViewContainer from "../../components/ScrollView/containers/ScrollViewContainer";
import SideBoardContainer from "../../components/SideBoard/containers/SideBoardContainer";
import SideNavigationContainer from "../../components/SideNavigation/containers/SideNavigationContainer";
import { PopUpTypes } from "../../typedef/common/common.types";

type Props = {
  popUp: PopUpTypes;
};

const MainNavigation = ({ popUp }: Props) => {
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
      {popUp.isShown && <PopUp child={popUp.popUp} />}
    </div>
  );
};

export default MainNavigation;
