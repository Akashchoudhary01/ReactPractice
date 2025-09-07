import React, { createContext } from 'react';

export const BioContext = createContext();
const name = "Akash Choudhary";
const age = "22";


export const BioProvider = ({ children }) => {
  return (
    <BioContext.Provider value={{name , age }}>
      {children}
    </BioContext.Provider>
  );
};
