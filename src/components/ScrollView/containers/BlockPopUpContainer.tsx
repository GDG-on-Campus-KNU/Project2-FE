import React, { useCallback, useRef, useState } from "react";
import BlockPopUp from "../components/BlockPopUp";
import {
  BasicAPIResponseType,
  getBlockType,
  LoginTokenType,
} from "../../../typedef/common/common.types";
import { apiOrigin, apiRoute, requestDelete } from "../../../lib/api/api";
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
    const { data } = await requestDelete<BasicAPIResponseType<LoginTokenType>>(
      `${apiOrigin}${apiRoute.board}/${id}/`,
      {
        Authorization: `Bearer ${token}`,
      }
    );

    window.location.replace("/home");
  };

  return (
    <BlockPopUp
      block={block}
      closePopUp={closePopUp}
      picView={picView}
      picViewToggle={picViewToggle}
      image={image}
      commentRef={commentRef}
      onHandleHeight={onHandleHeight}
      deleteBlock={deleteBlock}
    />
  );
};

export default BlockPopUpContainer;
