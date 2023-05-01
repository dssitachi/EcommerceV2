
function Login() {
    return (
        <section className="w-full h-screen flex flex-col items-center justify-center px-4">
            <div className="max-w-sm w-full">
                <div className="text-center">
                    <div className="mt-5 space-y-2">
                        <h3 className="text-2xl font-bold sm:text-3xl">Log in to your account</h3>
                        <p className="">Don't have an account? <a href="#" className="font-medium text-primary hover:primary-focus">Sign up</a></p>
                    </div>
                </div>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="mt-8 space-y-5"
                >
                    <div>
                        <label className="font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            required
                            className="w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            className="w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:border-red shadow-sm rounded-lg"
                        />
                    </div>
                    <button
                        className="w-full px-4 py-2 text-white font-medium bg-primary-focus hover:bg-primary rounded-lg duration-150"
                    >
                        Sign in
                    </button>
                    <div className="text-center">
                        <span className="hover:text-indigo-600">Forgot password?</span>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login