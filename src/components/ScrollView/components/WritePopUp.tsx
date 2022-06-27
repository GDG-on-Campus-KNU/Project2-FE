import React from "react";
import images from "../../../assets/images";
import {
  createImageType,
  VoteType,
} from "../../../typedef/common/common.types";
import "./css/WritePopUp.css";

type Props = {
  closePopUp: React.MouseEventHandler<HTMLButtonElement>;
  votes: VoteType[];
  addVote: React.MouseEventHandler<HTMLButtonElement>;
  changeVoteInput: any;
  removeVote: any;
  imgs: Array<any>;
  addImg: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeImg: (id: number) => void;
  postBlock: React.FormEventHandler<HTMLFormElement>;
  onChangeCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeContent: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const WritePopUp = ({
  closePopUp,
  votes,
  addVote,
  changeVoteInput,
  removeVote,
  imgs,
  addImg,
  removeImg,
  postBlock,
  onChangeCategory,
  onChangeContent,
}: Props) => {
  return (
    <form className="write-pop-up" onSubmit={postBlock}>
      <div className="pop-up-left">
        <div className="category-section">
          <select className="category" onChange={(e) => onChangeCategory(e)}>
            <option value="Love">연애</option>
            <option value="Travel">여행</option>
            <option value="Fashion">패션</option>
            <option value="Political">정치</option>
            <option value="Balance_Game">밸런스 게임</option>
            <option value="Free">마음대로</option>
          </select>
        </div>
        <textarea
          className="textarea"
          placeholder="내용을 입력하세요."
          onChange={(e) => onChangeContent(e)}
          required
        ></textarea>
      </div>
      <div className="pop-up-right">
        <div className="header">
          <button onClick={closePopUp}>
            <img className="icon" src={images.popupClose} alt="닫기" />
          </button>
        </div>
        <div className="info-area">
          <div className="title">투표 항목</div>
          <div className="vote-area">
            {votes.map((vote, index) => (
              <div key={index} id={"vote" + index}>
                <input
                  className={
                    index > 1 ? "add-vote-input-box" : "vote-input-box"
                  }
                  value={vote.content}
                  onChange={changeVoteInput}
                  required
                />
                {index > 1 ? (
                  <button
                    className="vote-del-btn"
                    type="button"
                    onClick={removeVote}
                  >
                    삭제
                  </button>
                ) : null}
              </div>
            ))}
            {votes.length < 4 ? (
              <button type="button" className="more-btn" onClick={addVote}>
                +
              </button>
            ) : null}
          </div>
          <div className="title">이미지</div>
          <div className="image-area">
            {imgs.map((img: createImageType) => (
              <div className="img-preview" key={img.id}>
                <img
                  className="img-add-btn"
                  src={img.imgBase64 as string}
                  alt={img.imgFile.name}
                />
                <button
                  className="image-del-btn"
                  type="button"
                  onClick={() => removeImg(img.id)}
                >
                  X
                </button>
              </div>
            ))}
            {imgs.length < 1 ? (
              <>
                <label htmlFor="temp-btn">
                  <div className="img-add-btn">+</div>
                </label>
                <input
                  id="temp-btn"
                  type="file"
                  className="img-input-box"
                  onChange={(e) => addImg(e)}
                />
              </>
            ) : null}
          </div>
        </div>
        <div className="write-btn-area">
          <button className="write-btn">
            <img className="icon" src={images.pencil} alt="작성" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default WritePopUp;
