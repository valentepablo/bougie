import { useState, createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);

  const openCart = () => {
    setOpen((open) => !open);
  };

  const addItemToCart = (item, quantity) => {
    if (isInCart(item)) {
      const duplicateProducts = [...products];
      const duplicate = duplicateProducts.find((product) => product.id === item.id);
      duplicate.cantidad += quantity;
      setProducts([...duplicateProducts]);
    } else {
      setProducts([...products, item]);
    }
  };

  const removeItemFromCart = (item) => {
    setProducts(products.filter((product) => product.id !== item.id));
  };

  const clearCart = () => {
    setProducts([]);
  };

  const calculateTotalPrice = () => {
    return products.reduce((acc, current) => acc + current.precio * current.cantidad, 0);
  };

  const isInCart = (item) => {
    return products.some((product) => product.id === item.id);
  };

  const currencyFormatter = Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  });

  const data = {
    openCart,
    open,
    products,
    addItemToCart,
    removeItemFromCart,
    calculateTotalPrice,
    currencyFormatter,
    clearCart,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
