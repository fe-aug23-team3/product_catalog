import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import styles from './Contacts.module.scss';
import image2 from './c_images/IMG_1733.jpg';
import Yarik from './c_images/Моє фото №2.jpg';
import Nazariy from './c_images/image.png';
import Yevhen from './c_images/photo_2023-05-19_19-52-26-modified.jpg';
import Denis from './c_images/DR.jpg';
import Danyok from './c_images/Danilas.jpg';
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
    infinite: false,
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
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

  const reducers: Reducer[] = [

    {
      id: 1,
      name: 'Yaroslav Yarynych',
      role: 'Full-Stack Developer | Team-Lead',
      image: Yarik,
      telegram: 'https://t.me/Slavik_Yarynych',
      linkedin: 'https://www.linkedin.com/in/yaroslav-yarynych-87856722a/',
      github: 'https://github.com/YaroslavYarynych',
    },

    {
      id: 2,
      name: 'Yevhen Kharko',
      role: 'Front-end Developer',
      image: Yevhen,
      telegram: 'https://t.me/eugene_kharko',
      linkedin: 'https://www.linkedin.com/in/yevhen-kharko-98b29a257/',
      github: 'https://github.com/YevhenKharko',
    },


    {
      id: 3,
      name: 'Nazariy Hnatiuk',
      role: 'Front-end Developer',
      image: Nazariy,
      telegram: 'https://t.me/Nazar_Hnatyuk',
      linkedin: 'https://www.linkedin.com/in/nazar-hnatyuk-48699917b/',
      github: 'https://github.com/Stim1',
    },

    {
      id: 4,
      name: 'Leonid Pijavskiy',
      role: 'Front-end Developer',
      image: image2,
      telegram: 'https://t.me/nattynik',
      linkedin: 'https://www.linkedin.com/in/leoit/',
      github: 'https://github.com/HardCodWorker',
    },

    {
      id: 5,
      name: 'Denys Rosokhach',
      role: 'Front-end Developer',
      image: Denis,
      telegram: 'https://t.me/Denzzlle',
      linkedin: 'https://www.linkedin.com/in/denys-rosokhach-560421244/',
      github: 'https://github.com/denzzlle171',
    },

    {
      id: 6,
      name: 'Danylo Morhun',
      role: 'Front-end Developer',
      image: Danyok,
      telegram: 'https://t.me/ayogoharo',
      linkedin: 'https://www.linkedin.com/in/danylo-morhun-b59332236/',
      github: 'https://github.com/Ayogoharo',
    }];

  return (

    <div className={styles.content}>
      <Slider {...settings}>
        {
          reducers.map((red: Reducer) => (
            <div key={red.id} className={styles.team_member}>
              <img src={red.image} alt="Team Member 1" />
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
