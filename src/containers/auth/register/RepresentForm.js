import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { authSelector } from '../../../modules/auth';
import { InputWrapper, Form } from '../../../styles/Register';
import Button from '../../../components/auth/Button';
import Title from '../../../components/auth/Title';
import Caution from '../../../components/auth/Caution';

const RepresentForm = ({ dispatchField, onSubmit, order, type }) => {
  const [error, setError] = useState(null); // error 메세지 관리

  const represent = useSelector(authSelector(type, 'represent'));

  const handleFormSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const koreanNameRegex = new RegExp(/^[가-힣]{2,5}$/);
      setError(
        koreanNameRegex.test(represent) ? null : '올바른 이름이 아닙니다.',
      );
      if (error === null && represent) {
        onSubmit(e);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [error, represent],
  );

  return (
    <div>
      <Title text={'대표자 이름을'} />
      <Form onSubmit={handleFormSubmit} id={order}>
        <div>
          <InputWrapper $position>
            <input
              name="represent"
              placeholder="대표자 이름"
              onChange={dispatchField}
              value={represent}
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

export default RepresentForm;
