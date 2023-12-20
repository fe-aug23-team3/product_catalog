import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './SliderComponent.module.scss';
import './SliderComponentArrows.scss';
import { ProductCard } from '../ProductCard';
import { Phone } from '../../../../types/Phone';

type SliderProps = {
  data: Phone[];
  header: string;
};

export const SliderComponent: React.FC<SliderProps> = ({ data, header }) => {
  const settings = {
    infinite: true,
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
        breakpoint: 592,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <section className={style.slider__wrapper}>
      <h2 className={style.slider__header}>{header}</h2>
      <Slider {...settings}>
        {data.map((phone) => (
          <ProductCard key={phone.id} model={phone} />
        ))}
      </Slider>
    </section>
  );
};
