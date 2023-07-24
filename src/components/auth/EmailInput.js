import AuthTemplate from './AuthTemplate';

const EmailInput = () => {
  return (
    <AuthTemplate>
      <input name="email" placeholder="이메일" required />
    </AuthTemplate>
  );
};
export default EmailInput;
