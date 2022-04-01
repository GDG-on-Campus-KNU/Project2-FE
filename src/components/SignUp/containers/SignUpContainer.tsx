import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUp from "../SignUp";

const SignUpContainer = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState(""); //
  const navigate = useNavigate();

  const onSubmit = useCallback(() => {
    // const formData = new FormData();
    // formData.append("id", id);
    // formData.append("password", password);
    // formData.append("nickname", nickname);
    // api post
    navigate("/");  //주소 바꿨는데 왜 signup페이지에 그대로 있을까요 ㅠ ㅠ ㅠ
  }, [id, password, nickname, navigate]); //nickname도 추가하긴 했는데 요건 무슨 의미죠 . . . ?

  return <SignUp setId={setId} setPassword={setPassword} setNickname={setNickname} onSubmit={onSubmit} />;
};

export default SignUpContainer;
