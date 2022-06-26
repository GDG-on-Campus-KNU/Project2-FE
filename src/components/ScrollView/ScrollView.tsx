import React, { ReactElement } from "react";
import "./css/scrollView.css";
import BlockContainer from "./containers/BlockContainer";
import images from "../../assets/images";
import InfiniteScroll from "../common/InfiniteScroll/InfiniteScroll";

type Props = {
  next: string | null;
  elementList: ReactElement[];
  addItemList: () => Promise<void>;
  loadPopUp: React.MouseEventHandler<HTMLButtonElement>;
  scrollView: React.RefObject<HTMLDivElement>;
  scrollLoading: boolean;
  searchContent: string;
};

const ScrollView = ({
  next,
  elementList,
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
            itemList={elementList}
            addItemList={addItemList}
            end={!next}
          />
        )}
      </div>
    </section>
  );
};

export default ScrollView;
