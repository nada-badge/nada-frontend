import { useCallback } from 'react';
import { useState } from 'react';
import {
  Form,
  Title,
  InputWrapper,
  Caution,
  ErrorMessage,
  ButtonBox,
} from '../../../styles/Register';
import { useEffect } from 'react';
import { phoneNumberSelector } from '../../../modules/auth';
import { useSelector } from 'react-redux';

const PhoneNumberForm = ({ dispatchField, onSubmit, order }) => {
  const [error, setError] = useState(null);
  const [opacity, setOpacity] = useState(0.3);

  const phoneNumber = useSelector(phoneNumberSelector);

  const checkNumber = useCallback((phoneNumber) => {
    const NumberRegex = /^01([0|1|6|7|8|9])\d{3,4}\d{4}$/;
    setError(
      NumberRegex.test(phoneNumber) ? null : '올바른 번호 형식이 아닙니다.',
    );
    return NumberRegex.test(phoneNumber);
  }, []);

  const onChange = (e) => {
    dispatchField(e);
    checkNumber(e.target.value);
    setOpacity(error ? 0.3 : 1);
  };

  useEffect(() => {
    setOpacity(phoneNumber !== '' ? (error ? 0.3 : 1) : 0.3);
  }, [error, phoneNumber]);

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
              onChange={onChange}
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
        <ButtonBox form={order} style={{ opacity }} disabled={opacity !== 1}>
          <div>다음</div>
        </ButtonBox>
      </div>
    </div>
  );
};
export default PhoneNumberForm;
