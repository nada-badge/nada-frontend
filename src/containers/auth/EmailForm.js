import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useRef } from 'react';
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
  const [isBlur, setBlur] = useState(false);
  const [error, setError] = useState(null);

  const email = useSelector(emailSelector);

  const transientName = useRef(null);

  const checkEmail = () => {
    const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegexp.test(email)) {
      setError(errorMessages.email_format);
    }
    return emailRegexp.test(email);
  };

  const { refetch } = useQuery({
    queryKey: ['getEmail'],
    queryFn: async () => {
      const { data } = await client.get('user/checkEmailOverlap', {
        params: { email: email },
      });
      if (!data.result) {
        setError(errorMessages.email_duplicate);
      }
      return data;
    },
    enabled: isBlur,
  });

  const onBlur = () => {
    if (transientName.current !== email) {
      transientName.current = email;
      setError(null);
      if (checkEmail()) {
        setBlur(true);
        refetch();
      }
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
        ref={transientName}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Button>비밀번호로</Button>
    </form>
  );
};
export default EmailForm;
