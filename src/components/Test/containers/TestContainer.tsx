import React, { useCallback, useState } from "react";
import { isTemplateSpan } from "typescript";
import usePopUp from "../../../hooks/usePopUp";
import Test from "../Test";

const dummy = [
  {
    option: "1",
  },
  {
    option: "1",
  },
  {
    option: "1",
  },
];
const TestContainer = () => {
  const [items, setItems] = useState(dummy);
  const { __showPopUpFromHooks } = usePopUp();
  const testPopup = useCallback(() => {
    __showPopUpFromHooks(
      <div>
        TestPopup 사용방법 __showPopUpFromHooks() 함수 안에 팝업 component를
        넣으면 됩니다 !
        {/* 예시
        __showPopUpFromHooks(
        <PostPopup state={state} setState={setState} />) */}
      </div>
    );
  }, []);

  const addItmes = useCallback(() => {
    setItems([...items, { option: "" }]);
  }, [items]);
  return <Test testPopup={testPopup} />;
};

export default TestContainer;
