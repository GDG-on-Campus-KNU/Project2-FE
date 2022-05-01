import React from "react";
import { getBlockType } from "../../../typedef/common/common.types";
import "./css/Block.css";
import VoteViewContainer from "../containers/VoteViewContainer";
import images from "../../../assets/images";

type Props = {
  block: getBlockType;
  loadPopUp: React.MouseEventHandler<HTMLButtonElement>;
  onClickImage: (index: number) => void;
  expand: boolean;
  reverseExpand: React.MouseEventHandler<HTMLButtonElement>;
  like: boolean;
  clickLike: React.MouseEventHandler<HTMLButtonElement>;
};

const Block = ({
  block,
  loadPopUp,
  onClickImage,
  expand,
  reverseExpand,
  like,
  clickLike,
}: Props) => {
  const content_txt_short = block.content.substring(0, 200) + "...";
  return (
    <div className="block">
      <div className="user-area">
        <img className="profile" src="" alt={block.owner} />
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
        <button onClick={reverseExpand}>
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
          <button onClick={clickLike}>
            {like ? (
              <img className="icon" src={images.checkedLike} alt="공감" />
            ) : (
              <img className="icon" src={images.uncheckedLike} alt="공감" />
            )}
          </button>
          <button onClick={loadPopUp}>
            <img className="icon" src={images.chat} alt="덧글" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Block;
