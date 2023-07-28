import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import client from '../../lib/api/client';
import { changeField } from '../../modules/auth';
import { emailSelector } from '../../modules/auth';
import Button from '../../components/common/Button';

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const EmailPage = () => {
  const [isBlur, setBlur] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: 'register', key: name, value }));
  };

  const email = useSelector(emailSelector);

  const transientName = useRef('');

  const errorMessages = {
    format: '올바른 이메일 형식이 아닙니다.',
    duplicate: '중복된 이메일 입니다.',
  };

  const checkEmail = () => {
    const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const result = emailRegexp.test(email) ? null : errorMessages.format;
    setError(result);
    return result;
  };

  const { refetch } = useQuery({
    queryKey: ['getEmail'],
    queryFn: async () => {
      const { data } = await client.get('user/checkEmailOverlap', {
        params: { email: email },
      });
      setError(data.result ? null : errorMessages.duplicate);
      return data;
    },
    enabled: isBlur,
  });

  const onBlur = () => {
    if (transientName.current !== email) {
      transientName.current = email;
      if (!checkEmail()) {
        setBlur(true);
        refetch();
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    navigate('/register/password', { replace: true });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          placeholder="이메일"
          onChange={onChange}
          value={email}
          onBlur={onBlur}
          required
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button>비밀번호로</Button>
      </form>
    </div>
  );
};
export default EmailPage;
