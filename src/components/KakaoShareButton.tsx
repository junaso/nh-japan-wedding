import { ButtonContainer, ShareButton } from "../styles/Share.styles";

const KakaoShareButton = () => {

  const shareKakao = (templateId: number) => {
    window.Kakao.Link.sendCustom({
      templateId: templateId,
    });
  };

  return (
    <ButtonContainer>
      <ShareButton onClick={() => shareKakao(117184)}>계좌번호 안내</ShareButton>
      <ShareButton onClick={() => shareKakao(118911)}>축의금 거절</ShareButton>
      <ShareButton onClick={() => shareKakao(118912)}>일본어</ShareButton>
    </ButtonContainer>
  );
};

export default KakaoShareButton;
