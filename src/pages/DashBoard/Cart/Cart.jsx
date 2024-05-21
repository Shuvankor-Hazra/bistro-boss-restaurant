import { IoTrashBinOutline } from "react-icons/io5";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecure = useAxiosSecure();
    const handleDelete = (id) => {
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
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: 'top',
                                title: "Deleted!",
                                text: "Your cart food has been deleted.",
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

            <div className="flex items-center justify-between text-3xl font-semibold">
                <h2>Total Items: {cart.length}</h2>
                <h2>Total Price: ${totalPrice}</h2>
                <button className="btn bg-[#BB8506] uppercase text-white">Pay</button>
            </div>

            <div className="overflow-x-auto ">
                <table className="table table-lg mt-5">
                    {/* head */}
                    <thead className="text-lg bg-[#BB8506] text-white">
                        <tr>
                            <th></th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Item Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-lg">
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="rounded-lg w-32 h-12">
                                                <img src={item.image} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-xl ">{item.name}</td>
                                <td className="text-xl ">{item.price}$</td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn text-xl bg-rose-600 text-white"><IoTrashBinOutline className="" /></button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;