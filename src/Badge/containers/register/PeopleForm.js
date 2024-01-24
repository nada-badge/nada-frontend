import styled from 'styled-components';
import { InputBox, TitleBox } from '../../../styles/Survey';
import InputBoxWithX from '../../components/InputBoxWithX';

const InputGrid = styled(InputBox)`
  width: 100%;
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(auto-fill, minmax(45%, auto));
  gap: 8px;

  & > input {
    background: var(--myspec-gray-scalegray-100, #f2f2f2);
  }

  & > :nth-child(1) {
    grid-column: 1 / span 2;
    & > div {
      input::placeholder {
        color: var(--myspec-primaryblue-1);
      }
    }
  }
`;

const PeopleForm = () => {
  return (
    <>
      <TitleBox>
        발급 받을 사람의
        <br />
        정보를 입력해 주세요
      </TitleBox>

      <div style={{ overflowY: 'scroll' }}>
        <InputGrid>
          <InputBoxWithX className="name" name={'name'} placeholder={'이름'} />
          <input name="role" placeholder="직책" required />
          <input name="birth" placeholder="생년월일" required />
          <input name="number" placeholder="전화번호" required />
          <input name="email" placeholder="E-mail" required />
        </InputGrid>
      </div>
    </>
  );
};

export default PeopleForm;
