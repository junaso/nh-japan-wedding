import styled from "@emotion/styled";

export const Container = styled.div`
  text-align: center;
  background-color: #F7F2EC;
`;

export const Title = styled.h1`
  color: rgb(0, 0, 0);
  font-family: 'Newsreader', serif;
  font-size: clamp(20px, 4vw, 25px);
  text-align: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export const VerticalText = styled.div`
  font-size: clamp(10px, 1vw, 25px);
  white-space: nowrap;
  color: #888;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;

  &.left {
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    transform-origin: center;
  }

  &.right {
    writing-mode: vertical-rl;
  }
`;

export const ImageWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    max-width: 400px;
  }
`;

export const Nav = styled.nav`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  a {
    font-weight: bold;
    text-decoration: none;
    padding: 8px 15px;
    white-space: nowrap;
    display: inline-block;
    text-align: center;
  }
`;

export const ImageBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 400px;
`;

export const OverlayText = styled.div`
  position: absolute;
  bottom: -20%; /* 기존 -10% → -15%로 내려서 더 아래로 배치 */
  color: #6A5ACD; /* 푸른 보라색 */
  font-size: clamp(25px, 5vw, 40px);
  font-family: 'Newsreader', serif;
  font-weight: bold;
  text-align: center;
  line-height: 1.3; /* 줄 간격을 조금 더 여유롭게 */
  
  span {
    display: block; /* 각 단어를 새로운 줄로 */
  }
`;

export const Subtitle = styled.p`
  text-align: center;
  font-size: clamp(16px, 2vw, 20px);
  color: #333;
  margin-top: 100px;
`;
