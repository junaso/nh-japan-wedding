import styled from "@emotion/styled";

export const Container = styled.div`
  text-align: center;
  background-color: #F7F2EC;
  padding: 20px;
`;

export const Title = styled.h1`
  color:rgb(0, 0, 0);
  font-size: 24px;
  font-family: 'Newsreader', serif;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 80%; 
  margin: 0 auto; 
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
    white-space: nowrap; /* 줄바꿈 방지 */
    display: inline-block;
    text-align: center;
  }
`;
