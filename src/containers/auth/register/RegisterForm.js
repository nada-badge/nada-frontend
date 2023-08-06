import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { changeField, initializeForm } from '../../../modules/auth';
import { useNavigate } from 'react-router-dom';

import EmailForm from './EmailForm';
import PasswordForm from './PasswordForm';
import UserNameForm from './UserNameForm';
import PhoneNumberForm from './PhoneNumberForm';
import useUserMutation from '../../../modules/queries/registerQuery';
import { useCallback } from 'react';
import { Frame, Div } from '../../../styles/Register';

const RegisterForm = () => {
  const [order, setOrder] = useState(0); // 입력 순서
  const dispatch = useDispatch();
  const register = useSelector(({ auth }) => auth.register);

  const { mutate } = useUserMutation(); // 회원가입 하기 (서버에 전송)

  useEffect(() => {
    dispatch(initializeForm('register')); // 회원가입 접속시, 상태 초기화하기
    // Unmount시, 상태 초기화하기 (=지우기)
    return () => {
      dispatch(initializeForm('register'));
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
    <Frame>
      <img
        className="BackBtn"
        alt="BackBtn"
        onClick={goBack}
        src="https://generation-sessions.s3.amazonaws.com/2332251fd8ff291f5e2010e035672d11/img/top.svg"
      />
      <Div>
        <Components
          dispatchField={dispatchField}
          onSubmit={onSubmit}
          order={order}
        />
      </Div>
    </Frame>
  );
};

export default RegisterForm;
