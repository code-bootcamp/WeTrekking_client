import { FullPage, Slide } from "react-full-page";
import * as S from "./main.styles";

const MainUi = () => {
  return (
    <S.Wrapper>
      <FullPage
        controls
        controlsProps={{ className: "fullNav", scrollBar: false }}
      >
        <Slide>
          <S.Container
            style={{ backgroundImage: `url(/images/main/main-bg01.png)` }}
          ></S.Container>
        </Slide>
        <Slide>
          <S.Container
            style={{ backgroundImage: `url(/images/main/main-bg02.png)` }}
          ></S.Container>
        </Slide>
        <Slide>
          <S.Container
            style={{ backgroundImage: `url(/images/main/main-bg03.png)` }}
          ></S.Container>
        </Slide>
      </FullPage>
    </S.Wrapper>
  );
};

export default MainUi;
