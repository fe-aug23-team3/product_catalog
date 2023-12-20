/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React, { useContext, useEffect, useState } from 'react';
import styles from './Favourites.module.scss';
import { getAllProducts } from '../../utils/fetchClient';
import { Phone } from '../../types/Phone';
import { ProductCard } from '../shared/components/ProductCard';
import { Pagination } from '../shared/components/Pagination';
import { PhonesContext } from '../../store/GlobalProvider';
import { Loader } from '../shared/components/loader';

export const Favourites: React.FC = () => {
  const { favorites } = useContext(PhonesContext);
  const { page } = useContext(PhonesContext);
  const [phones, setPhones] = useState<Phone[]>([]);
  const [loader, setLoader] = useState(false);
  const ITEMS = 4;

  // eslint-disable-next-line no-console
  console.log(favorites);

  useEffect(() => {
    setLoader(true);
    getAllProducts()
      .then((res) => {
        setPhones([
          ...res.data.filter((tempPhone: Phone) =>
            favorites.includes(tempPhone.id),
          ),
        ]);
      })
      .finally(() => setLoader(false));
  }, [favorites]);

  const split = () => {
    const start = page * ITEMS;
    const end = start + ITEMS;
    const phonesToDIsplay = phones.slice(start, end);

    return phonesToDIsplay;
  };

  return loader ? (
    <>
      <div className={styles.favourite_Header}>
        <h1 className={styles.favourite_Header_content}>Favourites</h1>
        <p className={styles.favourite_Header_content_sub}>
          {`${phones.length} items`}
        </p>
      </div>
      <Loader />
    </>
  ) : (
    <>
      <div className={styles.favourite_Header}>
        <h1 className={styles.favourite_Header_content}>Favourites</h1>
        <p className={styles.favourite_Header_content_sub}>
          {`${phones.length} items`}
        </p>
      </div>

      <div className={styles.favourite_Content}>
        {split().map((phone) => (
          <div className={styles.favourite_Content_mobile} key={phone.id}>
            <ProductCard model={phone} />
          </div>
        ))}
      </div>

      {phones.length > ITEMS && (
        <Pagination phones={phones.length} ITEMS={ITEMS} />
      )}
    </>
  );
};
