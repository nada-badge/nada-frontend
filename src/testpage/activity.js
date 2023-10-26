/* 하단 네비게이션 바 테스트를 위한 페이지 */
import { useEffect } from 'react';
import { setBarStatus } from '../modules/barStatus';
import { useDispatch } from 'react-redux';

const Activity = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBarStatus({ header: 'bellMenu', name: '활동', bottom: true }));
  });

  return <div>activity 입니다.</div>;
};

export default Activity;
