import React from "react";
import "../css/userBoard.css";
import {
  getBlockType,
  UserBoardType,
} from "../../../typedef/common/common.types";
import images from "../../../assets/images";

type Props = {
  boards: UserBoardType;
  getBlockDetail: (board: getBlockType) => void;
};

const UserBoard = ({ boards, getBlockDetail }: Props) => {
  return (
    <div className="user-board-wrap">
      <h2>내 투표</h2>
      <div className="board-container">
        <h3>
          게시글 <span>({boards.count})</span>
        </h3>
        <div className="board-box">
          {boards.results.map((board) => {
            return (
              <article className="board" onClick={() => getBlockDetail(board)}>
                <div className="user-area">
                  <div className="profile">
                    <img src={images.defaultProfile} alt={board.owner} />
                  </div>
                  <div>
                    <div className="username">{board.owner}</div>
                    <div className="create-time">{board.createdAt}</div>
                  </div>
                </div>
                <div className="content-area">
                  <div className="content">
                    <div className="content-view">
                      {board.content} Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Ipsum illum modi beatae commodi,
                      doloremque aliquam. Tenetur ducimus illo cum! Quo eaque
                      nulla assumenda inventore sapiente corrupti provident
                      vitae reiciendis adipisci.
                    </div>
                    {board.image ? (
                      <div className="image-area">
                        <img
                          className="attached-image"
                          src={board.image}
                          alt={board.image}
                        />
                      </div>
                    ) : null}
                  </div>
                  <div className="vote-count">{board.voteTotal}명 참가</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserBoard;
