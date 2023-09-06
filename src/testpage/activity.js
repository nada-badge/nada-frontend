import { useEffect } from 'react';
import { changeField } from '../modules/headerStatus';
import { useDispatch } from 'react-redux';

const Activity = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeField({ key: 'pageStatus', value: 'notice-menu' }));
    dispatch(changeField({ key: 'pageNameStatus', value: '활동' }));
  });

  return <div>activity 입니다.</div>;
};

export default Activity;
