import React, { useCallback, useEffect, useState } from "react";
import useAuth from "../../../hooks/Auth/useAuth";
import usePopUp from "../../../hooks/usePopUp";
import { apiOrigin, apiRoute, requestGet } from "../../../lib/api/api";
import {
  BasicAPIResponseType,
  getBlockType,
  UserBoardType,
} from "../../../typedef/common/common.types";
import BlockPopUpContainer from "../../ScrollView/containers/BlockPopUpContainer";
import UserBoard from "../components/UserBoard";

type Props = {
  itemList: getBlockType[];
  setItemList: React.Dispatch<React.SetStateAction<getBlockType[]>>;
};

const UserBoardContainer = ({ itemList, setItemList }: Props) => {
  const { token } = useAuth();
  const { __showPopUpFromHooks, __hidePopUpFromHooks } = usePopUp();
  const [boards, setBoards] = useState<UserBoardType>({
    count: 0,
    next: null,
    previous: null,
    results: [
      {
        id: 0,
        owner: "",
        category: "",
        image: "",
        createdAt: "",
        updatedAt: "",
        content: "",
        likeCount: 0,
        votedIndex: 0,
        voteText: "",
        voteTotal: 0,
        currentUser: "",
      },
    ],
  });

  const stringToVote = (voteText: string) => {
    voteText = voteText.replace(/\\/gi, "");
    voteText = voteText.replace(/'/gi, '"');
    const votes = JSON.parse(voteText).map((vote: Array<string | number>) => {
      return { content: vote[0], count: vote[1] };
    });

    return votes;
  };

  const onload = useCallback(async () => {
    const { data } = await requestGet<BasicAPIResponseType<UserBoardType>>(
      apiOrigin + apiRoute.mine,
      {
        Authorization: `Bearer ${token}`,
      }
    );
    if (data) {
      const newBoard = data.results.map((item) => {
        return {
          ...item,
          createdAt: item.updatedAt.split(".")[0].replace("T", " "),
          updatedAt: item.updatedAt.split(".")[0].replace("T", " "),
        };
      });

      setBoards({ ...data, results: newBoard });
    }
    console.log(data);
  }, []);

  const stringToVote = useCallback((voteText: string) => {
    voteText = voteText.replace(/\\/gi, "");
    voteText = voteText.replace(/'/gi, '"');
    const votes = JSON.parse(voteText).map((vote: Array<string | number>) => {
      return { content: vote[0], count: vote[1] };
    });

    return votes;
  }, []);

  const getBlockDetail = useCallback(
    async (blockData: getBlockType) => {
      const blockDetail = {
        ...blockData,
        updatedAt: blockData.updatedAt.split(".")[0].replace("T", " "),
        image: [blockData.image],
        voteText: stringToVote(blockData.voteText),
      };
      __showPopUpFromHooks(
        <BlockPopUpContainer
          blockDetail={blockDetail}
          closePopUp={closePopUp}
          itemList={itemList}
          setItemList={setItemList}
        />
      );
    },
    [__showPopUpFromHooks, itemList]
  );

  const closePopUp = useCallback(() => {
    __hidePopUpFromHooks();
  }, [__hidePopUpFromHooks]);

  useEffect(() => {
    onload();
  }, []);

  return <UserBoard boards={boards} getBlockDetail={getBlockDetail} />;
};

export default UserBoardContainer;
