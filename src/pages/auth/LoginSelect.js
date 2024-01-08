import { useEffect } from 'react';
import AuthTemplate from '../../components/auth/AuthTemplate';
import { LoginBox, LoginBtn } from '../../styles/Login';
import { Link } from 'react-router-dom';
import { changeBarStatus } from '../../modules/bar';
import { useDispatch } from 'react-redux';
import { MySpecLogo } from '../../icon/MySpecLogo';

const LogInSelect = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      changeBarStatus({
        headerState: '',
        text: '',
        isShowBottom: false,
      }),
    );
  }, []);

  return (
    <AuthTemplate className="AuthTemplate">
      <LoginBox className="LoginBox">
        <MySpecLogo />
        <LoginBtn className="LoginBtn" style={{ marginTop: '316px' }}>
          <Link to="/login/personal">개인 회원</Link>
          <Link to="/login/team">단체 회원</Link>
        </LoginBtn>
      </LoginBox>
    </AuthTemplate>
  );
};

export default LogInSelect;
