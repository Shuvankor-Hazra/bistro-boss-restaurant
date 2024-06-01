import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { IoPeopleOutline, IoTrashBinOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })


    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: `${user.name} is an Admin now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleDeleteUser = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: 'top',
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 2000
                            });
                        }
                    })
            }
        });
    }



    return (
        <div>
            <SectionTitle heading={'MANAGE ALL USERS'} subHeading={'--- How many?? ---'} />
            <div className="flex items-center justify-between text-3xl font-semibold">
                <h2>All users</h2>
                <h2>Total users: {users.length}</h2>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-lg mt-5">
                    {/* head */}
                    <thead className="text-lg bg-[#BB8506] text-white">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) => <tr key={user._id}>
                                <td>{idx + 1}</td>
                                <th>{user.name}</th>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn text-xl bg-[#bb8506] text-white"><IoPeopleOutline className="" /></button>}
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteUser(user)} className="btn text-xl bg-rose-600 text-white"><IoTrashBinOutline className="" /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;