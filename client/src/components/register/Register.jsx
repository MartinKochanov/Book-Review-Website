import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineLock, AiOutlineUnlock } from "react-icons/ai";
import { useContext, useState, useEffect } from "react";
import AuthContext from "../../contexts/AuthContext";
import CenteredLayout from "../../layouts/CenteredLayout";
import { useFormik } from "formik";
import * as Yup from "yup";
import MainLayout from "../../layouts/MainLayout";

const RegistrationFormKeys = {
  Email: "email",
  Password: "password",
  ConfirmPassword: "confirm-password",
};

const Register = () => {
  const { registerSubmitHandler, authError, setAuthError } =
    useContext(AuthContext);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return () => setAuthError(null);
  }, [setAuthError]);

  const changeVisibilityClickHandler = () => {
    setVisible(!visible);
  };

  const validationSchema = Yup.object({
    [RegistrationFormKeys.Email]: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    [RegistrationFormKeys.Password]: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    [RegistrationFormKeys.ConfirmPassword]: Yup.string()
      .oneOf(
        [Yup.ref(RegistrationFormKeys.Password), null],
        "Passwords must match"
      )
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      [RegistrationFormKeys.Email]: "",
      [RegistrationFormKeys.Password]: "",
      [RegistrationFormKeys.ConfirmPassword]: "",
    },
    validationSchema,
    onSubmit: (values) => {
      registerSubmitHandler(values);
    },
  });

  return (
    <CenteredLayout>
      <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-xl bg-opacity-0 relative">
        <h1 className="text-4xl text-white font-bold text-center mb-6">
          Register
        </h1>
        {authError && (
          <div className="bg-red-500 text-white text-sm p-2 mb-4 rounded">
            {authError}
          </div>
        )}
        <form onSubmit={formik.handleSubmit}>
          <div className="relative my-4">
            <input
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white peer"
              placeholder=""
              name="email"
              id="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[RegistrationFormKeys.Email]}
            />
            <label
              htmlFor="email"
              className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Email
            </label>
            <BiUser className="absolute top-4 right-4" />
            {formik.touched[RegistrationFormKeys.Email] &&
              formik.errors[RegistrationFormKeys.Email] && (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors[RegistrationFormKeys.Email]}
                </div>
              )}
          </div>
          <div className="relative my-4">
            <input
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white peer"
              placeholder=""
              id="password"
              name="password"
              type={!visible ? "password" : "text"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[RegistrationFormKeys.Password]}
            />
            <label
              htmlFor="password"
              className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Password
            </label>
            {!visible ? (
              <AiOutlineLock
                className="absolute top-4 right-4"
                onClick={changeVisibilityClickHandler}
              />
            ) : (
              <AiOutlineUnlock
                className="absolute top-4 right-4"
                onClick={changeVisibilityClickHandler}
              />
            )}
            {formik.touched[RegistrationFormKeys.Password] &&
              formik.errors[RegistrationFormKeys.Password] && (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors[RegistrationFormKeys.Password]}
                </div>
              )}
          </div>
          <div className="relative my-4">
            <input
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white peer"
              placeholder=""
              id="confirm-password"
              name="confirm-password"
              type={!visible ? "password" : "text"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[RegistrationFormKeys.ConfirmPassword]}
            />
            <label
              htmlFor="confirm-password"
              className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirm Password
            </label>
            {!visible ? (
              <AiOutlineLock
                className="absolute top-4 right-4"
                onClick={changeVisibilityClickHandler}
              />
            ) : (
              <AiOutlineUnlock
                className="absolute top-4 right-4"
                onClick={changeVisibilityClickHandler}
              />
            )}
            {formik.touched[RegistrationFormKeys.ConfirmPassword] &&
              formik.errors[RegistrationFormKeys.ConfirmPassword] && (
                <div className="text-red-500 text-xs mt-1">
                  {formik.errors[RegistrationFormKeys.ConfirmPassword]}
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
          <input
            className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300"
            type="submit"
            value="Register"
          ></input>
          <div>
            <span className="m-4">
              Already Have an Account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </CenteredLayout>
  );
};

export default Register;
