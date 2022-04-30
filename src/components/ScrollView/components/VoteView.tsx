import React from "react";
import ProgressBar from "./ProgressBar";

type Props = {
  isVote: boolean;
};

const VoteView = ({ isVote }: Props) => {
  console.log(isVote);
  return isVote ? (
    <div className="vote-view">
      <button className="vote-box">VOTE1<ProgressBar bgcolor="orange" progress={30}  height={30} /></button>
      <button className="vote-box">VOTE2<ProgressBar bgcolor="orange" progress={70}  height={30} /></button>
      <div>1920명 참가</div>
    </div>
  ) : (
    <div className="vote-view">
      <button className="vote-box">VOTE1</button>
      <button className="vote-box">VOTE2</button>
      <div>0명 참가</div>
    </div>
  );
};

export default VoteView;
