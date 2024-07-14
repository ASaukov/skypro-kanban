import { createContext, useEffect } from "react";
import { useUser } from "./useUser";

export const UserContext = createContext(null);

export const UserProvider = ({children}) => {
    const {user, login, logout} = useUser();

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    return <UserContext.Provider value={{user, login, logout}}>
        {children}
    </UserContext.Provider>
};