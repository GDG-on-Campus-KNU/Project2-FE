import React from "react";
import "./css/imagePopUp.css";

type Props = {
  focusImage: string;
  onPrev: React.MouseEventHandler<HTMLButtonElement>;
  onNext: React.MouseEventHandler<HTMLButtonElement>;
  images: string[];
  imageRef: number;
};

const ImagePopUp = ({
  focusImage,
  onPrev,
  onNext,
  images,
  imageRef,
}: Props) => {
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
      <div className="indigator-container">
        {images.map((item, index) => (
          <div>
            <button
              className={`indicator ${imageRef === index ? "active" : ""}`}
            >
              {index}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagePopUp;
