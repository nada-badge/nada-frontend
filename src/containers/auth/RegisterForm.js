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

  const checkEmail = () => {
    const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegexp.test(email)) {
      const text = '올바른 이메일 형식이 아닙니다.';
      dispatch(register_error({ key: 'email', value: text }));
    } else {
      dispatch(register_error({ key: 'email', value: null }));
    }
  };

  const checkPassword = () => {
    const passwordRegexp =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (!passwordRegexp.test(password)) {
      const text =
        '비밀번호 : 8 ~ 16자 영문 대소문자, 숫자, 특수문자를 사용하세요.';
      dispatch(register_error({ key: 'password', value: text }));
    } else {
      dispatch(register_error({ key: 'password', value: null }));
    }
  };

  const checkPasswordConfirm = () => {
    if (password === passwordConfirm) {
      dispatch(register_error({ key: 'passwordConfirm', value: null }));
    } else {
      dispatch(
        register_error({
          key: 'passwordConfirm',
          value: '비밀번호가 일치하지 않습니다.',
        }),
      );
    }
  };

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      checkEmail={checkEmail}
      checkPassword={checkPassword}
      checkPasswordConfirm={checkPasswordConfirm}
      error={error}
    />
  );
};

export default RegisterForm;
