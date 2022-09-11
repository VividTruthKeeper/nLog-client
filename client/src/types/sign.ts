import React, { SetStateAction } from "react";

export interface SignGreetingType {
  textBig: string;
  textSmall: string;
}

export interface SignInputType<relType> {
  type: string;
  placeholder?: string;
  required?: boolean;
  errorMsg: string;
  defaultValue?: string;
  dispatchMethod?: (value: string) => void | void;
  related?: {
    type: "origin" | "checker";
    state: {
      value: relType;
      setter: React.Dispatch<SetStateAction<relType>>;
    };
  };
}
