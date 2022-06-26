import React, { ReactElement } from "react";
import InfiniteScroll from "../InfiniteScroll/InfiniteScroll";
import "./css/CommentScrollView.css";

type Props = {
  commentItemList: ReactElement<any, any>[];
  addComment: () => Promise<void>;
  end: boolean;
};

const CommentScrollView = ({ commentItemList, addComment, end }: Props) => {
  return (
    <div className="comment-scroll-view-wrap">
      <InfiniteScroll
        itemList={commentItemList}
        addItemList={addComment}
        end={end}
      />
    </div>
  );
};

export default CommentScrollView;
