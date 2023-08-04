import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import client from '../../../lib/api/client';
import { emailSelector } from '../../../modules/auth';
import { useCallback } from 'react';
import {
  Form,
  Title,
  InputWrapper,
  Caution,
  ErrorMessage,
} from '../../../styles/Register';

const EmailForm = ({ dispatchField, onSubmit, order }) => {
  const [isBlur, setBlur] = useState(false); // 키보드 포커스 감지, Query문 조건 실행
  const [error, setError] = useState(null); // error 메세지 관리

  const errorMessages = {
    email_format: '올바른 이메일 형식이 아닙니다.',
    email_duplicate: '중복된 이메일 입니다.',
  };

  const email = useSelector(emailSelector); // email 상태 가져오기

  // email 유효성 검사
  const checkEmail = useCallback(() => {
    const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    setError(emailRegexp.test(email) ? null : errorMessages.email_format);
    return emailRegexp.test(email);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  // email 중복 검사
  const { refetch } = useQuery({
    queryKey: ['getEmail'],
    queryFn: async () => {
      const { data } = await client.get('user/checkEmailOverlap', {
        params: { email: email },
      });
      setError(data.result ? null : errorMessages.email_duplicate);
      return data;
    },
    enabled: isBlur,
  });

  const onBlur = () => {
    if (checkEmail()) {
      // 이메일이 유효할때, 중복 검사 진행
      setBlur(true);
      refetch();
    }
  };

  return (
    <div>
      <Title>
        <h1>
          이메일을
          <br />
          입력해 주세요
        </h1>
      </Title>
      <Form onSubmit={onSubmit} id={order}>
        <div>
          <InputWrapper $position>
            <input
              name="email"
              placeholder="이메일"
              onChange={dispatchField}
              value={email}
              onBlur={onBlur}
              required
            />
          </InputWrapper>
        </div>
      </Form>
      {error && (
        <Caution>
          <div>
            <img
              alt="Img"
              src="https://generation-sessions.s3.amazonaws.com/2332251fd8ff291f5e2010e035672d11/img/-.svg"
            />
          </div>
          <ErrorMessage>{error}</ErrorMessage>
        </Caution>
      )}
    </div>
  );
};
export default EmailForm;
