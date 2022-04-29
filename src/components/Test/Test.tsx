import React, { useCallback } from "react";
import usePopUp from "../../hooks/usePopUp";

type Props = {
  testPopup: React.MouseEventHandler<HTMLButtonElement>;
};

const Test = ({ testPopup }: Props) => {
  const num = "16px";
  return (
    <div style={{ fontSize: num }}>
      <button onClick={testPopup}>팝업띄우기</button>
    </div>
  );
};

export default Test;
