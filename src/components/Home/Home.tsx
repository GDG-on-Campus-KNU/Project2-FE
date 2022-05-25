import React from "react";
import { getBlockType } from "../../typedef/common/common.types";
import HeaderContainer from "../Header/containers/HeaderContainer";
import ScrollViewContainer from "../ScrollView/containers/ScrollViewContainer";
import SideBoardContainer from "../SideBoard/containers/SideBoardContainer";
import SideNavigationContainer from "../SideNavigation/containers/SideNavigationContainer";

type Props = {
  category: string;
  searchContent: string;
  setSearchContent: React.Dispatch<React.SetStateAction<string>>;
  itemList: getBlockType[];
  editItemList: any;
};

const Home = ({
  category,
  searchContent,
  setSearchContent,
  itemList,
  editItemList,
}: Props) => {
  return (
    <div>
      <HeaderContainer
        searchContent={searchContent}
        setSearchContent={setSearchContent}
      />
      {/* <div>
        <SideNavigationContainer />
        <div className="scrollView-Container">
          {category === "all" && (
            <ScrollViewContainer
              itemList={itemList}
              editItemList={editItemList}
            />
          )}
          {category === "love" && (
            <ScrollViewContainer
              itemList={itemList}
              editItemList={editItemList}
            />
          )}
          {category === "fashion" && (
            <ScrollViewContainer
              itemList={itemList}
              editItemList={editItemList}
            />
          )}
          {category === "travel" && (
            <ScrollViewContainer
              itemList={itemList}
              editItemList={editItemList}
            />
          )}
        </div>
        <SideBoardContainer />
      </div> */}
    </div>
  );
};

export default Home;
