import { IoTrashBinOutline } from "react-icons/io5";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: `${menu.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }

    return (
        <div>
            <SectionTitle heading={'MANAGE ALL ITEMS'} subHeading={'--- Hurry Up! ---'} />
            <div className="flex items-center justify-between text-3xl font-semibold">
                <h2>Manage users</h2>
                <h2>Total users: {menu.length}</h2>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-lg mt-5">
                        {/* head */}
                        <thead className="text-lg bg-[#BB8506] text-white">
                            <tr>
                                <th></th>
                                <th>Item image</th>
                                <th>Item name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, idx) => <tr key={item._id}>
                                    <td>{idx + 1}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>${item.price}</td>
                                    <th>
                                        <Link to={`/dashboard/updateItem/${item._id}`}>
                                            <button className="btn text-xl bg-[#bb8506] text-white"><FaRegEdit /></button>
                                        </Link>
                                    </th>
                                    <td>
                                        <button onClick={() => handleDeleteItem(item)} className="btn text-xl bg-rose-600 text-white"><IoTrashBinOutline /></button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;