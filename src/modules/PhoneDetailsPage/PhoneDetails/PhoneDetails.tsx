/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PhoneDetails.module.scss';
import { Button } from '../../Button';
import { PhonesContext } from '../../../store/GlobalProvider';
import { getOnePhone } from '../../../utils/fetchClient';
import { PhoneDetail } from './PhoneDetail';
import { colorMappings } from './colorMappings';
import { Good } from '../../../types/Phone';

export const PhoneDetails: React.FC = () => {
  const navigate = useNavigate();
  const [phoneDetailArray, setPhoneDetailArray] = useState<PhoneDetail[]>([]);
  const [selectedPhoneDetails, setSelectedPhoneDetails]
  = useState<PhoneDetail | null>(null);
  const {
    setSelectedCapacity,
    phoneItemId,
    selectedColor,
    setSelectedColor,
    selectedCapacity,
    favorites,
    setFavorites,
    cart,
    setCart,
  } = useContext(PhonesContext);

  useEffect(() => {
    if (!phoneItemId) {
      return;
    }

    getOnePhone(phoneItemId).then((res) => {
      setPhoneDetailArray(res.data);
      const foundPhone = res.data.find(
        (phone: PhoneDetail) => phone.id === phoneItemId,
      );

      setSelectedPhoneDetails(foundPhone);
    });
  }, [phoneItemId]);

  const updateUrl = (color: unknown, capacity: string) => {
    const newUrl = `/phones:${selectedPhoneDetails?.namespaceId}-${capacity.toLowerCase()}-${color}`;

    navigate(newUrl);
  };

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
    updateUrl(color, selectedCapacity);
  };

  // eslint-disable-next-line no-console
  console.log(phoneDetailArray);

  const handleCapacityClick = (selectedCap: string) => {
    setSelectedCapacity(selectedCap);

    const foundPhone = phoneDetailArray.find(
      (phone) => phone.capacity === selectedCap,
    );

    updateUrl(selectedColor, selectedCap);
    setSelectedPhoneDetails(foundPhone || null);
  };

  const isInFavorites = favorites.includes(selectedPhoneDetails?.id);
  const isInCart = cart
    .some((el: any) => el.id === selectedPhoneDetails?.id);

  const addToFavorites = () => {
    if (isInFavorites) {
      setFavorites(favorites
        .filter((el: string) => el !== selectedPhoneDetails?.id));
    } else {
      setFavorites([...favorites, selectedPhoneDetails?.id]);
    }
  };

  const addToCart = () => {
    if (!isInCart) {
      const newGood = { ...selectedPhoneDetails, quantity: 1 };

      setCart([...cart, newGood]);
    } else {
      setCart(cart.filter((el: Good) => el.id !== selectedPhoneDetails?.id));
    }
  };

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getFormattedTitle = () => {
    const baseName = selectedPhoneDetails?.name || 'Loading...';
    let formattedTitle = baseName;

    // Видаляємо зайві деталі про місткість пам'яті та колір з основної назви
    const nameParts = baseName.split(' ');

    if (nameParts.length > 6) {
      formattedTitle = nameParts.slice(0, 4).join(' ');
    } else {
      formattedTitle = nameParts.slice(0, 3).join(' ');
    }

    const colorPart = selectedColor ? ` ${capitalizeFirstLetter(selectedColor)}` : '';
    const capacityPart = selectedCapacity ? ` ${selectedCapacity}` : '';

    return `${formattedTitle}${capacityPart}${colorPart}`;
  };

  const salePrice = selectedPhoneDetails?.priceDiscount || 'Loading...';
  const originalPrice = selectedPhoneDetails?.priceRegular || 'Loading...';
  const specifications = selectedPhoneDetails ? [
    { name: 'Screen', value: selectedPhoneDetails.screen },
    { name: 'Resolution', value: selectedPhoneDetails.resolution },
    { name: 'Processor', value: selectedPhoneDetails.processor },
    { name: 'RAM', value: selectedPhoneDetails.ram },
  ] : [];
  const numericId = selectedPhoneDetails?.id.match(/\d+/g)?.join('') || 'No ID';
  const availableCapacities = selectedPhoneDetails?.capacityAvailable || [];

  return (
    <>
      <h3 className={styles.head}>
        {getFormattedTitle()}
      </h3>
      <div className={styles.productDetails}>
        <h3 className={styles.headColors}>Available colors</h3>
        <h3 className={styles.id}>
          ID:
          {numericId}
        </h3>
        <section className={styles.colors}>
          <div className={styles.colorOptions}>
            {selectedPhoneDetails?.colorsAvailable.map((colorKey) => {
              const isColorValid = colorKey in colorMappings;

              const buttonColor
              = isColorValid ? colorMappings[colorKey] : '#fff';

              return (
                <button
                  key={colorKey}
                  className={`${styles.button} ${selectedColor === colorKey ? styles.selected : ''}`}
                  style={{ backgroundColor: buttonColor }}
                  aria-label={`${colorKey.charAt(0).toUpperCase() + colorKey.slice(1)} color`}
                  onClick={() => handleColorClick(colorKey)}
                >
                  <span className={styles.visuallyHidden}>
                    {`${colorKey.charAt(0).toUpperCase() + colorKey.slice(1)} color`}
                  </span>
                </button>
              );
            })}
          </div>
        </section>
        <section className={styles.capacity}>
          <h3 className={styles.headCapacity}>Select capacity</h3>
          {availableCapacities.map((cap) => (
            <button
              className={`${styles.capacityButton} ${selectedPhoneDetails?.capacity === cap
                ? styles.selectedCapacity : ''}`}
              key={cap}
              onClick={() => handleCapacityClick(cap)}
            >
              {cap}
            </button>
          ))}
        </section>

        <div className={styles.price}>
          <span className={styles.salePrice} data-text={`$${salePrice}`}>
            $
            {salePrice}
          </span>
          <span className={styles.originalPrice} data-text={`$${originalPrice}`}>
            $
            {originalPrice}
          </span>
        </div>

        <div>
          {/* <Button text="Add to favorites" callback={addToFavorites} /> */}
          <Button text="Add to cart" callback={addToCart} />
        </div>
        <section className={styles.specs}>
          {specifications.map((spec) => (
            <div key={spec.name} className={styles.spec}>
              <span className={styles.specName}>{spec.name}</span>
              <span className={styles.specValue}>{spec.value}</span>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};
