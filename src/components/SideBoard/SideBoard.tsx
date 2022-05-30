import React from "react";
import LastBoardContainer from "./containers/LastBoardContainer";
import TopBoardContainer from "./containers/TopBoardContainer";
import "./css/sideBoard.css";

type Props = {
  loadPopUp: (id: number) => Promise<void>;
};

const SideBoard = ({ loadPopUp }: Props) => {
  return (
    <div className="side-board-wrap">
      <TopBoardContainer loadPopUp={loadPopUp} />
      <LastBoardContainer loadPopUp={loadPopUp} />
    </div>
  );
};

export default SideBoard;
