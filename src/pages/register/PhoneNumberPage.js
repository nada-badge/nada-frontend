import Button from '../../components/common/Button';

const PhoneNumberPage = () => {
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
    <div>
      <form>
        <input name="phoneNumber" placeholder="번호" onBlur={onBlur} required />
        <Button>다음</Button>
      </form>
    </div>
  );
};
export default PhoneNumberPage;
