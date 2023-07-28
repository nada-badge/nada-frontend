import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/common/Button';
import useUserMutation from '../../modules/queries/registerQuery';
import { changeField } from '../../modules/auth';

const PhoneNumberPage = () => {
  const dispatch = useDispatch();

  const { mutate } = useUserMutation();

  const onBlur = (e) => {
    let { value } = e.target;

    if (value.match(/^\d{11}$/)) {
      value =
        value.substr(0, 3) +
        '-' +
        value.substr(3, 4) +
        '-' +
        value.substr(7, 4);
      e.target.value = value;
    }
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: 'register', key: name, value }));
  };

  const register = useSelector(({ auth }) => auth.register);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('useRegister', register);
    mutate(register);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="phoneNumber"
          placeholder="번호"
          onChange={onChange}
          onBlur={onBlur}
          required
        />
        <Button>다음</Button>
      </form>
    </div>
  );
};
export default PhoneNumberPage;
