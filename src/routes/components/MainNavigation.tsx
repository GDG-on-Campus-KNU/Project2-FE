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
  setItemList: React.Dispatch<React.SetStateAction<getBlockType[]>>;
  next: string;
  editLink: (newcate: string) => void;
  getBlocks: () => Promise<
    {
      updatedAt: string;
      image: any[];
      id: number;
      owner: string;
      category: string;
      createdAt: string;
      content: string;
      likeCount: number;
      votedIndex: number;
      voteText: string;
      voteTotal: number;
      currentUser: string;
    }[]
  >;
  scrollView: React.RefObject<HTMLDivElement>;
  searchContent: string;
  setSearchContent: React.Dispatch<React.SetStateAction<string>>;
};

const MainNavigation = ({
  popUp,
  itemList,
  setItemList,
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
      <div
        style={{ display: "flex", gap: "12px", padding: "12px 12px 0 12px" }}
      >
        <SideNavigationContainer editLink={editLink} />
        <div style={{ flex: "3", display: "flex", gap: "12px" }}>
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
      </div>
      {popUp.isShown && <PopUp child={popUp.popUp} />}
    </div>
  );
};

export default MainNavigation;
