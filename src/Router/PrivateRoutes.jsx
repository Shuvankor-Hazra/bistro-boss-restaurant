import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center min-h-[500px]">
            <span className="loading loading-infinity w-32 text-[#BB8506]" />
        </div>
    }

    if (user) {
        return children;
    } else {
        return <Navigate to={'/login'} state={{ from: location }} replace />
    }
};

export default PrivateRoutes;