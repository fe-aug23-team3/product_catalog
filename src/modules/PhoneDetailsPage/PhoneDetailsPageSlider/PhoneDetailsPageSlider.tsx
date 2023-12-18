/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prefer-template */
/* eslint-disable jsx-a11y/alt-text */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PhoneDetailsPageSlider.scss';

export const baseUrl = process.env.PUBLIC_URL + '/images';

export function ItemPageSlider() {
  const settings = {
    customPaging(i: number) {
      return (
        <div className="paging-container">
          <a>
            <img src={`${baseUrl}/abstract0${i + 1}.jpg`} className="image" />
          </a>
        </div>
      );
    },
    dots: true,
    arrows: false,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <h2 className="head">Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)</h2>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={`${baseUrl}/abstract01.jpg`} className="main-image" />
          </div>
          <div>
            <img src={`${baseUrl}/abstract02.jpg`} className="main-image" />
          </div>
          <div>
            <img src={`${baseUrl}/abstract03.jpg`} className="main-image" />
          </div>
          <div>
            <img src={`${baseUrl}/abstract04.jpg`} className="main-image" />
          </div>
          <div>
            <img src={`${baseUrl}/abstract05.jpg`} className="main-image" />
          </div>
        </Slider>
      </div>
    </>
  );
}
