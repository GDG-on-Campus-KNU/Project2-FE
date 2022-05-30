import { useState, useEffect } from "react";

type Props = {
  bgcolor: string;
  progress: number;
  content: string;
};

const ProgressBar = ({ bgcolor, progress, content }: Props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < progress) {
        setCount(count + 1);
      } else if (count > progress) {
        setCount(count - 1);
      }
    }, 5);
    return () => clearInterval(interval);
  }, [count, progress]);

  const Parentdiv = {
    height: "100%",
    width: "100%",
    backgroundColor: "whitesmoke",
    borderRadius: "5px",
    margin: 0,
    // potision: "relative",
  };

  const Childdiv = {
    height: "100%",
    width: `${count}%`,
    backgroundColor: bgcolor,
    borderRadius: "5px",
    // position: "absolute",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
    verticalAlign: "middle",
    marginLeft: "auto",
    marginRight: "auto",
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        {/* <span style={progresstext}>
          {content}
          <br />
          {`${progress}%`}
        </span> */}
      </div>
    </div>
  );
};

export default ProgressBar;
