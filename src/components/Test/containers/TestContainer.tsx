import React, { useState } from "react";
import Test from "../Test";

const TestContainer = () => {
  const [title, setTitle] = useState("");
  return <Test setTitle={setTitle} />;
};

export default TestContainer;
