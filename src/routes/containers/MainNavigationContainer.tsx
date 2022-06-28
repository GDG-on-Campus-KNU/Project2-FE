import { useState } from "react";
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
import stringToVote from "../../components/stringToVote/stringToVote";

const MainNavigationContainer = () => {
  const { token } = useAuth();
  const { popUp } = usePopUp();
  const dispatch = useDispatch();
  const next = useSelector((root: RootState) => root.nextReducer.next);

  const [scrollLoading, setScrollLoading] = useState(false);

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
        voteText: stringToVote(block.voteText as string),
      });
    });

    dispatch(updateNext(data.next));

    return blocks;
  };

  return (
    <MainNavigation
      popUp={popUp}
      getBlocks={getBlocks}
      scrollLoading={scrollLoading}
      setScrollLoading={setScrollLoading}
    />
  );
};

export default MainNavigationContainer;
