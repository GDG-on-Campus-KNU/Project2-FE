import React, { useCallback, useRef, useState } from "react";
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
  block: getBlockType;
  closePopUp: React.MouseEventHandler<HTMLButtonElement>;
};

const BlockPopUpContainer = ({ block, closePopUp }: Props) => {
  const { token } = useAuth();
  const commentRef = React.useRef<HTMLTextAreaElement>(null);
  const [picView, setPicView] = useState(false);
  const [image, setImage] = useState<string>("");
  const [comment, setComment] = useState("");
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

  const deleteBlock = async (id: number) => {
    const response = window.confirm("삭제하시겠습니까?");
    if (response) {
      const { data } = await requestDelete<
        BasicAPIResponseType<LoginTokenType>
      >(`${apiOrigin}${apiRoute.board}/${id}/`, {
        Authorization: `Bearer ${token}`,
      });

      window.location.replace("/home");
    }
  };

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
          boardId: block.id,
        }
      );
      console.log(data);
    },
    [comment]
  );

  return (
    <BlockPopUp
      block={block}
      closePopUp={closePopUp}
      picView={picView}
      picViewToggle={picViewToggle}
      image={image}
      onWriteComment={onWriteComment}
      commentRef={commentRef}
      onHandleHeight={onHandleHeight}
      setComment={setComment}
      deleteBlock={deleteBlock}
    />
  );
};

export default BlockPopUpContainer;
