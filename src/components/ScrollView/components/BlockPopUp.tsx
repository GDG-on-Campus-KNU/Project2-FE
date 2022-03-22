import React from "react";
import { getBlockType } from "../../../typedef/common/common.types";

type Props = { block: getBlockType };

const BlockPopUp = ({ block }: Props) => {
  return <div>{block.content}</div>;
};

export default BlockPopUp;
