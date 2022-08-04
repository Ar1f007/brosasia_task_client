import styled from 'styled-components';

import { useEffect } from 'react';
import { Product, Loader } from '../components';
import axios from 'axios';
import useProductContext from '../context/products';

export const ProductList = () => {
  const { dispatch, products, prodPerPage, queryTerm, page, loading } = useProductContext();

  useEffect(() => {
    const getProducts = async () => {
      try {
        dispatch({ type: 'START_LOADING' });
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_ENDPOINT}/products?page=${page}&limit=${prodPerPage}&search=${queryTerm}`
        );

        dispatch({ type: 'STOP_LOADING' });
        dispatch({
          type: 'GET_PRODUCTS_SUCCESS',
          payload: {
            products: data.products,
            numOfPages: data.numOfPages,
            totalProducts: data.totalProducts,
          },
        });
      } catch (error) {
        dispatch({ type: 'STOP_LOADING' });
        alert('Something went wrong');
      }
    };
    getProducts();
  }, [dispatch, page, prodPerPage, queryTerm]);

  if (loading) {
    return <Loader />;
  }

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
