import styled from "@emotion/styled";

export const NavButton = styled.button<{ position: "left" | "right" }>`
  position: absolute;
  bottom: 30px;
  ${({ position }) => position}: 20px;
  background: transparent; /* ⬅️ 배경 투명하게 */
  color: white;
  border: none;
  font-size: 2.5rem; /* ⬅️ 화살표 더 눈에 띄게 */
  cursor: pointer;
  z-index: 10;
  padding: 0; /* ⬅️ 여백 없애기 */
  user-select: none;
  transform: none;

  &:hover {
    color: #ddd; /* ⬅️ hover할 때 살짝 색만 바꿔 */
  }
`;

export const GridSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 10px 5%;
`;

export const GridImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90%;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 40px;
  background: transparent;
  color: white;
  border: none;
  cursor: pointer;
`;