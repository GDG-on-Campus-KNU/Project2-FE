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
  return isVote >= 0 ? (
    <div className="vote-view">
      {voteList.map((vote, index) => (
        <button
          className="vote-box"
          key={index}
          onClick={() => postVote(index)}
        >
          <ProgressBar
            bgcolor="orange"
            progress={(vote.count / voteTotal) * 100}
            content={vote.content}
          />
        </button>
      ))}
      <div>{voteTotal}명 참가</div>
    </div>
  ) : (
    <div className="vote-view">
      {voteList.map((vote, index) => (
        <button
          className="vote-box isvote-false"
          key={index}
          onClick={() => postVote(index)}
        >
          {vote.content}
        </button>
      ))}
      <div>{voteTotal}명 참가</div>
    </div>
  );
};

export default VoteView;
