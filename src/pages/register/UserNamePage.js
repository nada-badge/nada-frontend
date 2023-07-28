import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import client from '../../lib/api/client';
import { changeField, userNameSelector } from '../../modules/auth';
import Button from '../../components/common/Button';

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const UserNamePage = () => {
  const [isBlur, setBlur] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: 'register', key: name, value }));
  };

  const userName = useSelector(userNameSelector);

  const transientName = useRef('');

  const errorMessages = {
    duplicate: '중복된 닉네임 입니다.',
  };

  const { refetch } = useQuery({
    queryKey: ['getUserName'],
    queryFn: async () => {
      const { data } = await client.get('user/checkUserName', {
        params: { userName: userName },
      });
      setError(data.result ? null : errorMessages.duplicate);
      return data;
    },
    enabled: isBlur,
  });

  const onBlur = () => {
    if (transientName.current !== userName) {
      transientName.current = userName;
      setBlur(true);
      refetch();
    }
  };

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate('/register/phoneNumber', { replace: true });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="userName"
          placeholder="닉네임"
          onChange={onChange}
          value={userName}
          onBlur={onBlur}
          required
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button>폰번호로</Button>
      </form>
    </div>
  );
};
export default UserNamePage;
