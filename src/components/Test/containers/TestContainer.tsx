import React, { useCallback, useState } from "react";
import usePopUp from "../../../hooks/usePopUp";
import Test from "../Test";

const TestContainer = () => {
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
  return <Test testPopup={testPopup} />;
};

export default TestContainer;
