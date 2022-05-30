import React from "react";
import { getBlockType } from "../../../typedef/common/common.types";

type Props = {
  loadPopUp: (id: number) => Promise<void>;
  itemList: getBlockType[];
};

const LastBoard = ({ loadPopUp, itemList }: Props) => {
  return (
    <div className="side-board-container">
      <h2>최근 투표한 글</h2>
      <ul className="post-list last">
        {itemList.map((block) => (
          <li className="post-item" key={block.id}>
            <button onClick={() => loadPopUp(block.id)}>
              {block.content.length > 20
                ? block.content.slice(0, 20) + "..."
                : block.content}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LastBoard;
