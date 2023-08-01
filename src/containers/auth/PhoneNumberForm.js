import Button from '../../components/common/Button';

const PhoneNumberForm = ({ dispatchField, onSubmit }) => {
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

  return (
    <form onSubmit={onSubmit}>
      <input
        name="phoneNumber"
        placeholder="번호"
        onChange={dispatchField}
        onBlur={onBlur}
        required
      />
      <Button>다음</Button>
    </form>
  );
};
export default PhoneNumberForm;