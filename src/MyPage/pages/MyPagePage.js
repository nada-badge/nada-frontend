import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { Title } from '../components/Title';
import { Content } from '../components/Content';

const MyPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'backBell',
        text: 'MY',
        isShowBottom: true,
      }),
    );
  }, []);

  return (
    <div className="pageContainer">
      <div>
        <Title text={'커뮤니티'} />
        <Content url={'/mypage'} text={'내가 작성한 글'} />
        <Content url={'/mypage'} text={'내가 댓글 단 글'} />
      </div>
      <div>
        <Title text={'설정'} />
        <Content url={'/mypage'} text={'알림'} />
        <Content url={'/mypage'} text={'관심 분야'} />
      </div>
      <div>
        <Title text={'이용안내'} />
        <Content url={'/mypage'} text={'문의하기'} />
        <Content url={'/myPage/notice'} text={'공지사항'} />
        <Content
          url={'/mypage'}
          text={'버전정보'}
          version={'1.5.22(2023121021)'}
        />
        <Content url={'/mypage'} text={'이용약관'} />
      </div>
      <div>
        <Title text={'기타'} />
        <Content url={'/mypage'} text={'로그아웃'} />
        <Content url={'/mypage'} text={'탈퇴하기'} />
      </div>
    </div>
  );
};

export default MyPage;
