import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAuth from "../../../../hooks/Auth/useAuth";
import { apiOrigin, apiRoute, requestPost } from "../../../../lib/api/api";
import { updateItemList } from "../../../../store/itemList/actions";
import { RootState } from "../../../../store/rootReducer";
import { BasicAPIResponseType } from "../../../../typedef/common/common.types";
import VoteView from "../VoteView";

type Props = {
  votedIndex: number;
  voteList: any;
  voteTotal: number;
  blockId: number;
};

type vote = {
  content: string;
  count: number;
};

const PopUpVoteViewContainer = ({
  votedIndex,
  voteList,
  voteTotal,
  blockId,
}: Props) => {
  const { token } = useAuth();
  const itemList = useSelector(
    (root: RootState) => root.itemListReducer.itemList
  );
  const dispatch = useDispatch();

  const [popUpIndex, setPopUpIndex] = useState(votedIndex);
  const [popUpList, setPopUpList] = useState(voteList);
  const [popUpTotal, setPopUpTotal] = useState(voteTotal);

  const stringToVote = (voteText: string) => {
    voteText = voteText.replace(/\\/gi, "");
    voteText = voteText.replace(/'/gi, '"');
    const votes = JSON.parse(voteText).map((vote: Array<string | number>) => {
      return { content: vote[0], count: vote[1] };
    });
    return votes;
  };

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

    const newVoteList = stringToVote(data);

    let newVotedIndex = popUpIndex === index ? -1 : index;

    let newVoteTotal = 0;
    newVoteList.map(({ count }: vote) => {
      newVoteTotal += count;
    });

    const changeItemList = itemList.map((item) => {
      if (item.id === blockId) {
        console.log(item.votedIndex, index);
        return {
          ...item,
          voteText: newVoteList,
          votedIndex: newVotedIndex,
          voteTotal: newVoteTotal,
        };
      } else {
        return item;
      }
    });

    setPopUpIndex(newVotedIndex);
    setPopUpList(newVoteList);
    setPopUpTotal(newVoteTotal);
    dispatch(updateItemList(changeItemList));
  };

  return (
    <VoteView
      votedIndex={popUpIndex}
      voteList={popUpList}
      voteTotal={popUpTotal}
      postVote={postVote}
    />
  );
};

export default PopUpVoteViewContainer;
