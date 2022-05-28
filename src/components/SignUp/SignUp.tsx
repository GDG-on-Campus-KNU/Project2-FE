import React, { SetStateAction } from "react";
import "./css/signUp.css";
import images from "../../assets/images";

type Props = {
  setId: React.Dispatch<React.SetStateAction<string>>;
  id: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  passwordConfirm: string;
  isMatch: boolean;
  onComparePassword: (confirm: string) => void;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  onCheckEmail: (email: string) => void;
  email: string;
  isEmail: boolean;
  onSubmit: React.MouseEventHandler<HTMLButtonElement>;
  onLogin: React.MouseEventHandler<HTMLButtonElement>;
};

const SignUp = ({
  setId,
  id,
  setPassword,
  password,
  passwordConfirm,
  isMatch,
  onComparePassword,
  onCheckEmail,
  email,
  isEmail,
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
            <span className="incorrect-message">
              비밀번호가 일치하지 않습니다
            </span>
          )}
          {password && passwordConfirm && isMatch && (
            <span className="correct-message">비밀번호가 일치합니다</span>
          )}
          <input
            type="email"
            placeholder="이메일"
            onChange={(e) => onCheckEmail(e.target.value)}
          />
          {email && isEmail && (
            <span className="correct-message">올바른 이메일 형식입니다</span>
          )}
          {email && !isEmail && (
            <span className="correct-message">
              올바르지 않은 이메일 형식입니다
            </span>
          )}
          {/* <div className="profile-container">
            <span>프로필</span>
            <div className="preview-box">
              <div className="preview-image-box">
                <img src={images.logo} alt="profile image" />
              </div>
            </div>
            <div className="select-box">
              <input
                className="blind"
                type="file"
                id="image-button"
                accept=".jpg, .png"
              />
              <label htmlFor="image-button">이미지 업로드</label>
            </div>
          </div> */}
          <button
            className="signup-button"
            type="submit"
            onClick={onSubmit}
            disabled={id && isMatch && isEmail ? false : true}
          >
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
