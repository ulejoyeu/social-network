import { Navigate } from "react-router-dom";
import { useSession } from "../context/user-context"

export const ProtectedRoute = ({ children }) => {
    const {user} = useSession();

    return user ? children : <Navigate to="/login" />
}