import React from 'react';
import styles from './Footer.module.scss';
import Logo from '../../icons/Logo.svg';
import { ReactComponent as ChevronUp } from '../../icons/ChevronUp.svg';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <img className={styles.logo} src={Logo} alt="nice gadgets logo" />

        <div className={styles.footer_links}>
          <a
            className={styles.footer_link}
            href="https://github.com/placeholder"
          >
            Github
          </a>
          <a
            className={styles.footer_link}
            href="mailto:placeholder@example.com"
          >
            Contacts
          </a>
          <a className={styles.footer_link} href="/placeholder">
            Rights
          </a>
        </div>

        <div className={styles.footer_toTop}>
          <a className={styles.footer_upLink} href="/placeholder">
            <span>Back to top</span>
            <span className={styles.button}>
              <ChevronUp className={styles.iconUp} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};
