import React, { useCallback, useRef, useState } from "react";
import BlockPopUp from "../components/BlockPopUp";
import { getBlockType } from "../../../typedef/common/common.types";

type Props = {
  block: getBlockType;
  closePopUp: React.MouseEventHandler<HTMLButtonElement>;
};

const BlockPopUpContainer = ({ block, closePopUp }: Props) => {
  const commentRef = React.useRef<HTMLTextAreaElement>(null);
  const [picView, setPicView] = useState(false);
  const [image, setImage] = useState<string>("");
  const picViewToggle = (event: any) => {
    if (event.target.tagName === "IMG") {
      setImage(event.target.src);
      setPicView(true);
    } else {
      setPicView(false);
    }
  };

  const onHandleHeight = useCallback(() => {
    if (commentRef.current && commentRef.current.scrollHeight < 305) {
      commentRef.current.style.height = "auto";
      commentRef.current.style.height = commentRef.current.scrollHeight + "px";
    }
  }, []);

  return (
    <BlockPopUp
      block={block}
      closePopUp={closePopUp}
      picView={picView}
      picViewToggle={picViewToggle}
      image={image}
      commentRef={commentRef}
      onHandleHeight={onHandleHeight}
    />
  );
};

export default BlockPopUpContainer;
