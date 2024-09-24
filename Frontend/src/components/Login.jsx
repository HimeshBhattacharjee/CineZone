import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
    const location=useLocation();
    const navigate=useNavigate();
    const from=location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        }
        await axios.post("http://localhost:4001/user/login", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success('Login Successful');
                    localStorage.setItem("Users", JSON.stringify(res.data.user));
                    document.getElementById("my_modal_3").close();
                    setTimeout(() => {
                        navigate(from, {replace: true});
                        window.location.href=from;
                    }, 1000)
                }
            }).catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error: " + err.response.data.message);
                    setTimeout(() => { }, 1000);
                }
            });
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black"
                            onClick={() => document.getElementById("my_modal_3").close()}>✕</Link>

                        <h3 className="font-bold text-lg dark:text-black">Login to CinePrime</h3>

                        <div className="mt-4 space-y-2">
                            <span className="dark:text-black">Email</span>
                            <br />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-80 px-3 py-1 rounded-md"
                                {...register("email", { required: true })}
                            />
                            <br />
                            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
                        </div>

                        <div className="mt-4 space-y-2">
                            <span className="dark:text-black">Password</span>
                            <br />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-80 px-3 py-1 rounded-md"
                                {...register("password", { required: true })}
                            />
                            <br />
                            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
                        </div>

                        <div className="flex justify-between mt-4">
                            <button type="submit" className="rounded-md bg-violet-500 text-white px-3 py-1 hover:bg-violet-700 duration-200">Login</button>
                            <p className="dark:text-black">Not registered? <Link to="/signup" className="underline text-blue-500 cursor-pointer">Signup</Link></p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;