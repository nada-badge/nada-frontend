import { useState } from 'react';
import { produce } from 'immer';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { passwordSelector } from '../../modules/auth';
import Button from '../../components/common/Button';

const PasswordPage = ({
  dispatchField,
  ErrorMessage,
  onSubmit,
  errorMessages,
}) => {
  const [error, setError] = useState({
    password: null,
    passwordConfirm: null,
  });

  const { password, passwordConfirm } = useSelector(passwordSelector);

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatchField(e);

    if (name === 'password') {
      checkPassword(value);
    }
    if (name === 'passwordConfirm') {
      checkPasswordConfirm({ password, value });
    }
  };

  const checkPassword = (value) => {
    const passwordRegexp =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    const isValid = passwordRegexp.test(value);
    setError(
      produce((draft) => {
        draft.password = isValid ? null : errorMessages.password;
      }),
    );
    if (passwordConfirm) {
      checkPasswordConfirm({ value, password });
    }
  };

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
export default PasswordPage;
