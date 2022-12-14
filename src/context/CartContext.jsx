import { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const openCart = () => {
    setOpen((open) => !open);
  };

  const data = { openCart, open };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
