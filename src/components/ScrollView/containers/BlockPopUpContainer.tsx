import React, { useCallback, useEffect, useRef, useState } from "react";
import BlockPopUp from "../components/BlockPopUp";
import {
  BasicAPIResponseType,
  getBlockType,
  LoginTokenType,
} from "../../../typedef/common/common.types";
import {
  apiOrigin,
  apiRoute,
  requestDelete,
  requestPost,
} from "../../../lib/api/api";
import useAuth from "../../../hooks/Auth/useAuth";

type Props = {
  blockDeatil: getBlockType;
  closePopUp: React.MouseEventHandler<HTMLButtonElement>;
  itemList: getBlockType[];
  setItemList: React.Dispatch<React.SetStateAction<getBlockType[]>>;
};

const BlockPopUpContainer = ({
  blockDeatil,
  closePopUp,
  itemList,
  setItemList,
}: Props) => {
  const { token } = useAuth();

  const [picView, setPicView] = useState(false);
  const [image, setImage] = useState<string>("");
  const [comment, setComment] = useState("");
  const [post, setPost] = useState(false);

  const commentRef = React.useRef<HTMLTextAreaElement>(null);
  const picViewToggle = (event: any) => {
    if (event.target.tagName === "IMG") {
      setImage(event.target.src);
      setPicView(true);
    } else {
      setPicView(false);
    }
  };

  const onHandleHeight = useCallback(() => {
    if (commentRef.current && commentRef.current.scrollHeight < 305) {
      commentRef.current.style.height = "auto";
      commentRef.current.style.height = commentRef.current.scrollHeight + "px";
    }
  }, []);

  const deleteBlock = useCallback(async (id: number) => {
    const response = window.confirm("삭제하시겠습니까?");
    if (response) {
      const { data } = await requestDelete<
        BasicAPIResponseType<LoginTokenType>
      >(`${apiOrigin}${apiRoute.board}/${id}/`, {
        Authorization: `Bearer ${token}`,
      });

      window.location.replace("/home");
    }
  }, []);

  const onWriteComment = useCallback(
    async (e) => {
      e.preventDefault();
      const { data } = await requestPost<BasicAPIResponseType<any>>(
        apiOrigin + apiRoute.comment,
        {
          Authorization: `Bearer ${token}`,
        },
        {
          content: comment,
          boardId: blockDeatil.id,
        }
      );
      setPost(true);
      setComment("");
    },
    [comment]
  );

  return (
    <BlockPopUp
      blockDetail={blockDeatil}
      closePopUp={closePopUp}
      picView={picView}
      picViewToggle={picViewToggle}
      image={image}
      onWriteComment={onWriteComment}
      commentRef={commentRef}
      onHandleHeight={onHandleHeight}
      comment={comment}
      setComment={setComment}
      deleteBlock={deleteBlock}
      post={post}
      setPost={setPost}
      itemList={itemList}
      setItemList={setItemList}
    />
  );
};

export default BlockPopUpContainer;
