import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm } from '../../modules/auth';
import { useEffect } from 'react';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => {
    return state.auth.register;
  });

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: 'register', key: name, value }));
  };
  return <AuthForm type="register" form={form} onChange={onChange} />;
  
};

export default RegisterForm;
