import AuthTemplate from '../../components/auth/AuthTemplate';
import RegisterForm from '../../containers/auth/register/RegisterForm';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { setBarStatus } from '../../modules/bar';
import { useDispatch } from 'react-redux';

const registerMap = {
  '/register/personal': 'personal',
  '/register/team': 'team',
};

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(
      setBarStatus({
        headerState: '',
        text: '',
        isShowBottom: false,
      }),
    );
  }, []);
  return (
    <AuthTemplate>
      <RegisterForm type={registerMap[pathname]} />
    </AuthTemplate>
  );
};
export default RegisterPage;
