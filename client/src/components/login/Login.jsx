import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineLock, AiOutlineUnlock } from "react-icons/ai";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../../contexts/AuthContext";
import CenteredLayout from "../../layouts/CenteredLayout";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

const Login = () => {
  const { loginSubmitHandler, authError, setAuthError } =
    useContext(AuthContext);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return () => setAuthError(null);
  }, [setAuthError]);

  const changeVisibiltyCLickHandler = () => {
    setVisible(!visible);
  };

  const validationSchema = Yup.object({
    [LoginFormKeys.Email]: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    [LoginFormKeys.Password]: Yup.string()
      .min(5, "Password must be at least 5 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      [LoginFormKeys.Email]: "",
      [LoginFormKeys.Password]: "",
    },
    validationSchema,
    onSubmit: (values) => {
      loginSubmitHandler(values);
    },
  });

  return (
    <CenteredLayout>
      <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-xl bg-opacity-0 relative">
        <h1 className="text-4xl text-white font-bold text-center mb-6">
          Login
        </h1>
        {authError && (
          <div className="bg-red-500 text-white text-sm p-2 mb-4 rounded">
            {authError}
          </div>
        )}
        <form onSubmit={formik.handleSubmit}>
          <div className="relative my-4">
            <input
              type="email"
              id="email"
              name={LoginFormKeys.Email}
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white peer input-autofill-fix"
              placeholder=""
              value={formik.values[LoginFormKeys.Email]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label
              htmlFor="email"
              className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Email
            </label>
            <BiUser className="absolute top-4 right-4" />
            {formik.touched[LoginFormKeys.Email] &&
              formik.errors[LoginFormKeys.Email] && (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors[LoginFormKeys.Email]}
                </div>
              )}
          </div>
          <div className="relative my-4">
            <input
              type={!visible ? "password" : "text"}
              name={LoginFormKeys.Password}
              id="password"
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white peer"
              placeholder=""
              value={formik.values[LoginFormKeys.Password]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label
              htmlFor="password"
              className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Password
            </label>
            {!visible ? (
              <AiOutlineLock
                className="absolute top-4 right-4"
                onClick={changeVisibiltyCLickHandler}
              />
            ) : (
              <AiOutlineUnlock
                className="absolute top-4 right-4"
                onClick={changeVisibiltyCLickHandler}
              />
            )}
            {formik.touched[LoginFormKeys.Password] &&
              formik.errors[LoginFormKeys.Password] && (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors[LoginFormKeys.Password]}
                </div>
              )}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <input type="checkbox" />
              <label htmlFor="Remember Me">Remember Me</label>
            </div>
            <span>
              <Link className="text-blue-500 hover:underline">
                Forgot Password?
              </Link>
            </span>
          </div>
          <button
            className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300"
            type="submit"
          >
            Login
          </button>
          <div>
            <span className="m-4">
              New Here?{" "}
              <Link to="/register" className="text-blue-500 hover:underline">
                Create an Account
              </Link>
            </span>
          </div>
        </form>
      </div>
    </CenteredLayout>
  );
};

export default Login;
