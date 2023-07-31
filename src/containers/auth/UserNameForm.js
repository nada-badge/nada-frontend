import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import client from '../../lib/api/client';
import { userNameSelector } from '../../modules/auth';
import Button from '../../components/common/Button';

const UserNamePage = ({
  dispatchField,
  ErrorMessage,
  errorMessages,
  onSubmit,
}) => {
  const [isBlur, setBlur] = useState(false);
  const [error, setError] = useState(null);

  const userName = useSelector(userNameSelector);

  const transientName = useRef('');

  const { refetch } = useQuery({
    queryKey: ['getUserName'],
    queryFn: async () => {
      const { data } = await client.get('user/checkUserName', {
        params: { userName: userName },
      });
      setError(data.result ? null : errorMessages.userName_duplicate);
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

  return (
    <form onSubmit={onSubmit}>
      <input
        name="userName"
        placeholder="닉네임"
        onChange={dispatchField}
        value={userName}
        onBlur={onBlur}
        required
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Button>폰번호로</Button>
    </form>
  );
};
export default UserNamePage;
