import styled from "@emotion/styled";
import KakaoShareButton from "../components/KakaoShareButton";


const Container = styled.div`
  text-align: center;
  background-color: #F7F2EC;
`;

export default function Share() {
  return (
    <Container>
      <KakaoShareButton />
    </Container>
  );
}
