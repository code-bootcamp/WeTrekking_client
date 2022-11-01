import * as S from "./main.styles";
import { SectionsContainer, Section } from "react-fullpage";

const MainUi = ({ options }) => {
  return (
    <S.Wrapper>
      <SectionsContainer {...options}>
        <Section>
          <S.Container
            style={{ backgroundImage: `url(/images/main/main-bg01.png)` }}
          >
            <S.MainTextBox>
              <S.MainText>혼자 등산하기 재미없지?</S.MainText>
              <img src="/images/main/main-sub-text01.png" alt="" />
              <S.MainText>하는게 어때?</S.MainText>
            </S.MainTextBox>
          </S.Container>
        </Section>
        <Section>
          <S.Container
            style={{ backgroundImage: `url(/images/main/main-bg02.png)` }}
          >
            <S.MainTextBox>
              <S.MainText>지친 일상 속에 기분 전환이 필요하다면</S.MainText>
              <img src="/images/main/main-sub-text02.png" alt="" />
            </S.MainTextBox>
          </S.Container>
        </Section>
        <Section>
          <S.Container
            style={{ backgroundImage: `url(/images/main/main-bg03.png)` }}
          >
            <S.MainTextBox>
              <img src="/images/main/main-text.png" alt="" />
              <S.CrewFindBtn>크루 만나러가기</S.CrewFindBtn>
            </S.MainTextBox>
          </S.Container>
        </Section>
      </SectionsContainer>
      <S.ScrollBox>
        <S.ScrollText>SCROLL</S.ScrollText>
        <S.ScrollIcon src="/images/main/down-arrow.png" />
      </S.ScrollBox>
    </S.Wrapper>
  );
};

export default MainUi;
