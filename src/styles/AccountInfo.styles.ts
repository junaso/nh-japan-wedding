import styled from "@emotion/styled";
import colors from "./colors";

// Styled Components
export const AccountContainer = styled.div`
  text-align: center;
  margin: 20px 0;
  padding: 0 5%;
`;

export const AccountMainTitle = styled.div`
  font-family: 'Gowun Batang', serif;
  color: ${colors.mainColor};
  font-size: clamp(16px, 1.8vw, 20px);
  margin-bottom: 20px;
`;

export const AccountLabel = styled.div`
  font-family: 'Gowun Batang', serif;
  color: ${colors.mainColor};
  font-size: clamp(16px, 1.8vw, 20px);
  margin-bottom: 20px;
  text-align: left;
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
  width-min: 180px;
  width-max: 200px;
  background-color: #f2f0ec;
  border-radius: 8px;
  margin-top: 10px;
  padding: 16px;
`;

export const AccountItemBox = styled.div`
  background-color: #FAF8F5;
  border-radius: 12px;
  padding: 15px;
  margin-top: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`;

export const AccountText = styled.div`
  font-family: 'Gowun Batang', serif;
  color: #444;
  font-size: clamp(14px, 1.4vw, 17px);
  margin-bottom: 6px;
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
    background-color: ${colors.hoverColor};
  }
`;

export const AccountHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AccountHolder = styled.span`
  color: #6699cc;
  font-weight: bold;
  font-family: 'Gowun Batang', serif;
  font-size: clamp(12px, 1vw, 14px);
`;
