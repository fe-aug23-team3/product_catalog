/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import cn from 'classnames';
import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PhonesContext } from '../../../../store/GlobalProvider';
import styles from './Header.module.scss';
import logo from '../../icons/main-logo.svg';
import { Phone } from '../../../../types/Phone';

export const Header: React.FC = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const handleMenuOpen = (e: React.MouseEvent) => {
    e.preventDefault();

    setIsMenuActive(!isMenuActive);
  };

  const toggleMenu = () => setIsMenuActive(false);

  const {
    favorites,
    cart,
  } = useContext(PhonesContext);

  const preparedFavorites = favorites
    .filter((el: Phone) => typeof el === 'number');

  return (
    <header className={styles.header}>
      <NavLink to="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </NavLink>

      <nav className={styles.navbar}>
        <ul
          className={cn({
            [styles.navlist]: !isMenuActive,
            [styles.navlist__active]: isMenuActive,
          })}
        >
          <li className={styles.navlist__item}>
            <NavLink
              className={({ isActive }) => cn({
                [styles.link]: !isActive,
                [styles.link__active]: isActive,
              })}
              to="/"
              onClick={() => toggleMenu()}
            >
              Home
            </NavLink>
          </li>

          <li className={styles.navlist__item}>
            <NavLink
              className={({ isActive }) => cn({
                [styles.link]: !isActive,
                [styles.link__active]: isActive,
              })}
              to="/phones"
              onClick={() => toggleMenu()}
            >
              Phones
            </NavLink>
          </li>

          <li className={styles.navlist__item}>
            <NavLink
              className={({ isActive }) => cn({
                [styles.link]: !isActive,
                [styles.link__active]: isActive,
              })}
              to="/tablets"
              onClick={() => toggleMenu()}
            >
              Tablets
            </NavLink>
          </li>

          <li className={styles.navlist__item}>
            <NavLink
              className={({ isActive }) => cn({
                [styles.link]: !isActive,
                [styles.link__active]: isActive,
              })}
              to="/accessories"
              onClick={() => toggleMenu()}
            >
              Accessories
            </NavLink>
          </li>

          {isMenuActive && (
            <div className={styles.buttons}>
              <NavLink
                to="/favourites"
                className={styles.buttons__favorites}
                onClick={() => toggleMenu()}
              >
                {preparedFavorites.length > 0
                  && (
                    <span className={styles.good__counter}>
                      {preparedFavorites.length}
                    </span>
                  )}
              </NavLink>

              <NavLink
                to="/cart"
                className={styles.buttons__cart}
                onClick={() => toggleMenu()}
              >
                {cart.length > 0
                  && (
                    <span className={styles.good__counter}>
                      {cart.length}
                    </span>
                  )}
              </NavLink>
            </div>
          )}
        </ul>
      </nav>
      <div className={styles.control}>
        {/* CHANGE THE THEME BUTTON
        <button className=${styles.control__theme}></button> */}
        <NavLink
          to="/favourites"
          className={styles.control__favorites}
          onClick={() => toggleMenu()}
        >
          {preparedFavorites.length > 0
            && (
              <span className={styles.good__counter}>
                {preparedFavorites.length}
              </span>
            )}
        </NavLink>

        <NavLink
          to="/cart"
          className={styles.control__cart}
          onClick={() => toggleMenu()}
        >
          {cart.length > 0
            && (
              <span className={styles.good__counter}>
                {cart.length}
              </span>
            )}
        </NavLink>

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
