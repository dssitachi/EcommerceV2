import { createContext, useEffect, useState } from "react";
import { useAuthContext } from ".";
import { getAxiosClient } from "../utils/fetcher";

export const CartContext = createContext();

function CartProvider({children}) {

    const [cart, setCart] = useState([]);
    const { accessToken } = useAuthContext();

    useEffect(function () { 
        if(accessToken) {;
            (async function getUserCart() {
                try {
                    const response = await getAxiosClient(accessToken).get('/users/cart');
                    setCart(response.data);
                } catch(error) {

                } finally {

                }
            })();
        }
    }, [accessToken]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider;