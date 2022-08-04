import { ProductList, Select, Pagination } from '../components';
import styled from 'styled-components';

export const Products = () => {
  return (
    <Wrapper>
      <Select />
      <ProductList />
      <Pagination />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  max-width: 1100px;
  margin-inline: auto;
`;
