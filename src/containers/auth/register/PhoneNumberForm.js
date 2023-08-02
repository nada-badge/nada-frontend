import Button from '../../../components/common/Button';

const PhoneNumberForm = ({ dispatchField, onSubmit }) => {
  const onBlur = (e) => {
    let { value } = e.target;

    // 비밀번호 입력 후, '-' 문자열 자동으로 삽입하기
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
