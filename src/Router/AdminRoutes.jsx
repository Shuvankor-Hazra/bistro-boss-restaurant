import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";


const AdminRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className="flex justify-center min-h-[500px]">
            <span className="loading loading-infinity w-16 text-[#BB8506]" />
        </div>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/' state={{ from: location }} replace />

};

export default AdminRoutes;








// import { Navigate, useLocation } from "react-router-dom";
// import useAdmin from "../Hooks/useAdmin";
// import useAuth from "../Hooks/useAuth";
// const AdminRoutes = (children) => {
//     const { user, loading } = useAuth();
//     const [isAdmin, isAdminLoading] = useAdmin();
//     const location = useLocation();
//     if (loading || isAdminLoading) {
//         return <div className="flex justify-center min-h-[500px]">
//             <span className="loading loading-infinity w-16 text-[#BB8506]" />
//         </div>
//     }
//     if (user && isAdmin) {
//         return children;
//     }
//     return <Navigate to={'/login'} state={{ from: location }} replace />
// };
// export default AdminRoutes;