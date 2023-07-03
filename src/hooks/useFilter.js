import { useProductsContext } from "../contexts";

export function useFilter() {
    const { products, filters } = useProductsContext();
    const { brands, categories, sortBy } = filters;
    var tempProducts = [...products];
    if (brands.length > 0)
        tempProducts = tempProducts.filter(({ brand }) =>
            brands.includes(brand)
        );
    if (categories.length > 0)
        tempProducts = tempProducts.filter(({ category }) =>
            categories.includes(category)
        );
    if (sortBy === "low")
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    if (sortBy === "high")
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);

    return tempProducts;
}
