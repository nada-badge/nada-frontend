/* 하단 네비게이션 바 테스트를 위한 페이지 */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setBarStatus } from '../modules/bar';

const Community = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setBarStatus({
        headerState: 'bellMenu',
        text: '커뮤니티',
        isShowBottom: true,
      }),
    );
  });

  const gochild = () => {
    navigate('/Community/child');
  };

  return (
    <div>
      Community 입니다.
      <button onClick={gochild}>하위페이지</button>
    </div>
  );
};

export default Community;
