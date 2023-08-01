import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { changeField, initializeForm } from '../../modules/auth';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import EmailForm from './EmailForm';
import PasswordForm from './PasswordForm';
import UserNameForm from './UserNameForm';
import PhoneNumberForm from './PhoneNumberForm';
import useUserMutation from '../../modules/queries/registerQuery';
import { useCallback } from 'react';

// 에러를 표시하는 박스
const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const RegisterForm = () => {
  const [order, setOrder] = useState(0); // 입력 순서
  const dispatch = useDispatch();
  const register = useSelector(({ auth }) => auth.register);

  const { mutate } = useUserMutation(); // 회원가입 하기 (서버에 전송)

  useEffect(() => {
    dispatch(initializeForm); // 회원가입 접속시, 상태 초기화하기
    // Unmount시, 상태 초기화하기 (=지우기)
    return () => {
      dispatch(initializeForm);
    };
  }, []);

  // 컴포넌트 배열에 넣기, 현재 컴포넌트 설정하기
  const forms = [EmailForm, PasswordForm, UserNameForm, PhoneNumberForm];
  const Components = forms[order];

  const onSubmit = (e) => {
    e.preventDefault();

    // 마지막 form 입력일때, 회원가입 실행하기
    if (order === forms.length - 1) {
      mutate(register);
    }
    // 다음 form 보여주기
    else setOrder(order + 1);
  };

  const errorMessages = {
    email_format: '올바른 이메일 형식이 아닙니다.',
    email_duplicate: '중복된 이메일 입니다.',
    password: '비밀번호 : 8 ~ 16자 영문 대소문자, 숫자, 특수문자를 사용하세요.',
    passwordConfirm: '비밀번호가 일치하지 않습니다.',
    userName_duplicate: '중복된 닉네임 입니다.',
  };

  // 입력 값을 상태에 반영하기
  const dispatchField = useCallback((e) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: 'register', key: name, value }));
  }, []);

  // 뒤로가기
  const navigate = useNavigate();
  const goBack = () => {
    if (order === 0) {
      navigate(-1);
    } else setOrder(order - 1);
  };

  return (
    <div>
      <button onClick={goBack}>◀</button>
      <Components
        ErrorMessage={ErrorMessage}
        errorMessages={errorMessages}
        dispatchField={dispatchField}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default RegisterForm;
