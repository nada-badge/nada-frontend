import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeBarStatus } from '../modules/redux/bar';
import { AlarmHeader } from '../containers/AlarmHeader';

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

  return (
    <>
      <div className="pageContainer">
        <AlarmHeader />
      </div>
    </>
  );
};

export default AlarmPage;
