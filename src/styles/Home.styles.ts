import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #F7F2EC;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  text-align: center;
`;

export const Title = styled.h1`
  color: rgb(0, 0, 0);
  font-family: 'Newsreader', serif;
  font-size: clamp(20px, 4vw, 25px);
  text-align: center;
  margin-bottom: 40px;
`;

export const Divider = styled.div`
  width: 95%;
  border-top: 2px solid #999;
  margin: 30px auto; 
  max-width: 600px;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 120px; 
`;

export const VerticalText = styled.div`
  font-size: clamp(18px, 2vw, 25px);
  white-space: nowrap;
  color: #888;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Gowun Batang", serif;

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
  width: 94%;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
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
`;

export const OverlayText = styled.div`
  position: absolute;
  bottom: -14%;
  color: #6A5ACD;
  font-size: clamp(30px, 6vw, 50px);
  font-family: 'Newsreader', serif;
  font-weight: bold;
  text-align: center;
  line-height: 1.3;
  
  span {
    display: block;
  }
`;

export const SubTitle = styled.p`
  text-align: left;
  color: #6A5ACD;
  font-size: clamp(18px, 1.8vw, 24px);
  line-height: 1.6;
  padding: 0 5%;
  font-family: "Gowun Batang", serif;
  margin-bottom: 10px; 
`;

export const TextBlock = styled.p`
  text-align: left;
  color: #444;
  font-size: clamp(15px, 1.8vw, 18px);
  line-height: 1.6;
  padding: 0 5%;
  font-family: "Gowun Batang", serif;
  margin-top: 0; 
`;

