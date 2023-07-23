// 회원가입 input email
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import client from '../../lib/api/client';

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const EmailInput = ({ email, onChange, checkEmail }) => {
  const [isBlur, setBlur] = useState(false);

  const { data, refetch } = useQuery({
    queryKey: ['getEmail'],
    queryFn: async () => {
      const { data } = await client.get('user/checkEmailOverlap', {
        params: { email: email },
      });
      return data;
    },
    enabled: isBlur,
  });

  return (
    <div>
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
        onBlur={() => {
          checkEmail();
          setBlur(true);
          refetch();
        }}
        required
      />
      {data && data.result === 0 && (
        <ErrorMessage>중복된 이메일 입니다.</ErrorMessage>
      )}
    </div>
  );
};
export default EmailInput;
