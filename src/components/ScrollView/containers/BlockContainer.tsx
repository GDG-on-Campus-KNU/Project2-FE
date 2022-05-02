import React, { useState, useCallback } from "react";
import {
  BasicAPIResponseType,
  getBlockType,
} from "../../../typedef/common/common.types";
import Block from "../components/Block";
import BlockPoppUpContainer from "./BlockPopUpContainer";
import usePopUp from "../../../hooks/usePopUp";
import ImagePopUp from "../components/ImagePopUp";
import ImagePopUpContainer from "./ImagePopUpContainer";
import {
  apiOrigin,
  apiRoute,
  requestGet,
  requestPost,
} from "../../../lib/api/api";

type Props = {
  block: getBlockType;
};

const BlockContainer = ({ block }: Props) => {
  // console.log(block);
  const { __showPopUpFromHooks, __hidePopUpFromHooks } = usePopUp();
  const [expand, setExpand] = useState(false);
  const [like, setLike] = useState(false);

  const loadPopUp = useCallback(() => {
    __showPopUpFromHooks(
      <BlockPoppUpContainer block={block} closePopUp={closePopUp} />
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
          Authorization: `Bearer ${apiRoute.token}`,
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
