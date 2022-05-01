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
  commentRef: React.RefObject<HTMLTextAreaElement>;
  onHandleHeight: React.FormEventHandler<HTMLTextAreaElement>;
};

const BlockPopUp = ({
  block,
  closePopUp,
  picView,
  picViewToggle,
  image,
  commentRef,
  onHandleHeight,
}: Props) => {
  return (
    <div className="pop-up">
      <div className="pop-up-left">
        <div className={!picView ? "content-view" : "hidden"}>
          <div className="user-area">
            <img
              className="profile"
              src="http://localhost:8000/media/uploads/logo192_14PYWuv.png"
              alt={block.owner}
            />
            <div>
              <div>{block.owner}</div>
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
            {block.image[0] !== null
              ? block.image.map((image: string, index: number) => (
                  <button
                    className="img-btn"
                    onClick={picViewToggle}
                    key={index}
                  >
                    <img src={image} alt="sampleImage" />
                  </button>
                ))
              : null}
          </div>
        </div>
      </div>
      <div className="pop-up-right">
        <div className="header">
          <button onClick={closePopUp}>
            <img className="icon" src={images.popupClose} alt="닫기" />
          </button>
        </div>
        <div className="comment-container">
          <div className="comment-view-box">
            <CommentScrollViewContainer />
          </div>
          <div className="comment-write-box">
            <textarea
              className="comment-input"
              placeholder="댓글 추가..."
              ref={commentRef}
              onInput={onHandleHeight}
            ></textarea>
            <div className="write-comment-box">
              <button className="write-comment-button">작성</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockPopUp;
function onClickImage(index: number): void {
  throw new Error("Function not implemented.");
}
