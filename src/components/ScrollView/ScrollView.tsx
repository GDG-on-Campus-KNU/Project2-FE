import React, { useState, useEffect } from "react";
import "./css/scrollView.css";
import BlockContainer from "./containers/BlockContainer";
import { getBlockType } from "../../typedef/common/common.types";

type Props = {
  setTarget: React.LegacyRef<HTMLDivElement>;
  loading: boolean;
  itemList: getBlockType[];
};

const ScrollView = ({ setTarget, loading, itemList }: Props) => {
  return (
    <div className="scroll-view-wrap">
      {itemList.map((block, index) => (
        <BlockContainer block={block} key={index} />
      ))}

      {!loading && (
        <div className="target" ref={setTarget}>
          Loading...
        </div>
      )}
    </div>
  );
};

export default ScrollView;
