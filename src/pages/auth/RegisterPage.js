import { useState, useEffect } from 'react';
import AuthTemplate from '../../components/auth/AuthTemplate';
import RegisterForm from '../../containers/auth/register/RegisterForm';
import { useLocation } from 'react-router-dom';

const registerMap = {
  '/register/personal': 'personal',
  '/register/team': 'team',
};

const RegisterPage = () => {
  const location = useLocation();
  const [type, setType] = useState(null);

  useEffect(() => {
    setType(registerMap[location.pathname]);
  }, [location.pathname]);

  return (
    <AuthTemplate>
      <RegisterForm type={type} />
    </AuthTemplate>
  );
};
export default RegisterPage;
