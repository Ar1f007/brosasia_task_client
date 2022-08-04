import { createContext, useContext, useReducer } from 'react';
import { reducer } from './reducer';

const ProductContext = createContext();

const INITIAL_STATE = {
  products: [],
  page: 1,
  numOfPages: 1,
  totalProducts: 0,
};

export const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <ProductContext.Provider value={{ ...state, dispatch }}>{children}</ProductContext.Provider>
  );
};

const useProductContext = () => useContext(ProductContext);

export default useProductContext;
