/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { CSSProperties, useState, useEffect } from 'react';
import Slider from 'react-slick';
import styles from './MainSlider.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image2 from './images/Bannerr.png';
import image3 from './images/banner_image_mobile_version.jpg';

interface ArrowProps {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
  <div
    className={`${styles.arrow} ${styles.next_arrow}`}
    style={{
      display: 'block',
      position: 'absolute',
      top: '0',
      right: '-25px',
    }}
    onClick={onClick}
  />
);

const PrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
  <div
    className={`${styles.arrow} ${styles.prev_arrow}`}
    style={{
      display: 'block',
      position: 'absolute',
      top: '0',
      left: '-25px',
    }}
    onClick={onClick}
  />
);

export const MainSlider: React.FC = () => {
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: screenSize.width > 639,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };

    window.addEventListener('resize', updateDimension);

    return () => {
      window.removeEventListener('resize', updateDimension);
    };
  }, [screenSize]);

  return screenSize.width > 639 ? (
    <div className={styles.container}>
      <Slider {...settings} className={styles.Slider}>
        <div className={styles.card_left}>
          <div className={styles.card}>
            <div className={styles.card_box}>
              <div className={styles.text_wrapper}>
                <p className={styles.card_box_text}>
                  Now available
                  <br />
                  in our store!
                </p>
                <p className={styles.card_box_Sub_text}>Be the first!</p>
                <button type="button" className={styles.card_button_text}>
                  ORDER NOW
                </button>
              </div>
            </div>
            <div className={styles.card_item}>
              <div className={styles.card_promo}>
                <p className={styles.card_promo}>iPhone 14 Pro</p>
                <p className={styles.card_sub_promo}>Pro. Beyond.</p>
              </div>
              <div className={styles.card_img}>
                <img
                  className={styles.card_img_content}
                  src={image2}
                  alt="card"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card_left}>
          <div className={styles.card}>
            <div className={styles.card_box}>
              <div className={styles.text_wrapper}>
                <p className={styles.card_box_text}>
                  Now available
                  <br />
                  in our store!
                </p>
                <p className={styles.card_box_Sub_text}>Be the first!</p>
                <button type="button" className={styles.card_button_text}>
                  ORDER NOW
                </button>
              </div>
            </div>
            <div className={styles.card_item}>
              <div className={styles.card_promo}>
                <p className={styles.card_promo}>iPhone 14 Pro</p>
                <p className={styles.card_sub_promo}>Pro. Beyond.</p>
              </div>
              <div className={styles.card_img}>
                <img
                  className={styles.card_img_content}
                  src={image2}
                  alt="card"
                />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  ) : (
    <div className={styles.Mcontainer}>
      <Slider {...settings}>
        <div className={styles.mobileVersion}>
          <img className={styles.mobContent} src={image3} alt="card" />
        </div>
        <div className={styles.mobileVersion}>
          <img className={styles.mobContent} src={image3} alt="card" />
        </div>
      </Slider>
    </div>
  );
};
