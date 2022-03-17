import React from "react";
import "./css/login.css";

type Props = {
  setId: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: React.MouseEventHandler<HTMLButtonElement>;
};

const Login = ({ setId, setPassword, onSubmit }: Props) => {
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
          <button type="submit" onClick={onSubmit}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
