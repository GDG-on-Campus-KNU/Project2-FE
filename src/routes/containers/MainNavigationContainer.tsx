import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/Auth/useAuth";
import usePopUp from "../../hooks/usePopUp";
import { apiOrigin, apiRoute, requestGet } from "../../lib/api/api";
import {
  BasicAPIResponseType,
  getBlockResponseType,
  getBlockType,
} from "../../typedef/common/common.types";
import MainNavigation from "../components/MainNavigation";

const MainNavigationContainer = () => {
  const { token } = useAuth();
  const { popUp } = usePopUp();
  const [itemList, setItemList] = useState<getBlockType[]>([]);
  const [next, setNext] = useState(
    `${apiOrigin}${apiRoute.board}?limit=10&offset=0`
  );

  const editItemList = (blocks: getBlockType[]) => {
    setItemList(blocks);
  };

  const editLink = (newcate: string) => {
    setNext(`${apiOrigin}${apiRoute.board}/${newcate}?limit=10&offset=0`);
  };

  const getBlocks = async () => {
    const { data } = await requestGet<
      BasicAPIResponseType<getBlockResponseType>
    >(next, {
      Authorization: `Bearer ${token}`,
    });

    setNext(data.next);

    const blocks = data.results.map((block) => {
      return (block = {
        ...block,
        updatedAt: block.updatedAt.split(".")[0].replace("T", " "),
        image: [block.image],
      });
    });

    return blocks;
  };

  return (
    <MainNavigation
      popUp={popUp}
      itemList={itemList}
      editItemList={editItemList}
      next={next}
      editLink={editLink}
      getBlocks={getBlocks}
    />
  );
};

export default MainNavigationContainer;
