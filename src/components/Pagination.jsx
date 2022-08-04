import useProductContext from '../context/products';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const Pagination = () => {
  const { numOfPages, dispatch } = useProductContext();

  const handlePageClick = (e) => {
    dispatch({ type: 'SET_PAGE', payload: { page: e.selected + 1 } });
  };

  return (
    <Paginate
      nextLabel="next >"
      pageCount={numOfPages}
      previousLabel="< previous"
      onPageChange={handlePageClick}
    />
  );
};

const Paginate = styled(ReactPaginate).attrs({
  activeClassName: 'active',
})`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-between;
  list-style-type: none;
  padding: 0 5rem;

  li {
    margin-bottom: 10px;
  }

  li a {
    border-radius: 7px;
    padding: 0.1rem 1rem;
    border: gray 1px solid;
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: #0366d6;
    border-color: transparent;
    color: white;
    min-width: 32px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;
