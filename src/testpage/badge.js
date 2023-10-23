import { useEffect } from 'react';
import { setBarStatus } from '../modules/barStatus';
import { useDispatch } from 'react-redux';

const Badge = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBarStatus({ header: 'backPost', name: '뱃지', bottom: true }));
  });

  return <div>badge 입니다.</div>;
};

export default Badge;
