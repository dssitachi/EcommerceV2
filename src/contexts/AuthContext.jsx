import { createContext, useEffect, useState } from "react";
import { getCookie, setCookie, deleteCookie } from "../hooks/useCookie";
import { displayToast } from "../utils/toast";
import { loginService, signupService } from "../services/apiServices";

export const AuthContext = createContext();

function AuthProvider({children}) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [accessToken, setAccessToken] = useState("");
    const [ loading, setLoading ] = useState(false);
    
    useEffect(function () {
        var token = getCookie('accessToken');
        if(token) {
            setIsLoggedIn(true);
            setAccessToken(token);
        }
    }, [accessToken]);

    async function login(data, errorCb) {
        try {
            setLoading(true);
            var response = await loginService(data);
            setAccessToken(response.data.access_token);
            setIsLoggedIn(true);
            setCookie('accessToken', response.data.access_token);
            displayToast("success", "Logged In Successfully");
        } catch (error) {
            errorCb(error.response.data.message);
        } finally {
            setLoading(false);
        }
    }

    async function signUp(data, errorCb) {
        try {
            setLoading(true);
            var response = await signupService(data);
            setIsLoggedIn(true);
            setCookie('accessToken', response.data.access_token);
            displayToast("success", "Account Created Successfully");
        } catch (error) {
            errorCb(error.response.data.message);
        } finally {
            setLoading(false);
        }
    }

    function logOut() {
        setIsLoggedIn(false);
        setAccessToken("");
        deleteCookie('accessToken');
    }

    return (
        <AuthContext.Provider value={{ accessToken, login, loading, isLoggedIn, setIsLoggedIn, signUp, logOut}}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider