import React from "react";
import { getBlockType } from "../../../typedef/common/common.types";
import "./css/Block.css";
import VoteViewContainer from "../containers/VoteViewContainer";
import images from "../../../assets/images";

type Props = {
  block: getBlockType;
  loadPopUp: (id: number) => Promise<void>;
  onClickImage: (index: number) => void;
  expand: boolean;
  reverseExpand: React.MouseEventHandler<HTMLButtonElement>;
};

const Block = ({
  block,
  loadPopUp,
  onClickImage,
  expand,
  reverseExpand,
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
        <div>
          <div>{block.owner}</div>
          <div>{block.updatedAt}</div>
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
          voteText={block.voteText}
          blockId={block.id}
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
