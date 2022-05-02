import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/Auth/useAuth";
import { apiOrigin, apiRoute, requestPost } from "../../../lib/api/api";
import {
  BasicAPIResponseType,
  createVoteType,
} from "../../../typedef/common/common.types";
import VoteView from "../components/VoteView";

type Props = {
  votedIndex: number;
  voteText: string;
  blockId: number;
};

const VoteViewContainer = ({ votedIndex, voteText, blockId }: Props) => {
  const [voteList, setVoteList] = useState([]);
  const [voteTotal, setVoteTotal] = useState(0);
  const [isVote, setIsVote] = useState(votedIndex);
  const { token } = useAuth();

  const changeVote = (index: number) => {
    if (isVote === index) {
      setIsVote(-1);
    } else {
      setIsVote(index);
    }
    console.log(isVote);
  };

  const stringToVote = (voteText: string) => {
    voteText = voteText.replace(/\\/gi, "");
    voteText = voteText.replace(/'/gi, '"');
    const votes = JSON.parse(voteText).map((vote: Array<string | number>) => {
      return { content: vote[0], count: vote[1] };
    });

    let tempTotal = 0;

    votes.map((vote: createVoteType) => {
      tempTotal += vote.count;
    });

    setVoteTotal(tempTotal);

    return votes;
  };

  useEffect(() => {
    const votes = stringToVote(voteText);
    setVoteList(votes);
  }, []);

  const postVote = async (index: number) => {
    const formData = new FormData();

    formData.append("index", index.toString());

    const { data } = await requestPost<BasicAPIResponseType<string>>(
      `${apiOrigin}${apiRoute.board}/${blockId}${apiRoute.vote}`,
      {
        Authorization: `Bearer ${token}`,
      },
      formData
    );

    const votes = stringToVote(data);
    setVoteList(votes);
    changeVote(index);
  };

  return (
    <VoteView
      isVote={isVote}
      voteList={voteList}
      voteTotal={voteTotal}
      postVote={postVote}
    />
  );
};

export default VoteViewContainer;
