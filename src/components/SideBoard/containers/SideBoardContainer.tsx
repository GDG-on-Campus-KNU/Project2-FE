import React, { useCallback, useEffect } from "react";
import useAuth from "../../../hooks/Auth/useAuth";
import usePopUp from "../../../hooks/usePopUp";
import { apiOrigin, apiRoute, requestGet } from "../../../lib/api/api";
import {
  BasicAPIResponseType,
  getBlockType,
} from "../../../typedef/common/common.types";
import BlockPopUpContainer from "../../common/PopUp/BlockPopUp/containers/BlockPopUpContainer";
import stringToVote from "../../stringToVote/stringToVote";
import SideBoard from "../SideBoard";

const SideBoardContainer = () => {
  const { __showPopUpFromHooks, __hidePopUpFromHooks } = usePopUp();
  const { token } = useAuth();

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
      voteText: stringToVote(data.voteText as string),
    };

    return blockDeatil;
  };

  const loadPopUp = useCallback(async (id: number) => {
    const blockDetail = await getBlockDetail(id);

    __showPopUpFromHooks(
      <BlockPopUpContainer blockDetail={blockDetail} closePopUp={closePopUp} />
    );
  }, []);

  const closePopUp = useCallback(() => {
    __hidePopUpFromHooks();
  }, []);

  return <SideBoard loadPopUp={loadPopUp} />;
};

export default SideBoardContainer;
