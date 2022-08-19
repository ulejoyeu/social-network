import { createContext, useContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const login = async (username, password) => {
        console.log({username, password});
        try {
            const response = await fetch(
                "http://localhost:5000/auth/login",
                {
                    method: 'post',
                    body: JSON.stringify({ username, password }),
                    headers: {'Content-Type': 'application/json'},
                    credentials: 'include'
                },
            );
            const data = await response.json();
            console.log(data);
            setUser(data.user);

        } catch (error) {
            console.error(error);
        }
    };

    const logout = async () => {
        try {
            const response = await fetch(
                "http://localhost:5000/auth/logout",
                { method: "post" },
            );
            console.log(await response.json());
            setUser(null);
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    );
}

export const useSession = () => {
    const session = useContext(UserContext);
    return session;
}
