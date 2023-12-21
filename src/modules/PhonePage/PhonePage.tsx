/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { getLength, getPhones } from '../../utils/fetchClient';
import styles from './PhonePage.module.scss';
import { Dropdown } from './Dropdown';
import { ProductCard } from '../shared/components/ProductCard';
import { Pagination } from '../shared/components/Pagination';
import { Phone } from '../../types/Phone';
import { ItemsNum, SortBy } from '../../helpers/helper';
import { PhonesContext } from '../../store/GlobalProvider';
import { Loader } from '../shared/components/loader';
import Breadcrumps from '../shared/components/breadcrumbs/Breadcrumps';

export const PhonePage: React.FC = () => {
  const [phonesLength, setPhonesLength] = useState(0);
  const [sortBy, setSortBy] = useState<SortBy>('Newest');
  const [itemsPerPage, setItemsPerPage] = useState<ItemsNum>('16');
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { page, setPage } = useContext(PhonesContext);
  const [phones, setPhones] = useState<Phone[]>([]);
  const sortByDropdown: SortBy[] = ['Alphabetically', 'Cheapest', 'Newest'];
  const amountPerPage: ItemsNum[] = ['4', '8', '16', 'all'];
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams();
    let currentSort = '';
    setIsLoading(true);
    if (sortBy !== 'Newest') {
      switch (sortBy) {
        case 'Alphabetically':
          currentSort = 'name';
          break;
        case 'Cheapest':
          currentSort = 'price';
          break;
      }
      params.set('sortBy', currentSort);
    }

    if (page !== 0) {
      params.set('page', page + 1);
    }

    if (itemsPerPage !== '16') {
      params.set('itemsPerPage', itemsPerPage);
    }

    navigate(`/phones?${params}`);

    getPhones(currentSort, +page + 1, itemsPerPage)
      .then((res) => {
        setPhones(res.data.rows);
        setPhonesLength(res.data.count);
      })
      .catch(() => {
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [itemsPerPage, page, sortBy, navigate]);

  return (
    <section className={styles.main}>
      {phones.length !== 0 && (
        <>
          <div
            className={
              isLoading ? styles.buttons__box_invisible : styles.buttons__box
            }
          >
            <Breadcrumps />
          </div>

          <h1
            className={
              isLoading ? styles.main__header_invisible : styles.main__header
            }
          >
            Mobile phones
          </h1>
          <p
            className={
              isLoading ? styles.main__models_invisible : styles.main__models
            }
          >
            {phonesLength} models
          </p>
          <div
            className={
              isLoading
                ? styles.main__dropdown_invisible
                : styles.main__dropdown
            }
          >
            <Dropdown
              title="Sort by"
              list={sortByDropdown}
              customClass={styles.dropdown__sortBy}
              checker={setSortBy}
              setParams={setSearchParams}
            />
            <Dropdown
              title="Items on page"
              list={amountPerPage}
              customClass={styles.dropdown__sortByNums}
              checker={setItemsPerPage}
              setParams={setSearchParams}
            />
          </div>
        </>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.list}>
          {phones.map((phone: Phone) => (
            <div className={styles.list__products} key={phone.id}>
              <ProductCard model={phone} />
            </div>
          ))}
        </div>
      )}
      {!isLoading && itemsPerPage !== 'all' && (
        <Pagination phones={phonesLength} ITEMS={+itemsPerPage} />
      )}
    </section>
  );
};
