import React from "react";
import "./css/imagePopUp.css";
import images from "../../../assets/images";

type Props = {
  focusImage: string;
  onPrev: React.MouseEventHandler<HTMLButtonElement>;
  onNext: React.MouseEventHandler<HTMLButtonElement>;
  files: string[];
  imageRef: number;
};

const ImagePopUp = ({ focusImage, onPrev, onNext, files, imageRef }: Props) => {
  return (
    <div className="image-popup-wrap">
      <button className="close-button">
        <img src={images.close} alt="close  " />
      </button>
      <div className="image-area">
        <img src={focusImage} alt="" />
      </div>
      <div className="image-nav">
        <button className="prev-button" onClick={onPrev}>
          <img src={images.prev} alt="prev" />
        </button>
        <button className="next-button" onClick={onNext}>
          <img src={images.next} alt="next" />
        </button>
      </div>
      <div className="indigator-container">
        {files.map((item, index) => (
          <button
            className={`indicator ${imageRef === index ? "active" : ""}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImagePopUp;
