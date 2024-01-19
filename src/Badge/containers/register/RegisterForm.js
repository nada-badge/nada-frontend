import React from 'react';
import { useState, useCallback } from 'react';
import NameForm from './NameForm';
import { useDispatch } from 'react-redux';
import { changeField } from '../../modules/redux/badge';
import { useNavigate } from 'react-router-dom';
import { BackSvg } from '../../../icon/BackSvg';

const RegisterForm = () => {
  const [order, setOrder] = useState(0);
  const forms = [NameForm];
  const Components = forms[order];

  const onSubmit = (e) => {
    e.preventDefault();
    if (order === forms.length - 1) {
      // 마지막 form 입력일때, 뱃지 등록 실행하기
    } else setOrder(order + 1);
  };

  const dispatch = useDispatch();
  // 입력 값을 상태에 반영하기
  const dispatchField = useCallback((e) => {
    const { value, name } = e.target;
    dispatch(changeField({ key: name, value }));
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
      <Components
        dispatchField={dispatchField}
        onSubmit={onSubmit}
        order={order}
      />
    </>
  );
};

export default RegisterForm;
