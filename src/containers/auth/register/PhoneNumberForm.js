import { useCallback } from 'react';
import { useState } from 'react';
import { Form, InputWrapper } from '../../../styles/Register';
import { useEffect } from 'react';
import { phoneNumberSelector } from '../../../modules/auth';
import { useSelector } from 'react-redux';
import Button from '../../../components/auth/Button';
import Title from '../../../components/auth/Title';
import Caution from '../../../components/auth/Caution';

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
      <Title text={'휴대폰 번호를'} />
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
          {error && <Caution error={error} />}
        </div>
      </Form>

      <Button form={order} text={'다음'} opacity={opacity} />
    </div>
  );
};
export default PhoneNumberForm;
