import { useContext, useEffect, useState } from "react";
import * as reviewService from "../../services/reviewsService";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import ReviewContext from "../../contexts/ReviewContext";
import DeleteReviewModal from "../deleteReviewModal/DeleteReviewModal";
import UpdateReviewModal from "../updateReviewModal/UpdateReviewModal";

const ReviewsList = ({ bookId }) => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    const {
        reviews,
        initializeReviews,
        addReviewToState,
        removeReviewFromState,
    } = useContext(ReviewContext);

    const [reviewId, setReviewId] = useState(null);

    const [deleteModalOpened, setDeleteModalOpened] = useState(false);
    const [updateModalOpened, setUpdateModalOpened] = useState(false);

    const toggleDeleteModal = (id) => {
        setDeleteModalOpened(!deleteModalOpened);
        setReviewId(id);
    };

    const toggleUpdateModal = (id) => {
        setUpdateModalOpened(!updateModalOpened);
        setReviewId(id);
    };

    const handleConfirmDeleteClick = () => {
        reviewService
            .deleteReview(reviewId)
            .then(removeReviewFromState(reviewId));
        toggleDeleteModal();
    };

    useEffect(() => {
        reviewService.getAll(bookId).then(initializeReviews);
    }, [bookId]);

    const formik = useFormik({
        initialValues: { content: "" },
        validationSchema: Yup.object({
            content: Yup.string()
                .required("Review content is required")
                .min(5, "Review must be at least 5 characters long"),
        }),
        onSubmit: (values) => {
            reviewService
                .addReview(bookId, auth, values)
                .then((res) => addReviewToState(res));
            values.content = "";
        },
    });

    return (
        <div className="bg-gray-700 mt-8 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">
                Reviews
            </h3>
            <ul className="space-y-4">
                {reviews.length > 0 ? (
                    reviews.map((review) => (
                        <li
                            key={review._id}
                            className="text-gray-300 border-b border-gray-600 pb-4 relative"
                        >
                            {review._ownerId === auth._id && (
                                <div className="absolute top-0 right-0 flex space-x-4">
                                    <button
                                        className="bg-red-500 text-white p-2 rounded-full hover:bg-red-700 transition"
                                        onClick={() =>
                                            toggleDeleteModal(review._id)
                                        }
                                        aria-label="Delete Review"
                                    >
                                        <FaTrash />
                                    </button>
                                    <button
                                        className="bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-700 transition"
                                        onClick={() =>
                                            toggleUpdateModal(review._id)
                                        }
                                        aria-label="Update Review"
                                    >
                                        <FaEdit />
                                    </button>
                                </div>
                            )}
                            <p>
                                {review.ownerName}: {review.content}
                            </p>
                        </li>
                    ))
                ) : (
                    <p className="text-gray-400">No reviews yet.</p>
                )}
            </ul>
            <form onSubmit={formik.handleSubmit} className="mt-6">
                <div className="relative my-4">
                    <textarea
                        id="content"
                        name="content"
                        rows="4"
                        className="block w-full py-2.5 px-4 text-sm text-white bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Write your review..."
                        value={formik.values.content}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.content && formik.errors.content && (
                        <div className="text-red-500 text-xs mt-1">
                            {formik.errors.content}
                        </div>
                    )}
                </div>
                <button
                    type="submit"
                    className="w-full mb-4 text-lg rounded-lg bg-blue-600 text-white py-2 transition-colors duration-300 hover:bg-blue-700"
                >
                    Add Review
                </button>
            </form>
            {deleteModalOpened && (
                <DeleteReviewModal
                    toggleModal={toggleDeleteModal}
                    handleConfirmDeleteClick={({ reviewId }) =>
                        handleConfirmDeleteClick(reviewId)
                    }
                />
            )}

            {updateModalOpened && (
                <UpdateReviewModal
                    id={reviewId}
                    bookId={bookId}
                    toggleModal={toggleUpdateModal}
                />
            )}
        </div>
    );
};

export default ReviewsList;
