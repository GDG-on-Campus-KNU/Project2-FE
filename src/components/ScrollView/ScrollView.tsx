import React from "react";
import "./css/scrollView.css";
import BlockContainer from "./containers/BlockContainer";
import { getBlockType } from "../../typedef/common/common.types";
import images from "../../assets/images";

type Props = {
  setTarget: React.LegacyRef<HTMLDivElement>;
  loading: boolean;
  next: string | null;
  itemList: getBlockType[];
  loadPopUp: React.MouseEventHandler<HTMLButtonElement>;
  scrollView: React.RefObject<HTMLDivElement>;
  scrollLoading: boolean;
  searchContent: string;
};

const ScrollView = ({
  setTarget,
  loading,
  next,
  itemList,
  loadPopUp,
  scrollView,
  scrollLoading,
  searchContent,
}: Props) => {
  return (
    <section className="wrapper">
      <button className="write-btn" onClick={loadPopUp}>
        <img className="icon" src={images.pencil} alt="작성" />
      </button>
      <div className="scroll-view-wrap" ref={scrollView}>
        {scrollLoading ? null : (
          <>
            {itemList.map((block, index) => (
              <>
                <BlockContainer block={block} key={index} />
              </>
            ))}
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
          </>
        )}
      </div>
    </section>
  );
};

export default ScrollView;
