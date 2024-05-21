import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";
import { FaCartPlus } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const navItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/menu'>Our Menu</NavLink></li>
        <li><NavLink to='/order/salads'>Order Food</NavLink></li>
        <li><NavLink to='/secret'>Secret</NavLink></li>
    </>

    const handleLogOut = () => {
        try {
            logOut()
            toast.success('Log out successful')
        } catch (err) {
            console.log(err.message);
        }
    }
    return (
        <div className="navbar fixed z-10 bg-opacity-50 bg-black text-white p-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-56">
                        {navItems}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-xl lg:text-3xl font-cinzel">BistroBoss</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-md menu-horizontal space-x-3">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">

                {/* Cart */}
                <Link to={'/dashboard/cart'} className="mr-5">
                    <button className="btn">
                        <FaCartPlus className="text-3xl text-[#D99904]"/>
                        <div className="badge badge-secondary p-3 text-lg">+{cart.length}</div>
                    </button>
                </Link>
                {
                    user ? <>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost btn-circle avatar mr-5'
                        >
                            <div title={user?.displayName} className='w-full rounded-full'>
                                <img
                                    referrerPolicy='no-referrer'
                                    alt='User Profile Photo'
                                    src={user?.photoURL}
                                />
                            </div>
                        </div>
                        <button onClick={handleLogOut} className="btn btn-outline border border-b-4 border-[#BB8506] text-white uppercase">Sign Out</button>
                    </> : <>
                        <Link to={'/login'} className="btn btn-outline border border-b-4 border-[#BB8506] text-white uppercase">Sign In</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;