import React from "react";
import { getCommentType } from "../../../typedef/common/common.types";
import "./css/CommentScrollView.css";

type Props = {
  setTarget: React.LegacyRef<HTMLDivElement>;
  loading: boolean;
  itemList: getCommentType[];
  end: boolean;
};

const CommentScrollView = ({ setTarget, loading, itemList, end }: Props) => {
  return (
    <div className="comment-scroll-view-wrap">
      {itemList.map((comment, index) => (
        <div key={index}>
          <div className="comment">{comment.content}</div>
          <div className="comment-info">
            {comment.author.nickname} / {comment.updatedAt}
          </div>
        </div>
      ))}
      {!end && !loading && (
        <div className="target" ref={setTarget}>
          Loading...
        </div>
      )}
    </div>
  );
};

export default CommentScrollView;
