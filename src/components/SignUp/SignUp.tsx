import React, { SetStateAction } from "react";
import "./css/signUp.css";
import { Link } from "react-router-dom";

type Props = {
  setId: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  passwordConfirm: string;
  isMatch: boolean;
  onComparePassword: (confirm: string) => void;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: React.MouseEventHandler<HTMLButtonElement>;
  onLogin: React.MouseEventHandler<HTMLButtonElement>;
};

const SignUp = ({
  setId,
  setPassword,
  password,
  passwordConfirm,
  isMatch,
  onComparePassword,
  setEmail,
  onSubmit,
  onLogin,
}: Props) => {
  return (
    <div className="signup-wrap">
      <div className="signup-container">
        <h1>VOTE</h1>
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
            onChange={(e) => onComparePassword(e.target.value)}
          />
          {password && passwordConfirm && !isMatch && (
            <span className="incorrect-pw-message">
              비밀번호가 일치하지 않습니다
            </span>
          )}
          {password && passwordConfirm && isMatch && (
            <span className="correct-pw-message">비밀번호가 일치합니다</span>
          )}
          <input
            type="email"
            placeholder="이메일"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" onClick={onSubmit}>
            Sign Up
          </button>
        </form>
        <p className="link">
          이미 계정이 있으신가요? <button onClick={onLogin}>로그인</button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
