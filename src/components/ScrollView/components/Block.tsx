import React from "react";
import { getBlockType } from "../../../typedef/common/common.types";
import "./css/Block.css";
import VoteViewContainer from "../../common/VoteView/containers/VoteViewContainer";
import images from "../../../assets/images";

type Props = {
  block: getBlockType;
  loadPopUp: (id: number) => Promise<void>;
  onClickImage: (index: number) => void;
  expand: boolean;
  reverseExpand: React.MouseEventHandler<HTMLButtonElement>;
  itemList: getBlockType[];
  setItemList: React.Dispatch<React.SetStateAction<getBlockType[]>>;
};

const Block = ({
  block,
  loadPopUp,
  onClickImage,
  expand,
  reverseExpand,
  itemList,
  setItemList,
}: Props) => {
  const content_txt_short = block.content.substring(0, 200) + "...";
  return (
    <article className="block">
      <div className="user-area">
        <img
          className="profile"
          src={images.defaultProfile}
          alt={block.owner}
        />
        <div className="board-info">
          <div className="user">
            {block.owner} <span className="category">{block.category}</span>
          </div>
          <span className="date">{block.updatedAt}</span>
        </div>
      </div>
      <div className="content-area">
        <div
          className={
            expand && block.content.length > 200
              ? "content-view-expand"
              : "content-view"
          }
        >
          {expand && block.content.length > 200
            ? block.content
            : block.content.length > 200
            ? content_txt_short
            : block.content}
        </div>
        <button className="length-button" onClick={reverseExpand}>
          {block.content.length > 200
            ? expand
              ? "간략히"
              : "자세히 보기"
            : null}
        </button>
        <VoteViewContainer
          votedIndex={block.votedIndex}
          voteList={block.voteText}
          voteTotal={block.voteTotal}
          blockId={block.id}
          itemList={itemList}
          setItemList={setItemList}
        />
      </div>
      <div className="etc-area">
        <div>
          {block.image[0] !== null
            ? block.image.map((image: string, index: number) => (
                <button className="attached-image" key={index}>
                  <img
                    className="SamplePicture"
                    src={image}
                    alt={image}
                    key={index}
                    onClick={() => onClickImage(index)}
                  />
                </button>
              ))
            : null}
        </div>
        <div>
          <button onClick={() => loadPopUp(block.id)}>
            <img className="icon" src={images.chat} alt="덧글" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default Block;
