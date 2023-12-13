/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// import React, { useEffect, useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './BrandNewModelsSlider.scss';
// import { ProductCard } from '../../shared/components/ProductCard/ProductCard';
// import { getTheNewestPhones } from '../../../utils/fetchClient';

interface Phone {
  name: string;
  fullPrice: string;
  price: string;
  screen: string;
  capacity: string;
  ram: string;
  image: string;
  color: string;
  category: string;
  discount: string;
}

export const BrandNewModelsSlider = () => true;

// export const BrandNewModelsSlider: React.FC<boolean> = () => {
//   const [newModels, setNewModels] = useState([]);

//   useEffect(() => {
//     getTheNewestPhones().then((res) => setNewModels(res.data));
//   }, []);

//   const settings = {
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1199,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 639,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   const testProduct = {
//     title: 'Test title',
//     fullPrice: '999',
//     currentPrice: '800',
//     screen: '6.2 IPS',
//     capacity: '64 GB',
//     ram: '5 GB',
//   };

//   return (
//     // <div>
//     //   <h2 className="slider__header">Brand new models</h2>
//     //   <Slider {...settings}>
//     //     {newModels.map((model) => (
//     //       <ProductCard key={model.id} product={model} />
//     //     ))}
//     //   </Slider>
//     // </div>
//     false
//   );
// };
