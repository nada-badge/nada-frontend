import { Div3, SocialBtn } from '../../../styles/Login';

const SocialLogin = () => {
  return (
    <Div3>
      <SocialBtn className="kakao">
        <div>
          <img
            alt="Vector"
            src="https://generation-sessions.s3.amazonaws.com/beff57bde8d3f4caef4459378547b83e/img/vector-1.png"
          />
          <div>카카오 로그인</div>
        </div>
      </SocialBtn>
      <SocialBtn className="apple">
        <div>
          <img
            height="19px"
            width="15px"
            alt="Vector"
            src="https://generation-sessions.s3.amazonaws.com/beff57bde8d3f4caef4459378547b83e/img/vector.png"
          />
          <div>Apple 로그인</div>
        </div>
      </SocialBtn>
    </Div3>
  );
};

export default SocialLogin;
