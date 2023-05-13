import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "axios";

function Signup() {

    const navigate = useNavigate();
    const form = useForm();
    var { register, control, handleSubmit, formState } = form;
    var { errors } = formState;

    async function registerUser(data) {
        try {
            var response = await axios.post('http://localhost:3000/users/signup', data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <section className="w-full h-screen flex flex-col items-center justify-center px-4">
            <div className="max-w-sm w-full">
                <div className="text-center">
                    <div className="mt-5 space-y-2">
                        <h3 className="text-2xl font-bold sm:text-3xl">Sign Up</h3>
                        <p className="">Already have an account? <span onClick={() => navigate('/login')} className="font-medium cursor-pointer text-primary hover:primary-focus">Login</span></p>
                    </div>
                </div>
                <form className="mt-8 space-y-5" noValidate
                    onSubmit={handleSubmit(registerUser)} >
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
                        Create Account
                    </button>

                </form>
                <DevTool control={control} />
            </div>
        </section>
    )
}

export default Signup