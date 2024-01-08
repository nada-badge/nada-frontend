import { useEffect, useState } from 'react';
import AuthTemplate from '../../components/auth/AuthTemplate';
import LoginForm from '../../containers/auth/login/LoginForm';
import { LoginBox } from '../../styles/Login';
import { useLocation } from 'react-router-dom';
import { changeBarStatus } from '../../modules/bar';
import { useDispatch } from 'react-redux';
import { MySpecLogo } from '../../icon/MySpecLogo';

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
      changeBarStatus({
        headerState: '',
        text: '',
        isShowBottom: false,
      }),
    );
  }, [location.pathname]);

  return (
    <AuthTemplate>
      <LoginBox>
        <MySpecLogo className="LogoBox" />
        <LoginForm type={type} />
      </LoginBox>
    </AuthTemplate>
  );
};

export default LoginPage;
