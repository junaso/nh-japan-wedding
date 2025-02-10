import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Container = styled.div`
  text-align: center;
  background-color: #F7F2EC;
`;

const Title = styled.h1`
  color: #fffff;
  font-size: 24px;
  font-family: 'Newsreader', serif;
`;

const Nav = styled.nav`
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
    display: inline-block; /* inline-block으로 변경 */
    text-align: center;
  }

`;

export default function Home() {
  return (
    <Container>
      <Title>Nam Jun &<br/>Heo Jieun</Title>
      <p>소중한 당신을 초대합니다.</p>
      <Nav>
        <Link to="/invitation">초대장 보기</Link>
        <Link to="/location">장소 안내</Link>
        <Link to="/gallery">갤러리</Link>
        <Link to="/guestbook">방명록</Link>
      </Nav>
    </Container>
  );
}
