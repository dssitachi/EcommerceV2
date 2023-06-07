import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const ProductsContext = createContext();

function ProductsProvider({ children }) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        setLoading(true);
        (async () => {
            try {
                var response = await axios.get('http://localhost:3000/products');
                setProducts(response.data);
            } catch (error) {

            } finally {
                setLoading(false);
            }
        })();
    }, []);

    useEffect(() => {
        setFilteredProducts(products);
    }, [products])

    function filterProducts(brandFilters, categoryFilters, sortBy) {
        var tempProducts = [...products];

        if (brandFilters.length > 0)
            tempProducts = tempProducts.filter(({ brand }) => (brandFilters.includes(brand)))
        if (categoryFilters.length > 0)
            tempProducts = tempProducts.filter(({ category }) => (categoryFilters.includes(category)))
        // if (sortBy === "low")
        //     tempProducts = tempProducts.sort((a, b) => a.price - b.price);
        // else if (sortBy === "high")
        //     tempProducts = tempProducts.sort((a, b) => b.price - a.price);
        setFilteredProducts(tempProducts);
    }



    return (
        <ProductsContext.Provider value={{ products, loading, filterProducts, filteredProducts }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider;