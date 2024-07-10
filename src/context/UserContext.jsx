import { createContext } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({children}) => {
    const {user, login, logout} = useUser();

    return <UserContext.Provider value={{user, login, logout}}>
        {children}
    </UserContext.Provider>
};