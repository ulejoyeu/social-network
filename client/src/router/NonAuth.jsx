import { Navigate, Route } from "react-router-dom";
import { useSession } from "../context/user-context"

export const NonAuthRoute = ({ children }) => {
    const {user} = useSession();

    return !user ? children : <Navigate to="/profile" />
}