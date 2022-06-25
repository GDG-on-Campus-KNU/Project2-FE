import React, { useState, useEffect, ReactElement } from "react";
import CommentScrollView from "../CommentScrollView";
import {
  BasicAPIResponseType,
  getCommentResponseType,
} from "../../../../typedef/common/common.types";
import { apiOrigin, apiRoute, requestGet } from "../../../../lib/api/api";

type Props = {
  blockId: number;
  post: boolean;
  setPost: React.Dispatch<React.SetStateAction<boolean>>;
};

const CommentScrollViewContainer = ({ blockId, post, setPost }: Props) => {
  const [next, setNext] = useState(
    `${apiOrigin}${apiRoute.board}/${blockId}${apiRoute.comment}?limit=10&offset=0`
  );
  const [end, setEnd] = useState(false);
  const [commentItemList, setCommentItemList] = useState<
    ReactElement<any, any>[]
  >([]);

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

  const addComment = async () => {
    const comments = await getComments();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newComments = comments.map((comment) => {
      return (
        <>
          <div className="comment-box">
            <div className="comment-user">{comment.owner}</div>
            <div className="comment">{comment.content}</div>
          </div>
        </>
      );
    });
    setCommentItemList((commentItemList) => [
      ...commentItemList,
      ...newComments,
    ]);
  };

  const postRefreshComment = async () => {
    setCommentItemList([]);
    setNext(
      `${apiOrigin}${apiRoute.board}/${blockId}${apiRoute.comment}?limit=10&offset=0`
    );
    await addComment();
    setPost(false);
  };

  useEffect(() => {
    if (post) postRefreshComment();
  }, [post]);

  return (
    <CommentScrollView
      commentItemList={commentItemList}
      addComment={addComment}
      end={end}
    />
  );
};

export default CommentScrollViewContainer;
