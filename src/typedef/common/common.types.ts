import React from "react";

export type PropsType<OtherType> = {
  name: string;
  con: string;
  char: OtherType;
};

export type OtherType = {
  name: string;
  con: string;
  char: number;
};

export type PopUpTypes = {
  popUp: React.ReactNode;
  isShown: boolean;
};

export type getBlockType = {
  uid: string;
  author: {
    nickname: string;
    profile: string;
  };
  createdAt: string;
  updatedAt: string;
  category: string;
  content: string;
  images: string[];
  recomment: number;
};

export type postBlockType = {
  author: {
    nickname: string;
    profile: string;
  };
  category: string;
  content: string;
  images: string[];
};
