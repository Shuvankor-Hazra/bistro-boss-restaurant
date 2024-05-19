import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
    const { name, recipe, image, price, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();

    const handleAddToCart = (food) => {
        if (user && user.email) {
            // todo: send card item to db
            console.log(user.email, food);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "meddle",
                            icon: "success",
                            title: `${name} added to your cart!`,
                            showConfirmButton: false,
                            timer: 4000
                        });
                    }
                })
        } else {
            Swal.fire({
                title: "You are not logged in!",
                text: "Please login add to the card!",
                icon: "info",
                showCancelButton: true,
                confirmButtonColor: "#D99904",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // Send the user to the login page
                    navigate('/login', { state: { from: location } });
                }
            });
        }
        console.log(food, user.email);
    }
    return (
        <div className="card bg-base-300 rounded-none ">
            <figure className="">
                <img src={image} alt="" className="w-full border-t" />
            </figure>
            <p className="text-center font-bold bg-black text-[#BB8506] py-2 -mt-5">Price: {price}$</p>
            <div className="card-body items-center text-center">
                <h2 className="text-xl font-bold">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button
                        onClick={() => handleAddToCart(item)}
                        className="btn btn-outline border-0 border-b-4 border-[#BB8506] bg-slate-300 uppercase text-[#BB8506]">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;