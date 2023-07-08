import { createContext, useEffect, useState } from "react";
import { useAuthContext } from ".";
import { getAxiosClient } from "../utils/fetcher";
import { displayToast } from '../utils/toast';
import { getUserCart } from "../services/apiServices";

export const CartContext = createContext();

function CartProvider({children}) {

    const [cart, setCart] = useState([]);
    const { accessToken } = useAuthContext();
    const [ disableCart, setDisableCart ] = useState(false);

    useEffect(function () { 
        if(accessToken) {
            (async function () {
                try {
                    const response = await getUserCart(accessToken);
                    setCart(response.data);
                } catch(error) {

                } finally {

                }
            })();
        }
    }, [accessToken]);

    async function updateCart(product, currentQty) {
		var updatedCart = [];
		if (currentQty == 0) {
			updatedCart = cart.filter(x => x.item.id != product.item.id);
		} else {
			updatedCart = cart.map((x) => {
				if (x.item.id == product.item.id) return { ...x, count: currentQty };
				return x;
			})
		}

		try {
			setDisableCart(true);
			let response = await getAxiosClient(accessToken).post('/users/updateCart', updatedCart);
			setCart(updatedCart);
		} catch (error) {
			displayToast("error", "Error occured while adding to Cart");
		} finally {
			setDisableCart(false);
		}
    }

    return (
        <CartContext.Provider value={{ cart, setCart, updateCart, disableCart }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider;