import React, { useState } from 'react';
import { Good } from '../types/Phone';

export const initialValue: any = {
  todos: [],
};

// #region Favorites
// eslint-disable-next-line max-len, @typescript-eslint/no-unnecessary-type-constraint
export const useLocalState = <T extends unknown>(key: string, startValue: T): [T, (v: T) => void] => {
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

  return (
    <PhonesContext.Provider
      value={{
        isOpened,
        setIsOpened,
        current,
        setCurrent,
        favorites,
        setFavorites,
        cart,
        setCart,
      }}
    >
      {children}
    </PhonesContext.Provider>
  );
};
