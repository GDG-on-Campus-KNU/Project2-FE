import React, { useState, useEffect } from "react";
import "./css/scrollView.css";
import BlockContainer from "./containers/BlockContainer";
import { getBlockType } from "../../typedef/common/common.types";
import images from "../../assets/images";

type Props = {
  setTarget: React.LegacyRef<HTMLDivElement>;
  loading: boolean;
  itemList: getBlockType[];
  loadPopUp: React.MouseEventHandler<HTMLButtonElement>;
  next: string;
};

const ScrollView = ({
  setTarget,
  loading,
  itemList,
  loadPopUp,
  next,
}: Props) => {
  return (
    <div className="wrapper">
      <button className="write-btn" onClick={loadPopUp}>
        <img className="icon" src={images.pencil} alt="작성" />
      </button>
      <div className="scroll-view-wrap">
        {itemList.map((block, index) => (
          <BlockContainer block={block} key={index} />
        ))}
        {next && !loading && (
          <div className="target" ref={setTarget}>
            Loading...
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrollView;
