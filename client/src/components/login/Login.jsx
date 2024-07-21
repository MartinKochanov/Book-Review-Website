import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi"
import { AiOutlineLock, AiOutlineUnlock } from "react-icons/ai";
import { useContext, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import useForm from "../../hooks/useForm";
import CenteredLayout from "../../layouts/CenteredLayout";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
}

const Login = () => {

    const { loginSubmitHandler } = useContext(AuthContext);

    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    })

    const [visible, setVisible] = useState(false);

    const changeVisibiltyCLickHandler = () => {
        setVisible(!visible);
    }

    return (
        <CenteredLayout>
            <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-xl bg-opacity-0 relative">
                <h1 className="text-4xl text-white font-bold text-center mb-6">Login</h1>
                <form onSubmit={onSubmit}>
                    <div className="relative my-4">
                        <input
                            type="email"
                            id="email"
                            name={LoginFormKeys.Email}
                            className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white peer"
                            placeholder=""
                            value={values[LoginFormKeys.Email]}
                            onChange={onChange}
                        />
                        <label htmlFor="" className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Your Email</label>
                        <BiUser className="absolute top-4 right-4" />
                    </div>
                    <div className="relative my-4">
                        <input
                            type={!visible ? 'password' : 'text'}
                            name={LoginFormKeys.Password}
                            id="password"
                            className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white peer"
                            placeholder=""
                            value={values[LoginFormKeys.Password]}
                            onChange={onChange}
                        />
                        <label htmlFor="" className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Your Password</label>
                        {!visible ?
                            <AiOutlineLock className="absolute top-4 right-4" onClick={changeVisibiltyCLickHandler} /> :
                            <AiOutlineUnlock className="absolute top-4 right-4" onClick={changeVisibiltyCLickHandler} />
                        }
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" />
                            <label htmlFor="Remember Me">Remember Me</label>
                        </div>
                        <span ><Link className="text-blue-500 hover:underline">Forgot Password?</Link></span>
                    </div>
                    <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300" type="submit">Login</button>
                    <div>
                        <span className="m-4">New Here? <Link to='/register' className="text-blue-500 hover:underline">Create an Account</Link></span>
                    </div>
                </form>
            </div>
        </CenteredLayout>
    )
}

export default Login;