import React, { useState, useEffect, useCallback, ReactElement } from "react";
import ScrollView from "../ScrollView";
import { getBlockType } from "../../../typedef/common/common.types";
import usePopUp from "../../../hooks/usePopUp";
import WritePopUpContainer from "./WritePopUpContainer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/rootReducer";
import { updateItemList } from "../../../store/itemList/actions";
import BlockContainer from "./BlockContainer";

type Props = {
  getBlocks: () => Promise<getBlockType[]>;
  scrollView: React.RefObject<HTMLDivElement>;
  searchContent: string;
  scrollLoading: boolean;
};

const ScrollViewContainer = ({
  getBlocks,
  scrollView,
  searchContent,
  scrollLoading,
}: Props) => {
  const { __showPopUpFromHooks, __hidePopUpFromHooks } = usePopUp();
  const dispatch = useDispatch();
  const itemList = useSelector(
    (root: RootState) => root.itemListReducer.itemList
  );
  const next = useSelector((root: RootState) => root.nextReducer.next);

  const [elementList, setElementList] = useState<ReactElement[]>([]);

  const closePopUp = useCallback(() => {
    __hidePopUpFromHooks();
  }, []);

  const loadPopUp = useCallback(() => {
    __showPopUpFromHooks(<WritePopUpContainer closePopUp={closePopUp} />);
  }, []);

  const addItemList = async () => {
    const blocks = await getBlocks();
    dispatch(updateItemList([...itemList, ...blocks]));
  };

  useEffect(() => {
    const newElementList = itemList.map((block) => {
      return <BlockContainer block={block} />;
    });

    setElementList(newElementList);
  }, [itemList]);

  return (
    <ScrollView
      next={next}
      elementList={elementList}
      addItemList={addItemList}
      loadPopUp={loadPopUp}
      scrollView={scrollView}
      scrollLoading={scrollLoading}
      searchContent={searchContent}
    />
  );
};

export default ScrollViewContainer;
