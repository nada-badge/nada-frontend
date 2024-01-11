import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../../modules/auth';
import { useNavigate } from 'react-router-dom';
import { useSignup } from '../../../modules/queries/auth/useSignup';
import { BackSvg } from '../../../icon/BackSvg';

// 동적으로 불러오기
const EmailForm = lazy(() => import('./EmailForm'));
const PasswordForm = lazy(() => import('./PasswordForm'));
const UserNameForm = lazy(() => import('./UserNameForm'));
const PhoneNumberForm = lazy(() => import('./PhoneNumberForm'));
const TeamTypeForm = lazy(() => import('./TeamTypeForm'));
const RepresentForm = lazy(() => import('./RepresentForm'));
const TeamNameForm = lazy(() => import('./TeamNameForm'));
const RegionForm = lazy(() => import('./RegionForm'));
const FieldForm = lazy(() => import('./RegionForm'));

const RegisterForm = ({ type }) => {
  // 컴포넌트 배열에 넣기, 현재 컴포넌트 설정하기
  const forms = {
    personal: [
      RegionForm,
      FieldForm,
      EmailForm,
      PasswordForm,
      UserNameForm,
      PhoneNumberForm,
    ],
    team: [
      EmailForm,
      PasswordForm,
      TeamNameForm,
      TeamTypeForm,
      RepresentForm,
      PhoneNumberForm,
    ],
  };
  const [order, setOrder] = useState(0); // 입력 순서
  const Components = forms[type][order];

  const dispatch = useDispatch();
  const register = useSelector(({ auth }) => auth[`${type}_register`]);

  useEffect(() => {
    dispatch(initializeForm(`${type}_register`));
    // Unmount시, 상태 초기화하기 (=지우기)
    return () => {
      dispatch(initializeForm(`${type}_register`));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 회원가입 하기 (서버에 전송)
  const { mutate } = useSignup();
  const onSubmit = (e) => {
    e.preventDefault();

    // 마지막 form 입력일때, 회원가입 실행하기
    if (order === forms[type].length - 1) {
      mutate({ params: register, type: type });
    } else setOrder(order + 1);
  };

  // 입력 값을 상태에 반영하기
  const dispatchField = useCallback((e) => {
    const { value, name } = e.target;
    const fieldType = `${type}_register`;
    dispatch(changeField({ form: fieldType, key: name, value }));
  }, []);

  // 뒤로가기
  const navigate = useNavigate();
  const goBack = () => {
    if (order === 0) {
      navigate(-1);
    } else setOrder(order - 1);
  };

  return (
    <>
      <div className="backBtnWrapper" onClick={goBack}>
        <BackSvg />
      </div>
      <Suspense fallback={<div></div>}>
        <Components
          dispatchField={dispatchField}
          onSubmit={onSubmit}
          order={order}
          type={type}
        />
      </Suspense>
    </>
  );
};

export default React.memo(RegisterForm);
