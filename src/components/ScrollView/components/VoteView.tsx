import React from "react";
import "./css/VoteView.css";
import { createVoteType } from "../../../typedef/common/common.types";
import ProgressBar from "./ProgressBar";

type Props = {
  isVote: number;
  voteList: Array<createVoteType>;
  voteTotal: number;
  postVote: (index: number) => Promise<void>;
};

const VoteView = ({ isVote, voteList, voteTotal, postVote }: Props) => {
  return (
    <div className="vote-view">
      {isVote >= 0
        ? voteList.map((vote, index) => (
            <div className="vote-box" key={index}>
              <button onClick={() => postVote(index)}>
                <div className="vote-text">
                  <div>{vote.content}</div>
                  <div>{Math.round((vote.count / voteTotal) * 100)}%</div>
                </div>
              </button>
              <ProgressBar
                bgcolor="orange"
                progress={(vote.count / voteTotal) * 100}
                content={vote.content}
              />
            </div>
          ))
        : voteList.map((vote, index) => (
            <button
              className="vote-box isvote-false"
              key={index}
              onClick={() => postVote(index)}
            >
              {vote.content}
            </button>
          ))}
      <div className="vote-count">{voteTotal}명 참가</div>
    </div>
  );
};

export default VoteView;
