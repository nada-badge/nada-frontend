import React from 'react';
import AuthTemplate from '../../components/auth/AuthTemplate';
import { LoginBox, Logo, LoginBtn } from '../../styles/Login';
import { Link } from 'react-router-dom';

const LogInSelect = () => {
  return (
    <AuthTemplate>
      <LoginBox>
        <Logo
          alt="Logo"
          src="https://generation-sessions.s3.amazonaws.com/dccd720493d3d99169fdd13158e459fa/img/logo.svg"
        />
        <Link to="/login/personal">
          <LoginBtn $position={{ top: 576 }}>
            <div>개인 회원</div>
          </LoginBtn>
        </Link>
        <Link to="/login/team">
          <LoginBtn $position={{ top: 652 }} className="team">
            <div>단체 회원</div>
          </LoginBtn>
        </Link>
      </LoginBox>
    </AuthTemplate>
  );
};

export default LogInSelect;
