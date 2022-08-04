import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useProductContext from '../context/products';

export const Navbar = () => {
  const [query, setQuery] = useState('');
  const { dispatch } = useProductContext();

  useEffect(() => {
    dispatch({
      type: 'SET_QUERY',
      payload: { queryTerm: query },
    });
  }, [query, dispatch]);

  return (
    <Wrapper>
      <SearchContainer>
        <Input
          placeholder="search by product name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </SearchContainer>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100%;
  padding: 20px 10px;
  background: #ddd8d8;
`;

const SearchContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin-inline: auto;
`;

const Input = styled.input`
  border: none;
  padding: 10px 20px;
  border-radius: 5px;

  width: 100%;

  &:focus {
    outline-color: #999;
  }
`;
