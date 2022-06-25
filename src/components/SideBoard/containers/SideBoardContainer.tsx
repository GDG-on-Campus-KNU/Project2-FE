import React, { useCallback, useEffect } from "react";
import useAuth from "../../../hooks/Auth/useAuth";
import usePopUp from "../../../hooks/usePopUp";
import { apiOrigin, apiRoute, requestGet } from "../../../lib/api/api";
import {
  BasicAPIResponseType,
  getBlockType,
} from "../../../typedef/common/common.types";
import BlockPopUpContainer from "../../common/Block/containers/BlockPopUpContainer";
import SideBoard from "../SideBoard";

type Props = {
  itemList: getBlockType[];
  setItemList: React.Dispatch<React.SetStateAction<getBlockType[]>>;
};

const SideBoardContainer = ({ itemList, setItemList }: Props) => {
  const { __showPopUpFromHooks, __hidePopUpFromHooks } = usePopUp();
  const { token } = useAuth();

  const stringToVote = (voteText: string) => {
    voteText = voteText.replace(/\\/gi, "");
    voteText = voteText.replace(/'/gi, '"');
    const votes = JSON.parse(voteText).map((vote: Array<string | number>) => {
      return { content: vote[0], count: vote[1] };
    });

    return votes;
  };

  const getBlockDetail = async (id: number) => {
    const { data } = await requestGet<BasicAPIResponseType<getBlockType>>(
      `${apiOrigin}${apiRoute.board}/${id}/`,
      {
        Authorization: `Bearer ${token}`,
      }
    );

    const blockDeatil = {
      ...data,
      updatedAt: data.updatedAt.split(".")[0].replace("T", " "),
      image: [data.image],
      voteText: stringToVote(data.voteText),
    };

    return blockDeatil;
  };

  const loadPopUp = useCallback(
    async (id: number) => {
      const blockDetail = await getBlockDetail(id);

      __showPopUpFromHooks(
        <BlockPopUpContainer
          blockDetail={blockDetail}
          closePopUp={closePopUp}
          itemList={itemList}
          setItemList={setItemList}
        />
      );
    },
    [itemList]
  );

  const closePopUp = useCallback(() => {
    __hidePopUpFromHooks();
  }, []);

  return <SideBoard loadPopUp={loadPopUp} />;
};

export default SideBoardContainer;
