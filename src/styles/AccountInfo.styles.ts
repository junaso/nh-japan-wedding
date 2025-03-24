import styled from "@emotion/styled";
import colors from "./colors";

// Styled Components
export const AccountContainer = styled.div`
  text-align: center;
  margin: 20px 0;
  padding: 0 5%;
`;

export const AccountLabel = styled.div`
  font-family: 'Gowun Batang', serif;
  color: ${colors.mainColor};
  font-size: clamp(16px, 1.8vw, 20px);
  margin-bottom: 20px;
`;

export const AccountFlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const AccountBlock = styled.div`
  flex: 1;
  min-width: 220px;
  max-width: 280px;
  background-color: #f2f0ec;
  border-radius: 8px;
  padding: 16px;
`;

export const AccountTitle = styled.div`
  font-family: 'Gowun Batang', serif;
  font-size: clamp(15px, 1.5vw, 18px);
  color: ${colors.mainColor};
  font-weight: bold;
  text-align: left;
`;

export const AccountText = styled.div`
  font-family: 'Gowun Batang', serif;
  color: #444;
  font-size: clamp(14px, 1.4vw, 17px);
  margin-bottom: 6px;
  text-align: left;
`;

export const AccountName = styled.div`
  font-family: 'Gowun Batang', serif;
  color: #555;
  font-size: clamp(14px, 1.3vw, 16px);
  margin-bottom: 10px;
  text-align: left;
`;

export const CopyButton = styled.button`
  background-color: ${colors.mainColor};
  color: white;
  border: none;
  padding: 3px 10px;
  border-radius: 5px;
  font-family: 'Gowun Batang', serif;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: clamp(12px, 1vw, 14px);

  &:hover {
    background-color: #5a4fcf;
  }
`;

export const AccountHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
