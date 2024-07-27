import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from "../services/authService";
import Path from "../paths";
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = usePersistedState("auth", {});
  const [authError, setAuthError] = useState(null);

  const loginSubmitHandler = (values) => {
    authService
      .login(values.email, values.password)
      .then((res) => {
        const { email, accessToken, _id } = res;
        setAuth({ email, accessToken, _id });
        setAuthError(null);
        navigate(Path.Home);
      })
      .catch((err) => {
        setAuthError(err.message || "Login failed");
      });
  };

  const registerSubmitHandler = (values) => {
    authService
      .register(values.email, values.password)
      .then((res) => {
        const { email, accessToken, _id } = res;
        setAuth({ email, accessToken, _id });
        setAuthError(null);
        navigate(Path.Home);
      })
      .catch((err) => {
        setAuthError(err.message || "Register failed");
      });
  };

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem("auth");
  };

  const values = {
    authError,
    setAuthError,
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    isAuthenticated: !!auth.accessToken,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
