import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import client from '../../../lib/api/client';
import { userNameSelector } from '../../../modules/auth';
import Button from '../../../components/common/Button';

const UserNamePage = ({
  dispatchField,
  ErrorMessage,
  errorMessages,
  onSubmit,
}) => {
  const [isBlur, setBlur] = useState(false); // 키보드 포커스 감지
  const [error, setError] = useState(null); // error 메세지 관리

  const userName = useSelector(userNameSelector); // userName 상태 가져오기

  // userName 중복 검사하기
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
    setBlur(true);
    refetch();
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
