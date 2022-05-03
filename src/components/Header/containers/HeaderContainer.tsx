import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";

type Props = {
  searchContent: string;
  setSearchContent: React.Dispatch<React.SetStateAction<string>>;
};
const dummyBlock = [
  {
    id: 0,
    owner: "string",
    category: "string",
    image: [],
    createdAt: "string",
    updatedAt: "string",
    content: "string",
    likeCount: 0,
    votedIndex: 0,
    voteText: "string",
  },
];
const HeaderContainer = ({ searchContent, setSearchContent }: Props) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [boards, setBoards] = useState(dummyBlock);
  const navigate = useNavigate();

  const onProfileClick = useCallback(() => {
    setIsDropDown((prev) => !prev);
  }, [isDropDown]);

  const onSearch = useCallback(() => {
    setBoards(
      boards.filter((item) => {
        if (searchContent === "") {
          return item;
        } else if (
          item.content.toLowerCase().includes(searchContent.toLowerCase())
        ) {
          return item;
        }
      })
    );
  }, [searchContent]);

  const onSignOut = useCallback(() => {
    const response = window.confirm("로그아웃 하시겠습니까?");
    if (response) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <Header
      isDropDown={isDropDown}
      onProfileClick={onProfileClick}
      onSearch={onSearch}
      setSearchContent={setSearchContent}
      onSignOut={onSignOut}
    />
  );
};

export default HeaderContainer;
