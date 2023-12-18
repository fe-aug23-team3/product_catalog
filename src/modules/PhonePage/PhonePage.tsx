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

  useEffect(() => {
    const params = new URLSearchParams();
    let currentSort = '';

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

    getPhones(currentSort, +page + 1, itemsPerPage).then((res) => {
      setPhones(res.data.rows);
      setPhonesLength(res.data.count);
    });
  }, [itemsPerPage, page, sortBy, navigate]);

  return (
    <section className={styles.main}>
      <h1 className={styles.main__header}>Mobile phones</h1>
      <p className={styles.main__models}>{phonesLength} models</p>
      <div className={styles.main__dropdown}>
        <Dropdown
          title="Sort by"
          list={sortByDropdown}
          customClass="styles.dropdown__sortBy"
          checker={setSortBy}
          setParams={setSearchParams}
        />
        <Dropdown
          title="Items on page"
          list={amountPerPage}
          customClass="styles.dropdown__sortByNums"
          checker={setItemsPerPage}
          setParams={setSearchParams}
        />
      </div>

      <div className={styles.list}>
        {phones.map((phone: Phone) => (
          <div className={styles.list__products} key={phone.id}>
            <ProductCard model={phone} />
          </div>
        ))}
      </div>
      {itemsPerPage !== 'all' && <Pagination phones={phonesLength} ITEMS={+itemsPerPage} />}
    </section>
  );
};
