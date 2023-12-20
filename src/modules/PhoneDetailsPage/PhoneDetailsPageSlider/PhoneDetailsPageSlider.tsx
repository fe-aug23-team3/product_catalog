/* eslint-disable */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './PhoneDetailsPageSlider.scss';
import { useContext } from 'react';
import { PhonesContext } from '../../../store/GlobalProvider';
import white from '../../../img/white-phone.jpg'

export const baseUrl = process.env.PUBLIC_URL + '/images';

export function ItemPageSlider() {
  const { photos } = useContext(PhonesContext);

  const changedPhotosUrl = photos.map((photo: string) => {
    const parts = photo.split('/public/');

    const newLink = parts[0] + '/public/' + parts[2];

    return newLink;
  });

  const settings = {
    customPaging(i: number) {
      return (
        <div className="paging-container">
          <a>
            <img src={changedPhotosUrl[i]} onError={(error) => {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
             // @ts-ignore
              error.target.src = white
            }} className="image" alt='' />
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
    focusOnSelect: true,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {changedPhotosUrl.length > 0 && (
            changedPhotosUrl.map((photo: string) => {
              return (
                <div key={photo}>
                  <img src={photo} className="main-image" />
                </div>
              );
            })
          )}
        </Slider>
      </div>
    </>
  );
}
