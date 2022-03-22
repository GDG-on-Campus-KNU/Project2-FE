import React, { useState, useEffect } from "react";
import ScrollView from "../ScrollView";
import dummyBlocks from "../dummyData";
import { getBlockType } from "../../../typedef/common/common.types";

let index = 0;

const getBlocks = (index: number) => {
  return dummyBlocks.slice(index, index + 10);
};

const ScrollViewContainer = () => {
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [itemList, setItemList] = useState<getBlockType[]>([]);

  const addItemList = () => {
    const blocks = getBlocks(index);

    setItemList((itemList) => [...itemList, ...blocks]);
    index += 10;
  };

  const callback = async (
    [entry]: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    if (entry.isIntersecting) {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setLoading(true);
      addItemList();
      setLoading(false);
    } else {
    }
  };

  const observer = new IntersectionObserver(callback, { threshold: 0.4 });

  useEffect(() => {
    if (!target) return;

    observer.observe(target);
  }, [target]);

  return (
    <ScrollView setTarget={setTarget} loading={loading} itemList={itemList} />
  );
};

export default ScrollViewContainer;
