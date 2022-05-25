import React, { useCallback, useEffect, useState } from "react";
import useAuth from "../../../hooks/Auth/useAuth";
import usePopUp from "../../../hooks/usePopUp";
import { apiOrigin, apiRoute, requestGet } from "../../../lib/api/api";
import {
  BasicAPIResponseType,
  getBlockResponseType,
  getBlockType,
} from "../../../typedef/common/common.types";
import LastBoard from "../components/LastBoard";

type Props = {
  loadPopUp: (id: number) => Promise<void>;
};

const LastBoardContainer = ({ loadPopUp }: Props) => {
  const { token } = useAuth();
  const [itemList, setItemList] = useState<getBlockType[]>([]);

  const getRecentBoard = async () => {
    const { data } = await requestGet<
      BasicAPIResponseType<getBlockResponseType>
    >(`${apiOrigin}${apiRoute.board}${apiRoute.recently_voted}`, {
      Authorization: `Bearer ${token}`,
    });

    setItemList(data.results);

    return data.results;
  };

  useEffect(() => {
    getRecentBoard();
  }, []);

  return <LastBoard loadPopUp={loadPopUp} itemList={itemList} />;
};

export default LastBoardContainer;
