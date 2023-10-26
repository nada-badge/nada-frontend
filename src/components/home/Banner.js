import styled from 'styled-components';
import BannerSlider from './Slider';

const BannerContainer = styled.div`
  box-shadow: var(--drop-shadow);
  height: 118px;
  left: 0;
  position: relative;
  /* top: 89px;  상단, 하단 네비게이션 적용후 수정 예정*/
  width: 375px;

  & > .IndicatorWrapper {
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
      <BannerSlider />
      <div className="IndicatorWrapper">
        <div className="text">1/5</div>
      </div>
    </BannerContainer>
  );
};

export default Banner;
