import React from "react";
import { getBlockType } from "../../../typedef/common/common.types";
import "./css/BlockPopUp.css";
import CommentScrollViewContainer from "../containers/CommentScrollViewContainer";
import images from "../../../assets/images";

type Props = {
  block: getBlockType;
  closePopUp: React.MouseEventHandler<HTMLButtonElement>;
  picView: boolean;
  picViewToggle: React.MouseEventHandler<HTMLButtonElement>;
  image: string;
};

const BlockPopUp = ({
  block,
  closePopUp,
  picView,
  picViewToggle,
  image,
}: Props) => {
  return (
    <div className="pop-up">
      <div className="pop-up-left">
        <div className={!picView ? "content-view" : "hidden"}>
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
            <div className="content">
              {block.content}
              <div className="vote">
                <button className="vote-box">VOTE1</button>
                <button className="vote-box">VOTE2</button>
                <button className="vote-box">VOTE3</button>
                <div>1920명 참가</div>
              </div>
            </div>
          </div>
        </div>
        <div className={picView ? "picture-view" : "hidden"}>
          <button onClick={picViewToggle}>X</button>
          <img className="test" src={image} alt="sampleImage" />
        </div>
        <div className="etc-area">
          <div>
            {block.images.map((image, index) => (
              <button className="img-btn" onClick={picViewToggle} key={index}>
                <img src={image} alt="sampleImage" />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="pop-up-right">
        <div className="header">
          <button onClick={closePopUp}>
            <img className="icon" src={images.popupClose} alt="닫기" />
          </button>
        </div>
        <div className="comment-view">
          <div className="comment-scroll">
            <CommentScrollViewContainer />
          </div>
          <textarea className="comment-input-box"></textarea>
          <button>작성</button>
        </div>
      </div>
    </div>
  );
};

export default BlockPopUp;
