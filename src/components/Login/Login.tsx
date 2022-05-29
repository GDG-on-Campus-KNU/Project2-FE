import React from "react";
import Loader from "../Loader/Loader";
import "./css/login.css";

type Props = {
  setId: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: React.MouseEventHandler<HTMLButtonElement>;
  onSignup: React.MouseEventHandler<HTMLButtonElement>;
};

const Login = ({ setId, setPassword, onSubmit, onSignup }: Props) => {
  return (
    <div className="login-wrap">
      <div className="login-container">
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

          <button className="login-button" type="submit" onClick={onSubmit}>
            Sign In
          </button>
        </form>
        <p className="link">
          아직 계정이 없으신가요? <button onClick={onSignup}>회원가입</button>
        </p>
      </div>
    </div>
  );
};

export default Login;
