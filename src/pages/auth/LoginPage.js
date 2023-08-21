import { useEffect, useState } from 'react';
import AuthTemplate from '../../components/auth/AuthTemplate';
import LoginForm from '../../containers/auth/login/LoginForm';
import { LoginBox, Logo } from '../../styles/Login';
import { useLocation } from 'react-router-dom';

const locationMap = {
  '/login/personal': 'personal',
  '/login/team': 'team',
};

const LoginPage = () => {
  const location = useLocation();
  const [type, setType] = useState(null);

  useEffect(() => {
    setType(locationMap[location.pathname]);
  }, [location.pathname]);

  return (
    <AuthTemplate>
      <LoginBox>
        <Logo
          alt="Logo"
          src="https://generation-sessions.s3.amazonaws.com/dccd720493d3d99169fdd13158e459fa/img/logo.svg"
        />
        <LoginForm type={type} />
      </LoginBox>
    </AuthTemplate>
  );
};

export default LoginPage;
