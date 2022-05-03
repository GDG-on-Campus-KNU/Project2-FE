import { useState } from "react";
import Home from "../Home";

const HomeContainer = () => {
  const [category, setState] = useState("all");
  const [searchContent, setSearchContent] = useState("");
  return (
    <Home
      category={category}
      searchContent={searchContent}
      setSearchContent={setSearchContent}
    />
  );
};

export default HomeContainer;
