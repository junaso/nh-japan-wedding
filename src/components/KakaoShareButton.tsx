const KakaoShareButton = () => {

  const shareKakao = () => {
    window.Kakao.Link.sendCustom({
      templateId: 117184, // 내가 만든 템플릿 아이디를 넣어주면 된다
    });
  };

  return (
    <button onClick={shareKakao}>
      <img
        src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
        alt="카카오링크 보내기 버튼"
      />
    </button>
  );
};

export default KakaoShareButton;
