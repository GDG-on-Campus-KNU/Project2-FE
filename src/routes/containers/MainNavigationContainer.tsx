import React, { useEffect, useRef, useState } from "react";
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
  const [category, setCategory] = useState("");
  const [searchContent, setSearchContent] = useState("");

  const scrollView = useRef<HTMLDivElement>(null);

  const editItemList = (blocks: getBlockType[]) => {
    setItemList(blocks);
  };

  const editLink = (newcate: string) => {
    setSearchContent("");
    setNext(`${apiOrigin}${apiRoute.board}/${newcate}?limit=10&offset=0`);
    setCategory(newcate);

    if (scrollView) {
      scrollView.current!.scrollTop = 0;
    }
  };

  const updateCategory = async () => {
    const blocks = await getBlocks();
    editItemList(blocks);
  };

  useEffect(() => {
    updateCategory();
  }, [category]);

  useEffect(() => {
    console.log("useEffect", searchContent);
  }, [searchContent]);

  const getBlocks = async () => {
    const { data } = await requestGet<
      BasicAPIResponseType<getBlockResponseType>
    >(next, {
      Authorization: `Bearer ${token}`,
    });

    const blocks = data.results.map((block) => {
      return (block = {
        ...block,
        updatedAt: block.updatedAt.split(".")[0].replace("T", " "),
        image: [block.image],
      });
    });

    setNext(data.next);

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
      scrollView={scrollView}
      searchContent={searchContent}
      setSearchContent={setSearchContent}
    />
  );
};

export default MainNavigationContainer;
