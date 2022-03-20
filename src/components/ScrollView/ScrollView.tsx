import React, { useState, useEffect } from "react";
import "./css/scrollView.css";
import BlockContainer from "./containers/BlockContainer";
import { getBlockType } from "../../typedef/common/common.types";

type Props = {
  setTarget: React.LegacyRef<HTMLDivElement>;
  loading: boolean;
  itemList: getBlockType[];
  end: boolean;
  loadPopUp: React.MouseEventHandler<HTMLButtonElement>;
};

const ScrollView = ({
  setTarget,
  loading,
  itemList,
  end,
  loadPopUp,
}: Props) => {
  return (
    <div className="wrapper">
      <button className="write-btn" onClick={loadPopUp}>
        hello
      </button>
      <div className="scroll-view-wrap">
        {itemList.map((block, index) => (
          <BlockContainer block={block} key={index} />
        ))}
        {!end && !loading && (
          <div className="target" ref={setTarget}>
            Loading...
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrollView;
