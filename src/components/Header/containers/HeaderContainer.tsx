import React, { useCallback, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../Header";

const HeaderContainer = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [searchContent, setSearchContent] = useState("");
  const navigate = useNavigate();

  const onProfileClick = useCallback(() => {
    setIsDropDown((prev) => !prev);
  }, [isDropDown]);

  const onSearch = useCallback(() => {
    console.log(searchContent);
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
