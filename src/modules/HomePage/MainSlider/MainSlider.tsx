import React, { Component, useState, useEffect } from 'react';
import Slider from 'react-slick'; // eslint-disable-line
import styles from './MainSlider.module.scss';
import 'slick-carousel/slick/slick.css'; // eslint-disable-line
import 'slick-carousel/slick/slick-theme.css'; // eslint-disable-line
import image from './images/Banner.png';
import image2 from './images/Bannerr.png';
import image3 from './images/banner_image_mobile_version.jpg';
import './Arrow.scss';

export const MainSlider: React.FC = () => {
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  const settings = {
    dots: screenSize.width > 639,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: screenSize.width > 639,
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
                <p>iPhone 14 Pro</p>
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
                <p>iPhone 14 Pro</p>
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
