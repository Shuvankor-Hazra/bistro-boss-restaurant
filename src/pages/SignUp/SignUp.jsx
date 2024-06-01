import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const { createUser, updateUserProfile, setUser, user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const onSubmit = (data) => {
        // console.log(data)

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                setUser({ ...user, photoURL: data.photoURL, displayName: data.name })
                    .then(() => {
                        // create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                console.log(res.data);
                                if (res.data.insertedId) {
                                    console.log('User added to the database');
                                    reset();
                                    navigate(from, { replace: true })
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "Sign Up Successful",
                                        showConfirmButton: false,
                                        timer: 2000
                                    });
                                }
                            })
                    })
                    .catch(error => {
                        toast.error(error)
                    })
            })
    }


    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse justify-around">
                    <div className="text-center w-full md:w-1/2">
                        <h1 className="text-5xl font-bold">SignUp  now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card card-body w-full md:w-1/2 shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register("name", { required: true })} name="name" type="text" placeholder="Your name" className="input input-bordered" />
                                {errors.name && <span className="text-warning font-medium">Name is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input {...register("photoURL", { required: true })} name="photoURL" type="text" placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoUrl && <span className="text-warning font-medium">Photo url is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} name="email" type="email" placeholder="Your email" className="input input-bordered" />
                                {errors.email && <span className="text-warning font-medium">Email is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[0-9])(?=.*[- ?!@#$%^&*/\\])(?=.*[A-Z])(?=.*[a-z])/
                                })} name="password" type="password" placeholder="Your password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className="text-warning font-medium">Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-warning font-medium">Password must be more then 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-warning font-medium">Password must be less then 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className="text-warning font-medium">Password must be contain at least one digit, one lowercase letter, one uppercase letter, and one special character from the set: - ?!@#$%^&*/\\.</span>}
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-outline border-0 border-b-4 border-[#BB8506] bg-[#D1A054B3] uppercase" type="submit" value='SignUp' />
                            </div>

                            <div className='text-center font-semibold mt-5'>
                                <Link to='/login' className='font-semibold text-[#D1A054] underline '>Already registered? Go to log in</Link>
                                <div className="divider"></div>
                                <p >Or sign in with</p>
                            </div>
                        </form>
                        <div className="px-8">
                            <SocialLogin />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;