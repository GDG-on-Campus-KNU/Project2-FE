import React, { useCallback, useEffect, useState } from "react";
import ImagePopUp from "../components/ImagePopUp";

type Props = {
  images: string[];
  index: number;
};

const ImagePopUpContainer = ({ images, index }: Props) => {
  const [focusImage, setFocusImage] = useState("");
  const [imageRef, setImageRef] = useState(index);

  const onload = useCallback(() => {
    const image = images[imageRef];
    setFocusImage(image);
  }, [focusImage]);

  const onPrev = useCallback(() => {
    if (imageRef > 0) {
      setImageRef(imageRef - 1);
    }
  }, [imageRef]);

  const onNext = useCallback(() => {
    if (imageRef < images.length) {
      setImageRef(imageRef + 1);
    }
  }, [imageRef]);

  useEffect(() => {
    onload();
  }, [imageRef]);

  return <ImagePopUp focusImage={focusImage} onPrev={onPrev} onNext={onNext} />;
};

export default ImagePopUpContainer;
