import { createContext, useCallback, useState } from "react";

const BookContext = createContext();

BookContext.displayName = "BookContext";

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const initializeBooks = useCallback((initialBooks) => {
    setBooks(initialBooks);
  }, []);

  const values = {
    books,
    initializeBooks,
  };
  return <BookContext.Provider value={values}>{children}</BookContext.Provider>;
};

export default BookContext;
