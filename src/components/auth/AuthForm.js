// 회원가입 또는 로그인 폼을 보여주기

import { Link } from 'react-router-dom';
import Button from '../common/Button';
import styled from 'styled-components';
import UserNameInput from './UserNameInput';
import EmailInput from './EmailInput';

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
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <EmailInput
          checkEmail={checkEmail}
          email={form.email}
          onChange={onChange}
        ></EmailInput>
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
        {type === 'register' && (
          <div>
            <input
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              type="password"
              onChange={onChange}
              value={form.passwordConfirm}
              required
            />
            {errorSet && (
              <ErrorMessage>{errorSet.passwordConfirm}</ErrorMessage>
            )}
            <fieldset>
              <label>
                <input
                  type="radio"
                  value="1"
                  name="userType"
                  onChange={onChange}
                  defaultChecked={true}
                />
                개인
              </label>
              <label>
                <input
                  type="radio"
                  value="2"
                  name="userType"
                  onChange={onChange}
                  defaultChecked={false}
                />
                단체
              </label>
            </fieldset>
            <UserNameInput
              userName={form.userName}
              onChange={onChange}
            ></UserNameInput>
            <input
              name="phoneNumber"
              placeholder="폰번호"
              onChange={onChange}
              value={form.phoneNumber}
              required
            />
          </div>
        )}
        <Button>{text}</Button>
      </form>
      <div>
        {type === 'login' ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/">로그인</Link>
        )}
      </div>
    </div>
  );
};
export default AuthForm;
