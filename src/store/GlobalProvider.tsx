import React, { useState } from 'react';

export const initialValue: any = {
  todos: [],
};

export const PhonesContext = React.createContext(initialValue);

export const PhonesProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [current, setCurrent] = useState('Newest');

  return (
    <PhonesContext.Provider
      value={{
        isOpened,
        setIsOpened,
        current,
        setCurrent,
      }}
    >
      {children}
    </PhonesContext.Provider>
  );
};
