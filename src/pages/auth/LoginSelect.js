import React from 'react';
import AuthTemplate from '../../components/auth/AuthTemplate';
import { LoginBox, Logo, LoginBtn } from '../../styles/Login';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkBox = styled.div`
  height: 140px;
  left: 15px;
  position: absolute;
  top: 576px;
  width: 345px;
`;

const LogInSelect = () => {
  return (
    <AuthTemplate>
      <LoginBox>
        <Logo
          alt="Logo"
          src="https://generation-sessions.s3.amazonaws.com/dccd720493d3d99169fdd13158e459fa/img/logo.svg"
        />
        <LinkBox>
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
