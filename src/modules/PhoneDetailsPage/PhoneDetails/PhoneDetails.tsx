/* eslint-disable */

import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PhoneDetails.module.scss';
import { Button } from '../../Button';
import { PhonesContext } from '../../../store/GlobalProvider';
import { getAllProducts, getOnePhone } from '../../../utils/fetchClient';
import { PhoneDetail } from './PhoneDetail';
import { colorMappings } from './colorMappings';
import { ButtonHeartLike } from '../../ButtonHeartLike';
import { Phone } from '../../../types/Phone';

export const PhoneDetails: React.FC = () => {
  const navigate = useNavigate();
  const [phoneDetailArray, setPhoneDetailArray] = useState<PhoneDetail[]>([]);
  const [selectedPhoneDetails, setSelectedPhoneDetails] =
    useState<PhoneDetail | null>(null);
  const [allPhones, setAllphones] = useState<Phone[]>([]);
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
    setPhotos,
  } = useContext(PhonesContext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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

  useEffect(() => {
    getAllProducts().then((res) => setAllphones(res.data));
    setSelectedCapacity(selectedPhoneDetails?.capacity[0]);
  }, [selectedPhoneDetails?.capacity, setSelectedCapacity]);

  useEffect(() => {
    if (selectedColor || selectedCapacity) {
      const foundPhone = phoneDetailArray.find(
        (phone) =>
          phone.color === selectedColor && phone.capacity === selectedCapacity,
      );

      if (foundPhone) {
        setSelectedPhoneDetails(foundPhone);
      }
    }
  }, [selectedColor, selectedCapacity, phoneDetailArray]);

  const updateUrl = (color: unknown, capacity: string) => {
    const newUrl = `/phones/:${selectedPhoneDetails?.namespaceId}-${'256gb'}-${color}`;

    navigate(newUrl);

    capacity;
  };

  useEffect(() => {
    if (selectedPhoneDetails) {
      setPhotos(selectedPhoneDetails?.images);
    }

    console.log(selectedPhoneDetails);
  }, [selectedPhoneDetails, setPhotos, selectedColor]);

  const handleColorClick = (color: string) => {
    const foundPhone = phoneDetailArray.find((phone) => phone.color === color);

    setSelectedColor(color);
    setSelectedPhoneDetails(foundPhone || null);
    updateUrl(color, selectedCapacity);
  };

  const handleCapacityClick = (selectedCap: string) => {
    setSelectedCapacity(selectedCap);

    const foundPhone = phoneDetailArray.find(
      (phone) => phone.capacity === selectedCap,
    );

    updateUrl(selectedColor, selectedCap);
    setSelectedPhoneDetails(foundPhone || null);
  };

  let parentPhone: Phone | null | undefined = null;

  if (selectedPhoneDetails) {
    parentPhone = allPhones.find(
      (phone) => phone.phoneId === selectedPhoneDetails.id,
    );
  }

  const isInFavorites = favorites.includes(parentPhone?.id);
  const isInCart = cart.some((el: Phone) => el.id === parentPhone?.id);

  const addToFavorites = () => {
    if (selectedPhoneDetails) {
      if (isInFavorites && selectedPhoneDetails) {
        setFavorites(
          favorites.filter((phone: string) => phone !== parentPhone?.id),
        );
      } else {
        setFavorites([...favorites, parentPhone?.id]);
      }
    }
  };

  const addToCart = () => {
    if (!isInCart && selectedPhoneDetails) {
      const parentPhoneCart = allPhones.find(
        (phone) => phone.phoneId === selectedPhoneDetails.id,
      );
      const newPhone = {
        quantity: 1,
        ...parentPhoneCart,
      };

      setCart([...cart, newPhone]);
    }
  };

  const salePrice = selectedPhoneDetails?.priceDiscount || 'Loading...';
  const originalPrice = selectedPhoneDetails?.priceRegular || 'Loading...';
  const specifications = selectedPhoneDetails
    ? [
        { name: 'Screen', value: selectedPhoneDetails.screen },
        { name: 'Resolution', value: selectedPhoneDetails.resolution },
        { name: 'Processor', value: selectedPhoneDetails.processor },
        { name: 'RAM', value: selectedPhoneDetails.ram },
      ]
    : [];
  const availableCapacities = selectedPhoneDetails?.capacityAvailable || [];

  return (
    <>
      <h3 className={styles.head}>{selectedPhoneDetails?.name}</h3>
      <div className={styles.productDetails}>
        <h3 className={styles.headColors}>Available colors</h3>
        <section className={styles.colors}>
          <div className={styles.colorOptions}>
            {selectedPhoneDetails?.colorsAvailable.map((colorKey) => {
              const isColorValid = colorKey in colorMappings;

              const buttonColor = isColorValid
                ? colorMappings[colorKey]
                : '#fff';

              return (
                <button
                  key={colorKey}
                  className={`${styles.button} ${
                    selectedColor === colorKey ? styles.selected : ''
                  }`}
                  style={{ backgroundColor: buttonColor }}
                  aria-label={`${
                    colorKey.charAt(0).toUpperCase() + colorKey.slice(1)
                  } color`}
                  onClick={() => handleColorClick(colorKey)}
                >
                  <span className={styles.visuallyHidden}>
                    {`${
                      colorKey.charAt(0).toUpperCase() + colorKey.slice(1)
                    } color`}
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
              className={`${styles.capacityButton} ${
                selectedPhoneDetails?.capacity === cap
                  ? styles.selectedCapacity
                  : ''
              }`}
              key={cap}
              onClick={() => handleCapacityClick(cap)}
            >
              {cap}
            </button>
          ))}
        </section>

        <div className={styles.price}>
          <span className={styles.salePrice} data-text={`$${salePrice}`}>
            ${salePrice}
          </span>
          <span
            className={styles.originalPrice}
            data-text={`$${originalPrice}`}
          >
            ${originalPrice}
          </span>
        </div>

        <div>
          <div className={styles.buttonsContainer}>
            <Button
              isActive={isInCart}
              text={isInCart ? 'Added' : 'Add to cart'}
              callback={addToCart}
            />
            <ButtonHeartLike
              isActive={isInFavorites}
              callback={addToFavorites}
            />
          </div>
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
