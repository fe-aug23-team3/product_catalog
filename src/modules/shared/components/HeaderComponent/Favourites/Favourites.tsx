import React, { useContext, useEffect, useState } from 'react';
import styles from './Favourites.module.scss';
import { getTheNewestPhones } from '../../../../../utils/fetchClient';
import { Phone } from '../../../../../types/Phone';
import { ProductCard } from '../../ProductCard';
import { PhonesContext } from '../../../../../store/GlobalProvider';
import { Pagination } from '../../Pagination';

// const { favorites} = useContext(PhonesContext); - забираю из контекста айди моделей - ["9","7","21","5","4"];

export const Favourites: React.FC = () => {
  const { favorites } = useContext(PhonesContext);
  const { page } = useContext(PhonesContext);
  const [phones, setPhones] = useState<Phone[]>([]);
  const ITEMS = 4;

  useEffect(() => {
    // console.log(typeof favorites[0]);
    getTheNewestPhones().then(res => setPhones([...res.data.filter((tempPhone: Phone) => favorites.includes(tempPhone.id))]));// eslint-disable-line

  }, [favorites]);

  const split = () => {
    const start = page * ITEMS;
    const end = start + ITEMS;
    const phonesToDIsplay = phones.slice(start, end);

    return phonesToDIsplay;
  };

  // const checkedNext = page === pagination()[pagination().length - 2];
  // const checkedPrev = page + 1 === pagination()[0];

  return (
    <>
      <div className={styles.favourite_Header}>
        <h1 className={styles.favourite_Header_content}>Favourites</h1>
        <p className={styles.favourite_Header_content_sub}>
          {`${phones.length} items`}
        </p>
      </div>

      <div className={styles.favourite_Content}>
        {split().map(phone => (

          <div className={styles.favourite_Content_mobile} key={phone.id}>
            <ProductCard model={phone} />
          </div>
        ))}
      </div>

      {phones.length > ITEMS && (
        <Pagination phones={phones} ITEMS={ITEMS} />

      // <div className={styles.pagination}>
      //   <div className={styles.left_wrapper}>
      //     <button
      //       className={styles.left}
      //       type="button"
      //       onClick={() => {
      //         setPage((prevPage:number) => prevPage - 1);
      //       }}
      //       disabled={checkedPrev}
      //     >
      //       <img src={iconleft} alt="card" />
      //     </button>
      //   </div>
      //   <div className={styles.buttonWrapper}>
      //     {pagination().map((button, i) => (

      //       <button
      //         className={cn(`${styles.pagination_button}`, {
      //           [styles.pagination_button_isActive]: page === i,
      //         })}
      //         type="button"
      //         key={button}
      //         onClick={() => setPage(i)}
      //       >
      //         {i + 1}
      //       </button>

      //     ))}
      //   </div>
      //   <div className={styles.right_wrapper}>
      //     <button
      //       className={styles.right}
      //       type="button"
      //       onClick={() => {
      //         setPage((nextPage:number) => nextPage + 1);
      //       }}
      //       disabled={checkedNext}
      //     >

      //       <img src={iconright} alt="card" />

      //     </button>
      //   </div>
      // </div>
      )}

    </>
  );
};
