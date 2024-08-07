import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as bookService from "../../services/bookService";
import ReviewsList from "../reviewsList/ReviewsList";
import { FaTrash, FaEdit } from "react-icons/fa";
import AuthContext from "../../contexts/AuthContext";
import DeleteBookModal from "../deleteBookModal/DeleteBookModal";
import BookContext from "../../contexts/BookContext";
import Path from "../../paths";
import UpdateBookModal from "../updateBookModal/UpdateBookModal";

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const [deleteModalOpened, setDeleteModalOpened] = useState(false);
    const [updateModalOpened, setUpdateModalOpened] = useState(false);
    const navigate = useNavigate();

    const { role } = useContext(AuthContext);
    const { removeBookFromState } = useContext(BookContext);
    useEffect(() => {
        bookService.getById(id).then(setBook);
    }, [id]);

    const toggleDeleteModal = () => {
        setDeleteModalOpened(!deleteModalOpened);
    };

    const toggleUpdateModal = () => {
        setUpdateModalOpened(!updateModalOpened);
    };

    const handleConfirmDeleteClick = () => {
        bookService.deleteBook(id).then(() => removeBookFromState(id));
        navigate(Path.Books);
    };

    return (
        <div className="min-h-screen flex flex-col items-center py-10 px-4">
            <div className="w-full max-w-5xl bg-gray-800 p-8 rounded-lg shadow-2xl overflow-hidden relative">
                {role === "ADMIN" && (
                    <div className="absolute top-0 right-0 mt-4 mr-4 flex space-x-4">
                        <button
                            className="bg-red-500 text-white p-2 rounded-full hover:bg-red-700 transition"
                            onClick={toggleDeleteModal}
                            aria-label="Delete Book"
                        >
                            <FaTrash />
                        </button>
                        <button
                            className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-700 transition"
                            onClick={toggleUpdateModal}
                            aria-label="Update Book"
                        >
                            <FaEdit />
                        </button>
                    </div>
                )}
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full md:w-72 md:h-auto rounded-lg shadow-lg mb-6 md:mb-0"
                    />
                    <div className="md:ml-8 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            {book.title}
                        </h2>
                        <p className="text-base text-gray-300 mb-6">
                            {book.description}
                        </p>
                        <div className="text-gray-400 mb-8">
                            <p className="mb-2">
                                <strong className="text-gray-200">
                                    Author:
                                </strong>{" "}
                                {book.author}
                            </p>
                            <p className="mb-2">
                                <strong className="text-gray-200">
                                    Publisher:
                                </strong>{" "}
                                {book.publisher}
                            </p>
                            <p className="mb-2">
                                <strong className="text-gray-200">Year:</strong>{" "}
                                {book.year}
                            </p>
                            <p className="mb-2">
                                <strong className="text-gray-200">
                                    Series:
                                </strong>{" "}
                                {book.series}
                            </p>
                        </div>
                    </div>
                </div>
                <ReviewsList bookId={id} />
            </div>

            {deleteModalOpened && (
                <DeleteBookModal
                    object={"book"}
                    toggleModal={toggleDeleteModal}
                    handleConfirmDeleteClick={handleConfirmDeleteClick}
                />
            )}

            {updateModalOpened && (
                <UpdateBookModal
                    book={book}
                    toggleUpdateModal={toggleUpdateModal}
                />
            )}
        </div>
    );
};

export default BookDetails;
