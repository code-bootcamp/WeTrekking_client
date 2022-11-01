import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { mainColor } from "../../../../commons/styles/color";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 24px 0;
  z-index: 9999;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transition: all 0.3s;
    .logoWhite {
      display: none;
    }
    .logoGreen {
      display: block;
    }
    .gnbList {
      color: #111;
      transition: all 0.3s;
    }
    .loginBtn {
      border: 1px solid ${mainColor};
      color: ${mainColor};
      transition: all 0.3s;
    }
  }
`;

const LogoBox = styled.h1`
  cursor: pointer;
  .logoGreen {
    display: none;
  }
`;

const Header = styled.header`
  width: 1600px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Navigation = styled.nav``;

const GnbMenu = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 60px;
`;

const GnbList = styled.li`
  font-weight: 700;
  font-size: 16px;
  color: #fff;
`;

const SnbMenu = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

const SnbList = styled.li``;
const LoginBtn = styled.button`
  width: 120px;
  height: 48px;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
`;

const JoinBtn = styled(LoginBtn)`
  background-color: ${mainColor};
  border: 1px solid ${mainColor};
  cursor: pointer;
`;

const MainHeader = () => {
  const router = useRouter();

  const onClickToMain = () => {
    void router.push("/");
  };

  const onClickToLogin = () => {
    void router.push("/login");
  };

  const onClickToJoin = () => {
    void router.push("/join");
  };

  return (
    <Wrapper>
      <Header>
        <LogoBox onClick={onClickToMain}>
          <img
            src="/images/main/logo-white.png"
            alt="로고"
            className="logoWhite"
          />
          <img
            src="/images/main/logo-green.png"
            alt="로고"
            className="logoGreen"
          />
        </LogoBox>
        <Navigation>
          <GnbMenu>
            <GnbList className="gnbList">게시글 리스트</GnbList>
            <GnbList className="gnbList">리뷰 리스트</GnbList>
          </GnbMenu>
        </Navigation>
        <SnbMenu>
          <SnbList>
            <LoginBtn className="loginBtn" onClick={onClickToLogin}>
              로그인
            </LoginBtn>
          </SnbList>
          <SnbList>
            <JoinBtn onClick={onClickToJoin}>회원가입</JoinBtn>
          </SnbList>
        </SnbMenu>
      </Header>
    </Wrapper>
  );
};

export default MainHeader;
