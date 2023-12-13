/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BrandNewModelsSlider.scss';
import { ProductCard } from '../../ProductCard';
import { getTheNewestPhones } from '../../../utils/fetchClient';
import { Phone } from '../../../types/Phone';

export const BrandNewModelsSlider = () => true;

// export const BrandNewModelsSlider: React.FC<boolean> = () => {
//   const [newModels, setNewModels] = useState([]);

  useEffect(() => {
    getTheNewestPhones().then((res) => setNewModels(res.data));
  }, []);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 639,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div>
      <h2 className="slider__header">Brand new models</h2>
      <Slider {...settings}>
        {newModels.map((phone: Phone) => {
          return <ProductCard key={phone.id} model={phone} />;
        })}
      </Slider>
    </div>
  );
};
