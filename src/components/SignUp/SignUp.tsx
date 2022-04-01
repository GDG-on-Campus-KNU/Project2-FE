import React, { SetStateAction } from "react";
import "./css/SignUp.css";
import logo from "../Header/logo.svg";
import { Link } from "react-router-dom";

type Props = {
  setId: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: React.MouseEventHandler<HTMLButtonElement>;
};

const SignUp = ({ setId, setPassword, setNickname, onSubmit }: Props) => {
  return (
    <div className="login-wrap">
      <div className="login-container">
        <img className="logo" src={logo} />
        <form>
          <input
            type="text"
            placeholder="아이디"
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호 확인"
            onChange={(e) => setPassword(e.target.value)} //비밀번호 확인도 따로 state 추가해야 하나요...?
          />
          <input
            type="text"
            placeholder="닉네임"
            onChange={(e) => setNickname(e.target.value)}
          />
          <button type="submit" onClick={onSubmit}>
            Sign Up
          </button>
        </form>
        <p>이미 계정이 존재하시나요?  <Link className="link" to="/">로그인</Link></p>
      </div>
    </div>
  );
};

export default SignUp;