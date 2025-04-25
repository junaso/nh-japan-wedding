import styled from "@emotion/styled";
import colors from "./colors";
import fonts from "./fonts";

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
  color: #000;
  font-family: ${fonts.korean};
  font-size: clamp(20px, 4vw, 25px);
  text-align: center;
  margin-bottom: 20px;
`;

export const Divider = styled.div`
  width: 95%;
  border-top: 1px solid #777;
  margin: 30px auto; 
  max-width: 600px;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 80px; 
`;

export const VerticalText = styled.div`
  font-size: clamp(16px, 2vw, 23px);
  white-space: nowrap;
  color: #888;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${fonts.korean};

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
  bottom: -8%;
  color: ${colors.mainColor};
  font-size: clamp(30px, 6vw, 50px);
  font-family: ${fonts.english};
  font-weight: bold;
  text-align: center;
  line-height: 1.3;
  
  span {
    display: block;
  }
`;

export const SubTitle = styled.p`
  text-align: left;
  color: ${colors.mainColor};
  font-size: clamp(18px, 1.8vw, 24px);
  line-height: 1.6;
  padding: 0 5%;
  font-family: ${fonts.korean};
  margin-bottom: 10px; 
`;

export const SubTitleJapan = styled.p`
  text-align: left;
  color: ${colors.mainColor};
  font-size: clamp(18px, 1.8vw, 24px);
  line-height: 1.6;
  padding: 0 5%;
  font-family: ${fonts.japanese};
  margin-bottom: 10px; 
`;

export const TextBlock = styled.p`
  text-align: left;
  color: #444;
  font-size: clamp(15px, 1.8vw, 18px);
  line-height: 1.6;
  padding: 0 5%;
  font-family: ${fonts.korean};
  margin-top: 0; 
  margin-bottom: 40px; 
`;

export const TextBlockJapan = styled.p`
  text-align: left;
  color: #444;
  font-size: clamp(15px, 1.8vw, 18px);
  line-height: 1.6;
  padding: 0 5%;
  margin-top: 0; 
  margin-bottom: 40px; 
  font-family: ${fonts.japanese};
`;

export const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 20px auto;
`;

export const TwoColumnSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageSection = styled.div`
  max-width: 80%;
  img {
    width: 100%;
    border-radius: 5px;
  }
`;

export const TextSection = styled.div`
  width: 100%;
`;

export const TextChild = styled.div`
  text-align: left;
  font-weight: bold;
  font-size: clamp(16px, 1.5vw, 18px);
  color: ${colors.mainColor};
  font-family: ${fonts.korean};
  margin-left: 10%;
`;

export const TextChildJapn = styled.div`
  text-align: left;
  font-weight: bold;
  font-size: clamp(16px, 1.5vw, 18px);
  color: ${colors.mainColor};
  font-family: ${fonts.japanese};
  margin-left: 10%;
`;

export const TextParents = styled.div`
  text-align: left;
  font-size: clamp(14px, 1.3vw, 16px);
  color: #444;
  font-family: ${fonts.korean};
  margin-left: 10%;
`;

export const TextParentsJapan = styled.div`
  text-align: left;
  font-size: clamp(12px, 1.3vw, 14px);
  color: #444;
  font-family: ${fonts.japanese};
  margin-left: 10%;
`;

export const GallaryTitle = styled.div`
  font-family: ${fonts.korean};
  font-size: clamp(18px, 2vw, 22px);
  color: ${colors.mainColor};
  text-align: center;
  margin: 20px 0;
`;

export const SpaceAndDate = styled.div`
  font-family: ${fonts.korean};
  font-size: clamp(15px, 2vw, 19px);
  text-align: center;
  margin: 20px 0;
`;

export const RegretMassage = styled.div`
  font-family: ${fonts.korean};
  font-size: clamp(14px, 1.6vw, 18px);
  color: ${colors.mainColor};
  text-align: center;
  margin: 20px 0;
`;

export const GallaryTitleJapan = styled.div`
  font-family: ${fonts.japanese};
  font-size: clamp(18px, 2vw, 22px);
  color: ${colors.mainColor};
  text-align: center;
  margin: 20px 0;
`;

export const FooterCopyright = styled.div`
  font-size: 14px;
  color: #aaa;
  text-align: center;
  font-family: ${fonts.korean};
  margin: 10px 0 20px;
`;

export const CenteredImage = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 10%;

  img {
    max-width: 90%;
    height: auto;
    border-radius: 6px; // 선택 사항: 살짝 둥글게
  }
`;

