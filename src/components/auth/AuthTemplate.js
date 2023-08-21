import styled from 'styled-components';

// 회원가입, 로그인 페이지의 레이아웃을 담당하는 컴포넌트
const LogInPersonal = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const AuthTemplate = ({ children }) => {
  return <LogInPersonal>{children}</LogInPersonal>;
};

export default AuthTemplate;
