/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Good } from '../types/Phone';
import { PhoneDetail }
  from '../modules/PhoneDetailsPage/PhoneDetails/PhoneDetail';

export const initialValue: any = {
  todos: [],
};

// #region LocalState
// eslint-disable-next-line max-len, @typescript-eslint/no-unnecessary-type-constraint
const useLocalState = <T extends unknown>(
  key: string,
  startValue: T,
): [T, (v: T) => void] => {
  const [value, setValue] = useState(() => {
    const localValue = localStorage.getItem(key);

    if (localValue === null) {
      return startValue;
    }

    try {
      return JSON.parse(localValue);
    } catch {
      return startValue;
    }
  });

  const save = (newValue: T) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, save];
};
// #endregion

export const PhonesContext = React.createContext(initialValue);

export const PhonesProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [current, setCurrent] = useState('Newest');

  const [favorites, setFavorites] = useLocalState<number[]>('Fav', []);
  const [cart, setCart] = useLocalState<Good[]>('Cart', []);

  const [page, setPage] = useState(0);
  const [phoneItemId, setPhoneItemId]
   = useLocalState<string>('SelectedPhoneItemId', '');

  const [selectedCapacity, setSelectedCapacity]
   = useLocalState<string>('SelectedCapacity', '');

  const [phoneDetailArray, setPhoneDetailArray] = useState([]);

  const [selectedColor, setSelectedColor]
   = useLocalState<string>('selectedColor', '');

  const [selectedPhoneDetails, setSelectedPhoneDetails]
   = useState<PhoneDetail | null>(null);

  const [photos, setPhotos] = useState<string[]>([]);

  return (
    <PhonesContext.Provider
      value={{
        selectedColor,
        selectedPhoneDetails,
        setSelectedPhoneDetails,
        setSelectedColor,
        phoneItemId,
        selectedCapacity,
        setSelectedCapacity,
        setPhoneItemId,
        phoneDetailArray,
        setPhoneDetailArray,
        isOpened,
        setIsOpened,
        current,
        setCurrent,
        favorites,
        setFavorites,
        cart,
        setCart,
        page,
        setPage,
        photos,
        setPhotos,
      }}
    >
      {children}
    </PhonesContext.Provider>
  );
};
