import React, { useCallback } from "react";
import TopBoard from "../components/TopBoard";

const TopBoardContainer = () => {
  const onPostClicked = useCallback(() => {}, []);
  return <TopBoard onPostClicked={onPostClicked} />;
};

export default TopBoardContainer;
