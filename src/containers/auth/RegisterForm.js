import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { changeField, initializeForm } from '../../modules/auth';
import styled from 'styled-components';
import EmailPage from './EmailForm';
import PasswordPage from './PasswordForm';
import UserNamePage from './UserNameForm';
import PhoneNumberPage from './PhoneNumberForm';
import useUserMutation from '../../modules/queries/registerQuery';

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const RegisterForm = () => {
  const [order, setOrder] = useState(0);
  const dispatch = useDispatch();
  const register = useSelector(({ auth }) => auth.register);

  const { mutate } = useUserMutation();

  useEffect(() => {
    dispatch(initializeForm);
    setOrder(0);
    return () => {
      dispatch(initializeForm);
    };
  }, [dispatch, setOrder]);

  const components = [EmailPage, PasswordPage, UserNamePage, PhoneNumberPage];
  const Components = components[order];

  const onSubmit = (e) => {
    e.preventDefault();
    if (order === components.length - 1) {
      mutate(register);
    } else setOrder(order + 1);
  };

  const errorMessages = {
    email_format: '올바른 이메일 형식이 아닙니다.',
    email_duplicate: '중복된 이메일 입니다.',
    password: '비밀번호 : 8 ~ 16자 영문 대소문자, 숫자, 특수문자를 사용하세요.',
    passwordConfirm: '비밀번호가 일치하지 않습니다.',
    userName_duplicate: '중복된 닉네임 입니다.',
  };

  const dispatchField = (e) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: 'register', key: name, value }));
  };

  const props = {
    ErrorMessage: ErrorMessage,
    errorMessages: errorMessages,
  };

  return (
    <div>
      <Components
        {...props}
        dispatchField={dispatchField}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default RegisterForm;
