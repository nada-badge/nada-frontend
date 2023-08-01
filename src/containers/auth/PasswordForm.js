import { useState } from 'react';
import { produce } from 'immer';
import { useSelector } from 'react-redux';
import { passwordSelector } from '../../modules/auth';
import Button from '../../components/common/Button';

const PasswordForm = ({
  dispatchField,
  ErrorMessage,
  onSubmit,
  errorMessages,
}) => {
  const [error, setError] = useState({
    password: null,
    passwordConfirm: null,
  }); // error 메세지 관리하기

  // password 상태 가져오기
  const { password, passwordConfirm } = useSelector(passwordSelector);

  const onChange = (e) => {
    const { value, name } = e.target;
    // redux에 상태 반영하기
    dispatchField(e);

    if (name === 'password') {
      checkPassword(value); // 비밀번호 유효성 검사
    }
    if (name === 'passwordConfirm') {
      checkPasswordConfirm({ password, value }); // 비밀번호 일치 검사
    }
  };

  // 비밀번호 유효성 검사
  const checkPassword = (value) => {
    const passwordRegexp =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    const isValid = passwordRegexp.test(value);
    setError(
      produce((draft) => {
        draft.password = isValid ? null : errorMessages.password;
      }),
    );
    // '비밀번호 확인'에 값이 있으면 '일치'까지 검사하기
    if (passwordConfirm) {
      checkPasswordConfirm({ value, password });
    }
  };

  // 비밀번호 일치 검사
  const checkPasswordConfirm = ({ password, value }) => {
    setError(
      produce((draft) => {
        draft.passwordConfirm =
          password === value ? null : errorMessages.passwordConfirm;
      }),
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="password"
        name="password"
        placeholder="비밀번호"
        onChange={onChange}
        value={password}
        required
      />
      {error && <ErrorMessage>{error.password}</ErrorMessage>}
      <input
        type="password"
        name="passwordConfirm"
        placeholder="비밀번호"
        onChange={onChange}
        value={passwordConfirm}
        required
      />
      {error && <ErrorMessage>{error.passwordConfirm}</ErrorMessage>}
      <Button>닉네임으로</Button>
    </form>
  );
};
export default PasswordForm;
