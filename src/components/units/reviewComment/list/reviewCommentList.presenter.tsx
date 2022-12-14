import * as S from "./reviewCommentList.styles";
import { Avatar } from "@mui/material";
import { getDate, getTime } from "../../../../commons/utils/getDate";
import ConfirmModal from "../../../commons/modals/confirmModal";
import { IReviewCommentListUiProps } from "./reviewCommentList.types";

const ReviewCommentListUi = ({
  reviewCommentsMap,
  onClickShowModal,
  onClickCancelModal,
  onClickModalConfirm,
  isModalOpen,
  onClickEditBtn,
  isEditOpen,
  onChangeEditComment,
  onClickEdit,
  editComments,
  reviewCommentUserId,
  userId,
}: IReviewCommentListUiProps) => {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <Avatar
            alt="Crew Image"
            src={
              reviewCommentsMap.user.profile_img === null
                ? `/images/commons/basic-profile.png`
                : `https://storage.googleapis.com/${String(
                    reviewCommentsMap.user.profile_img
                  )}`
            }
            style={{
              border:
                reviewCommentsMap.user.profile_img === null
                  ? "1px solid #999"
                  : "",
            }}
          ></Avatar>
          <S.CommentBox>
            <S.NickName>{reviewCommentsMap?.user?.nickname}</S.NickName>
            <S.Comment>{reviewCommentsMap?.reviewComment}</S.Comment>
            <S.DateEditDeleteBox>
              <S.DateBox>
                <S.Date>{getDate(reviewCommentsMap?.createdAt)}</S.Date>
                <S.Date>|</S.Date>
                <S.Date>{getTime(reviewCommentsMap?.createdAt)}</S.Date>
              </S.DateBox>
              {reviewCommentUserId === userId && (
                <S.EditDeleteBox>
                  <S.EditDelete
                    id={reviewCommentsMap?.id}
                    onClick={onClickEditBtn}
                  >
                    ์์ 
                  </S.EditDelete>
                  <S.EditDeleteDot>ยท</S.EditDeleteDot>
                  <S.EditDelete
                    id={reviewCommentsMap?.id}
                    onClick={onClickShowModal}
                  >
                    ์ญ์ 
                  </S.EditDelete>
                </S.EditDeleteBox>
              )}
            </S.DateEditDeleteBox>
          </S.CommentBox>
        </S.Container>
        <ConfirmModal
          onOk={onClickModalConfirm}
          onCancel={onClickCancelModal}
          contents="๋๊ธ์ ์ญ์ ํ์๊ฒ ์ต๋๊น?"
          open={isModalOpen}
        />
      </S.Wrapper>
      {isEditOpen && (
        <>
          <S.EditContainer>
            <S.EditContents
              onChange={onChangeEditComment}
              id="clear"
              defaultValue={reviewCommentsMap?.reviewComment || editComments}
            ></S.EditContents>
            <S.EditRegisterBox>
              <S.EditRegisterBtn onClick={onClickEdit}>์์ </S.EditRegisterBtn>
            </S.EditRegisterBox>
          </S.EditContainer>
        </>
      )}
    </>
  );
};

export default ReviewCommentListUi;
