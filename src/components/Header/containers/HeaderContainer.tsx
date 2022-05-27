import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/Auth/useAuth";
import usePopUp from "../../../hooks/usePopUp";
import useRootRoute from "../../../hooks/useRootRoute";
import { apiOrigin, apiRoute, requestDelete } from "../../../lib/api/api";
import {
  BasicAPIResponseType,
  RemoveUserType,
} from "../../../typedef/common/common.types";
import Header from "../Header";
import UserBoardContainer from "./UserBoardContainer";
import UserInfoContainer from "./UserInfoContainer";

type Props = {
  setSearchContent: React.Dispatch<React.SetStateAction<string>>;
};

const HeaderContainer = ({ setSearchContent }: Props) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();
  const { __updateRootFromHooks } = useRootRoute();
  const { __showPopUpFromHooks } = usePopUp();
  const { token } = useAuth();

  const onProfileClick = useCallback(() => {
    setIsDropDown((prev) => !prev);
  }, [isDropDown]);

  const onSearch = useCallback(() => {
    setSearchContent(searchInput);
  }, [searchInput]);

  const goSearch = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") setSearchContent(searchInput);
  };

  const onUserInfo = useCallback(() => {
    __showPopUpFromHooks(<UserInfoContainer />);
  }, [__showPopUpFromHooks]);

  const onSignOut = useCallback(() => {
    const response = window.confirm("로그아웃 하시겠습니까?");
    if (response) {
      __updateRootFromHooks("login");
    }
  }, [navigate]);

  const onUserBoards = useCallback(() => {
    __showPopUpFromHooks(<UserBoardContainer />);
  }, [__showPopUpFromHooks]);

  const onRemoveUser = useCallback(async () => {
    const response = window.confirm("회원탈퇴 하시겠습니까?");
    if (response) {
      const { data } = await requestDelete<
        BasicAPIResponseType<RemoveUserType>
      >(apiOrigin + apiRoute.delete_user, {
        Authorization: `Bearer ${token}`,
      });

      if (data) {
        alert("회원탈퇴가 완료되었습니다.");
      }
      __updateRootFromHooks("login");
    }
  }, [__updateRootFromHooks]);

  return (
    <Header
      isDropDown={isDropDown}
      onProfileClick={onProfileClick}
      onSearch={onSearch}
      goSearch={goSearch}
      setSearchInput={setSearchInput}
      onUserInfo={onUserInfo}
      onUserBoards={onUserBoards}
      onSignOut={onSignOut}
      onRemoveUser={onRemoveUser}
    />
  );
};

export default HeaderContainer;
