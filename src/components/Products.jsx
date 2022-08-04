import { ProductList, Select } from '../components';
import styled from 'styled-components';

export const Products = () => {
  return (
    <Wrapper>
      <Select />
      <ProductList />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  max-width: 1100px;
  margin-inline: auto;
`;
