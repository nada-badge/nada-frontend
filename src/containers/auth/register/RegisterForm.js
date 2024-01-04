import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../../modules/auth';
import { useNavigate } from 'react-router-dom';
import {
  useUserSignup,
  useTeamSignup,
} from '../../../modules/queries/auth/useSignup';
import { Frame, Div } from '../../../styles/Register';

// 동적으로 불러오기
const EmailForm = lazy(() => import('./EmailForm'));
const PasswordForm = lazy(() => import('./PasswordForm'));
const UserNameForm = lazy(() => import('./UserNameForm'));
const PhoneNumberForm = lazy(() => import('./PhoneNumberForm'));
const TeamTypeForm = lazy(() => import('./TeamTypeForm'));
const RepresentForm = lazy(() => import('./RepresentForm'));
const TeamNameForm = lazy(() => import('./TeamNameForm'));

const RegisterForm = ({ type }) => {
  const [order, setOrder] = useState(0); // 입력 순서
  const dispatch = useDispatch();
  const register = useSelector(({ auth }) => auth[`${type}_register`]);

  const { mutate: personal_mutatue } = useUserSignup(); // 회원가입 하기 (서버에 전송)
  const { mutate: team_mutatue } = useTeamSignup();

  const initializeTypeForm = {
    team: () => dispatch(initializeForm('team_register')),
    personal: () => dispatch(initializeForm('personal_register')),
  };

  useEffect(() => {
    initializeTypeForm[type]();
    // Unmount시, 상태 초기화하기 (=지우기)
    return () => {
      initializeTypeForm[type]();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 컴포넌트 배열에 넣기, 현재 컴포넌트 설정하기
  const forms = {
    personal: [EmailForm, PasswordForm, UserNameForm, PhoneNumberForm],
    team: [
      EmailForm,
      PasswordForm,
      TeamNameForm,
      TeamTypeForm,
      RepresentForm,
      PhoneNumberForm,
    ],
  };

  const Components = forms[type][order];

  const onSubmit = (e) => {
    e.preventDefault();

    // 마지막 form 입력일때, 회원가입 실행하기
    if (order === forms[type].length - 1) {
      const mutationFunction =
        type === 'personal' ? personal_mutatue : team_mutatue;
      mutationFunction(register);
    } else setOrder(order + 1);
  };

  // 입력 값을 상태에 반영하기
  const dispatchField = useCallback((e) => {
    const { value, name } = e.target;
    const dispatchMap = {
      team: () =>
        dispatch(changeField({ form: 'team_register', key: name, value })),
      personal: () =>
        dispatch(changeField({ form: 'personal_register', key: name, value })),
    };
    dispatchMap[type]();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 뒤로가기
  const navigate = useNavigate();
  const goBack = () => {
    if (order === 0) {
      navigate(-1);
    } else setOrder(order - 1);
  };

  return (
    <Frame className="Frame">
      <img
        className="BackBtn"
        alt="BackBtn"
        onClick={goBack}
        src="https://generation-sessions.s3.amazonaws.com/2332251fd8ff291f5e2010e035672d11/img/top.svg"
      />
      <Div>
        <Suspense fallback={<div></div>}>
          <Components
            dispatchField={dispatchField}
            onSubmit={onSubmit}
            order={order}
            type={type}
          />
        </Suspense>
      </Div>
    </Frame>
  );
};

export default RegisterForm;
