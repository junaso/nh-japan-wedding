import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Container = styled.div`
  text-align: center;
  padding: 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 50px auto;
`;

const Title = styled.h1`
  color: #ff4081;
  font-size: 24px;
`;

const Nav = styled.nav`
  margin-top: 20px;
  a {
    margin: 0 10px;
    font-weight: bold;
  }
`;

export default function Home() {
  return (
    <Container>
      <Title>우리의 결혼식에 초대합니다 💍</Title>
      <p>소중한 당신을 초대합니다.</p>
      <Nav>
        <Link to="/invitation">초대장 보기</Link> | 
        <Link to="/location">장소 안내</Link> | 
        <Link to="/gallery">갤러리</Link> | 
        <Link to="/guestbook">방명록</Link>
      </Nav>
    </Container>
  );
}
