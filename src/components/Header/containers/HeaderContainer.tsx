import React, { useCallback, useState } from "react";
import Header from "../Header";

const HeaderContainer = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [searchContent, setSearchContent] = useState("");

  const onProfileClick = useCallback(() => {
    setIsDropDown((prev) => !prev);
  }, [isDropDown]);

  const onSearch = useCallback(() => {
    console.log(searchContent);
  }, [searchContent]);
  return (
    <Header
      isDropDown={isDropDown}
      onProfileClick={onProfileClick}
      onSearch={onSearch}
      setSearchContent={setSearchContent}
    />
  );
};

export default HeaderContainer;
