import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const { createUser, updateUserProfile, setUser, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log(data)
        try {
            const result = await createUser(data.email, data.password)
            console.log(result)
            try {
                const result = updateUserProfile(data.name, data.photoUrl)
                console.log(result);
                setUser({ ...user, displayName: data.name, photoURL: data.photo })
                reset();
                navigate('/')
                Swal.fire({
                    position: "Middle",
                    icon: "success",
                    title: "Sign Up Successful",
                    showConfirmButton: false,
                    timer: 2000
                });
            } catch (err) {
                console.log(err);
            }
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse justify-around">
                <div className="text-center lg:text-left w-full md:w-1/2">
                    <h1 className="text-5xl font-bold">SignUp  now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card w-full md:w-1/2 shadow-2xl bg-base-100">
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
                            <input {...register("photoUrl", { required: true })} name="photoUrl" type="text" placeholder="Photo Url" className="input input-bordered" />
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

                        <div className='text-center font-semibold'>
                            <Link to='/login' className='font-semibold text-[#D1A054] underline'>Already registered? Go to log in</Link>
                            <p>Or sign in with</p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;