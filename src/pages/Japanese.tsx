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
  SectionContainer,
  TwoColumnSection,
  ImageSection,
  TextSection,
  GallaryTitle,
  FooterCopyright,
  SubTitleJapan,
  TextBlockJapan,
  TextChildJapn,
  TextParentsJapan,
  GallaryTitleJapan,
} from "../styles/Home.styles";
import ImageGrid from "../components/Gallery";

export default function japanese() {

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

        <Divider />

        <SubTitleJapan>
          新たな門出に胸躍らせながら、<br />
          ご縁のある皆様へ心を込めて
        </SubTitleJapan>

        <TextBlockJapan>
          <br />
          これまで支え合い <br />
          愛を育んできた私たち二人は、<br />
          このたび夫婦として <br />
          新たな人生を歩み始めることとなりました。 <br /><br />

          春のやわらかな陽ざしが花びらを包む5月、 <br />
          家族とともにささやかな結婚式を <br />
          執り行う運びとなりました。 <br /><br />

          日頃より温かく見守ってくださっている<br />
          皆さまにご報告とともに、<br />
          直接ご挨拶できないことを <br />
          心より残念に思っております。<br /><br />

          それでも、私たちの門出を 温かく見守り、<br />
          祝福していただけましたら幸いです。 <br />
          皆さまのお心遣いを大切に胸に刻み、<br />
          感謝の気持ちを忘れずに歩んでまいります。<br />
        </TextBlockJapan>

        <SectionContainer>
          <TwoColumnSection>
            <ImageSection>
              <img src="/nam_child.jpg" alt="image_01.webp" />
            </ImageSection>
            <TextSection>
              <TextChildJapn>
                新郎　南　俊
              </TextChildJapn>
              <TextParentsJapan>
                南　元吉・林　景羅の長男
              </TextParentsJapan>
            </TextSection>
          </TwoColumnSection>
          <TwoColumnSection>
            <ImageSection>
              <img src="/heo_child.jpg" alt="결혼식 준비" />
            </ImageSection>
            <TextSection>
              <TextChildJapn>
                新婦　許　智銀
              </TextChildJapn>
              <TextParentsJapan>
                許　基行・金　順禮の長女
              </TextParentsJapan>
            </TextSection>
          </TwoColumnSection>
        </SectionContainer>

        <Divider />

        <GallaryTitleJapan>
          このようなひととき、<br />
          ただ並んで寄り添っているだけで
        </GallaryTitleJapan>

        <ImageGrid />

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
