import React from "react";
import "./css/imagePopUp.css";

type Props = {
  focusImage: string;
  onPrev: React.MouseEventHandler<HTMLButtonElement>;
  onNext: React.MouseEventHandler<HTMLButtonElement>;
};

const ImagePopUp = ({ focusImage, onPrev, onNext }: Props) => {
  return (
    <div className="image-popup-wrap">
      <div className="image-area">
        <img src={focusImage} alt="" />
      </div>
      <div className="image-nav">
        <button className="prev-button" onClick={onPrev}>
          prev
        </button>
        <button className="next-button" onClick={onNext}>
          next
        </button>
      </div>
      <div className="indigator-container"></div>
    </div>
  );
};

export default ImagePopUp;
