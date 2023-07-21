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

const UserNameInput = ({ form, onChange }) => {
  const [isBlur, setBlur] = useState(false);
  const { userName } = form;

  const { data, refetch } = useQuery({
    queryKey: ['getUserName'],
    queryFn: async () => {
      const { data } = await client.get('user/checkUserName', {
        params: { userName: userName },
      });
      return data;
    },
    enabled: isBlur,
  });

  const onBlur = (e) => {
    if (e) {
      setBlur(true);
      refetch();
    }
  };

  return (
    <div>
      <input
        name="userName"
        placeholder="닉네임"
        onChange={onChange}
        value={form.userName}
        onBlur={onBlur}
        required
      />
      {data && data.result === 0 && (
        <ErrorMessage>중복된 닉네임 입니다.</ErrorMessage>
      )}
    </div>
  );
};
export default UserNameInput;
