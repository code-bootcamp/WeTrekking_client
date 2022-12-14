import * as A from "../uploadlist/uploadlist.styles";
import * as S from "../applylist/applylist.styles";
import { Avatar } from "@mui/material";
import { MouseEvent, useState } from "react";
import ConfirmModal from "../../../commons/modals/confirmModal";
import { gql, useMutation } from "@apollo/client";
import { GraphQLClient } from "graphql-request";
import { accessTokenState } from "../../../../store";
import { useRecoilState } from "recoil";
import { errorModal, successModal } from "../../../commons/modals/alertModals";
import Link from "next/link";

const FETCH_APPLY_LIST = gql`
  query fetchApplyList($crewBoardId: String!) {
    fetchApplyList(crewBoardId: $crewBoardId) {
      id
      status
      user {
        id
        name
        nickname
        birth
        gender
        profile_img
      }
      crewBoard {
        id
        title
        description
        user {
          id
        }
      }
    }
  }
`;

const ACCEPT_CREW = gql`
  mutation acceptCrew($id: String!) {
    acceptCrew(id: $id) {
      id
    }
  }
`;

const REJECT_CREW = gql`
  mutation rejectCrew($id: String!) {
    rejectCrew(id: $id) {
      id
    }
  }
`;

interface IElProps {
  el: any;
  index: number;
  isModalActive: boolean;
  onClickModalToggle: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickListDel: () => void;
  onClickModalCancel: () => void;
}

const UList = ({
  el,
  index,
  isModalActive,
  onClickModalToggle,
  onClickListDel,
  onClickModalCancel,
}: IElProps) => {
  const [isActive, setIsActive] = useState(false);
  const [accessToken] = useRecoilState(accessTokenState);
  const [applyList, setApplyList] = useState<any>();

  const [acceptCrew] = useMutation(ACCEPT_CREW);
  const [rejectCrew] = useMutation(REJECT_CREW);

  const onClickAccept = (userId: string) => async () => {
    try {
      await acceptCrew({
        variables: {
          id: userId,
        },
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });
      setIsActive(false);
      successModal("?????????????????????.");
    } catch (error) {
      if (error instanceof Error) {
        errorModal(error.message);
      }
    }
  };
  const onClickRejectCrew = (userId: string) => async () => {
    try {
      await rejectCrew({
        variables: {
          id: userId,
        },
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });
      setIsActive(false);
      successModal("?????????????????????.");
    } catch (error) {
      if (error instanceof Error) {
        errorModal(error.message);
      }
    }
  };

  const onClickModalOff = () => {
    setIsActive(false);
  };

  const onClickUserActive = async (event: MouseEvent<HTMLButtonElement>) => {
    try {
      setIsActive((prev) => !prev);
      const graphQLClient = new GraphQLClient(
        "https://develop.wetrekking.kr/graphql",
        {
          credentials: "include",
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const result = await graphQLClient.request({
        document: FETCH_APPLY_LIST,
        variables: {
          crewBoardId: event.currentTarget.id,
        },
      });
      setApplyList(result);
    } catch (error) {
      if (error instanceof Error) {
        setIsActive(false);
        errorModal("???????????? ????????????.");
      }
    }
  };

  return (
    <S.ContentUl>
      <S.ListLiNum className="mobile">{index + 1}</S.ListLiNum>
      <S.ListLiMountain>{el.mountain.mountain}</S.ListLiMountain>
      <S.ListLiTitle>
        <Link href={`/crews/${String(el.id)}`}>
          <a>{el.title}</a>
        </Link>
      </S.ListLiTitle>
      <S.ListLiSign>
        <A.UserViewBtn id={el.id} onClick={onClickUserActive}>
          ????????? ??????
        </A.UserViewBtn>
        {isActive && (
          <A.UserModal>
            <A.UserModalContainer>
              <A.ModalTitle>
                ????????? <span>{applyList?.fetchApplyList.length} ???</span>
              </A.ModalTitle>
              <A.UserListContainer>
                {applyList?.fetchApplyList?.map((el: any) => {
                  return (
                    <A.UserListBox key={el.id}>
                      <A.UserProfileInfoBox>
                        <Avatar
                          alt="?????? ?????????"
                          src={
                            el.user.profile_img === null
                              ? `/images/commons/basic-profile.png`
                              : `https://storage.googleapis.com/${String(
                                  el.user.profile_img
                                )}`
                          }
                          style={{
                            border:
                              el.user.profile_img === null
                                ? "1px solid #999"
                                : "",
                          }}
                          className="avatar"
                        />
                        <A.UserProfileInfo>
                          <A.UserName>{el.user.nickname}</A.UserName>
                          <A.UserAgeGender>
                            26 ?? {el.user.gender === "male" ? "??????" : "??????"}
                          </A.UserAgeGender>
                        </A.UserProfileInfo>
                      </A.UserProfileInfoBox>
                      <A.UserBtnBox>
                        <A.UserCancelBtn onClick={onClickRejectCrew(el.id)}>
                          ??????
                        </A.UserCancelBtn>
                        <A.UserOkBtn onClick={onClickAccept(el.id)}>
                          ??????
                        </A.UserOkBtn>
                      </A.UserBtnBox>
                    </A.UserListBox>
                  );
                })}
              </A.UserListContainer>
              <A.ModalCancelBtn onClick={onClickModalOff}>
                ??????
              </A.ModalCancelBtn>
            </A.UserModalContainer>
          </A.UserModal>
        )}
      </S.ListLiSign>
      <S.ListLiCancel>
        <S.CancelBtn>
          <S.CancelMent id={el.id} onClick={onClickModalToggle}>
            ????????????
          </S.CancelMent>
        </S.CancelBtn>
      </S.ListLiCancel>
      <ConfirmModal
        open={isModalActive}
        onOk={onClickListDel}
        onCancel={onClickModalCancel}
        contents="?????????????????????????"
      />
    </S.ContentUl>
  );
};

export default UList;
