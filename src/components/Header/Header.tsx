import React from "react";
import "./css/header.css";
import images from "../../assets/images";

type Props = {
  isDropDown: boolean;
  onProfileClick: React.MouseEventHandler<HTMLButtonElement>;
  onSearch: React.MouseEventHandler<HTMLButtonElement>;
  setSearchContent: React.Dispatch<React.SetStateAction<string>>;
  onUserInfo: React.MouseEventHandler<HTMLButtonElement>;
  onUserBoards: React.MouseEventHandler<HTMLButtonElement>;
  onSignOut: React.MouseEventHandler<HTMLButtonElement>;
  onRemoveUser: React.MouseEventHandler<HTMLButtonElement>;
};

const Header = ({
  isDropDown,
  onProfileClick,
  onSearch,
  setSearchContent,
  onUserInfo,
  onUserBoards,
  onSignOut,
  onRemoveUser,
}: Props) => {
  return (
    <header className="header-container">
      <h1 onClick={(e) => e.preventDefault()}>
        <img className="logo" src={images.logo} />
        <span>VOTE</span>
      </h1>
      <div className="search-container">
        <input
          className="searchInput"
          type="text"
          placeholder="검색"
          onChange={(e) => setSearchContent(e.target.value)}
        />
        <button className="search-button" type="submit" onClick={onSearch}>
          <img src={images.search} alt="검색" />
        </button>
      </div>

      <div className="right">
        <button className="alarm" onClick={(e) => e.preventDefault()}>
          <img src={images.notification} alt="알림" />
        </button>
        <ul className="profile-area">
          <button className="profile-button" onClick={onProfileClick}>
            <img src={images.user} alt="프로필" />
          </button>
          <li className={`sub-menu ${isDropDown ? "open" : "close"}`}>
            <ul>
              <li>
                <button onClick={onUserInfo}>내 정보</button>
              </li>
              <li>
                <button onClick={onUserBoards}>내 투표</button>
              </li>
              <li>
                <button onClick={onSignOut}>로그아웃</button>
              </li>
              <li>
                <button onClick={onRemoveUser}>회원탈퇴</button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
