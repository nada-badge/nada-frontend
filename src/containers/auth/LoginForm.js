import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { changeField, initializeForm } from '../../modules/auth';
import { useEffect, useState } from 'react';
import useUserMutation from '../../modules/queries/loginQuery';
import { produce } from 'immer';

const LoginForm = () => {
  const dispatch = useDispatch();

  const [error, setError] = useState({
    email: null,
    password: null,
  });

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
    setError(
      produce((draft) => {
        draft['email'] = email ? null : '이메일을 입력해주세요.';
        draft['password'] = password ? null : '비밀번호를 입력해주세요.';
      }),
    );
    if (email && password) {
      mutate({ email, password });
    }
  };
  return (
    <div>
      <AuthForm
        type="login"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        error={error}
      />
    </div>
  );
};

export default LoginForm;
