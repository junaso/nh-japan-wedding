import { AccountBlock, AccountContainer, AccountFlexWrapper, AccountHeader, AccountLabel, AccountName, AccountText, AccountTitle, CopyButton } from "../styles/AccountInfo.styles";

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
