import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import ReviewDetail from "../../src/components/units/reviews/detail/reviewDetail.container";
import ReviewList from "../../src/components/units/reviews/list/reviewList.container";
import { isOpenSideBarState, reviewIdState } from "../../src/store";

const ReviewListPage = () => {
  const [isOpenSideBar] = useRecoilState(isOpenSideBarState);

  return (
    <Wrapper>
      <ReviewList />
      {isOpenSideBar && (
        <ReviewWrapper>
          <ReviewDetail />
        </ReviewWrapper>
      )}
    </Wrapper>
  );
};

export default ReviewListPage;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ReviewWrapper = styled.div`
  width: 75%;
  height: 100vh;
  overflow-y: scroll;
`;
