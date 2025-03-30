import styled from "@emotion/styled";
import colors from "./colors";
import fonts from "./fonts";

export const ShareButton = styled.button`
  background-color: ${colors.mainColor};
  color: white;
  border: none;
  padding: 3px 10px;
  border-radius: 5px;
  font-family: ${fonts.korean};
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: clamp(20px, 2vw, 25px);
  width: 200px;

  &:hover {
    background-color: ${colors.hoverColor};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; 
  gap: 10px;
`;