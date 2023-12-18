/* eslint-disable operator-linebreak */
import React, { useState } from 'react';
import cn from 'classnames';
import { SetURLSearchParams } from 'react-router-dom';
import arrowRight from '../../shared/icons/Vector (Stroke).svg';
import styles from './Dropdown.module.scss';
import { ItemsNum, SortBy } from '../../../helpers/helper';

type Props = {
  title: string;
  list: SortBy[] | ItemsNum[];
  customClass: string;
  checker: (val: any) => void;
  setParams: SetURLSearchParams;
};

export const Dropdown: React.FC<Props> = ({
  title,
  list,
  customClass,
  checker,
  setParams,
}) => {
  // eslint-disable-next-line object-curly-newline
  const [isOpened, setIsOpened] = useState(false);
  const [current, setCurrent] = useState<number | string>(list[2]);

  const handlerForButton = () => {
    setIsOpened((prev: boolean) => !prev);
  };

  return (
    <div className={`${styles.dropdown} ${customClass}`}>
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
        {list.map((listItem: SortBy | ItemsNum) => (
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
                checker(listItem);
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
