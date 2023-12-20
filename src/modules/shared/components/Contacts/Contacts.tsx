import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import styles from './Contacts.module.scss';
import image2 from './c_images/IMG_1733.jpg';
import { ReactComponent as Linkedin } from '../../icons/linkedin.svg';
import { ReactComponent as Telegram } from '../../icons/telegram.svg';
import { ReactComponent as GitHub } from '../../icons/github.svg';
/* eslint-disable */
interface Reducer {
  id: number,
  name: string,
  role: string,
  image: string,
  telegram: string,
  linkedin: string,
  github: string,

}

export const Contacts: React.FC = () => {
  const settings = {

    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]


  };

  const reducers: Reducer[] = [{
    id: 1,
    name: 'Leonid Pijavskiy',
    role: 'Front-end Developer',
    image: image2,
    telegram: 'https://t.me/nattynik',
    linkedin: 'https://www.linkedin.com/in/leoit/',
    github: 'https://github.com/HardCodWorker',
  },

  {
    id: 2,
    name: 'Leonid',
    role: 'Front-end Developer',
    image: image2,
    telegram: 'https://t.me/nattynik',
    linkedin: 'https://www.linkedin.com/in/leoit/',
    github: 'https://github.com/HardCodWorker',
  },

  {
    id: 3,
    name: 'Leonid',
    role: 'Front-end Developer',
    image: image2,
    telegram: 'https://t.me/nattynik',
    linkedin: 'https://www.linkedin.com/in/leoit/',
    github: 'https://github.com/HardCodWorker',
  },

  {
    id: 4,
    name: 'Leonid',
    role: 'Front-end Developer',
    image: image2,
    telegram: 'https://t.me/nattynik',
    linkedin: 'https://www.linkedin.com/in/leoit/',
    github: 'https://github.com/HardCodWorker',
  },

  {
    id: 5,
    name: 'Leonid',
    role: 'Front-end Developer',
    image: image2,
    telegram: 'https://t.me/nattynik',
    linkedin: 'https://www.linkedin.com/in/leoit/',
    github: 'https://github.com/HardCodWorker',
  },

  {
    id: 6,
    name: 'Leonid',
    role: 'Front-end Developer',
    image: image2,
    telegram: 'https://t.me/nattynik',
    linkedin: 'https://www.linkedin.com/in/leoit/',
    github: 'https://github.com/HardCodWorker',
  }];

  return (

    <div className={styles.content}>
      <Slider {...settings}>
        {
          reducers.map((red: Reducer) => (
            <div key={red.id} className={styles.team_member}>
              <img src={image2} alt="Team Member 1" />
              <h3>{red.name}</h3>
              <p className={styles.role}>{red.role}</p>
              <Link to={red.linkedin} target="_blank" className={styles.l}>
                <Linkedin className={styles.i} />
              </Link>
              <Link to={red.telegram} target="_blank" className={styles.l}>
                <Telegram className={styles.i} />
              </Link>
              <Link to={red.github} target="_blank" className={styles.s}>
                <GitHub className={styles.s} />
              </Link>
            </div>
          ))
        }
      </Slider>
    </div>
  );
};
