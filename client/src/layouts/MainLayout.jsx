import { useContext, useEffect } from "react";
import Navigation from "../components/navigation/Navigation";
import BookContext from "../contexts/BookContext";

import * as bookService from "../services/bookService";
import Footer from "../components/footer/Footer";

const MainLayout = ({ children }) => {
    const { initializeBooks } = useContext(BookContext);

    useEffect(() => {
        bookService.getAll().then(initializeBooks);
    }, []);
    return (
        <div className=" text-white flex flex-col justify-center bg-coverImg">
            <Navigation />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;
