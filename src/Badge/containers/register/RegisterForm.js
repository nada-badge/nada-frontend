import React from 'react';
import { useState, useCallback } from 'react';
import NameForm from './NameForm';

const RegisterForm = () => {
  const [order, setOrder] = useState(0);
  const forms = [NameForm];
  const Components = forms[order];

  const onSubmit = (e) => {
    e.preventDefault();
  };

  // 입력 값을 상태에 반영하기
  const dispatchField = useCallback((e) => {
    const { value, name } = e.target;
  }, []);

  return (
    <>
      <Components
        dispatchField={dispatchField}
        onSubmit={onSubmit}
        order={order}
      />
    </>
  );
};

export default RegisterForm;
