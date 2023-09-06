import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeField } from '../modules/headerStatus';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeField({ key: 'pageStatus', value: 'main' }));
    dispatch(changeField({ key: 'pageSNametatus', value: '홈' }));
  });

  return <div>home 입니다.</div>;
};

export default Home;
