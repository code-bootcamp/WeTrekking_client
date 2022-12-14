import { mainColor } from "../../../../commons/styles/color";
import Input01 from "../../../commons/inputs/input-01";
import * as A from "../login/login.styles";
import * as S from "./join.styles";
import { IJoinUiProps } from "./join.types";

const JoinUi = ({
  onChangeGenderCheck,
  isGenderCheck,
  phoneInput01,
  phoneInput02,
  phoneInput03,
  onChangePhoneInput01,
  onChangePhoneInput02,
  onChangePhoneInput03,
  register,
  handleSubmit,
  onClickJoinSubmit,
  formState,
  isUpdate,
  isCheckNumActive,
  onClickSendToPhone,
  onClickCheckTokenToPhone,
  onChangePhoneToken,
  onChangeUserProfile,
  onClickCheckEmail,
  onClickCheckNickname,
  onChangeEmail,
  onChangeNickname,
  isEmailCheck,
  isNicknameCheck,
  isPhoneNumCheck,
  userDatas,
  onClickUpdateUser,
  imgUrl,
}: IJoinUiProps) => {
  return (
    <A.Wrapper>
      <A.Container>
        <S.JoinForm
          onSubmit={
            isUpdate
              ? handleSubmit(onClickUpdateUser)
              : handleSubmit(onClickJoinSubmit)
          }
        >
          <A.LoginTitle>
            We Trekking
            <span>{isUpdate ? "정보수정" : "회원가입"}</span>
          </A.LoginTitle>
          <A.LoginInputContainer>
            <A.LoginInputTitle>
              이메일 {isUpdate ? <span></span> : <span>*</span>}
            </A.LoginInputTitle>
            <S.JoinEmailBox>
              <S.EmailInputBox>
                <S.DefaultInput
                  type="text"
                  placeholder="이메일을 입력해 주세요."
                  maxLength={50}
                  name="email"
                  onChange={onChangeEmail}
                  disabled={isUpdate || false}
                  defaultValue={
                    isUpdate ? userDatas?.fetchUser.email : undefined
                  }
                />
              </S.EmailInputBox>
            </S.JoinEmailBox>
            <S.ErrorMsg>{formState.errors.email?.message}</S.ErrorMsg>
          </A.LoginInputContainer>
          {isUpdate ? null : (
            <S.CheckBtn
              type="button"
              onClick={onClickCheckEmail}
              disabled={isEmailCheck || false}
            >
              중복확인
            </S.CheckBtn>
          )}

          <A.LoginInputContainer>
            <A.LoginInputTitle>
              비밀번호 {isUpdate ? <span></span> : <span>*</span>}
            </A.LoginInputTitle>
            <Input01
              type="password"
              placeholder="비밀번호를 입력해 주세요."
              maxLength={20}
              name="password"
              register={register}
              isUpdate={false}
            />
            <S.ErrorMsg>{formState.errors.password?.message}</S.ErrorMsg>
          </A.LoginInputContainer>
          <A.LoginInputContainer>
            <A.LoginInputTitle>
              비밀번호 확인 {isUpdate ? <span></span> : <span>*</span>}
            </A.LoginInputTitle>
            <Input01
              type="password"
              placeholder="비밀번호를 다시 입력해 주세요."
              maxLength={20}
              name="passwordConfirm"
              register={register}
              isUpdate={false}
            />
            <S.ErrorMsg>{formState.errors.password?.message}</S.ErrorMsg>
            <S.ErrorMsg>{formState.errors.passwordConfirm?.message}</S.ErrorMsg>
          </A.LoginInputContainer>
          <A.LoginInputContainer>
            <A.LoginInputTitle>
              이름 {isUpdate ? <span></span> : <span>*</span>}
            </A.LoginInputTitle>
            <S.DefaultInput
              type="text"
              placeholder="이름을 입력해 주세요."
              maxLength={51}
              name="name"
              {...register("name")}
              disabled={isUpdate || false}
              defaultValue={isUpdate ? userDatas?.fetchUser.name : undefined}
            />
            <S.ErrorMsg>{formState.errors.name?.message}</S.ErrorMsg>
          </A.LoginInputContainer>
          <A.LoginInputContainer>
            <A.LoginInputTitle>
              생년월일 {isUpdate ? <span></span> : <span>*</span>}
            </A.LoginInputTitle>
            <S.DefaultInput
              type="text"
              placeholder="생년월일을 입력해 주세요. (ex: 19970708)"
              maxLength={8}
              name="birth"
              {...register("birth")}
              disabled={isUpdate || false}
              defaultValue={isUpdate ? userDatas?.fetchUser.birth : undefined}
            />
            <S.ErrorMsg>{formState.errors.birth?.message}</S.ErrorMsg>
          </A.LoginInputContainer>
          <A.LoginInputContainer>
            <A.LoginInputTitle>
              닉네임 {isUpdate ? <span></span> : <span>*</span>}
            </A.LoginInputTitle>
            <S.DefaultInput
              type="text"
              placeholder="닉네임을 입력해 주세요."
              maxLength={51}
              name="nickname"
              onChange={onChangeNickname}
            />
            <S.ErrorMsg>{formState.errors.nickname?.message}</S.ErrorMsg>
          </A.LoginInputContainer>
          <S.CheckBtn
            type="button"
            onClick={onClickCheckNickname}
            disabled={isNicknameCheck || false}
          >
            중복확인
          </S.CheckBtn>
          <A.LoginInputContainer>
            <A.LoginInputTitle>
              휴대전화 {isUpdate ? <span></span> : <span>*</span>}
            </A.LoginInputTitle>
            <S.JoinPhoneBox>
              <S.PhoneInputBox>
                <S.EmailSelectBox
                  ref={phoneInput01}
                  onChange={onChangePhoneInput01}
                >
                  <option value="">선택</option>
                  <option value="010">010</option>
                  <option value="011">011</option>
                  <option value="016">016</option>
                </S.EmailSelectBox>
              </S.PhoneInputBox>
              <span>-</span>
              <S.PhoneInputBox>
                <S.PhoneInput
                  type="text"
                  placeholder="****"
                  maxLength={4}
                  ref={phoneInput02}
                  onChange={onChangePhoneInput02}
                />
              </S.PhoneInputBox>
              <span>-</span>
              <S.PhoneInputBox>
                <S.PhoneInput
                  type="text"
                  placeholder="****"
                  maxLength={4}
                  ref={phoneInput03}
                  onChange={onChangePhoneInput03}
                />
              </S.PhoneInputBox>
            </S.JoinPhoneBox>
            <S.PhoneAuthBtn type="button" onClick={onClickSendToPhone}>
              인증번호 받기
            </S.PhoneAuthBtn>
          </A.LoginInputContainer>
          {isCheckNumActive && (
            <A.LoginInputContainer>
              <A.LoginInputTitle>
                인증번호 확인 {isUpdate ? <span></span> : <span>*</span>}
              </A.LoginInputTitle>
              <S.DefaultInput
                type="text"
                placeholder="인증번호를 입력해 주세요."
                maxLength={6}
                onChange={onChangePhoneToken}
              />
              <S.ErrorMsg>{formState.errors.checkNum?.message}</S.ErrorMsg>
              <S.CheckNumBtn
                type="button"
                onClick={onClickCheckTokenToPhone}
                disabled={isPhoneNumCheck || false}
              >
                인증번호 확인
              </S.CheckNumBtn>
            </A.LoginInputContainer>
          )}
          {isUpdate ? null : (
            <A.LoginInputContainer>
              <A.LoginInputTitle>
                성별<span>*</span>
              </A.LoginInputTitle>
              <S.GenderSelectBox>
                <S.GenderRadio
                  type="radio"
                  value="male"
                  name="gender"
                  id="male"
                  onChange={onChangeGenderCheck}
                  checked={isGenderCheck === "male"}
                />
                <S.GenderRadio
                  type="radio"
                  value="female"
                  name="gender"
                  id="female"
                  onChange={onChangeGenderCheck}
                  checked={isGenderCheck === "female"}
                />
                <S.GenderLabel
                  htmlFor="male"
                  style={{
                    backgroundColor:
                      isGenderCheck === "male" ? mainColor : "#fff",
                    color: isGenderCheck === "male" ? "#fff" : "#999",
                  }}
                >
                  남성
                </S.GenderLabel>
                <S.GenderLabel2
                  htmlFor="female"
                  style={{
                    backgroundColor:
                      isGenderCheck === "female" ? mainColor : "#fff",
                    color: isGenderCheck === "female" ? "#fff" : "#999",
                  }}
                >
                  여성
                </S.GenderLabel2>
              </S.GenderSelectBox>
              <S.ErrorMsg>{formState.errors.gender?.message}</S.ErrorMsg>
            </A.LoginInputContainer>
          )}

          <A.LoginInputContainer>
            <A.LoginInputTitle>사진</A.LoginInputTitle>
            <S.InputFile
              type="file"
              id="profilePhoto"
              onChange={onChangeUserProfile}
            />
            <S.PhotoUploadBox htmlFor="profilePhoto">
              <S.ProfileUploadBtn
                style={{ backgroundImage: `url(${String(imgUrl)})` }}
              >
                {imgUrl ? (
                  <img />
                ) : (
                  <img
                    src="/images/join/photo-upload.png"
                    alt="사진 업로드 이미지"
                  />
                )}
              </S.ProfileUploadBtn>
              <S.ProfileUploadText>사진을 선택해 주세요</S.ProfileUploadText>
            </S.PhotoUploadBox>
          </A.LoginInputContainer>
          <S.SubmitJoinBtn>
            {isUpdate ? "수정하기" : "회원가입"}
          </S.SubmitJoinBtn>
        </S.JoinForm>
      </A.Container>
    </A.Wrapper>
  );
};

export default JoinUi;
