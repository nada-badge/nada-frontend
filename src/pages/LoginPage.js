import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';
import styled from 'styled-components';

const LogInPersonal = styled.div`
  background-color: #ffffff;
  border: 1px none;
  height: 812px;
  position: relative;
  width: 375px;
`;

const Logo = styled.img`
  height: 40px;
  left: 78px;
  position: absolute;
  top: 220px;
  width: 219px;
`;

const LoginPage = () => {
  return (
    <AuthTemplate>
      <LogInPersonal>
        <Logo
          alt="Logo"
          src="https://generation-sessions.s3.amazonaws.com/dccd720493d3d99169fdd13158e459fa/img/logo.svg"
        />
        <LoginForm />
      </LogInPersonal>
    </AuthTemplate>
  );
};

export default LoginPage;
