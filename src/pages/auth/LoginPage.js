import AuthTemplate from '../../components/auth/AuthTemplate';
import LoginForm from '../../containers/auth/login/LoginForm';
import { LoginBox, Logo } from '../../styles/Login';

const LoginPage = () => {
  return (
    <AuthTemplate>
      <LoginBox>
        <Logo
          alt="Logo"
          src="https://generation-sessions.s3.amazonaws.com/dccd720493d3d99169fdd13158e459fa/img/logo.svg"
        /> 
        <LoginForm />
      </LoginBox>
    </AuthTemplate>
  );
};

export default LoginPage;
