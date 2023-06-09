import { createContext, useEffect, useState } from "react";
import { deleteCookie, getCookie } from "../hooks/useCookie";
import { getAxiosClient } from '../utils/fetcher';
export const UserContext = createContext();

function UserProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cart, setCart] = useState([]);
    const [accessToken, setAccessToken] = useState("");

    useEffect(function () {
        var token = getCookie('accessToken');
        if(token) {
            setIsLoggedIn(true);
            setAccessToken(token);
            (async function getUserCart() {
                try {
                    const response = await getAxiosClient(token).get('/users/cart');
                    setCart(response.data);
                } catch(error) {

                } finally {

                }
            })();
        }
    }, [accessToken]);

    function logOut() {
        setIsLoggedIn(false);
        setAccessToken("");
        setCart([]);
        deleteCookie('accessToken');
    }

    return (
        <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, logOut, accessToken, setAccessToken, cart, setCart }}>
            { children }
        </UserContext.Provider>
    )

}

export default UserProvider