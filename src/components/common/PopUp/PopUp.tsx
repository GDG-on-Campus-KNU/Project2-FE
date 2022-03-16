import usePopUp from "../../../hooks/usePopUp";
import React, { ReactNode, useCallback } from "react";
import "./css/popUp.css";

type Props = {
  child: ReactNode;
};

const PopUp = ({ child }: Props) => {
  const { __hidePopUpFromHooks } = usePopUp();

  return (
    <div
      className="popup-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          __hidePopUpFromHooks();
        }
      }}
    >
      {child}
    </div>
  );
};

export default PopUp;
