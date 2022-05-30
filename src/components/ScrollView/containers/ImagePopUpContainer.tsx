import React, { useCallback, useEffect, useState } from "react";
import usePopUp from "../../../hooks/usePopUp";
import ImagePopUp from "../components/ImagePopUp";

type Props = {
  images: string[];
  index: number;
};

const ImagePopUpContainer = ({ images, index }: Props) => {
  const [focusImage, setFocusImage] = useState("");
  const [imageRef, setImageRef] = useState(index);
  const { __hidePopUpFromHooks } = usePopUp();

  const onload = useCallback(() => {
    const image = images[imageRef];
    setFocusImage(image);
  }, [focusImage]);

  const onClose = useCallback(() => {
    __hidePopUpFromHooks();
  }, [__hidePopUpFromHooks]);

  useEffect(() => {
    onload();
  }, [imageRef]);

  return <ImagePopUp focusImage={focusImage} onClose={onClose} />;
};

export default ImagePopUpContainer;
