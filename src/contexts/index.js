import { useContext } from "react";
import { ProductsContext } from "./ProductsContext";
import { AuthContext } from "./AuthContext";
import { CartContext } from "./CartContext";

export { default as ProductsContextProvider } from './ProductsContext';
export { default as CartContextProvider } from './CartContext';
export { default as AuthContextProvider } from './AuthContext';

export const useProductsContext = () => useContext(ProductsContext);
export const useCartContext = () => useContext(CartContext);
export const useAuthContext = () => useContext(AuthContext);