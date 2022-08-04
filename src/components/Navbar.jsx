import styled from 'styled-components';

export const Navbar = () => {
  return (
    <Wrapper>
      <SearchContainer>
        <Input placeholder="search by product name" />
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
