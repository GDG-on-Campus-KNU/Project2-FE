import React from "react";
import { PropsType } from "../../typedef/common/common.types";

type Props = {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  content: PropsType[];
};

const Test = ({ setTitle }: Props) => {
  return (
    <div>
      test
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
    </div>
  );
};

export default Test;
