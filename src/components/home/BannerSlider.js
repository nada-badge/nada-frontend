import Slider from 'react-slick';
import Banner1 from '../../images/Banner/Banner1.png';
import Banner2 from '../../images/Banner/Banner2.png';
import Banner3 from '../../images/Banner/Banner3.png';
import Banner4 from '../../images/Banner/Banner4.png';
import Banner5 from '../../images/Banner/Banner5.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { caption_02 } from '../../styles/fontStyle';

const SliderWrapper = styled.div`
  box-shadow: var(--drop-shadow);
  height: 118px;
  left: 0;
  position: relative;
  /* top: 89px;  상단, 하단 네비게이션 적용후 수정 예정*/
  width: 100%;

  // '1/5' 와 같은 페이징 표시
  & > div > .custom_paging {
    position: absolute;
    top: 84px;
    left: 326px;
    margin: 0;
    padding: 0;

    & > li {
      display: none;
      background-color: #00000099;
      border-radius: 12px;
      justify-content: center;
      padding: 2px 8px;
      width: fit-content;

      & > div {
        ${caption_02('#ffffff')}
      }
    }
    & > .slick-active {
      display: block;
    }
  }
`;

const BannerSlider = () => {
  const settings = {
    dots: true, // Page Indicator Dot
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'custom_paging',
    customPaging: function (slider) {
      return <div>{slider + 1}/5</div>;
    },
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>
        <div>
          <img alt="banner" src={Banner1} />
        </div>
        <div>
          <img alt="banner" src={Banner2} />
        </div>
        <div>
          <img alt="banner" src={Banner3} />
        </div>
        <div>
          <img alt="banner" src={Banner4} />
        </div>
        <div>
          <img alt="banner" src={Banner5} />
        </div>
      </Slider>
    </SliderWrapper>
  );
};

export default BannerSlider;
