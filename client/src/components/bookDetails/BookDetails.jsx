import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as bookService from "../../services/bookService";
import ReviewsList from "../reviewsList/ReviewsList";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    bookService.getById(id).then(setBook);
  }, [id]);

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-5xl bg-gray-800 p-8 rounded-lg shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src={book.cover}
            alt={book.title}
            className="w-full md:w-72 md:h-auto rounded-lg shadow-lg mb-6 md:mb-0"
          />
          <div className="md:ml-8 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-4">{book.title}</h2>
            <p className="text-base text-gray-300 mb-6">{book.description}</p>
            <div className="text-gray-400 mb-8">
              <p className="mb-2">
                <strong className="text-gray-200">Author:</strong> {book.author}
              </p>
              <p className="mb-2">
                <strong className="text-gray-200">Publisher:</strong>{" "}
                {book.publisher}
              </p>
              <p className="mb-2">
                <strong className="text-gray-200">Year:</strong> {book.year}
              </p>
              <p className="mb-2">
                <strong className="text-gray-200">Series:</strong>{" "}
                {book?.series}
              </p>
            </div>
          </div>
        </div>
        {/* Reviews Section */}
        <ReviewsList bookId={id} />
      </div>
    </div>
  );
};

export default BookDetails;
