import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const ScrollAnimation = keyframes`
  0% {
   bottom: -22px;
  }
  100% {
   bottom: -40px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  scrollbar-width: none;
  .Navigation {
    a {
      background-color: rgba(255, 255, 255, 0.4) !important;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const MainTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  padding-bottom: 100px;
`;

export const MainText = styled.p`
  font-size: 32px;
  font-weight: 400;
  color: #fff;
`;

export const CrewFindBtn = styled.button`
  width: 160px;
  height: 52px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  border: none;
  background: linear-gradient(90.25deg, #426a3a 0.19%, #2f4b2a 99.78%);
  border-radius: 4px;
  cursor: pointer;
`;

export const ScrollBox = styled.div`
  position: absolute;
  z-index: 999;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.7;
`;

export const ScrollText = styled.p`
  color: white;
`;

export const ScrollIcon = styled.img`
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  animation: ${ScrollAnimation} 0.8s 1s infinite linear;
`;
