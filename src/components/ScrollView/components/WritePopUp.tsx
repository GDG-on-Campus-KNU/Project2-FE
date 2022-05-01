import React from "react";
import images from "../../../assets/images";
import { createVoteType } from "../../../typedef/common/common.types";
import "./css/WritePopUp.css";

type Props = {
  closePopUp: React.MouseEventHandler<HTMLButtonElement>;
  changeInput: (id: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  votes: createVoteType[];
  voteEnable: boolean;
  addVote: React.MouseEventHandler<HTMLButtonElement>;
  removeVote: (id: number) => void;
  imgs: Array<any>;
  imgEnable: boolean;
  addImg: React.MouseEventHandler<HTMLButtonElement>;
  removeImg: React.MouseEventHandler<HTMLButtonElement>;
};

const WritePopUp = ({
  closePopUp,
  changeInput,
  votes,
  addVote,
  imgs,
  addImg,
  voteEnable,
  imgEnable,
  removeVote,
  removeImg,
}: Props) => {
  return (
    <form className="pop-up">
      <div className="pop-up-left">
        <div className="category-section">
          <select className="category">
            <option>연애</option>
            <option>여행</option>
            <option>패션</option>
          </select>
        </div>
        <textarea className="textarea"></textarea>
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
              <div key={index}>
                <input
                  className="vote-input-box"
                  onChange={(e) => changeInput(vote.id, e)}
                />
                {index > 1 ? (
                  <button
                    className="del-btn"
                    type="button"
                    onClick={() => removeVote(vote.id)}
                  >
                    ❌
                  </button>
                ) : null}
              </div>
            ))}
            {voteEnable ? (
              <button type="button" className="more-btn" onClick={addVote}>
                ✖️
              </button>
            ) : null}
          </div>
          <div className="title">이미지</div>
          <div className="image-area">
            {imgs.map((img: any, index: number) => (
              <div key={index}>
                <label htmlFor={img.id}>업로드</label>
                <input
                  id={img.id}
                  type="file"
                  className="vote-input-box"
                  key={index}
                  value={img.img}
                />
                <button
                  className="del-btn"
                  type="button"
                  onClick={() => removeImg(img.id)}
                >
                  ❌
                </button>
              </div>
            ))}
            {imgEnable ? (
              <button type="button" className="more-btn" onClick={addImg}>
                ✖️
              </button>
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
