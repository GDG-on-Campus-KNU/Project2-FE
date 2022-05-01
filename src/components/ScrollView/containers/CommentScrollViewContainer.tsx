import React, { useState, useEffect } from "react";
import CommentScrollView from "../components/CommentScrollView";
import {
  BasicAPIResponseType,
  getCommentResponseType,
  getCommentType,
  LoginTokenType,
} from "../../../typedef/common/common.types";
import { TypePredicateKind } from "typescript";
import { apiOrigin, apiRoute, requestGet } from "../../../lib/api/api";

type Props = {
  blockId: number;
};

const CommentScrollViewContainer = ({ blockId }: Props) => {
  const [next, setNext] = useState(
    `${apiOrigin}${apiRoute.board}/${blockId}${apiRoute.comment}/?limit=10&offset=0`
  );
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const [end, setEnd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [itemList, setItemList] = useState<getCommentType[]>([]);

  const getComments = async () => {
    const { data } = await requestGet<
      BasicAPIResponseType<getCommentResponseType>
    >(next, {});

    if (data.next) {
      setNext(data.next);
    } else {
      setEnd(true);
    }

    console.log(data);

    return data.results;
  };

  const addItemList = (comments: getCommentType[]) => {
    setItemList((itemList) => [...itemList, ...comments]);
  };

  const intersecting = async (
    [entry]: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    if (entry.isIntersecting) {
      const comments = await getComments();
      setLoading(true);
      addItemList(comments);
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
