import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../Login";

const LoginContainer = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = useCallback(() => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("password", password);
    // api post
    navigate("/home");
  }, [id, password, navigate]);

  return <Login setId={setId} setPassword={setPassword} onSubmit={onSubmit} />;
};

export default LoginContainer;
