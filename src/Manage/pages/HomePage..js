/*ManageHome 관리자용 메인 페이지 */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { useDispatch } from 'react-redux';

const ManageHome = () => {
  const dispatch = useDispatch();

  //해당 페이지의 상단, 하단 설정
  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'logo',
        text: '관리자용',
        isShowBottom: false,
      }),
    );
  }, []);

  return (
    <div>
      <div>관리자 홈 화면 입니다.</div>
      <Link to="/manage/Activity">등록되어있는 활동 게시판</Link>
      <hr />
    </div>
  );
};

export default ManageHome;
