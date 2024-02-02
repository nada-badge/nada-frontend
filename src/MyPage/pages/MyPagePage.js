import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { Title } from '../components/Title';

export const MyPage = () => {
  const dispatch = useDispatch();

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
      <Title text={'커뮤니티'} />
    </div>
  );
};
