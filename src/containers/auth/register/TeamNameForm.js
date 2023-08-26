import { useSelector } from 'react-redux';
import { authSelector } from '../../../modules/auth';
import { InputWrapper, Form } from '../../../styles/Register';
import Button from '../../../components/auth/Button';
import Title from '../../../components/auth/Title';

const TeamNameForm = ({ dispatchField, onSubmit, order, type }) => {
  const groupName = useSelector(authSelector(type, 'groupName')); // userName 상태 가져오기

  return (
    <div>
      <Title text={'단체 이름을'} />
      <Form onSubmit={onSubmit} id={order}>
        <div>
          <InputWrapper $position>
            <input
              name="groupName"
              placeholder="단체 이름"
              onChange={dispatchField}
              value={groupName}
              required
            />
          </InputWrapper>
        </div>
      </Form>
      <Button form={order} text={'다음'} />
    </div>
  );
};

export default TeamNameForm;
