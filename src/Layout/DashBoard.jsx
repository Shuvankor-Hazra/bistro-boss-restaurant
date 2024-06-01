import { NavLink, Outlet } from 'react-router-dom';
import { IoBook, IoCalendar, IoCalendarClear, IoCart, IoHome, IoImagesSharp, IoList, IoNewspaperSharp, IoPeople, IoRestaurantSharp } from "react-icons/io5";
import useCart from '../Hooks/useCart';
import { FaUtensils } from 'react-icons/fa';
import useAdmin from '../Hooks/useAdmin';


const DashBoard = () => {
    const [cart] = useCart();
    // TODO: Get the isAdmin value from the database
    const [isAdmin] = useAdmin();
    return (
        <div className='flex max-w-screen-xl mx-auto px-3 lg:px-0'>
            <div className='min-h-screen w-2/6 border ps-6 pt-8 bg-[#D1A054]'>
                <div className='mb-12'>
                    <h2 className='text-2xl font-semibold'>Bistro Boss</h2>
                    <h3 className='text-xl tracking-widest font-medium'>Restaurant</h3>
                </div>
                <ul className='menu space-y-5 text-xl '>
                    {
                        isAdmin ? <>
                            <li><NavLink to='/dashboard/adminHome' className='flex items-center gap-2'><IoHome /> Admin Home</NavLink></li>

                            <li><NavLink to='/dashboard/addItems' className='flex items-center gap-2'><FaUtensils /> Add Items</NavLink></li>

                            <li><NavLink to='/dashboard/manageItems' className='flex items-center gap-2'><IoList />Manage Items</NavLink></li>

                            <li><NavLink to='/dashboard/manageBookings' className='flex items-center gap-2'><IoBook /> Manage Bookings</NavLink></li>

                            <li><NavLink to='/dashboard/users' className='flex items-center gap-2'><IoPeople /> All Users</NavLink></li>
                        </>
                            : <>
                                <li><NavLink to='/dashboard/userHome' className='flex items-center gap-2'><IoHome /> User Home</NavLink></li>

                                <li><NavLink to='/dashboard/reservation' className='flex items-center gap-2'><IoCalendar /> Reservation</NavLink></li>

                                <li><NavLink to='/dashboard/cart' className='flex items-center gap-2'><IoCart /> My Cart ({cart.length})</NavLink></li>

                                <li><NavLink to='/dashboard/review' className='flex items-center gap-2'><IoNewspaperSharp /> Add a Review</NavLink></li>

                                <li><NavLink to='/dashboard/paymentHistory' className='flex items-center gap-2'><IoCalendarClear /> Payment History</NavLink></li>
                            </>
                    }

                    {/* Shared nav links */}
                    <div className="divider"></div>

                    <li><NavLink to='/' className='flex items-center gap-2'><IoHome /> Home</NavLink></li>

                    <li><NavLink to='/order/salads' className='flex items-center gap-2'><IoRestaurantSharp /> Order Food</NavLink></li>

                    <li><NavLink to='/contact' className='flex items-center gap-2'><IoImagesSharp /> Contact</NavLink></li>
                </ul>
            </div>
            <div className='w-4/5 p-8'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashBoard;