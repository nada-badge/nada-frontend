/* 하단 네비게이션 바 테스트를 위한 페이지 */
import { useEffect } from 'react';
import { changeBarStatus } from '../modules/bar';
import { useDispatch } from 'react-redux';

const MyPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'bellMenu',
        text: '마이 페이지',
        isShowBottom: true,
      }),
    );
  });

  return <div>myPage 입니다.</div>;
};

export default MyPage;
