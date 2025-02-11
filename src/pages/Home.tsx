import { Link } from "react-router-dom";
import { Container, Title, Nav, ImageContainer } from "../styles/Home.styles";

export default function Home() {
  return (
    <Container>
      <Title>Nam Jun &<br/>Heo Jieun</Title>
      <ImageContainer>
        <img src="src\assets\image_04.webp" alt="Nam Jun & Heo Jieun" />
      </ImageContainer>
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

