import React, {createContext, useState} from 'react';

export const ContactContext = createContext();

export const ContactContextProvider = ({children}) => {
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
    <ContactContext.Provider
      value={{
        productState,
        setData,
        setLoader,
      }}>
      {children}
    </ContactContext.Provider>
  );
};
