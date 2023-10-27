/* 하단 네비게이션 바 테스트를 위한 페이지 */
import { useEffect } from 'react';
import { setBarStatus } from '../modules/barStatus';
import { useDispatch } from 'react-redux';

const Communityy = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setBarStatus({
        headerState: 'backBell',
        text: '세부 커뮤니티',
        isShowBottom: false,
      }),
    );
  });

  return <div>Community 자식 입니다.</div>;
};

export default Communityy;
