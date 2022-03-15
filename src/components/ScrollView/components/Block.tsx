import React from "react";
import "./css/Block.css";

const Block = ({ block }) => {
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
          {block.images.map((image: any) => (
            <img className="SamplePicture" src={image} alt="sampleImage" />
          ))}
        </div>
        <div>
          <div>
            <div className="icon"></div>37
          </div>
          <div>
            <div className="icon"></div>21
          </div>
        </div>
      </div>
    </div>
  );
};

export default Block;
