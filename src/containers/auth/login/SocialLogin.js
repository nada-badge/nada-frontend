import './style.css';
const SocialLogin = () => {
  return (
    <div className="div-3">
      <div className="button-kakao">
        <div className="div-4">
          <img
            className="vector"
            alt="Vector"
            src="https://generation-sessions.s3.amazonaws.com/beff57bde8d3f4caef4459378547b83e/img/vector-1.png"
          />
          <div className="text-wrapper-3">카카오 로그인</div>
        </div>
      </div>
      <div className="button-apple">
        <div className="div-5">
          <img
            className="img"
            alt="Vector"
            src="https://generation-sessions.s3.amazonaws.com/beff57bde8d3f4caef4459378547b83e/img/vector.png"
          />
          <div className="text-wrapper-4">Apple 로그인</div>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
