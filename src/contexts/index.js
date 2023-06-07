import { useContext } from "react";
import { ProductsContext } from "./ProductsContext";
import { UserContext } from "./UserContext";

export { default as UserContextProvider } from './UserContext';
export { default as ProductsContextProvider } from './ProductsContext';

export const useUserContext = () => useContext(UserContext);
export const useProductsContext = () => useContext(ProductsContext);