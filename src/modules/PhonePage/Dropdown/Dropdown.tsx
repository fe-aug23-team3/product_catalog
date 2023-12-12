/* eslint-disable operator-linebreak */
import React, { useContext } from 'react';
import cn from 'classnames';
import { PhonesContext } from '../../../store/GlobalProvider';
import arrowRight from '../../shared/icons/Vector (Stroke).svg';
import styles from './Dropdown.module.scss';

type Props = {
  title: string;
  list: string[];
};

export const Dropdown: React.FC<Props> = ({ title, list }) => {
  // eslint-disable-next-line object-curly-newline
  const { isOpened, setIsOpened, current, setCurrent } =
    useContext(PhonesContext);

  const handlerForButton = () => {
    setIsOpened((prev: boolean) => !prev);
  };

  return (
    <div className={styles.dropdown}>
      <p className={styles.dropdown__title}>{title}</p>
      <button
        type="button"
        className={cn(styles.dropdown__selected, {
          'dropdown__selected--active': isOpened,
        })}
        onClick={handlerForButton}
      >
        <p
          className={cn(styles.dropdown__current, {
            'dropdown__current--active': isOpened,
          })}
        >
          {current}
        </p>
        <img src={arrowRight} alt="" aria-hidden />
      </button>
      <ul
        className={cn(styles.dropdown__list, {
          [styles['dropdown__list--active']]: !isOpened,
        })}
      >
        {list.map((listItem) => (
          <li
            key={listItem}
            className={cn(styles.dropdown__selected__item, {
              [styles['dropdown__selected__item--active']]: isOpened,
            })}
          >
            <button
              type="button"
              onClick={() => {
                setCurrent(listItem);
                setIsOpened(false);
              }}
              className={cn(styles.dropdown__btn, {
                [styles['dropdown__btn--active']]: current === listItem,
              })}
            >
              {listItem}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
