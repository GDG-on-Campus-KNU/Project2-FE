import React, { useState, useEffect, useCallback } from "react";
import ScrollView from "../ScrollView";
import { getBlockType } from "../../../typedef/common/common.types";
import usePopUp from "../../../hooks/usePopUp";
import WritePopUpContainer from "./WritePopUpContainer";
import useAuth from "../../../hooks/Auth/useAuth";

type Props = {
  itemList: getBlockType[];
  setItemList: React.Dispatch<React.SetStateAction<getBlockType[]>>;
  next: string;
  getBlocks: () => Promise<
    {
      updatedAt: string;
      image: any[];
      id: number;
      owner: string;
      category: string;
      createdAt: string;
      content: string;
      likeCount: number;
      votedIndex: number;
      voteText: string;
      voteTotal: number;
      currentUser: string;
    }[]
  >;
  scrollView: React.RefObject<HTMLDivElement>;
  searchContent: string;
};

const ScrollViewContainer = ({
  itemList,
  setItemList,
  next,
  getBlocks,
  scrollView,
  searchContent,
}: Props) => {
  const { token } = useAuth();
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const [loading, setLoading] = useState(false);
  const { __showPopUpFromHooks, __hidePopUpFromHooks } = usePopUp();

  const onload = useCallback(() => {
    console.log(token);
  }, [token]);
  const closePopUp = useCallback(() => {
    __hidePopUpFromHooks();
  }, []);

  const loadPopUp = useCallback(() => {
    __showPopUpFromHooks(<WritePopUpContainer closePopUp={closePopUp} />);
  }, []);

  const addItemList = (blocks: getBlockType[]) => {
    setItemList([...itemList, ...blocks]);
  };

  const intersecting = async ([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) {
      const blocks = await getBlocks();
      setLoading(true);
      addItemList(blocks);
      setLoading(false);
    }
  };

  const observer = new IntersectionObserver(intersecting, { threshold: 0.4 });

  useEffect(() => {
    if (!target) return;

    observer.observe(target);
  }, [target]);

  useEffect(() => {
    onload();
  }, []);

  return (
    <ScrollView
      setTarget={setTarget}
      loading={loading}
      itemList={itemList}
      loadPopUp={loadPopUp}
      next={next}
      scrollView={scrollView}
      searchContent={searchContent}
    />
  );
};

export default ScrollViewContainer;
