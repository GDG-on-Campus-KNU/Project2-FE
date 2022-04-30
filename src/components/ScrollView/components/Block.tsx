import React from "react";
import { getBlockType } from "../../../typedef/common/common.types";
import "./css/Block.css";
import VoteView from "./VoteView";
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
  const content_txt_short = block.content.substring(0,200)
  return (
    <div className="block">
      <div className="user-area">
        <img
          className="profile"
          src={block.author.profile}
          alt={block.author.nickname}
        />
        <div>
          <div>{block.author.nickname}</div>
          <div>{block.updatedAt}</div>
        </div>
      </div>
      <div className="content-area">
        <div className={(expand && block.content.length > 200) ? "content-view-expand" : "content-view"}>
          {(expand && block.content.length > 200) ? block.content : content_txt_short}
        </div>
        <button onClick={reverseExpand}>
          {(block.content.length > 200) ? (expand ?  "간략히" : "자세히 보기") : null}
        </button>
        <VoteView isVote={block.isVote} />
      </div>
      <div className="etc-area">
        <div>
          {block.images.map((image, index) => (
            <button className="attached-image">
              <img
                className="SamplePicture"
                src={image}
                alt={image}
                key={index}
                onClick={() => onClickImage(index)}
              />
            </button>
          ))}
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
