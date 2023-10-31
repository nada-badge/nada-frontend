/* 하단 네비게이션 바 테스트를 위한 페이지 */
import { useEffect } from 'react';
import { setBarStatus } from '../modules/bar';
import { useDispatch } from 'react-redux';

const Badge = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setBarStatus({
        headerState: 'backPost',
        text: '뱃지',
        isShowBottom: true,
      }),
    );
  });

  return <div>badge 입니다.</div>;
};

export default Badge;
