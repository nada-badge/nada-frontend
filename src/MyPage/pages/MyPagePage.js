import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { Title } from '../components/Title';
import { Content } from '../components/Content';

export const MyPage = () => {
  const dispatch = useDispatch();

  const list = {
    display: 'flex',
    flexDirection: 'row',
  };

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'back',
        text: 'MY',
        isShowBottom: true,
      }),
    );
  }, []);

  return (
    <div className="pageContainer">
      <div style={list}>
        <div>
          <Title text={'커뮤니티'} />
          <Content url={'/mypage'} text={'내가 작성한 글'} />
        </div>{' '}
      </div>
    </div>
  );
};
