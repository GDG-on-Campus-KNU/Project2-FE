import React, { useState, useEffect } from "react";
import CommentScrollView from "../components/CommentScrollView";
import {
  BasicAPIResponseType,
  getCommentResponseType,
  getCommentType,
  LoginTokenType,
} from "../../../typedef/common/common.types";
import { apiOrigin, apiRoute, requestGet } from "../../../lib/api/api";

type Props = {
  blockId: number;
  post: boolean;
  setPost: React.Dispatch<React.SetStateAction<boolean>>;
};

const CommentScrollViewContainer = ({ blockId, post, setPost }: Props) => {
  const [next, setNext] = useState(
    `${apiOrigin}${apiRoute.board}/${blockId}${apiRoute.comment}?limit=10&offset=0`
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

    return data.results;
  };

  const postRefreshComment = async () => {
    setEnd(false);
    setNext(
      `${apiOrigin}${apiRoute.board}/${blockId}${apiRoute.comment}?limit=10&offset=0`
    );

    setLoading(true);

    const comments = await getComments();
    setItemList(comments);

    setLoading(false);
    setPost(false);
  };

  useEffect(() => {
    if (post) postRefreshComment();
  }, [post]);

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
