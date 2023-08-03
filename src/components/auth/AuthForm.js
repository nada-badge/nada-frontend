// 회원가입 또는 로그인 폼을 보여주기
import { Frame2, InputBox, LoginBtn } from '../../styles/Login';

const AuthForm = ({ form, onChange, onSubmit }) => {
  return (
    <Frame2 onSubmit={onSubmit}>
      <InputBox className="email">
        <input
          name="email"
          email={form.email}
          onChange={onChange}
          placeholder="아이디"
          required
        />
      </InputBox>
      <InputBox className="password">
        <input
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
          required
        />
      </InputBox>
      <LoginBtn>
        <div>로그인</div>
      </LoginBtn>
    </Frame2>
  );
};
export default AuthForm;
