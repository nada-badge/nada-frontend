import { useEffect, useState } from 'react';
import AuthTemplate from '../../components/auth/AuthTemplate';
import LoginForm from '../../containers/auth/login/LoginForm';
import { LoginBox, LogoBox } from '../../styles/Login';
import { useLocation } from 'react-router-dom';
import { setBarStatus } from '../../modules/bar';
import { useDispatch } from 'react-redux';

const locationMap = {
  '/login/personal': 'personal',
  '/login/team': 'team',
};

const LoginPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [type, setType] = useState(null);

  useEffect(() => {
    setType(locationMap[location.pathname]);
    dispatch(
      setBarStatus({
        headerState: '',
        text: '',
        isShowBottom: false,
      }),
    );
  }, [location.pathname]);

  return (
    <AuthTemplate>
      <LoginBox>
        <LogoBox>
          <img
            alt="Logo"
            src="https://generation-sessions.s3.amazonaws.com/dccd720493d3d99169fdd13158e459fa/img/logo.svg"
          />
        </LogoBox>
        <LoginForm type={type} />
      </LoginBox>
    </AuthTemplate>
  );
};

export default LoginPage;
