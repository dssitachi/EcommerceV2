import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect, useState } from "react";
import  Loader from '../components/Loader';
import { useAuthContext } from "../contexts";

function Login() {

    const [error, setError] = useState("");
    const { isLoggedIn, loading, login } = useAuthContext();
    const navigate = useNavigate();

    const form = useForm();
    var { register, control, handleSubmit, formState } = form;
    var { errors } = formState;

    function loginHandler(data) {
        login(data, setError);
    }

    useEffect(function redirectIfLoggedIn() {
        if(isLoggedIn) {
            navigate('/products');
        }
    }, [isLoggedIn])

    return (
        <section className="w-full h-screen flex flex-col items-center justify-center px-4">
            { loading && <Loader />}
            <div className="max-w-sm w-full">
                <div className="text-center">
                    <div className="mt-5 space-y-2">
                        <h3 className="text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                        <p className="">Don't have an account? <span onClick={() => { navigate('/signup') }} className="font-medium text-primary cursor-pointer hover:primary-focus">Sign up</span></p>
                    </div>
                </div>
                { error && 
                    <div className="border border-error p-3 mt-2 text-sm rounded"> 
                        <span>{ error }</span>
                    </div>
                }
                <form className="mt-8 space-y-5" noValidate
                    onSubmit={handleSubmit(loginHandler)} >
                    <div>
                        <label htmlFor="email" className="font-medium">Email</label>
                        <input id="email" type="text"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address',
                                },
                            })}
                            className="w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-primary-focus shadow-sm rounded-lg"
                        />
                        <span className="text-xs text-red-600 pt-1">{errors.email?.message}</span>
                    </div>
                    <div>
                        <label htmlFor="password" className="font-medium">Password</label>
                        <input id="password" type="password"
                            {...register('password', {
                                required: 'Password is required'
                            })}
                            className="w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-primary-focus shadow-sm rounded-lg"
                        />
                        <span className="text-xs text-red-600 pt-1">{errors.password?.message}</span>
                    </div>

                    <button className="w-full px-4 py-2 text-white font-medium bg-primary-focus hover:bg-primary rounded-lg duration-150">
                        Log in
                    </button>
                    
                    <div className="text-center">
                        <span className="hover:text-indigo-600">Forgot password?</span>
                    </div>
                 
                </form>

                <DevTool control={control} />
            </div>
        </section>
    )
}

export default Login