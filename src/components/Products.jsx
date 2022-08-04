import { ProductList, Select, Pagination } from '../components';
import styled from 'styled-components';
import useProductContext from '../context/products';

export const Products = () => {
  const { products } = useProductContext();
  return (
    <Wrapper>
      <Select />
      <ProductList />
      {products.length > 0 && <Pagination />}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  max-width: 1100px;
  margin-inline: auto;
`;
