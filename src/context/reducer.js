export const reducer = (state, action) => {
  if (action.type === 'START_LOADING') {
    return { ...state, loading: true };
  }

  if (action.type === 'STOP_LOADING') {
    return { ...state, loading: false };
  }

  if (action.type === 'GET_PRODUCTS_SUCCESS') {
    return {
      ...state,
      products: action.payload.products,
      numOfPages: action.payload.numOfPages,
      totalProducts: action.payload.totalProducts,
    };
  }

  if (action.type === 'SET_PRODUCT_PER_PAGE') {
    return { ...state, prodPerPage: action.payload.prodPerPage };
  }

  if (action.type === 'SET_QUERY') {
    return { ...state, queryTerm: action.payload.queryTerm, page: 1 };
  }

  if (action.type === 'SET_PAGE') {
    return { ...state, page: action.payload.page };
  }
  return state;
};
