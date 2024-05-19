import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation();
    const noHeadFoot = location.pathname.includes('login') || location.pathname.includes('signUp');
    return (
        <div>
            <div className="px-3 lg:px-0">
                {noHeadFoot || <Navbar />}
            </div>
            <Outlet />
            {noHeadFoot || <Footer />}
        </div>
    );
};

export default Main;