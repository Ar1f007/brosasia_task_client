export const reducer = (state, action) => {
  const { products, numOfPages, totalProducts, prodPerPage, queryTerm } = action.payload;

  if (action.type === 'GET_PRODUCTS_SUCCESS') {
    return { ...state, products, numOfPages, totalProducts };
  }

  if (action.type === 'SET_PRODUCT_PER_PAGE') {
    return { ...state, prodPerPage };
  }

  if (action.type === 'SET_QUERY') {
    return { ...state, queryTerm };
  }
  return state;
};
