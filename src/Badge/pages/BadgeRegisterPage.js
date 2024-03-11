import { useEffect } from 'react';
import RegisterForm from '../containers/register/RegisterForm';
import { useDispatch } from 'react-redux';
import { changeBarStatus } from '../../Bar/modules/redux/bar';

const BadgeRegisterPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: 'back',
        text: '뱃지 발급',
        isShowBottom: false,
      }),
    );
  }, []);

  return (
    <>
      <div style={{ paddingTop: '88px' }}>
        <RegisterForm />
      </div>
    </>
  );
};

export default BadgeRegisterPage;
