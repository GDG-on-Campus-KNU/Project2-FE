import React, { useCallback } from "react";
import { useState, useEffect } from "react";

type Props = {
  bgcolor: string;
  progress: number;
  height: number;
};

const ProgressBar = ({ bgcolor, progress, height }: Props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < progress) {
        setCount(count + 1);
      }
    }, 5);
    return () => clearInterval(interval);
  }, [count]);

  const Parentdiv = {
    height: "100%",
    width: "100%",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    margin: 50,
  };

  const Childdiv = {
    height: "100%",
    width: `${count}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    lineHeight: "200%",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>
          VOTE1
          {`${progress}%`}
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
