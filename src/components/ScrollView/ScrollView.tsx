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
  scrollView: any;
  searchContent: string;
};

const ScrollView = ({
  setTarget,
  loading,
  itemList,
  loadPopUp,
  next,
  scrollView,
  searchContent,
}: Props) => {
  return (
    <section className="wrapper">
      <button className="write-btn" onClick={loadPopUp}>
        <img className="icon" src={images.pencil} alt="작성" />
      </button>
      <div className="scroll-view-wrap" ref={scrollView}>
        {itemList.map((block, index) =>
          searchContent.length > 0 ? (
            block.content.includes(searchContent) ? (
              <BlockContainer block={block} key={index} />
            ) : null
          ) : (
            <BlockContainer block={block} key={index} />
          )
        )}
        {next && !loading && (
          <div className="target" ref={setTarget}>
            Loading...
          </div>
        )}
        {!next && itemList.length > 0 && (
          <div className="end">마지막 게시글입니다.</div>
        )}
      </div>
    </section>
  );
};

export default ScrollView;
