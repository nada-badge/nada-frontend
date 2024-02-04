import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeBarStatus } from '../../Bar/modules/redux/bar';
import { ToggleContent } from '../components/ToggleContent';

const AlarmSettingPage = () => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState();

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'back',
        text: '알림',
        isShowBottom: false,
      }),
    );
  }, []);

  return (
    <ToggleContent
      text={'공지사항'}
      isActive={isActive}
      setIsActive={setIsActive}
    />
  );
};

export default AlarmSettingPage;
