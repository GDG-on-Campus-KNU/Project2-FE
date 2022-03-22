import React, { useCallback } from "react";
import { getBlockType } from "../../../typedef/common/common.types";
import Block from "../components/Block";
import BlockPoppUpContainer from "./BlockPopUpContainer";
import usePopUp from "../../../hooks/usePopUp";

type Props = {
  block: getBlockType;
};

const BlockContainer = ({ block }: Props) => {
  const { __showPopUpFromHooks } = usePopUp();
  const loadPopUp = useCallback(() => {
    __showPopUpFromHooks(<BlockPoppUpContainer block={block} />);
  }, []);
  return <Block block={block} loadPopUp={loadPopUp} />;
};

export default BlockContainer;
