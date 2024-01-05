import { useEffect } from 'react';
import AuthTemplate from '../../components/auth/AuthTemplate';
import { LoginBox, Logo, LoginBtn, LogoBox } from '../../styles/Login';
import { Link } from 'react-router-dom';
import { changeBarStatus } from '../../modules/bar';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const LinkBox = styled.div`
  height: 140px;
  position: relative;
  width: 345px;
  margin: 0 auto;
  margin-top: 316px;

  @media screen and (max-width: 345px) {
    width: 100%;
  }

  @media screen and (max-height: 670px) {
    margin-top: calc(100vh - 370px);
  }
`;

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
        <LogoBox className="LogoBox">
          <Logo
            alt="Logo"
            src="https://generation-sessions.s3.amazonaws.com/dccd720493d3d99169fdd13158e459fa/img/logo.svg"
          />
        </LogoBox>
        <LinkBox className="LinkBox">
          <Link to="/login/personal">
            <LoginBtn $position>
              <div>개인 회원</div>
            </LoginBtn>
          </Link>
          <Link to="/login/team">
            <LoginBtn $position={{ top: 76 }} className="team">
              <div>단체 회원</div>
            </LoginBtn>
          </Link>
        </LinkBox>
      </LoginBox>
    </AuthTemplate>
  );
};

export default LogInSelect;
