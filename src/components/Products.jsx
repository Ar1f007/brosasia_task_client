import styled from 'styled-components';

import { useEffect } from 'react';
import axios from 'axios';
import useProductContext from '../context/products';

export const Products = () => {
  const { dispatch } = useProductContext();

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get('http://localhost:5000/api/products');

      dispatch({
        type: 'GET_PRODUCTS_SUCCESS',
        payload: {
          products: data.products,
          numOfPages: data.numOfPages,
          totalProducts: data.totalProducts,
        },
      });
    };
    getProducts();
  }, [dispatch]);

  return <Wrapper></Wrapper>;
};

const Wrapper = styled.main`
  width: 85vw;
  margin-inline: auto;
`;
