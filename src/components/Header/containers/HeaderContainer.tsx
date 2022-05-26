import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import useRootRoute from "../../../hooks/useRootRoute";
import Header from "../Header";

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
const HeaderContainer = () => {
  const [searchContent, setSearchContent] = useState("");
  const [isDropDown, setIsDropDown] = useState(false);
  const [boards, setBoards] = useState(dummyBlock);
  const navigate = useNavigate();
  const { __updateRootFromHooks } = useRootRoute();

  const onProfileClick = useCallback(() => {
    setIsDropDown((prev) => !prev);
  }, [isDropDown]);

  const handleDropDown = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        setIsDropDown(false);
      }
    },
    [isDropDown]
  );

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
      __updateRootFromHooks("login");
    }
  }, [navigate]);

  return (
    <Header
      handleDropDown={handleDropDown}
      isDropDown={isDropDown}
      onProfileClick={onProfileClick}
      onSearch={onSearch}
      setSearchContent={setSearchContent}
      onSignOut={onSignOut}
    />
  );
};

export default HeaderContainer;
