import React, { useCallback } from "react";
import { getBlockType } from "../../../typedef/common/common.types";
import Block from "../components/Block";
import BlockPoppUpContainer from "./BlockPopUpContainer";
import usePopUp from "../../../hooks/usePopUp";
import ImagePopUp from "../components/ImagePopUp";
import ImagePopUpContainer from "./ImagePopUpContainer";

type Props = {
  block: getBlockType;
};

const BlockContainer = ({ block }: Props) => {
  const { __showPopUpFromHooks } = usePopUp();
  const loadPopUp = useCallback(() => {
    __showPopUpFromHooks(<BlockPoppUpContainer block={block} />);
  }, []);

  const onClickImage = useCallback(
    (index: number) => {
      __showPopUpFromHooks(
        <ImagePopUpContainer images={block.images} index={index} />
      );
    },
    [__showPopUpFromHooks]
  );
  return (
    <Block block={block} loadPopUp={loadPopUp} onClickImage={onClickImage} />
  );
};

export default BlockContainer;
