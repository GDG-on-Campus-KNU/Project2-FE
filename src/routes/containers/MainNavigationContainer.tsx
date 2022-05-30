import React, { useCallback, useEffect, useRef, useState } from "react";
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
  const [category, setCategory] = useState("all");
  const [searchContent, setSearchContent] = useState("");

  const scrollView = useRef<HTMLDivElement>(null);

  const editLink = useCallback((newcate: string) => {
    setItemList([]);
    setSearchContent("");
    if (newcate === "all") {
      setNext(`${apiOrigin}${apiRoute.board}/?limit=10&offset=0`);
    } else {
      setNext(
        `${apiOrigin}${apiRoute.board}${apiRoute.categoty}/${newcate}?limit=10&offset=0`
      );
    }
    setCategory(newcate);

    if (scrollView) {
      scrollView.current!.scrollTop = 0;
    }
  }, []);

  const updateCategory = useCallback(async () => {
    const blocks = await getBlocks();
    setItemList(blocks);
  }, []);

  const stringToVote = (voteText: string) => {
    voteText = voteText.replace(/\\/gi, "");
    voteText = voteText.replace(/'/gi, '"');
    const votes = JSON.parse(voteText).map((vote: Array<string | number>) => {
      return { content: vote[0], count: vote[1] };
    });

    return votes;
  };

  useEffect(() => {
    console.log(next);
  }, [next]);

  useEffect(() => {
    updateCategory();
  }, [category]);

  const getBlocks = useCallback(async () => {
    console.log(next);
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
        voteText: stringToVote(block.voteText),
      });
    });

    setNext(data.next);

    return blocks;
  }, [itemList]);

  return (
    <MainNavigation
      popUp={popUp}
      itemList={itemList}
      setItemList={setItemList}
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
