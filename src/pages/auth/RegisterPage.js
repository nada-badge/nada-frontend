import AuthTemplate from '../../components/auth/AuthTemplate';
import RegisterForm from '../../containers/auth/register/RegisterForm';
import { useLocation } from 'react-router-dom';

const registerMap = {
  '/register/personal': 'personal',
  '/register/team': 'team',
};

const RegisterPage = () => {
  const { pathname } = useLocation();

  return (
    <AuthTemplate>
      <RegisterForm type={registerMap[pathname]} />
    </AuthTemplate>
  );
};
export default RegisterPage;
