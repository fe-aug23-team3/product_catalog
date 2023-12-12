/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './cardExampleStyle/styles/index.scss';
import './BrandNewModelsSlider.scss';
import cardExampleImage from './cardExampleStyle/styles/imac.jpeg';

const CardExample: React.FC = () => {
  return (
    <div className="card" data-qa="card">
      <img
        src={cardExampleImage}
        className="card__image"
        alt="APPLE A1419 iMac 27 Retina 5K Monoblock (MNED2UA/A)"
      />

      <h2 className="card__title">
        APPLE A1419 iMac 27 Retina 5K Monoblock (MNED2UA/A)
      </h2>
      <p className="card__code">Product code: 195434</p>
      <div className="card__rate">
        <p className="card__reviews">Reviews: 5</p>
      </div>

      <div className="card__price">
        <p className="text">Price:</p>
        <p className="value">$2,199</p>
      </div>

      <a href="/" className="card__link" data-qa="hover">
        Buy
      </a>
    </div>
  );
};

export const BrandNewModelsSlider: React.FC = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h2 className="slider__header">Brand new models</h2>
      <Slider {...settings}>
        <CardExample />
        <CardExample />
        <CardExample />
        <CardExample />
        <CardExample />
        <CardExample />
        <CardExample />
        <CardExample />
      </Slider>
    </div>
  );
};
