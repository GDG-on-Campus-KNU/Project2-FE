import React from "react";
import "./css/scrollView.css";
import BlockContainer from "../common/Block/containers/BlockContainer";
import { getBlockType } from "../../typedef/common/common.types";
import images from "../../assets/images";

type Props = {
  setTarget: React.LegacyRef<HTMLDivElement>;
  loading: boolean;
  itemList: getBlockType[];
  setItemList: React.Dispatch<React.SetStateAction<getBlockType[]>>;
  loadPopUp: React.MouseEventHandler<HTMLButtonElement>;
  next: string;
  scrollView: React.RefObject<HTMLDivElement>;
  searchContent: string;
};

const ScrollView = ({
  setTarget,
  loading,
  itemList,
  setItemList,
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
              <BlockContainer
                block={block}
                key={index}
                itemList={itemList}
                setItemList={setItemList}
              />
            ) : null
          ) : (
            <BlockContainer
              block={block}
              key={index}
              itemList={itemList}
              setItemList={setItemList}
            />
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
        {!next && itemList.length == 0 && (
          <div className="end">게시글이 없습니다.</div>
        )}
      </div>
    </section>
  );
};

export default ScrollView;
