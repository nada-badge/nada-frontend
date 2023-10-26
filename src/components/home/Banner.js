import styled from 'styled-components';
import BannerSlider from './Slider';

const BannerContainer = styled.div`
  box-shadow: var(--drop-shadow);
  height: 118px;
  left: 0;
  position: relative;
  /* top: 89px;  상단, 하단 네비게이션 적용후 수정 예정*/
  width: 375px;
`;

const Banner = () => {
  return (
    <BannerContainer>
      <BannerSlider />
    </BannerContainer>
  );
};

export default Banner;
