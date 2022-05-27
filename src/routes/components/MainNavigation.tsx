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
  scrollView: any;
  searchContent: string;
  setSearchContent: React.Dispatch<React.SetStateAction<string>>;
};

const MainNavigation = ({
  popUp,
  itemList,
  editItemList,
  next,
  editLink,
  getBlocks,
  scrollView,
  searchContent,
  setSearchContent,
}: Props) => {
  return (
    <div>
      <HeaderContainer setSearchContent={setSearchContent} />
      <div style={{ display: "flex", marginTop: "16px" }}>
        <SideNavigationContainer editLink={editLink} />
        <Routes>
          <Route
            path="/home"
            element={
              <ScrollViewContainer
                itemList={itemList}
                editItemList={editItemList}
                next={next}
                getBlocks={getBlocks}
                scrollView={scrollView}
                searchContent={searchContent}
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
