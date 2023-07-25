// 회원가입 input email
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { produce } from 'immer';
import { changeField, initializeForm } from '../../modules/auth';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/common/Button';
import { passwordSelector } from '../../modules/auth';

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const PasswordPage = () => {
  const [error, setError] = useState({
    password: null,
    passwordConfirm: null,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  const { password, passwordConfirm } = useSelector(passwordSelector);

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: 'register', key: name, value }));

    if (name === 'password') {
      checkPassword(value);
    }
    if (name === 'passwordConfirm') {
      checkPasswordConfirm({ password, value });
    }
  };

  const errorMessages = {
    password: '비밀번호 : 8 ~ 16자 영문 대소문자, 숫자, 특수문자를 사용하세요.',
    passwordConfirm: '비밀번호가 일치하지 않습니다.',
  };

  const checkPassword = (value) => {
    const passwordRegexp =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    const isValid = passwordRegexp.test(value);
    setError(
      produce((draft) => {
        draft.password = isValid ? null : errorMessages.password;
      }),
    );
    if (passwordConfirm) {
      checkPasswordConfirm({ value, password });
    }
  };

  const checkPasswordConfirm = ({ password, value }) => {
    setError(
      produce((draft) => {
        draft.passwordConfirm =
          password === value ? null : errorMessages.passwordConfirm;
      }),
    );
  };

  return (
    <div>
      <input
        name="password"
        placeholder="비밀번호"
        onChange={onChange}
        value={password}
        required
      />
      {error && <ErrorMessage>{error.password}</ErrorMessage>}
      <input
        name="passwordConfirm"
        placeholder="비밀번호"
        onChange={onChange}
        value={passwordConfirm}
        required
      />
      {error && <ErrorMessage>{error.passwordConfirm}</ErrorMessage>}
      <Button>다음</Button>
    </div>
  );
};
export default PasswordPage;
