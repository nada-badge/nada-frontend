import './style.css';
import { Link } from 'react-router-dom';

const LoginFooter = () => {
  return (
    <div className="div-6">
      <div className="view">
        <Link className="text-wrapper-5" to="/register">
          회원 가입하기
        </Link>
        <img
          className="vector-2"
          alt="Vector"
          src="https://generation-sessions.s3.amazonaws.com/beff57bde8d3f4caef4459378547b83e/img/vector-2-1.svg"
        />
      </div>
      <div className="view-2">
        <div className="text-wrapper-6">아이디/비밀번호 찾기</div>
        <img
          className="vector-2"
          alt="Vector"
          src="https://generation-sessions.s3.amazonaws.com/beff57bde8d3f4caef4459378547b83e/img/vector-2-1.svg"
        />
      </div>
    </div>
  );
};

export default LoginFooter;
