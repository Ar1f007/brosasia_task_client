import styled from 'styled-components';

import { useEffect } from 'react';
import axios from 'axios';
import useProductContext from '../context/products';
import { Product } from './Product';

export const Products = () => {
  const { dispatch, products } = useProductContext();

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

  return (
    <Wrapper>
      {products?.map((product) => (
        <Product key={product._id} {...product} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;
  max-width: 1100px;
  margin-inline: auto;
  padding: 3rem 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media screen and (max-width: 520px) {
    grid-template-columns: 1fr;
    width: 90vw;
  }
`;
