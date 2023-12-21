/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import logo from '../../icons/main-logo.svg';
import { ReactComponent as ChevronUp } from '../../icons/ChevronUp.svg';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <Link to="/" onClick={() => scrollToTop()}>
          <img className={styles.logo} src={logo} alt="nice gadgets logo" />
        </Link>

        <div className={styles.footer_links}>
          <a
            className={styles.footer_link}
            href="https://github.com/fe-aug23-team3"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <Link className={styles.footer_link} to="/contacts">
            Contacts
          </Link>
          <a
            className={styles.footer_link}
            href="/c"
            target="_blank"
            rel="noreferrer"
          >
            Rights
          </a>
        </div>

        <div className={styles.footer_toTop}>
          <button className={styles.footer_upLink} onClick={scrollToTop}>
            <span>Back to top</span>
            <span className={styles.button}>
              <ChevronUp className={styles.iconUp} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};
