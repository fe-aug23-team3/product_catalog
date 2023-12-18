import React, { useContext } from 'react';
import classNames from 'classnames';

import iconleft from '../../icons/Chevron-black (Arrow Left).svg';
import iconright from '../../icons/Chevron-black (Arrow Right).svg';

import styles from './Pagination.module.scss';
import { Phone } from '../../../../types/Phone';
import { PhonesContext } from '../../../../store/GlobalProvider';

interface Props {
  phones: Phone[];
  ITEMS: number;
}

export const Pagination: React.FC<Props> = ({ phones, ITEMS }) => {
  const { page, setPage } = useContext(PhonesContext);

  function pagination() {
    const pages = [];
    const amount = Math.ceil(phones.length / ITEMS);

    for (let i = 1; i <= amount; i += 1) {
      pages.push(i);
    }

    return pages;
  }

  const checkedNext = page === pagination()[pagination().length - 2];
  const checkedPrev = page + 1 === pagination()[0];

  return (
    <div className={styles.pagination}>
      <div className={styles.left_wrapper}>
        <button
          className={styles.left}
          type="button"
          onClick={() => {
            setPage((prevPage: number) => prevPage - 1);
          }}
          disabled={checkedPrev}
        >
          <img src={iconleft} alt="card" />
        </button>
      </div>
      <div className={styles.buttonWrapper}>
        {pagination().map((button, i) => (
          <button
            className={classNames(`${styles.pagination_button}`, {
              [styles.pagination_button_isActive]: page === i,
            })}
            type="button"
            key={button}
            onClick={() => setPage(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <div className={styles.right_wrapper}>
        <button
          className={styles.right}
          type="button"
          onClick={() => {
            setPage((nextPage: number) => nextPage + 1);
          }}
          disabled={checkedNext}
        >
          <img src={iconright} alt="card" />
        </button>
      </div>
    </div>
  );
};
