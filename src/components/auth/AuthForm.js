// 회원가입 또는 로그인 폼을 보여주기
import {
  Frame2,
  EmailBox,
  PasswordBox,
  ButtonBox,
  LoginBtn,
} from '../../styles/Login';

const AuthForm = ({ form, onChange, onSubmit }) => {
  return (
    <Frame2 onSubmit={onSubmit}>
      <EmailBox>
        <input
          name="email"
          email={form.email}
          onChange={onChange}
          placeholder="아이디"
          required
        />
      </EmailBox>
      <PasswordBox>
        <input
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
          required
        />
      </PasswordBox>
      <ButtonBox>
        <LoginBtn>로그인</LoginBtn>
      </ButtonBox>
    </Frame2>
  );
};
export default AuthForm;
