import { useNavigate } from "react-router-dom";
import { setCookie } from '../hooks/useCookie';
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "axios";

function Login() {

    const navigate = useNavigate();
    const form = useForm();
    var { register, control, handleSubmit, formState } = form;
    var { errors } = formState;

    async function login(data) {
        try {
            var response = await axios.post('http://localhost:3000/users/login', data);
            
            setCookie()
        } catch (error) {
            // console.error(error);
        }
    }

    return (
        <section className="w-full h-screen flex flex-col items-center justify-center px-4">
            <div className="max-w-sm w-full">
                <div className="text-center">
                    <div className="mt-5 space-y-2">
                        <h3 className="text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                        <p className="">Don't have an account? <span onClick={() => { navigate('/signup') }} className="font-medium text-primary cursor-pointer hover:primary-focus">Sign up</span></p>
                    </div>
                </div>
                <form className="mt-8 space-y-5" noValidate
                    onSubmit={handleSubmit(login)} >
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
                            className="w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                        <p>{errors.email?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="password" className="font-medium">Password</label>
                        <input id="password" type="password"
                            {...register('password', {
                                required: 'Password is required'
                            })}
                            className="w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-red shadow-sm rounded-lg"
                        />
                        <p>{errors.password?.message}</p>
                    </div>

                    <button className="w-full px-4 py-2 text-white font-medium bg-primary-focus hover:bg-primary rounded-lg duration-150">
                        Sign in
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