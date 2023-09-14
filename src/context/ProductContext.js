import React, {createContext, useState} from 'react';

export const ProductContext = createContext();

export const ProductContextProvider = ({children}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState(null);

  const getData = id => data?.products.filter(item => item.id === id);

  // Define any other state variables or functions you want to share

  return (
    <ProductContext.Provider
      value={{
        data,
        setData,
        loading,
        setLoading,
        getData,
        cart,
        setCart,
      }}>
      {children}
    </ProductContext.Provider>
  );
};
