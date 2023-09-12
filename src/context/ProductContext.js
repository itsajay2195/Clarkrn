import React, {createContext, useState} from 'react';

export const ProductContext = createContext();

export const ProductContextProvider = ({children}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Define any other state variables or functions you want to share

  return (
    <ProductContext.Provider
      value={{
        data,
        setData,
        loading,
        setLoading,
      }}>
      {children}
    </ProductContext.Provider>
  );
};
