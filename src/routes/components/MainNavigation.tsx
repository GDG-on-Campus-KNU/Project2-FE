import React from "react";
import { Routes, Route } from "react-router";
import PopUp from "../../components/common/PopUp/PopUp";
import HeaderContainer from "../../components/Header/containers/HeaderContainer";
import ScrollViewContainer from "../../components/ScrollView/containers/ScrollViewContainer";
import SideBoardContainer from "../../components/SideBoard/containers/SideBoardContainer";
import SideNavigationContainer from "../../components/SideNavigation/containers/SideNavigationContainer";
import { getBlockType, PopUpTypes } from "../../typedef/common/common.types";

type Props = {
  popUp: PopUpTypes;
  itemList: getBlockType[];
  editItemList: any;
  next: string;
  editLink: any;
  getBlocks: any;
};

const MainNavigation = ({
  popUp,
  itemList,
  editItemList,
  next,
  editLink,
  getBlocks,
}: Props) => {
  return (
    <div>
      <HeaderContainer />
      <div style={{ display: "flex", marginTop: "16px" }}>
        <SideNavigationContainer editLink={editLink} />
        <Routes>
          <Route
            path="/"
            element={
              <ScrollViewContainer
                itemList={itemList}
                editItemList={editItemList}
                next={next}
                getBlocks={getBlocks}
              />
            }
          />
        </Routes>
        <SideBoardContainer />
      </div>
      {popUp.isShown && <PopUp child={popUp.popUp} />}
    </div>
  );
};

export default MainNavigation;
