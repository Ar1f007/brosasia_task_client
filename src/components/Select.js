import styled from 'styled-components';
import useProductContext from '../context/products';

import { useEffect, useState } from 'react';

export const Select = () => {
  const [prodPerPage, setProdPerPage] = useState(10);
  const { dispatch } = useProductContext();

  useEffect(() => {
    dispatch({
      type: 'SET_PRODUCT_PER_PAGE',
      payload: { prodPerPage },
    });
  }, [prodPerPage, dispatch]);

  return (
    <Div>
      <Span>Products per page</Span>
      <SelectPerPage onChange={(e) => setProdPerPage(e.target.value)}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </SelectPerPage>
    </Div>
  );
};

const Div = styled.div`
  margin: 1rem 0;
`;

const Span = styled.span`
  margin-right: 5px;
`;

const SelectPerPage = styled.select`
  background-color: lightgray;
  border: none;
  padding: 3px 5px;
  border-radius: 3px;
`;
