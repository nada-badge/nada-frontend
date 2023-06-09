import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm } from '../../modules/auth';
import { useEffect } from 'react';
import useUserMutation from '../../modules/queries/registerQuery';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const mutation = useUserMutation();

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

  const onSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    mutation(username, password);
  };

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default RegisterForm;
