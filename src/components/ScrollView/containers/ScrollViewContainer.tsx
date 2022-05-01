import React, { useState, useEffect, useCallback } from "react";
import ScrollView from "../ScrollView";
import {
  BasicAPIResponseType,
  getBlockResponseType,
  getBlockType,
} from "../../../typedef/common/common.types";
import usePopUp from "../../../hooks/usePopUp";
import WritePopUpContainer from "./WritePopUpContainer";
import useAuth from "../../../hooks/Auth/useAuth";
import { apiOrigin, apiRoute, requestGet } from "../../../lib/api/api";

const ScrollViewContainer = () => {
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [end, setEnd] = useState(false);

  const [next, setNext] = useState(
    `${apiOrigin}${apiRoute.board}?limit=10&offset=0`
  );
  const [itemList, setItemList] = useState<getBlockType[]>([]);

  const { __showPopUpFromHooks, __hidePopUpFromHooks } = usePopUp();

  const closePopUp = useCallback(() => {
    __hidePopUpFromHooks();
  }, []);

  const loadPopUp = useCallback(() => {
    __showPopUpFromHooks(<WritePopUpContainer closePopUp={closePopUp} />);
  }, []);

  const getBlocks = async () => {
    const { data } = await requestGet<
      BasicAPIResponseType<getBlockResponseType>
    >(next, {});

    if (data.next) {
      setNext(data.next);
    } else {
      setEnd(true);
    }

    const blocks = data.results.map((block) => {
      return (block = {
        ...block,
        updatedAt: block.updatedAt.split(".")[0].replace("T", " "),
        image: [block.image],
      });
    });

    return blocks;
  };

  const addItemList = (blocks: getBlockType[]) => {
    setItemList((itemList) => [...itemList, ...blocks]);
  };

  const intersecting = async (
    [entry]: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    if (entry.isIntersecting) {
      const blocks = await getBlocks();
      setLoading(true);
      addItemList(blocks);
      setLoading(false);
    }
  };

  const observer = new IntersectionObserver(intersecting, { threshold: 0.4 });

  useEffect(() => {
    if (!target) return;

    observer.observe(target);
  }, [target]);

  return (
    <ScrollView
      setTarget={setTarget}
      loading={loading}
      itemList={itemList}
      end={end}
      loadPopUp={loadPopUp}
    />
  );
};

export default ScrollViewContainer;
