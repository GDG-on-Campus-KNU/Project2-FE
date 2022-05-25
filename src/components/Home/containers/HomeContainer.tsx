import { useState } from "react";
import { getBlockType } from "../../../typedef/common/common.types";
import Home from "../Home";

const HomeContainer = () => {
  const [category, setState] = useState("all");
  const [searchContent, setSearchContent] = useState("");
  const [itemList, setItemList] = useState<getBlockType[]>([]);

  const editItemList = (blocks: getBlockType[]) => {
    setItemList(blocks);
  };

  return (
    <Home
      category={category}
      searchContent={searchContent}
      setSearchContent={setSearchContent}
      itemList={itemList}
      editItemList={editItemList}
    />
  );
};

export default HomeContainer;
