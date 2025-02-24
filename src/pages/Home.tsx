import { Link } from "react-router-dom";
import {
  Container,
  ContentWrapper,
  Title,
  Nav,
  ImageContainer,
  VerticalText,
  ImageBlock,
  ImageWrapper,
  OverlayText,
  Divider,
  TextBlock,
  SubTitle,
  SectionContainer,
  TwoColumnSection,
  ImageSection,
  TextSection,
} from "../styles/Home.styles";

export default function Home() {
  return (
    <Container>
      <ContentWrapper>
        <Title>Nam Jun &<br />Heo Jieun</Title>
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
        <Divider />
        <SubTitle>
          새로운 시작, 그 설렘 가득 담아<br />
          소중한 분들에게<br /><br />
        </SubTitle>

        <TextBlock>
          그동안 서로 의지하며 <br />
          사랑을 키워 온 저희 두 사람이<br />
          부부의 깊은 연으로 거듭나려 합니다.<br /><br />

          봄의 부드러운 온기가 꽃잎에 머무르는 5월, <br />
          도쿄에서 가족들과
          작은 결혼식을 올리게 되었습니다.<br /><br />

          늘 멀리서도 응원해주시는 고마운 분들과<br />
          함께하지 못하여 아쉬운 마음이 큽니다.<br /><br />

          그럼에도 저희 두 사람의 새로운 시작에 <br />
          따뜻한 축복과 격려의 말씀을 보내주신다면, <br />
          소중한 마음을 언제나 가슴 깊이 새기며,<br />
          감사함을 잊지 않고 살아가겠습니다.
        </TextBlock>

        <Divider />

        <SectionContainer>
          <TwoColumnSection>
            <ImageSection>
              <img src="/image_01.jpg" alt="image_01.webp" />
            </ImageSection>
            <TextSection>
              <p>
                신랑 남준<br />
                남원길・ 임경라 의 아들
              </p>
            </TextSection>
          </TwoColumnSection>

          <TwoColumnSection>
            <TextSection>
              <p>
                신부 허지은<br />
                허기행・ 김순예 의 아들
              </p>
            </TextSection>
            <ImageSection>
              <img src="/image_02.jpg" alt="결혼식 준비" />
            </ImageSection>
          </TwoColumnSection>
        </SectionContainer>



        <Nav>
          <Link to="/invitation">초대장 보기</Link>
          <Link to="/location">장소 안내</Link>
          <Link to="/gallery">갤러리</Link>
          <Link to="/guestbook">방명록</Link>
        </Nav>
      </ContentWrapper>
    </Container>
  );
}
