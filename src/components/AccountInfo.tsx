import {
  AccountBlock,
  AccountContainer,
  AccountFlexWrapper,
  AccountHeader,
  AccountLabel,
  AccountMainTitle,
  AccountName,
  AccountText,
  AccountTitle,
  CopyButton,
  AccountItemBox,
  AccountHolder, // 추가: 내부 박스를 위한 스타일
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
      <AccountMainTitle>마음 전하실 곳</AccountMainTitle>
      {Object.entries(groupedAccounts).map(([label, accList]) => (
        <div key={label}>
          <AccountFlexWrapper>
            <AccountBlock>
              <AccountLabel>{label}</AccountLabel>

              {/* 내부 박스들 */}
              {accList.map((acc, index) => (
                <AccountItemBox key={index}>
                  <AccountHeader>
                    <AccountText>
                      {acc.bank} {acc.number}
                      <br />
                      <AccountHolder>예금주: {acc.name}</AccountHolder>
                    </AccountText>
                    <CopyButton onClick={() => copyToClipboard(acc.number)}>
                      복사하기
                    </CopyButton>
                  </AccountHeader>
                </AccountItemBox>
              ))}
            </AccountBlock>
          </AccountFlexWrapper>
        </div>
      ))}
    </AccountContainer>
  );
};

export default AccountInfo;
