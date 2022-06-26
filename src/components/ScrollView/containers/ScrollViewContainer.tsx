import React, { useState, useEffect, useCallback } from "react";
import ScrollView from "../ScrollView";
import { getBlockType } from "../../../typedef/common/common.types";
import usePopUp from "../../../hooks/usePopUp";
import WritePopUpContainer from "./WritePopUpContainer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/rootReducer";
import { updateItemList } from "../../../store/itemList/actions";

type Props = {
  getBlocks: () => Promise<getBlockType[]>;
  scrollView: React.RefObject<HTMLDivElement>;
  searchContent: string;
  scrollLoading: boolean;
};

const ScrollViewContainer = ({
  getBlocks,
  scrollView,
  searchContent,
  scrollLoading,
}: Props) => {
  const { __showPopUpFromHooks, __hidePopUpFromHooks } = usePopUp();
  const dispatch = useDispatch();
  const itemList = useSelector(
    (root: RootState) => root.itemListReducer.itemList
  );
  const next = useSelector((root: RootState) => root.nextReducer.next);

  const [target, setTarget] = useState<HTMLElement | null>(null);
  const [loading, setLoading] = useState(false);

  const closePopUp = useCallback(() => {
    __hidePopUpFromHooks();
  }, []);

  const loadPopUp = useCallback(() => {
    __showPopUpFromHooks(<WritePopUpContainer closePopUp={closePopUp} />);
  }, []);

  const intersecting = async ([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting) {
      setLoading(true);
      const blocks = await getBlocks();
      dispatch(updateItemList([...itemList, ...blocks]));
      setLoading(false);
    }
  };

  const observer = new IntersectionObserver(intersecting, { threshold: 0.4 });

  useEffect(() => {
    if (!target) return;

    observer.observe(target);
  }, [target]);

  return scrollLoading ? null : (
    <ScrollView
      setTarget={setTarget}
      loading={loading}
      next={next}
      itemList={itemList}
      loadPopUp={loadPopUp}
      scrollView={scrollView}
      searchContent={searchContent}
    />
  );
};

export default ScrollViewContainer;
