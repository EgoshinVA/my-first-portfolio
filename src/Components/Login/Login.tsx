import {SubmitHandler, useForm} from "react-hook-form";
import {ILogin} from "../../modules/ILogin";
import {loginAPI} from "../../store/reducers/Login.api";

function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm<ILogin>()
    const [login, {data: loginData}] = loginAPI.useLoginMutation()
    const {data} = loginAPI.useAuthMeQuery('')

    const onSubmit: SubmitHandler<ILogin> = (data) => {
        login({email: data.email, password: data.password, rememberMe: data.rememberMe})
    }

    return (
        <div className="flex flex-col items-center  px-6 py-8 mx-auto lg:py-0 mt-8 ">
            {data && data.data.login ?
                <h2 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>You
                    already login</h2> :
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 bg-gray-200 dark:bg-gray-900">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                    email</label>
                                <input type="email" {...register('email', {
                                    required: 'Email is required!'
                                })}
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="name@company.com"/>
                                {errors.email && <label
                                    className="block mb-2 text-sm font-medium text-red-600 dark:text-red-600">{errors.email.message}</label>}
                            </div>
                            <div>
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" {...register('password', {
                                    required: 'Password is required!'
                                })} placeholder="••••••••" autoComplete="on"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                />
                                {errors.password && <label
                                    className="block mb-2 text-sm font-medium text-red-600 dark:text-red-600">{errors.password.message}</label>}
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input {...register('rememberMe')} type="checkbox"
                                               className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <button
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign
                                    in
                                </button>
                            </div>
                            <div className='flex justify-center hove'>
                                {loginData?.messages && <label className="block mb-2 text-sm font-medium text-red-600 dark:text-red-600">{loginData.messages[0]}</label>}
                            </div>
                        </form>
                    </div>
                </div>}
        </div>
    )
}

export default Login


//
//
