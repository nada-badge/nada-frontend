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
  ButtonBox,
} from '../../../styles/Register';

const EmailForm = ({ dispatchField, onSubmit, order }) => {
  const [error, setError] = useState(null); // error 메세지 관리

  const errorMessages = {
    email_format: '이메일 형식이 올바르지 않아요.',
    email_duplicate: '이미 등록된 이메일이에요.',
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
      return data.result;
    },
  });

  const handleFormSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      if (checkEmail()) {
        // 이메일이 유효할때, 중복 검사 진행
        const { data } = await refetch();
        setError(data ? null : errorMessages.email_duplicate);
        if (data) {
          onSubmit(e);
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [email],
  );

  return (
    <div>
      <Title>
        <h1>
          이메일을
          <br />
          입력해 주세요
        </h1>
      </Title>
      <Form onSubmit={handleFormSubmit} id={order}>
        <div>
          <InputWrapper $position>
            <input
              name="email"
              placeholder="이메일"
              onChange={dispatchField}
              value={email}
              required
            />
          </InputWrapper>
        </div>
      </Form>
      {error && (
        <Caution $position={{ top: 182 }}>
          <div className="ImagWrapper">
            <img
              alt="Img"
              src="https://generation-sessions.s3.amazonaws.com/2332251fd8ff291f5e2010e035672d11/img/-.svg"
            />
          </div>
          <ErrorMessage>{error}</ErrorMessage>
        </Caution>
      )}
      <div>
        <ButtonBox form={order}>
          <div>다음</div>
        </ButtonBox>
      </div>
    </div>
  );
};
export default EmailForm;
