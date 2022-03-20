import React, { useState, useCallback } from "react";
import { getBlockType } from "../../../typedef/common/common.types";
import Block from "../components/Block";
import BlockPoppUpContainer from "./BlockPopUpContainer";
import usePopUp from "../../../hooks/usePopUp";

type Props = {
  block: getBlockType;
};

const BlockContainer = ({ block }: Props) => {
  const { __showPopUpFromHooks, __hidePopUpFromHooks } = usePopUp();
  const [expand, setExpand] = useState(false);

  const loadPopUp = useCallback(() => {
    __showPopUpFromHooks(
      <BlockPoppUpContainer block={block} closePopUp={closePopUp} />
    );
  }, []);

  const closePopUp = useCallback(() => {
    __hidePopUpFromHooks();
  }, []);

  const reverseExpand = () => {
    setExpand(!expand);
  };

  return (
    <Block
      block={block}
      loadPopUp={loadPopUp}
      expand={expand}
      reverseExpand={reverseExpand}
    />
  );
};

export default BlockContainer;
