import React, {createContext, useState} from 'react';

export const ProductContext = createContext();

export const ProductContextProvider = ({children}) => {
  const [productState, setProductState] = useState({
    data: null,
    loading: false,
  });

  // Function to set the data
  const setData = newData => {
    setProductState({...productState, data: newData});
  };

  const setLoader = val => {
    setProductState({...productState, loading: val});
  };

  // Define any other state variables or functions you want to share

  return (
    <ProductContext.Provider
      value={{
        productState,
        setData,
        setLoader,
      }}>
      {children}
    </ProductContext.Provider>
  );
};
