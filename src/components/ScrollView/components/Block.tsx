import React from "react";
import { getBlockType } from "../../../typedef/common/common.types";
import "./css/Block.css";

type Props = {
  block: getBlockType;
  loadPopUp: React.MouseEventHandler<HTMLButtonElement>;
};

const Block = ({ block, loadPopUp }: Props) => {
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
        <div className="content-box">{block.content}</div>
        <div className="vote-container">
          <div className="vote-box">VOTE1</div>
          <div className="vote-box">VOTE2</div>
          <div>1920명 참가</div>
        </div>
      </div>
      <div className="comment-area">
        <div>
          {block.images.map((image, index) => (
            <img
              className="SamplePicture"
              src={image}
              alt="sampleImage"
              key={index}
            />
          ))}
        </div>
        <div>
          <div>
            <button>공감</button>
          </div>
          <div>
            <button onClick={loadPopUp}>덧글</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block;
