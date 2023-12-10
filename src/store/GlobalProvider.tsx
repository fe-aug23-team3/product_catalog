import React, { useState } from 'react';

export const initialValue: any = {
  todos: [],
};

export const PhonesContext = React.createContext(initialValue);

export const PhonesProvider = ({ children }: { children: React.ReactNode }) => {
  const [s, setS] = useState([]);

  return (
    <PhonesContext.Provider
      value={{
        s,
        setS,
      }}
    >
      {children}
    </PhonesContext.Provider>
  );
};
