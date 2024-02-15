import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LayoutStyle } from './HomePage.';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import Header from '../containers/Header';
import { useGetNoticeList } from '../modules/queries/useGetNotice';
import { NoticeContent } from '../components/NoticeContent';

const NoticeManagePage = () => {
  const dispatch = useDispatch();
  const { data } = useGetNoticeList();
  console.log('notice data : ', data);
  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: '',
        text: '',
        isShowBottom: false,
      }),
    );
  }, []);

  return (
    <LayoutStyle>
      <Header text={'공지사항 게시글'} url={'/manage/notice/write'} />
      {data &&
        data.map((card) => (
          <div key={card._id}>
            <NoticeContent data={card} />
          </div>
        ))}
    </LayoutStyle>
  );
};

export default NoticeManagePage;
