import { Link } from 'react-router-dom';
import { Div6 } from '../../../styles/Login';

const LoginFooter = ({ type }) => {
  return (
    <Div6>
      <div>
        <Link to="/register">회원 가입하기</Link>
        <img
          className="vector-2"
          alt="Vector"
          src="https://generation-sessions.s3.amazonaws.com/beff57bde8d3f4caef4459378547b83e/img/vector-2-1.svg"
        />
      </div>
      <div className="findId">
        <Link>아이디/비밀번호 찾기</Link>
        <img
          className="vector-2"
          alt="Vector"
          src="https://generation-sessions.s3.amazonaws.com/beff57bde8d3f4caef4459378547b83e/img/vector-2-1.svg"
        />
      </div>
    </Div6>
  );
};

export default LoginFooter;
