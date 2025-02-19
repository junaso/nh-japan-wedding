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
  color: #888; /* 회색 빛 추가 */
  font-weight: bold;
  text-align: center;
  flex: 1;

  &.left {
    writing-mode: vertical-lr; /* 아래에서 위로 */
    // transform: rotate(180deg); /* 아래쪽이 오른쪽을 보도록 회전 */
  }

  &.right {
    writing-mode: vertical-rl; /* 기존 방향 유지 */
  }
`;

export const ImageWrapper = styled.div`
  flex: 8;
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
