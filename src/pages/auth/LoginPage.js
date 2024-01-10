import { useEffect, useState } from 'react';
import LoginForm from '../../containers/auth/login/LoginForm';
import { LoginBox } from '../../styles/Auth';
import { useLocation } from 'react-router-dom';
import { changeBarStatus } from '../../modules/bar';
import { useDispatch } from 'react-redux';
import { MySpecLogo } from '../../icon/MySpecLogo';
import SocialLogin from '../../containers/auth/login/SocialLogin';
import LoginFooter from '../../containers/auth/login/LoginFooter';

const LoginPage = () => {
  const locationMap = {
    '/login/personal': 'personal',
    '/login/team': 'team',
  };

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
    <>
      <LoginBox>
        <div>
          <MySpecLogo className="LogoBox" />
        </div>
        <div>
          <LoginForm type={type} />
          <div>
            {type === 'personal' && <SocialLogin />}
            <LoginFooter type={type} />
          </div>
        </div>
      </LoginBox>
    </>
  );
};

export default LoginPage;
