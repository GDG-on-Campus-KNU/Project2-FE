import React, { useState, useCallback } from "react";
import {
  BasicAPIResponseType,
  getBlockType,
} from "../../../typedef/common/common.types";
import Block from "../components/Block";
import usePopUp from "../../../hooks/usePopUp";
import ImagePopUp from "../components/ImagePopUp";
import ImagePopUpContainer from "./ImagePopUpContainer";
import {
  apiOrigin,
  apiRoute,
  requestGet,
  requestPost,
} from "../../../lib/api/api";
import useAuth from "../../../hooks/Auth/useAuth";
import BlockPopUpContainer from "./BlockPopUpContainer";

type Props = {
  block: getBlockType;
};

const BlockContainer = ({ block }: Props) => {
  const { __showPopUpFromHooks, __hidePopUpFromHooks } = usePopUp();
  const [expand, setExpand] = useState(false);
  const [like, setLike] = useState(false);
  const { token } = useAuth();

  const getBlockDetail = async (id: number) => {
    const { data } = await requestGet<BasicAPIResponseType<getBlockType>>(
      `${apiOrigin}${apiRoute.board}/${id}/`,
      {
        Authorization: `Bearer ${token}`,
      }
    );

    const block = {
      ...data,
      updatedAt: data.updatedAt.split(".")[0].replace("T", " "),
    };

    return block;
  };

  const loadPopUp = useCallback(async (id: number) => {
    const block = await getBlockDetail(id);
    __showPopUpFromHooks(
      <BlockPopUpContainer block={block} closePopUp={closePopUp} />
    );
  }, []);

  const closePopUp = useCallback(() => {
    __hidePopUpFromHooks();
  }, []);

  const reverseExpand = () => {
    setExpand((current) => !current);
  };

  const postLike = async () => {
    if (like) {
      alert("이미 공감하셨습니다.");
    } else {
      setLike((current) => !current);

      const { data } = await requestPost<BasicAPIResponseType<getBlockType>>(
        `${apiOrigin}${apiRoute.board}/${block.id}${apiRoute.like}`,
        {
          Authorization: `Bearer ${token}`,
        },
        []
      );
    }
  };

  const onClickImage = useCallback(
    (index: number) => {
      __showPopUpFromHooks(
        <ImagePopUpContainer images={block.image} index={index} />
      );
    },
    [__showPopUpFromHooks]
  );
  return (
    <Block
      block={block}
      loadPopUp={loadPopUp}
      onClickImage={onClickImage}
      expand={expand}
      reverseExpand={reverseExpand}
      like={like}
      clickLike={postLike}
    />
  );
};

export default BlockContainer;
