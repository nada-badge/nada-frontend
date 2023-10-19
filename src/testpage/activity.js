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
