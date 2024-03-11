import styled from 'styled-components';
import { InputBox } from '../../styles/Survey';
import { useDispatch } from 'react-redux';
import InputBoxWithX from './InputBoxWithX';
import {
  changeIndexField,
  deleteList,
  changeIssueList,
  deleteIssueList,
} from '../modules/redux/badge';
import { useState } from 'react';

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

const IssueListInputItem = ({ index, content, teamName }) => {
  const dispatch = useDispatch();

  const [info, setInfo] = useState(content);

  const onChange = (e) => {
    const { value, name } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      ...{ [name]: value },
    }));

    if (teamName) {
      dispatch(changeIssueList({ index, name: name, teamName, value }));
    } else {
      dispatch(
        changeIndexField({ type: 'issueList', index, name: name, value }),
      );
    }
  };

  const onClose = () => {
    if (teamName) {
      dispatch(deleteIssueList({ teamName, index }));
    } else {
      dispatch(deleteList({ type: 'issueList', index }));
    }
  };

  return (
    <InputGrid>
      <InputBoxWithX
        className="name"
        name={'userName'}
        onChange={onChange}
        value={info.userName}
        placeholder={'이름'}
        onClose={onClose}
      />
      <input
        onChange={onChange}
        value={info.role}
        name={'role'}
        placeholder="직책"
        required
      />
      <input
        onChange={onChange}
        value={info.birthday}
        name={'birthday'}
        placeholder="생년월일"
        required
      />
      <input
        onChange={onChange}
        value={info.phoneNumber}
        name={'phoneNumber'}
        placeholder="전화번호"
        required
      />
      <input
        onChange={onChange}
        value={info.email}
        name={'email'}
        placeholder="E-mail"
        required
      />
    </InputGrid>
  );
};

export default IssueListInputItem;
