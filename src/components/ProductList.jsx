import styled from 'styled-components';

import { useEffect } from 'react';
import { Product } from '../components';
import axios from 'axios';
import useProductContext from '../context/products';

export const ProductList = () => {
  const { dispatch, products, prodPerPage, queryTerm, page } = useProductContext();

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/products?page=${page}&limit=${prodPerPage}&search=${queryTerm}`
      );

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
  }, [dispatch, page, prodPerPage, queryTerm]);

  return (
    <Wrapper>
      {products?.map((product) => (
        <Product key={product._id} {...product} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;

  padding: 3rem 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media screen and (max-width: 520px) {
    grid-template-columns: 1fr;
    width: 90vw;
  }
`;
