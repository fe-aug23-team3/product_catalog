/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import cn from 'classnames';
import React, { useState } from 'react';
import styles from './Header.module.scss';
import logo from '../../icons/logo.svg';

export const Header: React.FC = () => {
  const [isMenuActive, setisMenuActive] = useState(false);
  const handleMenuOpen = (e: React.MouseEvent) => {
    e.preventDefault();

    setisMenuActive(!isMenuActive);
  };

  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo" />
      <nav className={`${styles.navbar}`}>
        <ul
          className={cn({
            [styles.navlist]: !isMenuActive,
            [styles.navlist__active]: isMenuActive,
          })}
        >
          <li className={styles.navlist__item}>
            <a className={styles.link} href="/home">
              Home
            </a>
          </li>
          <li className={styles.navlist__item}>
            <a className={styles.link} href="/phones">
              Phones
            </a>
          </li>
          <li className={styles.navlist__item}>
            <a className={styles.link} href="/tablets">
              Tablets
            </a>
          </li>
          <li className={styles.navlist__item}>
            <a className={styles.link} href="/accessories">
              Accessories
            </a>
          </li>
          {isMenuActive && (
            <div className={styles.buttons}>
              <a href="/favorites" className={styles.buttons__favorites} />
              <a href="/cart" className={styles.buttons__cart} />
            </div>
          )}
        </ul>
      </nav>
      <div className={styles.control}>
        {/* CHANGE THE THEME BUTTON
        <button className=${styles.control__theme}></button> */}
        <a href="/favorites" className={styles.control__favorites} />
        <a href="/cart" className={styles.control__cart} />
        {!isMenuActive && (
          <a
            href="/"
            className={styles.control__menu}
            onClick={handleMenuOpen}
          />
        )}
        {isMenuActive && (
          <a
            href="/"
            className={styles.control__cross}
            onClick={handleMenuOpen}
          />
        )}
      </div>
    </header>
  );
};
