import React, { useState, useEffect } from "react";
import "./css/scrollView.css";
import Block from "./components/Block";

const ScrollView = ({ setTarget, loading, itemList }) => {
  return (
    <div className="scroll-view-wrap">
      {itemList.map((block) => (
        <Block block={block} />
      ))}

      {!loading && (
        <div className="target" ref={setTarget}>
          Loading...
        </div>
      )}
    </div>
  );
};

export default ScrollView;
