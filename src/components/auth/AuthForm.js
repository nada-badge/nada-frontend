// 회원가입 또는 로그인 폼을 보여주기

import { Link } from 'react-router-dom';
import Button from '../common/Button';
import styled from 'styled-components';

const textMap = {
  login: '로그인',
  register: '회원가입',
};

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const AuthForm = ({ type, form, onChange, onSubmit, errorSet, checkEmail }) => {
  const text = textMap[type];

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="email" email={form.email} onChange={onChange}></input>
        {errorSet && <ErrorMessage>{errorSet.email}</ErrorMessage>}
        <input
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
          required
        />
        {errorSet && <ErrorMessage>{errorSet.password}</ErrorMessage>}
        <Button>{text}</Button>
      </form>
      <div>
        <Link to="/register">회원가입</Link>
      </div>
    </div>
  );
};
export default AuthForm;
