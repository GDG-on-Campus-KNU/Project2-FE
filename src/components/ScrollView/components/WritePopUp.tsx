import React from "react";
import "./css/WritePopUp.css";

const WritePopUp = () => {
  return (
    <form className="pop-up">
      <div className="pop-up-left">
        <div className="category">
          <select>
            <option>hello</option>
            <option>world</option>
            <option>nice</option>
            <option>React</option>
          </select>
        </div>
        <textarea className="textarea"></textarea>
      </div>
      <div className="pop-up-right">
        <div className="tab">
          <button>투표</button>
          <button>이미지</button>
        </div>
        <div className="info-area"></div>
        <button className="button">작성</button>
      </div>
    </form>
  );
};

export default WritePopUp;
