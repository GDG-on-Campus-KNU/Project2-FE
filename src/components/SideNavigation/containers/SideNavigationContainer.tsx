import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiOrigin, apiRoute } from "../../../lib/api/api";
import { resetNext, updateNext } from "../../../store/next/actions";
import SideNavigation from "../SideNavigation";
import { RootState } from "../../../store/rootReducer";
import { getBlockType } from "../../../typedef/common/common.types";
import { updateItemList } from "../../../store/itemList/actions";

type Props = {
  getBlocks: (next: string | null) => Promise<getBlockType[]>;
};

const SideNavigationContainer = ({ getBlocks }: Props) => {
  const [selected, setSelected] = useState("all");
  const dispatch = useDispatch();
  const next = useSelector((root: RootState) => root.nextReducer.next);

  const setCategory = (category: string) => {
    setSelected(category);

    if (category === "all") {
      dispatch(resetNext());
    } else {
      dispatch(
        updateNext(
          `${apiOrigin}${apiRoute.board}/category/${category}?limit=10&offset=0`
        )
      );
    }
  };

  const setBlock = async () => {
    const blocks = await getBlocks(next);
    dispatch(updateItemList(blocks));
  };

  useEffect(() => {
    setBlock();
  }, [selected]);

  return <SideNavigation selected={selected} setCategory={setCategory} />;
};

export default SideNavigationContainer;
