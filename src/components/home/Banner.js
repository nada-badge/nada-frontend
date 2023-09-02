import styled from 'styled-components';

const BannerContainer = styled.div`
  box-shadow: var(--drop-shadow);
  height: 118px;
  left: 0;
  position: relative;
  /* top: 89px;  상단, 하단 네비게이션 적용후 수정 예정*/
  width: 375px;

  & > img {
    height: 118px;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 375px;
  }

  & > div {
    align-items: center;
    background-color: #00000099;
    border-radius: 12px;
    display: inline-flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    left: 326px;
    padding: 2px 8px;
    position: absolute;
    top: 84px;

    & > .text {
      color: #ffffff;
      font-family: var(--caption-02-font-family);
      font-size: var(--caption-02-font-size);
      font-style: var(--caption-02-font-style);
      font-weight: var(--caption-02-font-weight);
      letter-spacing: var(--caption-02-letter-spacing);
      line-height: var(--caption-02-line-height);
      margin-top: -1px;
      position: relative;
      white-space: nowrap;
      width: fit-content;
    }
  }
`;
const Banner = () => {
  return (
    <BannerContainer>
      <img
        alt="banner"
        src="https://generation-sessions.s3.amazonaws.com/34294950d7167123fb2eefcf02c0f744/img/image-8@2x.png"
      />
      <div>
        <div className="text">1/5</div>
      </div>
    </BannerContainer>
  );
};

export default Banner;
