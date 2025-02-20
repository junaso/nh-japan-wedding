import { Link } from "react-router-dom";
import { 
  Container, 
  Title, 
  Nav, 
  ImageContainer, 
  VerticalText, 
  ImageBlock, 
  ImageWrapper, 
  OverlayText, 
  Subtitle 
} from "../styles/Home.styles";

export default function Home() {
  return (
    <Container>
      <Title>Nam Jun &<br/>Heo Jieun</Title>
      <ImageContainer>
        <VerticalText className="left">2025.05.16</VerticalText>
        <ImageBlock>
          <ImageWrapper>
            <img src="/image_04.webp" alt="Nam Jun & Heo Jieun" />
          </ImageWrapper>
          <OverlayText>
            <span>OUR</span>
            <span>BEAUTIFUL</span>
            <span>MOMENT</span>
          </OverlayText>
        </ImageBlock>
        <VerticalText className="right">wedding day</VerticalText>
      </ImageContainer>
      <Subtitle>소중한 당신을 초대합니다.</Subtitle> {/* 확실히 겹치지 않도록 아래로 이동 */}
      <Nav>
        <Link to="/invitation">초대장 보기</Link>
        <Link to="/location">장소 안내</Link>
        <Link to="/gallery">갤러리</Link>
        <Link to="/guestbook">방명록</Link>
      </Nav>
    </Container>
  );
}
