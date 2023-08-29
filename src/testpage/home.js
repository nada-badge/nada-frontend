import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeField } from '../modules/headerStatus';

const Home = () => {
  const dispatch = useDispatch();
  console.log('home 이 실행되었습니다.');
  const test = 'pageNameStatus';

  useEffect(() => {
    dispatch(changeField({ key: test, value: '테스트' }));
    console.log('changeField가 실행되었습니다.');
  });

  return <div>home 입니다.</div>;
};

export default Home;
