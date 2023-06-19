import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import {
  changeField,
  initializeForm,
  register_error,
} from '../../modules/auth';
import { useEffect } from 'react';
import useUserMutation from '../../modules/queries/registerQuery';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const { mutate } = useUserMutation();

  const { form, error } = useSelector(({ auth }) => ({
    form: auth.register,
    error: auth.error,
  }));

  const { email, password, passwordConfirm, userType, username, phoneNumber } =
    form;

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: 'register', key: name, value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    mutate({ email, password });
  };

  const checkEmail = (e) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(mailformat)) {
      const text = '올바른 이메일 형식이 아닙니다.';
      dispatch(register_error({ key: 'email', value: text }));
    } else {
      dispatch(register_error({ key: 'email', value: null }));
    }
  };

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      checkEmail={checkEmail}
      error={error}
    />
  );
};

export default RegisterForm;
