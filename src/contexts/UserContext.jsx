import { createContext, useEffect, useState } from "react";
import { deleteCookie, getCookie } from "../hooks/useCookie";

export const UserContext = createContext();

function UserProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cart, setCart] = useState([{id: 1, count: 1}, {id: 2, count: 2}]);
    const [accessToken, setAccessToken] = useState("");

    useEffect(function () {
        var token = getCookie('accessToken');
        if(token) {
            setIsLoggedIn(true);
        }
    }, [accessToken]);

    function logOut() {
        setIsLoggedIn(false);
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