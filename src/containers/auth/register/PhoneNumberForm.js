import { useCallback } from 'react';
import { useState } from 'react';
import {
  Form,
  Title,
  InputWrapper,
  Caution,
  ErrorMessage,
} from '../../../styles/Register';

const PhoneNumberForm = ({ dispatchField, onSubmit, order }) => {
  const [error, setError] = useState(null);

  const checkNumber = useCallback((phoneNumber) => {
    const NumberRegex = /^01([0|1|6|7|8|9])\d{3,4}\d{4}$/;
    setError(
      NumberRegex.test(phoneNumber) ? null : '올바른 번호 형식이 아닙니다.',
    );
    return NumberRegex.test(phoneNumber);
  }, []);

  const onBlur = (e) => {
    let { value } = e.target;

    // 비밀번호 입력 후, '-' 문자열 자동으로 삽입하기
    checkNumber(value);
  };

  return (
    <div>
      <Title>
        <h1>
          휴대폰 번호를
          <br />
          입력해 주세요
        </h1>
      </Title>
      <Form onSubmit={onSubmit} id={order}>
        <div>
          <InputWrapper $position>
            <input
              name="phoneNumber"
              placeholder="번호"
              onChange={dispatchField}
              onBlur={onBlur}
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
    </div>
  );
};
export default PhoneNumberForm;
