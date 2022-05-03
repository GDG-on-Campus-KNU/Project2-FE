import React from "react";
import HeaderContainer from "../Header/containers/HeaderContainer";
import ScrollViewContainer from "../ScrollView/containers/ScrollViewContainer";
import SideBoardContainer from "../SideBoard/containers/SideBoardContainer";
import SideNavigationContainer from "../SideNavigation/containers/SideNavigationContainer";

type Props = {
  category: string;
  searchContent: string;
  setSearchContent: React.Dispatch<React.SetStateAction<string>>;
};

const Home = ({ category, searchContent, setSearchContent }: Props) => {
  return (
    <div>
      <HeaderContainer
        searchContent={searchContent}
        setSearchContent={setSearchContent}
      />
      <div>
        <SideNavigationContainer />
        <div className="scrollView-Container">
          {category === "all" && <ScrollViewContainer />}
          {category === "love" && <ScrollViewContainer />}
          {category === "fashion" && <ScrollViewContainer />}
          {category === "travel" && <ScrollViewContainer />}
        </div>
        <SideBoardContainer />
      </div>
    </div>
  );
};

export default Home;
