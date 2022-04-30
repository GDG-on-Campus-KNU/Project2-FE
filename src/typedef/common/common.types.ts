import React from "react";

export type BasicAPIResponseType<T> = {
  data: T;
  status: number;
  statusText: string;
  config: {
    url: string;
  };
  headers: object;
  request: object;
};

export type LoginTokenType = {
  refresh: string;
  access: string;
};

export type SignUpType = {
  username: string;
  email: string;
  profile: {
    count: number;
    boardList: null;
  };
};

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
  isVote: boolean;
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

export type getCommentType = {
  uid: string;
  author: {
    nickname: string;
    profile: string;
  };
  createdAt: string;
  updatedAt: string;
  content: string;
};
