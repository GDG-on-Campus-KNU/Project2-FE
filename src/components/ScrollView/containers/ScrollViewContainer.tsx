import React, { useState, useEffect, useCallback } from "react";
import ScrollView from "../ScrollView";
import dummyBlocks from "../dummyData";
import { getBlockType } from "../../../typedef/common/common.types";
import usePopUp from "../../../hooks/usePopUp";
import WritePopUpContainer from "./WritePopUpContainer";

let index = 0;

const getBlocks = (index: number) => {
  return dummyBlocks.slice(index, index + 10);
};

const ScrollViewContainer = () => {
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [end, setEnd] = useState(false);
  const [itemList, setItemList] = useState<getBlockType[]>([]);

  const { __showPopUpFromHooks, __hidePopUpFromHooks } = usePopUp();

  const closePopUp = useCallback(() => {
    __hidePopUpFromHooks();
  }, []);

  const loadPopUp = useCallback(() => {
    __showPopUpFromHooks(<WritePopUpContainer closePopUp={closePopUp} />);
  }, []);

  const addItemList = () => {
    const blocks = getBlocks(index);

    if (Array.isArray(blocks) && blocks.length === 0) {
      setEnd(true);

      return;
    }

    setItemList((itemList) => [...itemList, ...blocks]);
    index += 10;
  };

  const intersecting = async (
    [entry]: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    if (entry.isIntersecting) {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setLoading(true);
      addItemList();
      setLoading(false);
    }
  };

  const observer = new IntersectionObserver(intersecting, { threshold: 0.4 });

  useEffect(() => {
    if (!target) return;

    observer.observe(target);
  }, [target]);

  return (
    <ScrollView
      setTarget={setTarget}
      loading={loading}
      itemList={itemList}
      end={end}
      loadPopUp={loadPopUp}
    />
  );
};

export default ScrollViewContainer;
