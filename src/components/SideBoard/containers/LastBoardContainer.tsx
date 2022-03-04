import React, { useCallback } from "react";
import LastBoard from "../components/LastBoard";

const LastBoardContainer = () => {
  const onPostClicked = useCallback(() => {}, []);

  return <LastBoard onPostClicked={onPostClicked} />;
};

export default LastBoardContainer;
