import { createContext, useCallback, useState } from "react";
import * as bookService from "../services/bookService";

const BookContext = createContext();

BookContext.displayName = "BookContext";

export const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);

    const createBookSubmitHandler = (values) => {
        bookService.create(values).then(addBookToState);
    };

    const initializeBooks = useCallback((initialBooks) => {
        setBooks(initialBooks);
    }, []);

    const addBookToState = useCallback((book) => {
        setBooks((b) => [...b, book]);
    }, []);

    const removeBookFromState = useCallback((id) => {
        setBooks((b) => b.filter((book) => book._id !== id));
    }, []);

    const updateBookInState = useCallback((id, values) => {
        setBooks((b) =>
            b.map((book) =>
                book._id === id
                    ? {
                          ...book,
                          ...values,
                      }
                    : book
            )
        );
    }, []);
    const values = {
        books,
        initializeBooks,
        addBookToState,
        createBookSubmitHandler,
        removeBookFromState,
        updateBookInState,
    };
    return (
        <BookContext.Provider value={values}>{children}</BookContext.Provider>
    );
};

export default BookContext;
