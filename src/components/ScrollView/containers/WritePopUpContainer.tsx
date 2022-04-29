import React, { useCallback } from "react";
import WritePopUp from "../components/WritePopUp";

type Props = {
  closePopUp: React.MouseEventHandler<HTMLButtonElement>;
};

const WritePopUpContainer = ({ closePopUp }: Props) => {
  return <WritePopUp closePopUp={closePopUp} />;
};

export default WritePopUpContainer;
