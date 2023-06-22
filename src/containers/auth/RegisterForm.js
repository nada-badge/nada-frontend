import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm } from '../../modules/auth';
import { useEffect, useState } from 'react';
import useUserMutation from '../../modules/queries/registerQuery';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const [error, setError] = useState({
    email: null,
    password: null,
    passwordConfirm: null,
  });

  const { mutate } = useUserMutation();

  const { form } = useSelector(({ auth }) => ({
    form: auth.register,
  }));

  const { email, password } = form;

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: 'register', key: name, value }));
    if (name === 'password') {
      checkPassword(value);
    }
    if (name === 'passwordConfirm') {
      checkPasswordConfirm(value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    mutate(form);
  };

  const checkEmail = () => {
    const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    setError({
      ...error,
      email: emailRegexp.test(email) ? null : '올바른 이메일 형식이 아닙니다.',
    });
  };

  const checkPassword = (value) => {
    const passwordRegexp =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    setError({
      ...error,
      password: passwordRegexp.test(value)
        ? null
        : '비밀번호 : 8 ~ 16자 영문 대소문자, 숫자, 특수문자를 사용하세요.',
    });
  };

  const checkPasswordConfirm = (passwordConfirm) => {
    setError({
      ...error,
      passwordConfirm:
        password === passwordConfirm ? null : '비밀번호가 일치하지 않습니다.',
    });
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
