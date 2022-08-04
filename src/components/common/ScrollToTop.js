import { useEffect } from 'react';
import useProductContext from '../../context/products';

export const ScrollToTop = () => {
  const { products } = useProductContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [products]);
  return null;
};
