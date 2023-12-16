/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getLength, getPhones } from '../../utils/fetchClient';
import styles from './PhonePage.module.scss';
import { Dropdown } from './Dropdown';
import { ProductCard } from '../shared/components/ProductCard';
import { ProductCardProps } from '../shared/components/ProductCard/ProductCardProps';

export type SortBy = 'Alphabetically' | 'Cheapest' | 'Newest';

export type ItemsNum = '4' | '8' | '16' | 'All';

export const PhonePage: React.FC = () => {
  const [phonesLength, setPhonesLength] = useState(0);
  const [sortBy, setSortBy] = useState('Newest');
  const [itemsPerPage, setItemsPerPage] = useState<ItemsNum>('16');
  const [searchParams, setSearchParams] = useSearchParams();

  const sort = searchParams.get('sortBy') || '';
  // const  = searchParams.get('itemsPerPage') || '';
  const page = searchParams.get('page') || '';
  const [phones, setPhones] = useState([]);
  const sortByDropdown: SortBy[] = ['Alphabetically', 'Cheapest', 'Newest'];
  const amountPerPage: ItemsNum[] = ['4', '8', '16', 'All'];

  // eslint-disable-next-line no-console
  console.log(sort);

  const params = new URLSearchParams();

  params.set('sortBy', sort);

  useEffect(() => {
    getLength().then((res) => setPhonesLength(res.data));
    // eslint-disable-next-line max-len
    getPhones(sortBy, 1, itemsPerPage).then((res) => setPhones(res.data));
  }, [itemsPerPage, sortBy]);

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
        {phones.map((phone: any) => (
          <div className={styles.list__products} key={phone.id}>
            <ProductCard model={phone} />
          </div>
        ))}
      </div>
    </section>
  );
};
