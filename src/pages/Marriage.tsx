import {
  Container,
  ContentWrapper,
  Title,
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
  TextChild,
  TextParents,
  TextSection,
  GallaryTitle,
  FooterCopyright,
  SpaceAndDate,
} from "../styles/Home.styles";
import ImageGrid from "../components/Gallery";
import AccountInfo from "../components/AccountInfo";

export default function Marriage() {

  const accounts = [
    { label: "신랑 측", bank: "국민은행", number: "560-24-0208-691", name: "남원길" },
    { label: "신랑 측", bank: "농협은행", number: "637127-52-065415", name: "임경라" },
    { label: "신부 측", bank: "국민은행", number: "430502-01-048358", name: "허기행" },
    { label: "신부 측", bank: "신한은행", number: "110-053-652475", name: "김순예" },
  ];

  return (
    <Container>
      <ContentWrapper>
        <Title>Nam Jun & Heo Jieun</Title>

        <ImageContainer>
          <VerticalText className="left">2025.05.16. 1:00 P.M. Tokyo</VerticalText>
          <ImageBlock>
            <ImageWrapper>
              <img src="/main_01.jpg" alt="Nam Jun & Heo Jieun" />
            </ImageWrapper>
            <OverlayText>
              <span>MOMENTS</span>
              <span>LIKE THIS</span>
            </OverlayText>
          </ImageBlock>
          <VerticalText className="right">Our wedding day</VerticalText>
        </ImageContainer>

        <SpaceAndDate>
          2025년 05월 16일 금요일 오후 1시<br />
          일본, 도쿄의 Jam Orchestra ichigaya<br />
        </SpaceAndDate>

        <Divider />

        <SubTitle>
          새로운 시작, 그 설렘 가득 담아<br />
          소중한 분들에게
        </SubTitle>

        <TextBlock>
          <br />
          그동안 서로 의지하며 <br />
          사랑을 키워 온 저희 두 사람이<br />
          부부의 깊은 연으로 거듭나려 합니다.<br /><br />

          봄의 부드러운 온기가 꽃잎에 머무르는 5월, <br />
          도쿄에서 가족들과
          작은 결혼식을 올리게 되었습니다.<br /><br />

          늘 응원해주시던 고마운 분들과<br />
          함께하지 못하여 아쉬운 마음이 큽니다.<br /><br />

          그럼에도 저희 두 사람의 새로운 시작을 <br />
          따뜻하게 축복하고 격려해 주신다면, <br />
          소중한 마음 언제나 가슴 깊이 새기며,<br />
          감사함 잊지 않고 살아가겠습니다.
        </TextBlock>

        <SectionContainer>
          <TwoColumnSection>
            <ImageSection>
              <img src="/nam_child.jpg" alt="image_01.webp" />
            </ImageSection>
            <TextSection>
              <TextChild>
                신랑 남준
              </TextChild>
              <TextParents>
                남원길・임경라 의 아들
              </TextParents>
            </TextSection>
          </TwoColumnSection>
          <TwoColumnSection>
            <ImageSection>
              <img src="/heo_child.jpg" alt="결혼식 준비" />
            </ImageSection>
            <TextSection>
              <TextChild>
                신부 허지은
              </TextChild>
              <TextParents>
                허기행・김순예 의 딸
              </TextParents>
            </TextSection>
          </TwoColumnSection>
        </SectionContainer>

        <Divider />

        <GallaryTitle>
          이와 같은 순간들,<br />
          나란히 기대어 있는 것만으로
        </GallaryTitle>

        <ImageGrid />

        <Divider />

        <AccountInfo accounts={accounts} />

        <Divider />

        <GallaryTitle>
          Mean Everything
        </GallaryTitle>

        <FooterCopyright>
          ⓒ 2025 Nam Jun & Heo Jieun. All rights reserved.
        </FooterCopyright>

      </ContentWrapper>
    </Container>
  );
}
