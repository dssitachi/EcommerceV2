import { createContext, useState } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cart, setCart] = useState([]);
    const [accessToken, setAccessToken] = useState("");
    const [username, setUsername] = useState("");

    return (
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )

}

export default UserProvider