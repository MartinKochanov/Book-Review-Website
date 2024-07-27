import { useContext, useEffect } from "react";
import BookContext from "../../contexts/BookContext";
import Book from "../book/Book";

const Home = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-800">
      <header className="bg-gray-900 w-full py-6">
        <h1 className="text-3xl font-bold text-white text-center">
          Welcome to the Bookstore
        </h1>
      </header>
      <main className="flex flex-wrap justify-center mt-8">
        {books.map((book) => (
          <Book key={book._id} book={book} />
        ))}
      </main>
    </div>
  );
};

export default Home;
