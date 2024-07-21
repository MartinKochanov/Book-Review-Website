import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import * as authService from '../services/authService'
import Path from "../paths";
import usePersistedState from "../hooks/usePersistedState";


const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({
    children
}) => {

    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password)

        setAuth(result);

        navigate(Path.Home)
    }

    const registerSubmitHandler = async (values) => {
        const {email, accessToken, _id} = await authService.register(values.email, values.password);

        setAuth({email, accessToken, _id});

        navigate(Path.Home);
    }

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('auth')
    }


    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        isAuthenticated: !!auth.accessToken
    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;