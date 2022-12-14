import { ChangeEvent } from "react";

export interface ISocialJoinProps {
  phoneInput01: any;
  phoneInput02: any;
  phoneInput03: any;
  onChangeGenderCheck: (event: ChangeEvent<HTMLInputElement>) => void;
  isGenderCheck: string;
  onChangePhoneInput01: (event: ChangeEvent<HTMLSelectElement>) => void;
  onChangePhoneInput02: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePhoneInput03: (event: ChangeEvent<HTMLInputElement>) => void;
  register: any;
  onChangeNickname: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSendToPhone: () => void;
  onClickCheckTokenToPhone: () => void;
  onChangePhoneToken: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickCheckNickname: () => void;
  handleSubmit: any;
  formState: any;
  isCheckNumActive: boolean;
  isNicknameCheck: boolean;
  isPhoneNumCheck: boolean;
  onClickSocialUpdate: (data: any) => void;
}
