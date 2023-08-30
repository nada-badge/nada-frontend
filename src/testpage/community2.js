import React from 'react';
import { changeField } from '../modules/headerStatus';
import { useDispatch } from 'react-redux';

const Communityy = () => {
  const dispatch = useDispatch();
  dispatch(changeField({ key: 'pageStatus', value: 'funtion-only' }));
  dispatch(changeField({ key: 'pageNameStatus', value: '커뮤니티 세부' }));

  return <div>Community 자식 입니다.</div>;
};

export default Communityy;
