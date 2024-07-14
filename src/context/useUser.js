import { useState } from "react"

const getUserFromLocalStorage = () => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        return user
    } catch (_) {
        return null;
    }
};


export const useUser = () => {
    const [user, setUser] = useState(getUserFromLocalStorage());

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return {user, login, logout}
}