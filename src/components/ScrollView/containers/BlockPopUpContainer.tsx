import React, { useState } from "react";
import BlockPopUp from "../components/BlockPopUp";
import { getBlockType } from "../../../typedef/common/common.types";

type Props = {
  block: getBlockType;
  closePopUp: React.MouseEventHandler<HTMLButtonElement>;
};

const BlockPopUpContainer = ({ block, closePopUp }: Props) => {
  const [picView, setPicView] = useState(false);
  const [image, setImage] = useState<string>("");
  const picViewToggle = (event: any) => {
    console.log(event.target.tagName);

    if (event.target.tagName === "IMG") {
      setImage(event.target.src);
      setPicView(true);
    } else {
      setPicView(false);
    }
  };

  return (
    <BlockPopUp
      block={block}
      closePopUp={closePopUp}
      picView={picView}
      picViewToggle={picViewToggle}
      image={image}
    />
  );
};

export default BlockPopUpContainer;
