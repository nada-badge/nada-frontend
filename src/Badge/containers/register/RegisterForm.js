import React, { useState, useCallback, useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { changeField } from '../../modules/redux/badge';
import { useNavigate } from 'react-router-dom';
import { changeBarStatus } from '../../../Bar/modules/redux/bar';
import styled from 'styled-components';
import { applyFontStyles } from '../../../styles/fontStyle';

const Indicator = styled.div`
  display: inline-flex;
  justify-self: end;
  height: fit-content;
  padding: 2px 12px;
  gap: 2px;
  border-radius: 23px;
  background: var(--myspec-Gray-scale-Gray-300, #e4e4e4);
  width: fit-content;

  & > span {
    ${applyFontStyles({
      font: 'subtitle-01',
      color: 'var(--myspec-gray-scalegray-600)',
    })}

    &:nth-child(1) {
      color: var(--myspec-primaryblue-1);
    }
  }
`;

const RegisterForm = () => {
  const NameForm = lazy(() => import('./NameForm'));

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

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'back',
        text: '뱃지 발급',
        isShowBottom: false,
      }),
    );
  }, []);

  return (
    <>
      <Indicator>
        <span>{order + 1}</span>
        <span>/</span>
        <span>{forms.length}</span>
      </Indicator>
      <Suspense fallback={<div></div>}>
        <Components
          dispatchField={dispatchField}
          onSubmit={onSubmit}
          order={order}
        />
      </Suspense>
    </>
  );
};

export default RegisterForm;
