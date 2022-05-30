import React, { useCallback, useEffect, useState } from "react";
import useAuth from "../../../hooks/Auth/useAuth";
import { apiOrigin, apiRoute, requestGet } from "../../../lib/api/api";
import {
  BasicAPIResponseType,
  getBlockResponseType,
  getBlockType,
} from "../../../typedef/common/common.types";
import TopBoard from "../components/TopBoard";

type Props = {
  loadPopUp: (id: number) => Promise<void>;
};

const TopBoardContainer = ({ loadPopUp }: Props) => {
  const { token } = useAuth();
  const [itemList, setItemList] = useState<getBlockType[]>([]);

  const getRecentBoard = async () => {
    const { data } = await requestGet<
      BasicAPIResponseType<getBlockResponseType>
    >(`${apiOrigin}${apiRoute.board}${apiRoute.hot}`, {
      Authorization: `Bearer ${token}`,
    });

    setItemList(data.results);

    return data.results;
  };

  useEffect(() => {
    getRecentBoard();
  }, []);

  return <TopBoard loadPopUp={loadPopUp} itemList={itemList} />;
};

export default TopBoardContainer;
