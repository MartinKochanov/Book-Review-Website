import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"

import * as authService from '../../services/authService'
import AuthContext from "../../contexts/AuthContext";
import Path from "../../paths";




const Logout = () => {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext);

    useEffect(() => {
        authService.logout()
            .then(() => {
                logoutHandler();
                console.log('out');
                navigate(Path.Home);
            }).catch(() => navigate(Path.Home))
    }, [])

    return null;
}

export default Logout