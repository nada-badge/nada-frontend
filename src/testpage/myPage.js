/* 하단 네비게이션 바 테스트를 위한 페이지 */
import { useEffect } from 'react';
import { changeBarStatus } from '../modules/redux/bar';
import { useDispatch } from 'react-redux';
import { decodeJwtToken } from '../modules/decodeJwtToken';

const MyPage = () => {
  const dispatch = useDispatch();
  const { email, userType } = decodeJwtToken(localStorage.getItem('token'));

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'bellMenu',
        text: '마이 페이지',
        isShowBottom: true,
      }),
    );
  });

  return (
    <>
      <div>myPage 입니다. </div>
      <div>{email}</div>
      <div>{userType}</div>
    </>
  );
};

export default MyPage;
