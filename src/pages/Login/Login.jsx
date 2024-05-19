import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
        console.log(disabled);
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        try {
            const result = await signIn(email, password)
            console.log(result)
            // toast.success('Login successful')
            Swal.fire({
                position: "Middle",
                icon: "success",
                title: "Login successful",
                showConfirmButton: false,
                timer: 2000
            });
            navigate(from, { replace: true });
        } catch (err) {
            console.log(err.message)
            toast.error(err.message)
        }
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse justify-around">
                <div className="text-center lg:text-left w-full md:w-1/2">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card w-full md:w-1/2 shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="Your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="Your password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control flex items-center">
                            <label className="label  text-center">
                                <LoadCanvasTemplate />
                            </label>
                            <input onBlur={handleValidateCaptcha} name="captcha" type="text" placeholder="Type the text above" className="input input-bordered w-full" />
                            {/* <button onClick={handleValidateCaptcha} className="btn btn-outline border-0 border-b-4 border-[#BB8506] bg-[#D1A054B3] uppercase mt-5">Validate</button> */}
                        </div>
                        <div className="form-control mt-6">
                            {/* TODO : Apply 'disabled/false' for re captcha*/}
                            <input disabled={false} className="btn btn-outline border-0 border-b-4 border-[#BB8506] bg-[#D1A054B3] uppercase" type="submit" value='Login' />
                        </div>
                        <div className='text-center font-semibold'>
                            <Link to={'/signUp'} className='font-semibold text-[#D1A054] underline'>New here? Create a New Account</Link>
                            <p>Or sign in with</p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;