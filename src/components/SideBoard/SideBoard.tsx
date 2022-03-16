import React from "react";
import LastBoardContainer from "./containers/LastBoardContainer";
import TopBoardContainer from "./containers/TopBoardContainer";
import "./css/sideBoard.css";

const SideBoard = () => {
  return (
    <div className="side-board-wrap">
      <TopBoardContainer />
      <LastBoardContainer />
    </div>
  );
};

export default SideBoard;
