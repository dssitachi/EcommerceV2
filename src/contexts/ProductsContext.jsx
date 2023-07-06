import { createContext, useReducer } from "react";
import { useState, useEffect } from "react";
import { displayToast } from "../utils/toast";
import { productInitState, productsReducer } from "../reducers/productsReducer";
import { actionTypes } from "../utils/reducerAction";
import { useAuthContext } from ".";
import { productsService } from "../services/apiServices";

export const ProductsContext = createContext();

function ProductsProvider({ children }) {

    const { token } = useAuthContext();
    const [loading, setLoading] = useState(false);
    const [state, dispatch] = useReducer(productsReducer, productInitState);

    useEffect(() => {
        setLoading(true);
        (async () => {
            try {
                var response = await productsService();
                dispatch({
                    type: actionTypes.INIT_PRODUCTS,
                    payload: response.data
                })
            } catch (error) {
                displayToast("error", "Error occured while fetching products");
            } finally {
                setLoading(false);
            }
        })();
    }, [token]);

    function applyFilter(filterType, filterValue) {
        dispatch({
            type: actionTypes.APPLY_FILTER,
            payload: {
                filterType, filterValue
            }
        })
    }

    function clearFilters() {
        dispatch({
            type: actionTypes.CLEAR_FILTERS,
        })
    }

    return (
        <ProductsContext.Provider 
            value={{ 
                products : state.allProducts, 
                loading,
                applyFilter,
                clearFilters,
                filters: state.filters  
            }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider;