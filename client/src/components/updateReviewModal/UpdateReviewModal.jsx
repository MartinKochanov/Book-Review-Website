import { useFormik } from "formik";
import * as Yup from "yup";
import * as reviewService from "../../services/reviewsService";
import { useContext } from "react";
import ReviewContext from "../../contexts/ReviewContext";

const UpdateReviewModal = ({ bookId, id, toggleModal }) => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    const { updateReviewInState } = useContext(ReviewContext);

    const formik = useFormik({
        initialValues: { content: "" },
        validationSchema: Yup.object({
            content: Yup.string()
                .required("Review content is required")
                .min(5, "Review must be at least 5 characters long"),
        }),
        onSubmit: (values, { resetForm }) => {
            reviewService
                .editReview(bookId, auth, id, values)
                .then((res) => updateReviewInState(id, res.content));
            toggleModal();
            resetForm();
        },
    });
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-slate-800 border border-slate-400 rounded-md w-1/4 p-8 shadow-lg backdrop-filter backdrop-blur-xl bg-opacity-0 relative">
                <h1 className="text-4xl text-white font-bold text-center mb-6">
                    Update Review
                </h1>
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
                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className="w-full mr-2 text-lg rounded-lg bg-blue-600 text-white py-2 transition-colors duration-300 hover:bg-blue-700"
                        >
                            Edit Review
                        </button>
                        <button
                            type="button"
                            onClick={toggleModal}
                            className="w-full ml-2 text-lg rounded-lg bg-red-600 text-white py-2 transition-colors duration-300 hover:bg-red-700"
                        >
                            Close
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateReviewModal;
