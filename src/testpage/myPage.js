import { useEffect } from 'react';
import { changeField } from '../modules/headerStatus';
import { useDispatch } from 'react-redux';

const MyPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeField({ key: 'pageStatus', value: 'notice-menu' }));
    dispatch(changeField({ key: 'pageNameStatus', value: '마이 페이지' }));
  });

  return <div>myPage 입니다.</div>;
};

export default MyPage;
