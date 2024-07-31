import { useContext } from "react";
import BooksList from "../booksList/BooksList";
import BookContext from "../../contexts/BookContext";

const BooksPage = () => {
  const { books } = useContext(BookContext);

  return <BooksList books={books} />;
};

export default BooksPage;
