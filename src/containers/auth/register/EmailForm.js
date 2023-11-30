import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import client from '../../../lib/api/client';
import { authSelector } from '../../../modules/auth';
import { useCallback } from 'react';
import { Form, InputWrapper } from '../../../styles/Register';
import Button from '../../../components/auth/Button';
import Title from '../../../components/auth/Title';
import Caution from '../../../components/auth/Caution';
import useDebounce from '../../../modules/useDebounce';

const errorMessages = {
  email_format: '이메일 형식이 올바르지 않아요.',
  email_duplicate: '이미 등록된 이메일이에요.',
};

const EmailForm = ({ dispatchField, onSubmit, order, type }) => {
  const [error, setError] = useState(null); // error 메세지 관리
  const email = useSelector(authSelector(type, 'email')); // email 상태 가져오기
  const debounceVal = useDebounce(email);

  // email 유효성 검사
  const checkEmail = useCallback(() => {
    const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    setError(emailRegexp.test(email) ? null : errorMessages.email_format);
    return emailRegexp.test(email);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  // email 중복 검사
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await client.get('user/email', {
          params: { email: email },
        });
        setError(data.result ? null : errorMessages.email_duplicate);
      } catch (error) {
        console.error('데이터 가져오기 오류:', error);
      }
    };

    if (debounceVal && checkEmail()) fetchData(); // fetchData 함수 호출
  }, [debounceVal]);

  return (
    <div>
      <Title text={(type === 'team' ? '단체 ' : '').concat('이메일을')} />
      <Form className="Form" onSubmit={onSubmit} id={order}>
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
          {error && <Caution error={error} />}
        </div>
      </Form>
      <Button form={order} text={'다음'} />
    </div>
  );
};
export default EmailForm;
