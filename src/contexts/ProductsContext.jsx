import { createContext } from "react";
import useSWR from 'swr';
import fetcher from "../utils/fetcher";
import { useState } from "react";

export const ProductsContext = createContext();

function ProductsProvider({children}) {

    const { data, error, isLoading } = useSWR(`http://localhost:3000/products`, fetcher, {
        fallbackData: []
    });

    const [filteredProducts, setFilteredProducts] = useState([]);

    function filterProducts(sortBy, brandFilters, categoryFilters)  {
        var tempProducts = [...data];
        
        if (brandFilters.length > 0)
            tempProducts = tempProducts.filter(({ attributes }) => (brandFilters.includes(attributes.brand)))
        if (categoryFilters.length > 0)
            tempProducts = tempProducts.filter(({ attributes }) => (categoryFilters.includes(attributes.for)))
        if (sortBy === "low")
            tempProducts = tempProducts.sort((a, b) => a.price - b.price);
        else if (sortBy === "high")
            tempProducts = tempProducts.sort((a, b) => b.price - a.price);
        setFilteredProducts(tempProducts);
    }



    return (
        <ProductsContext.Provider value={{ products: data, isLoading, error }}>
            { children }
        </ProductsContext.Provider>
    )
}

export default ProductsProvider;