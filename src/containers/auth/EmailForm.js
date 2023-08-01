import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import client from '../../lib/api/client';
import { emailSelector } from '../../modules/auth';
import Button from '../../components/common/Button';

const EmailForm = ({
  dispatchField,
  ErrorMessage,
  errorMessages,
  onSubmit,
}) => {
  const [isBlur, setBlur] = useState(false); // 키보드 포커스 감지 ,Query문 조건 실행
  const [error, setError] = useState(null); // error 메세지 관리

  const email = useSelector(emailSelector); // email 상태 가져오기

  // email 유효성 검사
  const checkEmail = () => {
    const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegexp.test(email)) {
      setError(errorMessages.email_format);
    }
    return emailRegexp.test(email);
  };

  // email 중복 검사
  const { refetch } = useQuery({
    queryKey: ['getEmail'],
    queryFn: async () => {
      const { data } = await client.get('user/checkEmailOverlap', {
        params: { email: email },
      });
      if (data.result === 0) {
        setError(errorMessages.email_duplicate);
      }
      return data;
    },
    enabled: isBlur,
  });

  const onBlur = () => {
    setError(null);
    if (checkEmail()) {
      // 이메일이 유효할때, 중복 검사 진행
      setBlur(true);
      refetch();
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="email"
        placeholder="이메일"
        onChange={dispatchField}
        value={email}
        onBlur={onBlur}
        required
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Button>비밀번호로</Button>
    </form>
  );
};
export default EmailForm;
