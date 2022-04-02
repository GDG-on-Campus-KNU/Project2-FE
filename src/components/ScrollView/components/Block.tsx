import React from "react";
import { getBlockType } from "../../../typedef/common/common.types";
import "./css/Block.css";
import VoteView from "./VoteView";

type Props = {
  block: getBlockType;
  loadPopUp: React.MouseEventHandler<HTMLButtonElement>;
  onClickImage: (index: number) => void;
};

const Block = ({ block, loadPopUp, onClickImage }: Props) => {
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
        <div className={expand ? "content-view-expand" : "content-view"}>
          {block.content}
        </div>
        {block.content.length > 300 ? (
          <button onClick={reverseExpand}>{expand ? "▲" : "▼"}</button>
        ) : null}
        <VoteView isVote={block.isVote} />
      </div>
      <div className="etc-area">
        <div>
          {block.images.map((image, index) => (
            <img
              className="SamplePicture"
              src={image}
              alt="sampleImage"
              key={index}
              onClick={() => onClickImage(index)}
            />
          ))}
        </div>
        <div>
          <button>공감</button>
          <button onClick={loadPopUp}>덧글</button>
        </div>
      </div>
    </div>
  );
};

export default Block;
