import * as S from "./main.styles";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";

const MainUi = () => {
  <ReactFullpage
    pluginWrapper={pluginWrapper}
    // fullpage options
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000} /* Options here */
    scrollHorizontally={true} /* Because we are using the extension */
    scrollHorizontallyKey={"YOUR KEY HERE"}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <S.Wrapper>
            <S.Container
              style={{ backgroundImage: `url(/images/main/main-bg01.png)` }}
            >
              <S.MainTextBox>
                <S.MainText>혼자 등산하기 재미없지?</S.MainText>
                <img src="/images/main/main-sub-text01.png" alt="" />
                <S.MainText>하는게 어때?</S.MainText>
              </S.MainTextBox>
              <S.ScrollBox>
                <S.ScrollText>SCROLL</S.ScrollText>
                <S.ScrollIcon src="/images/main/down-arrow.png" />
              </S.ScrollBox>
            </S.Container>
            <S.Container
              style={{ backgroundImage: `url(/images/main/main-bg02.png)` }}
            >
              <S.MainTextBox>
                <S.MainText>지친 일상 속에 기분 전환이 필요하다면</S.MainText>
                <img src="/images/main/main-sub-text02.png" alt="" />
              </S.MainTextBox>
            </S.Container>
            <S.Container
              style={{ backgroundImage: `url(/images/main/main-bg03.png)` }}
            >
              <S.MainTextBox>
                <img src="/images/main/main-text.png" alt="" />
                <S.CrewFindBtn>크루 만나러가기</S.CrewFindBtn>
              </S.MainTextBox>
            </S.Container>
          </S.Wrapper>
        </ReactFullpage.Wrapper>
      );
    }}
  />;
};

export default MainUi;
