import styled from "@emotion/styled";

type AccountProps = {
  label: string;
  bank: string;
  number: string;
  name: string;
};

type Props = {
  accounts: AccountProps[];
};

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  alert("계좌번호가 복사되었습니다!");
};

const AccountInfo = ({ accounts }: Props) => {
  return (
    <AccountContainer>
      <AccountLabel>마음 전하실 곳</AccountLabel>
      <AccountFlexWrapper>
        {accounts.map((acc, index) => (
          <AccountBlock key={index}>
            <AccountHeader>
              <AccountTitle>{acc.label}</AccountTitle>
              <CopyButton onClick={() => copyToClipboard(acc.number)}>복사하기</CopyButton>
            </AccountHeader>
            <AccountText>{`${acc.bank} ${acc.number}`}</AccountText>
            <AccountName>예금주: {acc.name}</AccountName>
          </AccountBlock>
        ))}
      </AccountFlexWrapper>
    </AccountContainer>
  );
};

export default AccountInfo;

// 스타일 정의
const AccountContainer = styled.div`
  text-align: center;
  margin: 20px 0;
  padding: 0 5%;
`;

const AccountLabel = styled.div`
  font-family: 'Gowun Batang', serif;
  color: #6A5ACD;
  font-size: clamp(16px, 1.8vw, 20px);
  margin-bottom: 20px;
`;

const AccountFlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const AccountBlock = styled.div`
  flex: 1;
  min-width: 220px;
  max-width: 280px;
  background-color: #f2f0ec;
  border-radius: 8px;
  padding: 16px;
`;

const AccountTitle = styled.div`
  font-family: 'Gowun Batang', serif;
  font-size: clamp(15px, 1.5vw, 18px);
  color: #6A5ACD;
  font-weight: bold;
  text-align: left;
`;

const AccountText = styled.div`
  font-family: 'Gowun Batang', serif;
  color: #444;
  font-size: clamp(14px, 1.4vw, 17px);
  margin-bottom: 6px;
  text-align: left;
`;

const AccountName = styled.div`
  font-family: 'Gowun Batang', serif;
  color: #555;
  font-size: clamp(14px, 1.3vw, 16px);
  margin-bottom: 10px;
  text-align: left;
`;

const CopyButton = styled.button`
  background-color: #6A5ACD;
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

const AccountHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
