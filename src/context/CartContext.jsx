import { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);

  const openCart = () => {
    setOpen((open) => !open);
  };

  const addItemToCart = (item) => {
    setProducts([...products, item]);
  };

  const data = { openCart, open, products, addItemToCart };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
