export interface SignGreetingType {
  textBig: string;
  textSmall: string;
}

export interface SignInputType {
  type: string;
  placeholder?: string;
  required?: boolean;
  errorMsg: string;
  defaultValue?: string;
  dispatchMethod?: (value: string) => void | void;
}
