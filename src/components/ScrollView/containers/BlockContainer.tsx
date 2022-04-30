import React, { useState, useCallback } from "react";
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
  const { __showPopUpFromHooks, __hidePopUpFromHooks } = usePopUp();
  const [expand, setExpand] = useState(false);
  const [like, setLike] = useState(false);

  const loadPopUp = useCallback(() => {
    __showPopUpFromHooks(
      <BlockPoppUpContainer block={block} closePopUp={closePopUp} />
    );
  }, []);

  const closePopUp = useCallback(() => {
    __hidePopUpFromHooks();
  }, []);

  const reverseExpand = () => {
    setExpand((current) => !current);
  };

  const clickLike = () => {
    setLike((current) => !current);
  };

  const onClickImage = useCallback(
    (index: number) => {
      __showPopUpFromHooks(
        <ImagePopUpContainer images={block.images} index={index} />
      );
    },
    [__showPopUpFromHooks]
  );
  return (
    <Block
      block={block}
      loadPopUp={loadPopUp}
      onClickImage={onClickImage}
      expand={expand}
      reverseExpand={reverseExpand}
      like={like}
      clickLike={clickLike}
    />
  );
};

export default BlockContainer;
