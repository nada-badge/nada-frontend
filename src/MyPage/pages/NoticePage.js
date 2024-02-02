import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { NoticeContent } from '../components/NoticeContent';

const NoticePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'back',
        text: '공지사항',
        isShowBottom: false,
      }),
    );
  }, []);

  return <NoticeContent />;
};

export default NoticePage;
