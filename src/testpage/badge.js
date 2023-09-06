import { useEffect } from 'react';
import { changeField } from '../modules/headerStatus';
import { useDispatch } from 'react-redux';

const Badge = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeField({ key: 'pageStatus', value: 'notice-menu' }));
    dispatch(changeField({ key: 'pageNameStatus', value: '뱃지' }));
  });

  return <div>badge 입니다.</div>;
};

export default Badge;
