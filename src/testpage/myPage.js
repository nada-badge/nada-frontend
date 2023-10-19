import { useEffect } from 'react';
import { setBarStatus } from '../modules/barStatus';
import { useDispatch } from 'react-redux';

const MyPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setBarStatus({
        header: 'bellMenu',
        name: '마이 페이지',
        bottom: true,
      }),
    );
  });

  return <div>myPage 입니다.</div>;
};

export default MyPage;
