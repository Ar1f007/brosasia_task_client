export const reducer = (state, action) => {
  const { products, numOfPages, totalProducts } = action.payload;

  if (action.type === 'GET_PRODUCTS_SUCCESS') {
    return { ...state, products, numOfPages, totalProducts };
  }
  return state;
};
