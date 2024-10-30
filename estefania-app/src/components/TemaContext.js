import React, { createContext, useContext, useState } from 'react';

const TemaContext = createContext();

export const TemaProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTema = () => {
    setDarkTheme(prevTema => !prevTema);
  };

  return (
    <TemaContext.Provider value={{ darkTheme, toggleTema }}>
      {children}
    </TemaContext.Provider>
  );
};

export const useTema = () => useContext(TemaContext);