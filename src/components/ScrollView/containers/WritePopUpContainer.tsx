import React, { useCallback, useState, useEffect } from "react";
import useAuth from "../../../hooks/Auth/useAuth";
import usePopUp from "../../../hooks/usePopUp";
import { apiOrigin, apiRoute, requestFormPost } from "../../../lib/api/api";
import {
  BasicAPIResponseType,
  ImageType,
  VoteType,
  postBlockResponseType,
  getBlockType,
} from "../../../typedef/common/common.types";
import WritePopUp from "../components/WritePopUp";

type Props = {
  closePopUp: React.MouseEventHandler<HTMLButtonElement>;
  block: getBlockType | null;
};

type formType = {
  category: string;
  image: {
    imgBase64: string | ArrayBuffer | null;
    imgFile: string | Blob | null;
  } | null;
  content: string;
  voteText: VoteType[];
};

const WritePopUpContainer = ({ closePopUp, block }: Props) => {
  const { token } = useAuth();
  const { __hidePopUpFromHooks } = usePopUp();
  const [formInfo, setFormInfo] = useState<formType>(
    block
      ? {
          category: block.category,
          image: {
            imgBase64: block.image,
            imgFile: null,
          },
          content: block.content,
          voteText: block.voteText as VoteType[],
        }
      : {
          category: "Love",
          image: null,
          content: "",
          voteText: [
            { content: "", count: 0 },
            { content: "", count: 0 },
          ],
        }
  );

  const [imgs, setImgs] = useState<ImageType[]>([]);

  const addVote = () => {
    setFormInfo({
      ...formInfo,
      voteText: [...formInfo.voteText, { content: "", count: 0 }],
    });
  };

  const changeVoteInput = (e: any) => {
    const newVotes = formInfo.voteText.map((vote, index) => {
      if ("vote" + index === e.target.parentNode.id)
        return { ...vote, content: e.target.value };
      else return vote;
    });

    setFormInfo({
      ...formInfo,
      voteText: newVotes,
    });
  };

  const removeVote = (e: any) => {
    const delIndex = e.target.parentNode.id;
    const newVotes = formInfo.voteText.filter(
      (vote, index) => "vote" + index !== delIndex
    );
    setFormInfo({
      ...formInfo,
      voteText: newVotes,
    });
  };

  const addImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    let reader = new FileReader();

    if (e.target.files === null) {
      return;
    }

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onloadend = () => {
      if (e.target.files === null) return;

      const base64 = reader.result;
      setFormInfo({
        ...formInfo,
        image: {
          imgBase64: base64,
          imgFile: e.target.files[0],
        },
      });

      e.target.value = ""; //같은 파일을 올리면 인식 못하므로 여기서 초기화
    };
  };

  const removeImg = (e: any) => {
    setImgs(
      imgs.filter(
        (img: ImageType, index: number) =>
          "image" + index !== e.target.parentNode.id
      )
    );
  };

  const onChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormInfo({ ...formInfo, category: e.target.value });
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormInfo({ ...formInfo, content: e.target.value });
  };

  const postBlock = useCallback(async () => {
    const formData = new FormData();
    formData.append("category", formInfo.category);
    if (formInfo.image !== null) {
      formData.append("image", formInfo.image.imgFile!);
    }

    formData.append("content", formInfo.content);
    const postVoteString = JSON.stringify(
      formInfo.voteText.map((vote) => {
        return [vote.content, vote.count];
      })
    );
    formData.append("voteText", postVoteString);
    console.log(postVoteString);
    const { data } = await requestFormPost<
      BasicAPIResponseType<postBlockResponseType>
    >(
      `${apiOrigin}${apiRoute.board}/`,
      {
        Authorization: `Bearer ${token}`,
      },
      formData
    );
    if (data) {
      __hidePopUpFromHooks();
    }
  }, [formInfo, __hidePopUpFromHooks]);

  return (
    <WritePopUp
      closePopUp={closePopUp}
      formInfo={formInfo}
      addVote={addVote}
      changeVoteInput={changeVoteInput}
      removeVote={removeVote}
      addImg={addImage}
      removeImg={removeImg}
      postBlock={postBlock}
      onChangeCategory={onChangeCategory}
      onChangeContent={onChangeContent}
    />
  );
};

export default WritePopUpContainer;

WritePopUpContainer.defaultProps = {
  block: null,
};
