/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import cn from 'classnames';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../icons/main-logo.svg';

export const Header: React.FC = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const handleMenuOpen = (e: React.MouseEvent) => {
    e.preventDefault();

    setIsMenuActive(!isMenuActive);
  };

  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo" />
      <nav className={styles.navbar}>
        <ul
          className={cn({
            [styles.navlist]: !isMenuActive,
            [styles.navlist__active]: isMenuActive,
          })}
        >
          <li className={styles.navlist__item}>
            <NavLink className={styles.link} to="/home">
              Home
            </NavLink>
          </li>
          <li className={styles.navlist__item}>
            <NavLink className={styles.link} to="/phones">
              Phones
            </NavLink>
          </li>
          <li className={styles.navlist__item}>
            <NavLink className={styles.link} to="/tablets">
              Tablets
            </NavLink>
          </li>
          <li className={styles.navlist__item}>
            <NavLink className={styles.link} to="/accessories">
              Accessories
            </NavLink>
          </li>
          {isMenuActive && (
            <div className={styles.buttons}>
              <NavLink to="/favorites" className={styles.buttons__favorites} />
              <NavLink to="/cart" className={styles.buttons__cart} />
            </div>
          )}
        </ul>
      </nav>
      <div className={styles.control}>
        {/* CHANGE THE THEME BUTTON
        <button className=${styles.control__theme}></button> */}
        <NavLink to="/favourites" className={styles.control__favorites} />
        <NavLink to="/cart" className={styles.control__cart} />
        {!isMenuActive && (
          <NavLink
            to="/"
            className={styles.control__menu}
            onClick={handleMenuOpen}
          />
        )}
        {isMenuActive && (
          <NavLink
            to="/"
            className={styles.control__cross}
            onClick={handleMenuOpen}
          />
        )}
      </div>
    </header>
  );
};
