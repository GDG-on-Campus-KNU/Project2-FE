import React from "react";
import images from "../../../assets/images";
import { UserType } from "../../../typedef/common/common.types";
import "../css/userInfo.css";

type Props = {
  userInfo: UserType;
};

const UserInfo = ({ userInfo }: Props) => {
  return (
    <div className="user-info-wrap">
      <h2>내 정보</h2>
      <div className="profile">
        <img src={images.defaultProfile} alt="profile" />
      </div>
      <div className="user-info">
        <h3>아이디</h3>
        <span>{userInfo.username}</span>
      </div>
      <div className="user-info">
        <h3>이메일</h3>
        <span>{userInfo.email}</span>
      </div>
      <div className="user-info">
        <h3>투표한 게시글</h3>
        <span>{userInfo.profile.votedBoards}</span>
      </div>
    </div>
  );
};

export default UserInfo;
