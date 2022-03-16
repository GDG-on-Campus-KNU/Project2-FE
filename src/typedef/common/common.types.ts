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
