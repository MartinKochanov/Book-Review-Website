import { useContext } from "react";
import BooksList from "../booksList/BooksList";
import BookContext from "../../contexts/BookContext";

const BooksPage = () => {
  const { books } = useContext(BookContext);

  return (
    <div className="flex flex-col items-center">
      <BooksList books={books} />
    </div>
  );
};

export default BooksPage;
