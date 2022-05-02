import React from "react";
import ProgressBar from "./ProgressBar";

type Props = {
  isVote: boolean;
};

const VoteView = ({ isVote }: Props) => {
  return isVote ? (
    <div className="vote-view">
      <button className="vote-box">
        <ProgressBar bgcolor="orange" progress={30} />
      </button>
      <button className="vote-box">
        <ProgressBar bgcolor="orange" progress={70} />
      </button>
      <div>1920명 참가</div>
    </div>
  ) : (
    <div className="vote-view">
      <button className="vote-box isvote-false">VOTE1</button>
      <button className="vote-box isvote-false">VOTE2</button>
      <div>0명 참가</div>
    </div>
  );
};

export default VoteView;
