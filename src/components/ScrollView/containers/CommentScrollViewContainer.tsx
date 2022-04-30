import React, { useState, useEffect } from "react";
import CommentScrollView from "../components/CommentScrollView";
import dummyComments from "../dummyComments";
import { getCommentType } from "../../../typedef/common/common.types";

let index = 0;

const getComments = (index: number) => {
  return dummyComments.slice(index, index + 10);
};

const CommentScrollViewContainer = () => {
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const [end, setEnd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [itemList, setItemList] = useState<getCommentType[]>([]);

  const addItemList = () => {
    const comments = getComments(index);

    if (Array.isArray(comments) && comments.length === 0) {
      setEnd(true);

      return;
    }

    setItemList((itemList) => [...itemList, ...comments]);
    index += 10;
  };

  const intersecting = async (
    [entry]: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    if (entry.isIntersecting) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
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
    <CommentScrollView
      setTarget={setTarget}
      loading={loading}
      itemList={itemList}
      end={end}
    />
  );
};

export default CommentScrollViewContainer;
