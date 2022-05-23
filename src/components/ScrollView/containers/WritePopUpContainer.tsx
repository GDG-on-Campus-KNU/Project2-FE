import React, { useCallback, useState, useEffect } from "react";
import useAuth from "../../../hooks/Auth/useAuth";
import { apiOrigin, apiRoute, requestFormPost } from "../../../lib/api/api";
import {
  BasicAPIResponseType,
  createImageType,
  createVoteType,
  LoginTokenType,
} from "../../../typedef/common/common.types";
import WritePopUp from "../components/WritePopUp";

type Props = {
  closePopUp: React.MouseEventHandler<HTMLButtonElement>;
};

const WritePopUpContainer = ({ closePopUp }: Props) => {
  const { token } = useAuth();
  const [formInfo, setFormInfo] = useState<{
    category: string;
    image: File[] | null;
    content: string;
    voteText: string;
  }>({
    category: "Love",
    image: null,
    content: "",
    voteText: "",
  });
  const [imgs, setImgs] = useState<createImageType[]>([]);
  const [voteInput, setVoteInput] = useState({ id: 0, value: "" });
  const [votes, setVotes] = useState<createVoteType[]>([
    {
      id: new Date().valueOf(),
      content: "",
      count: 0,
    },
    {
      id: new Date().valueOf() + 1,
      content: "",
      count: 0,
    },
  ]);

  const addVote = () => {
    setVotes([
      ...votes,
      {
        id: new Date().valueOf(),
        content: "",
        count: 0,
      },
    ]);
  };

  const changeVoteInput = (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVoteInput({ id: id, value: e.target.value });
  };

  const removeVote = (id: number) => {
    setVotes(votes.filter((vote) => vote.id !== id));
  };

  useEffect(() => {
    const findIndex = votes.findIndex((element) => element.id === voteInput.id);
    let newVotes = [...votes];
    newVotes[findIndex] = { ...newVotes[findIndex], content: voteInput.value };
    setVotes(newVotes);
  }, [voteInput]);

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
      setImgs([
        ...imgs,
        {
          id: new Date().valueOf(),
          imgBase64: base64,
          imgFile: e.target.files[0],
        },
      ]);

      e.target.value = ""; //같은 파일을 올리면 인식 못하므로 여기서 초기화
    };
  };

  const removeImg = (id: number) => {
    setImgs(imgs.filter((img: createImageType) => img.id !== id));
  };

  const onChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo({ ...formInfo, category: e.target.value });
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo({ ...formInfo, content: e.target.value });
  };

  useEffect(() => {
    const stringVotes = votes.map(({ content, count }) => {
      return [content, count];
    });
    setFormInfo({ ...formInfo, voteText: JSON.stringify(stringVotes) });
  }, [votes]);

  useEffect(() => {
    const imgFiles = imgs.map((img) => {
      return img.imgFile;
    });
    setFormInfo({ ...formInfo, image: imgFiles.length > 0 ? imgFiles : null });
  }, [imgs]);

  const postBlock = async (e: React.FormEvent) => {
    const formData = new FormData();
    formData.append("category", formInfo.category);
    if (formInfo.image !== null) {
      formData.append("image", formInfo.image);
    }
    formData.append("content", formInfo.content);
    formData.append("voteText", formInfo.voteText);

    const { data } = await requestFormPost<
      BasicAPIResponseType<LoginTokenType>
    >(
      `${apiOrigin}${apiRoute.board}/`,
      {
        Authorization: `Bearer ${token}`,
      },
      formData
    );
  };

  return (
    <WritePopUp
      closePopUp={closePopUp}
      votes={votes}
      addVote={addVote}
      changeVoteInput={changeVoteInput}
      removeVote={removeVote}
      imgs={imgs}
      addImg={addImage}
      removeImg={removeImg}
      postBlock={postBlock}
      onChangeCategory={onChangeCategory}
      onChangeContent={onChangeContent}
    />
  );
};

export default WritePopUpContainer;
