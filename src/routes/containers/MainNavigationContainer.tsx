import React, { useEffect, useRef, useState } from "react";
import useAuth from "../../hooks/Auth/useAuth";
import usePopUp from "../../hooks/usePopUp";
import { requestGet } from "../../lib/api/api";
import {
  BasicAPIResponseType,
  getBlockResponseType,
} from "../../typedef/common/common.types";
import MainNavigation from "../components/MainNavigation";
import { useDispatch, useSelector } from "react-redux";
import { updateNext } from "../../store/next/actions";
import { RootState } from "../../store/rootReducer";

const MainNavigationContainer = () => {
  const { token } = useAuth();
  const { popUp } = usePopUp();
  const dispatch = useDispatch();
  const next = useSelector((root: RootState) => root.nextReducer.next);

  const [searchContent, setSearchContent] = useState("");
  const [scrollLoading, setScrollLoading] = useState(false);

  const scrollView = useRef<HTMLDivElement>(null);

  const stringToVote = (voteText: string) => {
    voteText = voteText.replace(/\\/gi, "");
    voteText = voteText.replace(/'/gi, '"');
    const votes = JSON.parse(voteText).map((vote: Array<string | number>) => {
      return { content: vote[0], count: vote[1] };
    });

    return votes;
  };

  const getBlocks = async () => {
    const { data } = await requestGet<
      BasicAPIResponseType<getBlockResponseType>
    >(next!, {
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

    dispatch(updateNext(data.next));

    return blocks;
  };

  useEffect(() => {
    console.log(next);
  }, [next]);

  return (
    <MainNavigation
      popUp={popUp}
      getBlocks={getBlocks}
      scrollView={scrollView}
      scrollLoading={scrollLoading}
      setScrollLoading={setScrollLoading}
      searchContent={searchContent}
      setSearchContent={setSearchContent}
    />
  );
};

export default MainNavigationContainer;
