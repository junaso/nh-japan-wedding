import styled from "@emotion/styled";

export const Container = styled.div`
  text-align: center;
  background-color: #F7F2EC;
`;

export const Title = styled.h1`
  color: rgb(0, 0, 0);
  font-family: 'Newsreader', serif;
  font-size: clamp(24px, 5vw, 50px);
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
  font-size: clamp(15px, 2vw, 40px);
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
