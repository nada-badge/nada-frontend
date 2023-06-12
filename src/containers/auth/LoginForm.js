import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm } from '../../modules/auth';
import { useEffect } from 'react';
import useUserMutation from '../../modules/queries/loginQuery';

const LoginForm = () => {
  const dispatch = useDispatch();

  const { mutate } = useUserMutation();

  const form = useSelector((state) => {
    return state.auth.login;
  });

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: 'login', key: name, value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    mutate({ email, password });
  };
  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default LoginForm;
