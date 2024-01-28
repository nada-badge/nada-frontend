import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeBarStatus } from '../modules/redux/bar';

const AlarmPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'back',
        text: '알람',
        isShowBottom: false,
      }),
    );
  }, []);
};

export default AlarmPage;
