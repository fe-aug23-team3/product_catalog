/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { getLength } from '../../../utils/fetchClient';
import arrowRight from '../../shared/icons/Vector (Stroke).svg';

import styles from './Pagination.module.scss';

export const Pagination: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [allPhonesLength, setAllPhonesLength] = useState(0);
  const phonesPerPage = 16;

  const pages = Math.ceil(allPhonesLength / phonesPerPage);

  const paginationButtons = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i < pages; i++) {
    paginationButtons.push(i);
  }

  const amountOfPages = getLength().then((res) => setAllPhonesLength(res.data));

  const handlePrevClick = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => prev + 1);
  };

  // eslint-disable-next-line no-console
  console.log(amountOfPages);

  return (
    <section className={styles.pagination}>
      <button
        onClick={handlePrevClick}
        className={styles.button}
        disabled={currentPage === 0}
      >
        <img src={arrowRight} alt="" />
      </button>
      <ul className={styles.list}>
        {paginationButtons.map((page: number) => (
          <li key={page} className={styles.list__item}>
            {page}
          </li>
        ))}
        <li />
      </ul>
      <button
        className={styles.button}
        onClick={handleNextClick}
        disabled={currentPage === Math.ceil(allPhonesLength / 16)}
      >
        <img src={arrowRight} alt="" />
      </button>
    </section>
  );
};
