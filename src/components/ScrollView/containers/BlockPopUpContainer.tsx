import React from "react";
import BlockPopUp from "../components/BlockPopUp";
import { getBlockType } from "../../../typedef/common/common.types";

type Props = { block: getBlockType };

const BlockPopUpContainer = ({ block }: Props) => {
  return <BlockPopUp block={block} />;
};

export default BlockPopUpContainer;
