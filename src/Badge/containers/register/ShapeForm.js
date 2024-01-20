import React from 'react';
import { LoginBtn, TitleBox } from '../../../styles/Survey';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ShapeForm = ({ onSubmit, order, dispatchField }) => {
  const name = useSelector(({ badge }) => badge.name);

  return (
    <>
      <TitleBox>뱃지 모양을 골라 주세요.</TitleBox>
      <form onSubmit={onSubmit} id={order}></form>
      <LoginBtn form={order} style={{ marginBottom: '50px' }}>
        <div>다음</div>
      </LoginBtn>
    </>
  );
};

export default ShapeForm;
