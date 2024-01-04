import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../../components/auth/AuthForm';
import { changeField, initializeForm } from '../../../modules/auth';
import { useEffect, useState } from 'react';
import useLogin from '../../../modules/queries/auth/useLogin';
import { produce } from 'immer';
import SocialLogin from './SocialLogin';
import styled from 'styled-components';
import LoginFooter from './LoginFooter';
import { useNavigate } from 'react-router-dom';

const Frame = styled.div`
  height: 339px;
  position: relative;
  margin: 118px auto;
  width: 345px;
`;

const LoginForm = ({ type }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [error, setError] = useState({
    email: null,
    password: null,
  });

  const mutation = useLogin();

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

  const onSubmit = async (e) => {
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
      const { data, status } = await mutation.mutateAsync({ email, password });

      if (status === 200) {
        navigate('/');
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', email);
      }
    }
  };
  return (
    <Frame>
      <AuthForm
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        error={error}
      />
      {type === 'personal' && <SocialLogin />}
      <LoginFooter type={type} />
    </Frame>
  );
};

export default LoginForm;
