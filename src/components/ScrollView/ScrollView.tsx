import React, { ReactElement } from "react";
import "./css/scrollView.css";
import BlockContainer from "./containers/BlockContainer";
import images from "../../assets/images";
import InfiniteScroll from "../common/InfiniteScroll/InfiniteScroll";
import { getBlockType } from "../../typedef/common/common.types";
import Block from "./components/Block";

type Props = {
  next: string | null;
  itemList: getBlockType[];
  addItemList: () => Promise<void>;
  loadPopUp: React.MouseEventHandler<HTMLButtonElement>;
  scrollView: React.RefObject<HTMLDivElement>;
  scrollLoading: boolean;
  searchContent: string;
};

const ScrollView = ({
  next,
  itemList,
  addItemList,
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
          <InfiniteScroll
            block={
              <BlockContainer
                content={{
                  id: 0,
                  owner: "",
                  category: "",
                  image: undefined,
                  createdAt: "",
                  updatedAt: "",
                  content: "",
                  likeCount: 0,
                  votedIndex: 0,
                  voteText: "",
                  voteTotal: 0,
                  currentUser: "",
                }}
              />
            }
            blockProps={itemList}
            addItemList={addItemList}
            end={!next}
          />
        )}
      </div>
    </section>
  );
};

export default ScrollView;
