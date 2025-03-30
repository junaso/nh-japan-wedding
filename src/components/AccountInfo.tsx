import {
  AccountBlock,
  AccountContainer,
  AccountFlexWrapper,
  AccountHeader,
  AccountLabel,
  AccountName,
  AccountText,
  AccountTitle,
  CopyButton,
} from "../styles/AccountInfo.styles";

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

// label 기준으로 계좌들을 그룹화하는 함수
const groupByLabel = (accounts: AccountProps[]) => {
  const grouped: { [label: string]: AccountProps[] } = {};
  accounts.forEach((acc) => {
    if (!grouped[acc.label]) {
      grouped[acc.label] = [];
    }
    grouped[acc.label].push(acc);
  });
  return grouped;
};

const AccountInfo = ({ accounts }: Props) => {
  const groupedAccounts = groupByLabel(accounts);

  return (
    <AccountContainer>
      {Object.entries(groupedAccounts).map(([label, accList]) => (
        <div key={label}>
          <AccountLabel>{label}</AccountLabel>
          <AccountFlexWrapper>
            {accList.map((acc, index) => (
              <AccountBlock key={index}>
                <AccountHeader>
                  <AccountTitle>{acc.bank}</AccountTitle>
                  <CopyButton onClick={() => copyToClipboard(acc.number)}>
                    복사하기
                  </CopyButton>
                </AccountHeader>
                <AccountText>{acc.number}</AccountText>
                <AccountName>예금주: {acc.name}</AccountName>
              </AccountBlock>
            ))}
          </AccountFlexWrapper>
        </div>
      ))}
    </AccountContainer>
  );
};

export default AccountInfo;
