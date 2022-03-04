import React from "react";

type Props = {
  onPostClicked: React.MouseEventHandler<HTMLButtonElement>;
};

const LastBoard = ({ onPostClicked }: Props) => {
  return (
    <div className="side-board-container">
      <h2>최근 투표한 글</h2>
      <ul className="post-list last">
        <li className="post-item">
          <button onClick={onPostClicked}>최근 투표한 글1</button>
        </li>
        <li className="post-item">
          <button onClick={onPostClicked}>최근 투표한 글2</button>
        </li>
        <li className="post-item">
          <button onClick={onPostClicked}>최근 투표한 글3</button>
        </li>
        <li className="post-item">
          <button onClick={onPostClicked}>최근 투표한 글4</button>
        </li>
        <li className="post-item">
          <button onClick={onPostClicked}>최근 투표한 글5</button>
        </li>
      </ul>
    </div>
  );
};

export default LastBoard;
