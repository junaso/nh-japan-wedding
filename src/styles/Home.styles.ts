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
  margin-bottom: 40px;
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
  font-size: clamp(15px, 2vw, 25px);
  white-space: nowrap;
  color: #888;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5%;

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
  width: 90%;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    max-width: 450px;
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
  bottom: -18%;
  color: #6A5ACD; /* 푸른 보라색 */
  font-size: clamp(30px, 6vw, 40px);
  font-family: 'Newsreader', serif;
  font-weight: bold;
  text-align: center;
  line-height: 1.3;
  
  span {
    display: block;
  }
`;

export const Subtitle = styled.p`
  text-align: center;
  font-size: clamp(16px, 2vw, 20px);
  color: #333;
  margin-top: 100px;
`;
