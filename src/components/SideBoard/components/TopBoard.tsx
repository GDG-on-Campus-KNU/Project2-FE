import React from "react";

type Props = {
  onPostClicked: React.MouseEventHandler<HTMLButtonElement>;
};

const TopBoard = ({ onPostClicked }: Props) => {
  return (
    <div className="side-board-container">
      <h2>오늘의 인기글</h2>
      <ul className="post-list top">
        <li className="post-item">
          <button onClick={onPostClicked}>오늘의 인기글1</button>
        </li>
        <li className="post-item">
          <button onClick={onPostClicked}>오늘의 인기글2</button>
        </li>
        <li className="post-item">
          <button onClick={onPostClicked}>오늘의 인기글3</button>
        </li>
        <li className="post-item">
          <button onClick={onPostClicked}>오늘의 인기글4</button>
        </li>
        <li className="post-item">
          <button onClick={onPostClicked}>오늘의 인기글5</button>
        </li>
      </ul>
    </div>
  );
};

export default TopBoard;
