import React, { useCallback } from "react";
import useAuth from "../../../hooks/Auth/useAuth";
import usePopUp from "../../../hooks/usePopUp";
import { apiOrigin, apiRoute, requestGet } from "../../../lib/api/api";
import {
  BasicAPIResponseType,
  getBlockType,
} from "../../../typedef/common/common.types";
import BlockPopUpContainer from "../../ScrollView/containers/BlockPopUpContainer";
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

    const block = {
      ...data,
      updatedAt: data.updatedAt.split(".")[0].replace("T", " "),
    };

    return block;
  };

  const loadPopUp = useCallback(async (id: number) => {
    const block = await getBlockDetail(id);

    __showPopUpFromHooks(
      <BlockPopUpContainer block={block} closePopUp={closePopUp} />
    );
  }, []);

  const closePopUp = useCallback(() => {
    __hidePopUpFromHooks();
  }, []);

  return <SideBoard loadPopUp={loadPopUp} />;
};

export default SideBoardContainer;
