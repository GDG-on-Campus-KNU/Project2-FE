import React from "react";
import images from "../../../assets/images";
import "./css/WritePopUp.css";

type Props = {
  closePopUp: React.MouseEventHandler<HTMLButtonElement>;
};

const WritePopUp = ({ closePopUp }: Props) => {
  return (
    <form className="pop-up">
      <div className="pop-up-left">
        <div className="category-section">
          <select className="category">
            <option>travel</option>
            <option>love</option>
            <option>fashion</option>
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
            <input className="vote-input-box" />
            <input className="vote-input-box" />
            <input className="vote-input-box" />
            {/* <button className="more-btn">+</button> */}
          </div>
          <div className="title">이미지</div>
          <div className="image-area">
            <input type="file" accept="image/*"></input>
            <input type="file" accept="image/*"></input>
            <input type="file" accept="image/*"></input>
            {/* <button className="more-btn">+</button> */}
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
