import Slider from 'react-slick';
import Banner1 from '../../images/Banner/Banner1.png';
import Banner2 from '../../images/Banner/Banner2.png';
import Banner3 from '../../images/Banner/Banner3.png';
import Banner4 from '../../images/Banner/Banner4.png';
import Banner5 from '../../images/Banner/Banner5.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
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
    </div>
  );
};

export default BannerSlider;
