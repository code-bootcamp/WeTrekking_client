import { Pagination } from "antd";
import { getDate } from "../../../../commons/utils/getDate";
import * as S from "./reviewList.styles";
import { IReviewListUiProps } from "./reviewList.types";

const ReviewListUi = ({
  data,
  onClickList,
  reviewId,
  isOpenSideBar,
  number,
  onChangePage,
}: IReviewListUiProps) => {
  return (
    <S.Wrapper style={{ width: isOpenSideBar ? "97vw" : "100%" }}>
      <S.Container style={{ width: isOpenSideBar ? "100%" : "1200px" }}>
        <S.ReviewListContainer>
          <S.TitleUl>
            <S.ListLiNum>No.</S.ListLiNum>
            <S.ListLiMountain>산 이름</S.ListLiMountain>
            <S.ListLiTitle style={{ width: isOpenSideBar ? "53%" : "58.33%" }}>
              제목
            </S.ListLiTitle>
            <S.ListLiWrite>작성자</S.ListLiWrite>
            <S.ListLiCreatedAt>작성일</S.ListLiCreatedAt>
          </S.TitleUl>
          {data?.fetchReviewBoards[number].map((reviewsMap, index) => (
            <S.ContentUl key={reviewsMap.id}>
              <S.ListLiNum>{Number(index) + 1}</S.ListLiNum>
              <S.ListLiMountain>
                {reviewsMap.crewUserList.crewBoard.mountain.mountain}
              </S.ListLiMountain>
              <S.ListLiTitle
                style={{ width: isOpenSideBar ? "53%" : "58.33%" }}
              >
                <S.Title
                  onClick={onClickList}
                  id={reviewsMap.id}
                  className={reviewId === reviewsMap.id ? "on" : ""}
                >
                  {reviewsMap.title}
                </S.Title>
              </S.ListLiTitle>
              <S.ListLiWrite>
                <S.Write>{reviewsMap.user.nickname}</S.Write>
              </S.ListLiWrite>
              <S.ListLiCreatedAt>
                {console.log(reviewsMap)}
                <S.CreatedAt>{getDate(reviewsMap.createdAt)}</S.CreatedAt>
              </S.ListLiCreatedAt>
            </S.ContentUl>
          ))}
        </S.ReviewListContainer>
        <S.PaginationContainer>
          <Pagination
            current={Number(number) + 1}
            total={Number(data?.fetchReviewBoards?.length) * 10}
            onChange={onChangePage}
          />
        </S.PaginationContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default ReviewListUi;
